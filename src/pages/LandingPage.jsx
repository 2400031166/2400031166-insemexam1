import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import EmergencyModal from '../components/EmergencyModal.jsx'
import { emergencyContacts, services } from '../services/dummyData.js'
import api from '../services/api.js'

function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [apiStatus, setApiStatus] = useState('Offline (demo mode)')
  const navigate = useNavigate()

  useEffect(() => {
    const checkApi = async () => {
      try {
        await api.get('/health')
        setApiStatus('Connected')
      } catch {
        setApiStatus('Offline (demo mode)')
      }
    }
    checkApi()
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">FSAD-PS03</p>
            <h1 className="mt-2 max-w-3xl text-3xl font-bold sm:text-4xl">
              Gender-responsive mechanism to combat domestic violence
            </h1>
            <p className="mt-4 max-w-3xl text-slate-200">
              A safe, inclusive platform to support victims/survivors through counselling, legal
              aid, emergency response, and coordinated care.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                className="rounded-md bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-500"
                onClick={() => setModalOpen(true)}
              >
                Get Help Now
              </button>
              <button
                className="rounded-md bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-200"
                onClick={() => navigate('/register')}
              >
                Join Platform
              </button>
            </div>
            <p className="mt-4 text-sm text-slate-300">API Status: {apiStatus}</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">Mission Statement</h2>
          <p className="mt-3 max-w-4xl text-slate-700">
            Our mission is to provide gender-equal access to support mechanisms, empower survivors
            with legal awareness, and strengthen a coordinated community response to domestic
            violence.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Support Services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <ServiceCard key={item.id} title={item.title} description={item.description} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Emergency Contacts</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {emergencyContacts.map((contact) => (
              <div key={contact.id} className="rounded-xl border border-red-200 bg-red-50 p-4">
                <p className="font-semibold text-slate-900">{contact.title}</p>
                <p className="mt-1 text-lg font-bold text-red-700">{contact.phone}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />

      <EmergencyModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        contacts={emergencyContacts}
      />
    </div>
  )
}

export default LandingPage
