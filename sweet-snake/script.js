const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const levelSelect = document.getElementById('level');
const scoreEl = document.getElementById('score');
const bestEl = document.getElementById('best');
const speedEl = document.getElementById('speed');

const overlay = document.getElementById('overlay');
const overlayTitle = document.getElementById('overlayTitle');
const overlayMsg = document.getElementById('overlayMsg');
const overlayBtn = document.getElementById('overlayBtn');

// Game constants
const GRID_SIZE = 24; // 24 x 24 cells for a 480x480 board
const CELL_SIZE = canvas.width / GRID_SIZE;

const COLORS = {
  bg1: '#ffffff',
  bg2: '#fff5fb',
  snake: '#ff7eb6',
  snakeHead: '#ff4d9b',
  eye: '#ffffff',
  apple: '#8be28b',
  candy: '#b8e0ff',
  bomb: '#ff6b6b',
  wall: '#b38bfa',
  grid: 'rgba(255, 126, 182, 0.08)'
};

const LEVELS = {
  easy: { speedMs: 180, bombs: 0, candies: 0, walls: 'none' },
  medium: { speedMs: 140, bombs: 1, candies: 1, walls: 'outer' },
  hard: { speedMs: 110, bombs: 2, candies: 1, walls: 'maze' },
  expert: { speedMs: 85, bombs: 3, candies: 2, walls: 'mazePlus' }
};

const STORAGE_KEY = 'sweet-snake-best-score';

// Game state
let snake; // array of cells {x,y}
let direction; // {x,y}
let nextDirection; // queued direction to avoid double turn in a tick
let apple;
let candies = []; // bonus food
let bombs = [];
let walls = new Set(); // key as `x,y`
let timerId = null;
let running = false;
let paused = false;
let score = 0;
let best = Number(localStorage.getItem(STORAGE_KEY) || 0);
let tickMs = LEVELS[levelSelect.value].speedMs;

bestEl.textContent = String(best);

function cellKey(x, y) { return `${x},${y}`; }
function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function placeInFreeCell(excludeSet) {
  while (true) {
    const x = randomInt(0, GRID_SIZE - 1);
    const y = randomInt(0, GRID_SIZE - 1);
    const key = cellKey(x, y);
    if (!excludeSet.has(key)) return { x, y };
  }
}

function initWalls(mode) {
  walls.clear();
  if (mode === 'none') return;
  // outer border
  const addOuter = () => {
    for (let i = 0; i < GRID_SIZE; i++) {
      walls.add(cellKey(i, 0));
      walls.add(cellKey(i, GRID_SIZE - 1));
      walls.add(cellKey(0, i));
      walls.add(cellKey(GRID_SIZE - 1, i));
    }
  };
  if (mode === 'outer') {
    addOuter();
    return;
  }
  // simple maze lines
  addOuter();
  for (let i = 3; i < GRID_SIZE - 3; i += 4) {
    for (let j = 3; j < GRID_SIZE - 3; j++) {
      if (j % 6 !== 0) walls.add(cellKey(i, j));
    }
  }
  if (mode === 'mazePlus') {
    for (let j = 6; j < GRID_SIZE - 6; j += 4) {
      for (let i = 4; i < GRID_SIZE - 4; i++) {
        if (i % 6 !== 0) walls.add(cellKey(i, j));
      }
    }
  }
}

function startGame() {
  score = 0;
  scoreEl.textContent = '0';
  const center = Math.floor(GRID_SIZE / 2);
  snake = [ { x: center, y: center }, { x: center - 1, y: center }, { x: center - 2, y: center } ];
  direction = { x: 1, y: 0 };
  nextDirection = { x: 1, y: 0 };
  candies = [];
  bombs = [];
  const lvl = LEVELS[levelSelect.value];
  tickMs = lvl.speedMs;
  speedEl.textContent = `${Math.round(1000 / tickMs)} tps`;
  initWalls(lvl.walls);

  // avoid placing items on snake or walls
  const occupied = new Set(snake.map(s => cellKey(s.x, s.y)));
  for (const w of walls) occupied.add(w);

  apple = placeInFreeCell(occupied);
  occupied.add(cellKey(apple.x, apple.y));

  for (let i = 0; i < lvl.candies; i++) {
    const c = placeInFreeCell(occupied);
    occupied.add(cellKey(c.x, c.y));
    candies.push(c);
  }
  for (let i = 0; i < lvl.bombs; i++) {
    const b = placeInFreeCell(occupied);
    occupied.add(cellKey(b.x, b.y));
    bombs.push(b);
  }

  running = true;
  paused = false;
  overlay.classList.add('hidden');
  loop();
}

