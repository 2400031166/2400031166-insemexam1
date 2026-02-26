import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Sidebar from '../components/Sidebar.jsx'
import { useAuth } from '../context/AuthContext.jsx'

function DashboardLayout({ title, links, children }) {
  const { user } = useAuth()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4">
          <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
          <p className="text-sm text-slate-600">
            Signed in as {user?.name} ({user?.role})
          </p>
        </div>
        <div className="flex flex-col gap-6 md:flex-row">
          <Sidebar title="Quick Sections" links={links} />
          <section className="flex-1 space-y-6">{children}</section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default DashboardLayout
