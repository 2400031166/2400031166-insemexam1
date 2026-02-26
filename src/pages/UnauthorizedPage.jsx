import { Link } from 'react-router-dom'

function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <div className="max-w-md rounded-xl border border-slate-200 bg-white p-6 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Unauthorized Access</h1>
        <p className="mt-2 text-slate-700">You do not have permission to view this dashboard.</p>
        <Link
          to="/"
          className="mt-4 inline-block rounded-md bg-primary-700 px-4 py-2 font-medium text-white hover:bg-primary-600"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}

export default UnauthorizedPage