function pauseGame() {
  if (!running) return;
  paused = !paused;
  if (paused) {
    clearTimeout(timerId);
    overlayTitle.textContent = 'Paused ♡';
    overlayMsg.textContent = 'Press Resume to continue';
    overlayBtn.textContent = 'Resume';
    overlay.classList.remove('hidden');
  } else {
    overlay.classList.add('hidden');
    loop();
  }
}

function gameOver(message = 'Game Over!') {
  running = false;
  clearTimeout(timerId);
  best = Math.max(best, score);
  localStorage.setItem(STORAGE_KEY, String(best));
  bestEl.textContent = String(best);

  overlayTitle.textContent = 'Oh no!';
  overlayMsg.textContent = `${message} Your score: ${score}`;
  overlayBtn.textContent = 'Play Again';
  overlay.classList.remove('hidden');
}

function moveSnake() {
  // update direction from queued input
  direction = nextDirection;

  const head = snake[0];
  const newHead = { x: head.x + direction.x, y: head.y + direction.y };

  // wall collision
  if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
    if (LEVELS[levelSelect.value].walls === 'none') {
      // wrap
      newHead.x = (newHead.x + GRID_SIZE) % GRID_SIZE;
      newHead.y = (newHead.y + GRID_SIZE) % GRID_SIZE;
    } else {
      return gameOver('You hit the wall!');
    }
  }

  // static walls
  if (walls.has(cellKey(newHead.x, newHead.y))) return gameOver('Bonked into a wall!');

  // self collision
  if (snake.some((s, idx) => idx !== 0 && s.x === newHead.x && s.y === newHead.y)) {
    return gameOver('You bit your tail!');
  }

  snake.unshift(newHead);

  // apple
  if (newHead.x === apple.x && newHead.y === apple.y) {
    score += 10;
    scoreEl.textContent = String(score);
    // re-place apple in a free spot
    const occupied = new Set([...snake.map(s => cellKey(s.x, s.y)), ...walls]);
    candies.forEach(c => occupied.add(cellKey(c.x, c.y)));
    bombs.forEach(b => occupied.add(cellKey(b.x, b.y)));
    apple = placeInFreeCell(occupied);

    // occasionally spawn extra candy or bomb on higher levels
    const lvl = LEVELS[levelSelect.value];
    if (lvl.candies > 0 && Math.random() < 0.3 && candies.length < 3) {
      const c = placeInFreeCell(occupied);
      candies.push(c);
    }
    if (lvl.bombs > 0 && Math.random() < 0.2 && bombs.length < 4) {
      const b = placeInFreeCell(occupied);
      bombs.push(b);
    }
  } else {
    snake.pop();
  }

  // candies
  for (let i = 0; i < candies.length; i++) {
    const c = candies[i];
    if (newHead.x === c.x && newHead.y === c.y) {
      score += 5;
      scoreEl.textContent = String(score);
      // grow once more (no pop in next step), so just push tail duplicate
      const tail = snake[snake.length - 1];
      snake.push({ x: tail.x, y: tail.y });
      candies.splice(i, 1);
      break;
    }
  }

  // bombs
  for (let i = 0; i < bombs.length; i++) {
    const b = bombs[i];
    if (newHead.x === b.x && newHead.y === b.y) {
      return gameOver('Boom! Candy exploded!');
    }
  }
}

function loop() {
  if (!running || paused) return;
  timerId = setTimeout(() => {
    moveSnake();
    draw();
    if (running && !paused) loop();
  }, tickMs);
}

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // soft gradient background
  const g = ctx.createLinearGradient(0, 0, 0, canvas.height);
  g.addColorStop(0, COLORS.bg1);
  g.addColorStop(1, COLORS.bg2);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // subtle grid
  ctx.strokeStyle = COLORS.grid;
  ctx.lineWidth = 1;
  for (let i = 0; i <= GRID_SIZE; i++) {
    ctx.beginPath();
    ctx.moveTo(i * CELL_SIZE, 0);
    ctx.lineTo(i * CELL_SIZE, canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i * CELL_SIZE);
    ctx.lineTo(canvas.width, i * CELL_SIZE);
    ctx.stroke();
  }
}

