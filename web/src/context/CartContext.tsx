import { createContext, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { Product } from '../data/products'

export type CartItem = {
  product: Product
  quantity: number
}

type CartContextValue = {
  items: CartItem[]
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: number) => void
  clearCart: () => void
  setQuantity: (productId: number, quantity: number) => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  function addItem(product: Product, quantity: number = 1) {
    setItems((prev) => {
      const existing = prev.find((it) => it.product.id === product.id)
      if (existing) {
        return prev.map((it) =>
          it.product.id === product.id
            ? { ...it, quantity: Math.max(1, it.quantity + quantity) }
            : it,
        )
      }
      return [...prev, { product, quantity: Math.max(1, quantity) }]
    })
  }

  function removeItem(productId: number) {
    setItems((prev) => prev.filter((it) => it.product.id !== productId))
  }

  function clearCart() {
    setItems([])
  }

  function setQuantity(productId: number, quantity: number) {
    setItems((prev) =>
      prev
        .map((it) =>
          it.product.id === productId
            ? { ...it, quantity: Math.max(0, quantity) }
            : it,
        )
        .filter((it) => it.quantity > 0),
    )
  }

  const { totalItems, totalPrice } = useMemo(() => {
    const totals = items.reduce(
      (acc, it) => {
        acc.totalItems += it.quantity
        acc.totalPrice += it.quantity * it.product.price
        return acc
      },
      { totalItems: 0, totalPrice: 0 },
    )
    return totals
  }, [items])

  const value: CartContextValue = {
    items,
    addItem,
    removeItem,
    clearCart,
    setQuantity,
    totalItems,
    totalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}