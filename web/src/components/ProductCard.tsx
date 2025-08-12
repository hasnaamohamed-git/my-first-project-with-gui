import type { Product } from '../data/products'
import { useCart } from '../context/CartContext'

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <div className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-md bg-black/70 px-2 py-1 text-xs text-white capitalize">
          {product.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-neutral-600">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addItem(product)}
            className="rounded-lg bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}