import { useState } from 'react'
import type { FormEvent } from 'react'
import { useCart } from '../context/CartContext'
import { Link, useNavigate } from 'react-router-dom'

export function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [customerId, setCustomerId] = useState('')
  const [address, setAddress] = useState('')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (items.length === 0) return
    // In a real app, submit to backend here
    clearCart()
    navigate('/?order=success')
    alert(
      `Order placed!\nName: ${name}\nID: ${customerId}\nAddress: ${address}\nTotal: $${totalPrice.toFixed(
        2,
      )}`,
    )
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-3 text-2xl font-bold">No items to checkout</h1>
        <p className="text-neutral-600">Your cart is empty.</p>
        <div className="mt-6">
          <Link to="/" className="rounded-lg bg-pink-600 px-4 py-2 text-white hover:bg-pink-700">
            Go to Catalog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
      <form onSubmit={onSubmit} className="space-y-4 rounded-lg border bg-white p-4 md:col-span-2">
        <h1 className="text-2xl font-bold">Checkout</h1>
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-md border px-3 py-2"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">ID</label>
          <input
            required
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            className="mt-1 w-full rounded-md border px-3 py-2"
            placeholder="Customer ID"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Address</label>
          <textarea
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 w-full rounded-md border px-3 py-2"
            placeholder="Street, City, Country"
          />
        </div>
        <button type="submit" className="w-full rounded-lg bg-pink-600 px-4 py-2 font-medium text-white hover:bg-pink-700">
          Place order
        </button>
      </form>

      <aside className="space-y-4 rounded-lg border bg-white p-4">
        <h2 className="text-lg font-semibold">Summary</h2>
        <div className="divide-y">
          {items.map((it) => (
            <div key={it.product.id} className="flex items-center justify-between py-2">
              <span>
                {it.quantity} × {it.product.name}
              </span>
              <span>${(it.quantity * it.product.price).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between border-t pt-3 text-lg font-semibold">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </aside>
    </div>
  )
}