function drawCell(x, y, color, rounded = 6) {
  const px = x * CELL_SIZE;
  const py = y * CELL_SIZE;
  const r = Math.min(rounded, CELL_SIZE / 2 - 1);
  ctx.fillStyle = color;
  const w = CELL_SIZE, h = CELL_SIZE;
  ctx.beginPath();
  ctx.moveTo(px + r, py);
  ctx.arcTo(px + w, py, px + w, py + h, r);
  ctx.arcTo(px + w, py + h, px, py + h, r);
  ctx.arcTo(px, py + h, px, py, r);
  ctx.arcTo(px, py, px + w, py, r);
  ctx.closePath();
  ctx.fill();
}

function drawSnake() {
  // body
  for (let i = snake.length - 1; i >= 1; i--) {
    const s = snake[i];
    const t = i / snake.length;
    const color = i % 2 === 0 ? COLORS.snake : '#ffa4cb';
    drawCell(s.x, s.y, color, 8);
  }
  // head
  const head = snake[0];
  drawCell(head.x, head.y, COLORS.snakeHead, 10);
  // eyes
  const cx = head.x * CELL_SIZE + CELL_SIZE / 2;
  const cy = head.y * CELL_SIZE + CELL_SIZE / 2;
  ctx.fillStyle = COLORS.eye;
  const eyeOffsetX = direction.x !== 0 ? direction.x * 4 : 0;
  const eyeOffsetY = direction.y !== 0 ? direction.y * 4 : 0;
  ctx.beginPath();
  ctx.arc(cx - 6 + eyeOffsetX, cy - 4 + eyeOffsetY, 3, 0, Math.PI * 2);
  ctx.arc(cx + 6 + eyeOffsetX, cy - 4 + eyeOffsetY, 3, 0, Math.PI * 2);
  ctx.fill();
}

function drawItems() {
  // apple
  drawCell(apple.x, apple.y, COLORS.apple, 10);
  // candies
  candies.forEach(c => drawCell(c.x, c.y, COLORS.candy, 10));
  // bombs
  bombs.forEach(b => drawCell(b.x, b.y, COLORS.bomb, 10));
  // walls
  walls.forEach(k => {
    const [x, y] = k.split(',').map(Number);
    drawCell(x, y, COLORS.wall, 6);
  });
}

function draw() {
  drawGrid();
  drawItems();
  drawSnake();
}

// Input handling
const LEFT = { x: -1, y: 0 };
const RIGHT = { x: 1, y: 0 };
const UP = { x: 0, y: -1 };
const DOWN = { x: 0, y: 1 };

function sameDir(a, b) { return a.x === b.x && a.y === b.y; }

function setDirection(dir) {
  if (!running) return;
  // Prevent reversing into itself on the same axis
  if (snake.length > 1) {
    if ((dir.x !== 0 && direction.x !== 0) || (dir.y !== 0 && direction.y !== 0)) return;
  }
  nextDirection = dir;
}

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    if (running) pauseGame();
    return;
  }
  switch (e.key.toLowerCase()) {
    case 'arrowleft': case 'a': setDirection(LEFT); break;
    case 'arrowright': case 'd': setDirection(RIGHT); break;
    case 'arrowup': case 'w': setDirection(UP); break;
    case 'arrowdown': case 's': setDirection(DOWN); break;
  }
});

startBtn.addEventListener('click', () => {
  startGame();
});

pauseBtn.addEventListener('click', () => {
  pauseGame();
});

resetBtn.addEventListener('click', () => {
  running = false;
  paused = false;
  clearTimeout(timerId);
  overlayTitle.textContent = 'Sweet Snake';
  overlayMsg.textContent = 'Press Start to begin!';
  overlayBtn.textContent = 'Start';
  overlay.classList.remove('hidden');
  draw();
});

overlayBtn.addEventListener('click', () => {
  if (!running || paused) {
    if (paused) {
      pauseGame();
    } else {
      startGame();
    }
  }
});

levelSelect.addEventListener('change', () => {
  if (!running) {
    const lvl = LEVELS[levelSelect.value];
    tickMs = lvl.speedMs;
    speedEl.textContent = `${Math.round(1000 / tickMs)} tps`;
  }
});

// Boot screen
(function init() {
  const lvl = LEVELS[levelSelect.value];
  tickMs = lvl.speedMs;
  speedEl.textContent = `${Math.round(1000 / tickMs)} tps`;
  overlay.classList.remove('hidden');
  draw();
})();