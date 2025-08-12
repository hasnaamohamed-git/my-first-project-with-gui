// Global variables
let products = [];
let cart = [];
let currentFilter = 'all';
let currentSort = 'name';

// Product data based on your Java classes
const productData = [
    // Books
    {
        id: 1,
        name: "The Great Gatsby",
        price: 12.99,
        category: "books",
        author: "F. Scott Fitzgerald",
        publisher: "Scribner",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "A classic American novel about the Jazz Age and the American Dream."
    },
    {
        id: 2,
        name: "To Kill a Mockingbird",
        price: 14.99,
        category: "books",
        author: "Harper Lee",
        publisher: "Grand Central Publishing",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "A powerful story about racial injustice and moral growth."
    },
    {
        id: 3,
        name: "1984",
        price: 11.99,
        category: "books",
        author: "George Orwell",
        publisher: "Signet Classic",
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "A dystopian novel about totalitarianism and surveillance."
    },
    {
        id: 4,
        name: "Pride and Prejudice",
        price: 9.99,
        category: "books",
        author: "Jane Austen",
        publisher: "Penguin Classics",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "A romantic novel of manners set in Georgian-era England."
    },
    {
        id: 5,
        name: "The Hobbit",
        price: 15.99,
        category: "books",
        author: "J.R.R. Tolkien",
        publisher: "Houghton Mifflin",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "A fantasy novel about Bilbo Baggins' journey with thirteen dwarves."
    },
    {
        id: 6,
        name: "The Catcher in the Rye",
        price: 13.99,
        category: "books",
        author: "J.D. Salinger",
        publisher: "Little, Brown and Company",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "A coming-of-age story about teenage alienation and loss."
    },

    // Clothing
    {
        id: 7,
        name: "Classic White T-Shirt",
        price: 24.99,
        category: "clothing",
        size: "M",
        fabric: "Cotton",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Premium cotton t-shirt perfect for everyday wear."
    },
    {
        id: 8,
        name: "Denim Jeans",
        price: 59.99,
        category: "clothing",
        size: "32",
        fabric: "Denim",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Classic blue denim jeans with perfect fit."
    },
    {
        id: 9,
        name: "Summer Dress",
        price: 45.99,
        category: "clothing",
        size: "S",
        fabric: "Polyester",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Elegant summer dress perfect for any occasion."
    },
    {
        id: 10,
        name: "Leather Jacket",
        price: 129.99,
        category: "clothing",
        size: "L",
        fabric: "Leather",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Premium leather jacket for a stylish look."
    },
    {
        id: 11,
        name: "Running Shoes",
        price: 89.99,
        category: "clothing",
        size: "42",
        fabric: "Mesh",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Comfortable running shoes for your active lifestyle."
    },
    {
        id: 12,
        name: "Winter Sweater",
        price: 34.99,
        category: "clothing",
        size: "M",
        fabric: "Wool",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Warm wool sweater perfect for cold weather."
    },

    // Electronics
    {
        id: 13,
        name: "iPhone 15 Pro",
        price: 999.99,
        category: "electronics",
        brand: "Apple",
        warranty_period: 12,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Latest iPhone with advanced camera system and A17 Pro chip."
    },
    {
        id: 14,
        name: "MacBook Air M2",
        price: 1199.99,
        category: "electronics",
        brand: "Apple",
        warranty_period: 12,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Ultra-thin laptop with M2 chip for incredible performance."
    },
    {
        id: 15,
        name: "Samsung Galaxy S24",
        price: 799.99,
        category: "electronics",
        brand: "Samsung",
        warranty_period: 12,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Premium Android smartphone with advanced AI features."
    },
    {
        id: 16,
        name: "Sony WH-1000XM5",
        price: 349.99,
        category: "electronics",
        brand: "Sony",
        warranty_period: 24,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Industry-leading noise-canceling headphones."
    },
    {
        id: 17,
        name: "iPad Air",
        price: 599.99,
        category: "electronics",
        brand: "Apple",
        warranty_period: 12,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Powerful tablet perfect for work and entertainment."
    },
    {
        id: 18,
        name: "DJI Mini 3 Pro",
        price: 759.99,
        category: "electronics",
        brand: "DJI",
        warranty_period: 12,
        image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Ultra-lightweight drone with 4K camera and obstacle avoidance."
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    products = [...productData];
    displayProducts();
    loadCartFromStorage();
    updateCartCount();
}

// Product display functions
function displayProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const filteredProducts = getFilteredProducts();
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-badge">${product.category.toUpperCase()}</div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-details">
                    ${getProductDetails(product)}
                </div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="view-details-btn" onclick="event.stopPropagation(); openProductModal(${product.id})">
                        <i class="fas fa-eye"></i> View
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function getProductDetails(product) {
    switch(product.category) {
        case 'books':
            return `By ${product.author}<br>Publisher: ${product.publisher}`;
        case 'clothing':
            return `Size: ${product.size}<br>Fabric: ${product.fabric}`;
        case 'electronics':
            return `Brand: ${product.brand}<br>Warranty: ${product.warranty_period} months`;
        default:
            return '';
    }
}

function getFilteredProducts() {
    let filtered = products;
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(product => product.category === currentFilter);
    }
    
    // Apply search filter
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            (product.author && product.author.toLowerCase().includes(searchTerm)) ||
            (product.brand && product.brand.toLowerCase().includes(searchTerm))
        );
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
        switch(currentSort) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'name':
            default:
                return a.name.localeCompare(b.name);
        }
    });
    
    return filtered;
}

// Filter and search functions
function filterProducts() {
    currentFilter = document.getElementById('categoryFilter').value;
    displayProducts();
}

function sortProducts() {
    currentSort = document.getElementById('sortFilter').value;
    displayProducts();
}

function filterByCategory(category) {
    currentFilter = category;
    document.getElementById('categoryFilter').value = category;
    displayProducts();
    scrollToProducts();
}

function searchProducts() {
    displayProducts();
}

function toggleSearch() {
    const searchContainer = document.getElementById('searchContainer');
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
        document.getElementById('searchInput').focus();
    }
}

// Cart functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
        }
    }
}

function updateCart() {
    displayCart();
    updateCartCount();
    saveCartToStorage();
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started!</p>
            </div>
        `;
        cartTotal.textContent = '$0.00';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('active');
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showNotification(`Order placed! Total: $${total.toFixed(2)}`, 'success');
    
    // Clear cart
    cart = [];
    updateCart();
    toggleCart();
}

// Modal functions
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="product-modal-content">
            <div class="modal-product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="modal-product-info">
                <div class="modal-product-category">${product.category}</div>
                <h2>${product.name}</h2>
                <div class="modal-product-price">$${product.price.toFixed(2)}</div>
                <div class="modal-product-description">
                    <p>${product.description}</p>
                    <br>
                    <p><strong>Details:</strong></p>
                    <p>${getProductDetails(product)}</p>
                </div>
                <div class="modal-product-actions">
                    <button class="modal-add-to-cart-btn" onclick="addToCart(${product.id}); closeModal();">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;

    document.getElementById('productModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Utility functions
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function toggleMenu() {
    // Mobile menu functionality can be added here
    console.log('Mobile menu toggled');
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#667eea'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Storage functions
function saveCartToStorage() {
    localStorage.setItem('shophub_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('shophub_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// Event listeners
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
        toggleCart();
    }
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Search input event listener
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            displayProducts();
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to navigation links
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});