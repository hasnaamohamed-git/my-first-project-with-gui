import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export function Header() {
  const { totalItems } = useCart()

  return (
    <header className="bg-white border-b border-neutral-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="text-2xl font-extrabold tracking-tight">SAND</span>
          <span className="text-lg text-neutral-500">shop</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-neutral-900 ${isActive ? 'text-neutral-900' : 'text-neutral-600'}`
            }
          >
            Catalog
          </NavLink>
          <NavLink
            to="/checkout"
            className={({ isActive }) =>
              `hover:text-neutral-900 ${isActive ? 'text-neutral-900' : 'text-neutral-600'}`
            }
          >
            Checkout
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `inline-flex items-center gap-2 hover:text-neutral-900 ${
                isActive ? 'text-neutral-900' : 'text-neutral-600'
              }`
            }
          >
            <span>Cart</span>
            <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-pink-600 px-1 text-white text-xs">
              {totalItems}
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}