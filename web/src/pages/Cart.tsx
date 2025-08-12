import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export function CartPage() {
  const { items, setQuantity, removeItem, totalPrice, clearCart } = useCart()

  if (items.length === 0)
    return (
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-3 text-2xl font-bold">Your cart is empty</h1>
        <p className="text-neutral-600">Browse our catalog and add some products.</p>
        <div className="mt-6">
          <Link to="/" className="rounded-lg bg-pink-600 px-4 py-2 text-white hover:bg-pink-700">
            Go to Catalog
          </Link>
        </div>
      </div>
    )

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-6 text-2xl font-bold">Your Cart</h1>
      <div className="space-y-4">
        {items.map((it) => (
          <div key={it.product.id} className="flex items-center gap-4 rounded-lg border bg-white p-3">
            <img
              src={it.product.image}
              alt={it.product.name}
              className="h-20 w-24 rounded-md object-cover"
            />
            <div className="flex-1">
              <div className="font-medium">{it.product.name}</div>
              <div className="text-sm text-neutral-600">${it.product.price.toFixed(2)}</div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity(it.product.id, Math.max(1, it.quantity - 1))}
                className="h-8 w-8 rounded-md border bg-white text-lg leading-none hover:bg-neutral-50"
              >
                −
              </button>
              <input
                type="number"
                min={1}
                value={it.quantity}
                onChange={(e) => setQuantity(it.product.id, Math.max(1, Number(e.target.value) || 1))}
                className="w-14 rounded-md border px-2 py-1 text-center"
              />
              <button
                onClick={() => setQuantity(it.product.id, it.quantity + 1)}
                className="h-8 w-8 rounded-md border bg-white text-lg leading-none hover:bg-neutral-50"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeItem(it.product.id)}
              className="rounded-md border px-3 py-1 text-sm hover:bg-neutral-50"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between rounded-lg border bg-white p-4">
        <div className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</div>
        <div className="flex items-center gap-3">
          <button onClick={clearCart} className="rounded-lg border px-4 py-2 hover:bg-neutral-50">
            Empty cart
          </button>
          <Link to="/checkout" className="rounded-lg bg-pink-600 px-4 py-2 text-white hover:bg-pink-700">
            Proceed to checkout
          </Link>
        </div>
      </div>
    </div>
  )
}