export type ProductCategory = 'electronics' | 'books' | 'clothing'

export type Product = {
  id: number
  name: string
  price: number
  category: ProductCategory
  image: string
  description: string
  attributes?: Record<string, string | number>
}

export const products: Product[] = [
  {
    id: 1,
    name: 'SmartPhone',
    price: 599.99,
    category: 'electronics',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
    description:
      'High-performance smartphone with vibrant display and long battery life.',
    attributes: { brand: 'Samsung', warranty_years: 1 },
  },
  {
    id: 3,
    name: 'OOP (Book)',
    price: 39.99,
    category: 'books',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    description:
      "An in-depth guide to Object-Oriented Programming concepts and patterns.",
    attributes: { author: "O'Reilly", publisher: 'X publications' },
  },
  {
    id: 4,
    name: 'Tablet',
    price: 299.99,
    category: 'electronics',
    image:
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1200&auto=format&fit=crop',
    description:
      'Sleek tablet perfect for entertainment, reading, and productivity on the go.',
    attributes: { brand: 'Samsung', warranty_years: 1 },
  },
  {
    id: 2,
    name: 'T-shirt',
    price: 19.99,
    category: 'clothing',
    image:
      'https://images.unsplash.com/photo-1520975922284-9e0ce82759c9?q=80&w=1200&auto=format&fit=crop',
    description: 'Comfortable cotton T-shirt with a classic fit.',
    attributes: { size: 'Medium', fabric: 'Cotton' },
  },
]