import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

function RegisterPage() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'victim',
  })

  const onChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const destination = register(formData)
    navigate(destination)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Register</h1>
        <p className="mt-1 text-sm text-slate-600">Create an account and choose your role.</p>
        <form className="mt-5 space-y-4" onSubmit={onSubmit}>
          <input
            className="w-full rounded-md border border-slate-300 px-3 py-2"
            name="name"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={onChange}
          />
          <input
            className="w-full rounded-md border border-slate-300 px-3 py-2"
            name="email"
            type="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={onChange}
          />
          <input
            className="w-full rounded-md border border-slate-300 px-3 py-2"
            name="password"
            type="password"
            required
            placeholder="Password"
            value={formData.password}
            onChange={onChange}
          />
          <select
            className="w-full rounded-md border border-slate-300 px-3 py-2"
            name="role"
            value={formData.role}
            onChange={onChange}
          >
            <option value="victim">Victim/Survivor</option>
            <option value="counsellor">Counsellor</option>
            <option value="legal-advisor">Legal Advisor</option>
            <option value="admin">Admin</option>
          </select>
          <button className="w-full rounded-md bg-primary-700 px-4 py-2 font-semibold text-white hover:bg-primary-600">
            Register
          </button>
        </form>
        <p className="mt-4 text-sm text-slate-600">
          Already have an account?{' '}
          <Link className="font-semibold text-primary-700" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage
