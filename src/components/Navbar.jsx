import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

function Navbar() {
  const { user, logout, roleToDashboardPath } = useAuth()
  const navigate = useNavigate()

  const onLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="text-lg font-bold text-slate-900">
          FSAD-PS03
        </Link>
        <div className="flex items-center gap-3 text-sm font-medium">
          {!user ? (
            <>
              <Link className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100" to="/login">
                Login
              </Link>
              <Link
                className="rounded-md bg-primary-700 px-3 py-2 text-white hover:bg-primary-600"
                to="/register"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <button
                className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
                onClick={() => navigate(roleToDashboardPath[user.role])}
              >
                Dashboard
              </button>
              <button
                className="rounded-md bg-slate-900 px-3 py-2 text-white hover:bg-slate-700"
                onClick={onLogout}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
