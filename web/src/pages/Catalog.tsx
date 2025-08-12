import { useMemo, useState } from 'react'
import { products, type ProductCategory } from '../data/products'
import { ProductCard } from '../components/ProductCard'

const categories: ({ label: string; value: ProductCategory | 'all' })[] = [
  { label: 'All', value: 'all' },
  { label: 'Electronics', value: 'electronics' },
  { label: 'Books', value: 'books' },
  { label: 'Clothing', value: 'clothing' },
]

export function Catalog() {
  const [selected, setSelected] = useState<ProductCategory | 'all'>('all')

  const list = useMemo(() => {
    if (selected === 'all') return products
    return products.filter((p) => p.category === selected)
  }, [selected])

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((c) => (
          <button
            key={c.value}
            onClick={() => setSelected(c.value)}
            className={`rounded-full border px-4 py-2 text-sm ${
              selected === c.value
                ? 'border-pink-600 bg-pink-50 text-pink-700'
                : 'border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}