import { useState } from 'react'
import DashboardLayout from '../../layouts/DashboardLayout.jsx'
import { adminUsers } from '../../services/dummyData.js'

function AdminDashboard() {
  const [users, setUsers] = useState(adminUsers)
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'victim' })

  const onAddUser = (event) => {
    event.preventDefault()
    if (!newUser.name || !newUser.email) return
    setUsers((prev) => [...prev, { id: Date.now(), ...newUser }])
    setNewUser({ name: '', email: '', role: 'victim' })
  }

  const onDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id))
  }

  return (
    <DashboardLayout
      title="Admin Dashboard"
      links={['Manage Users', 'Manage Content/Resources', 'Role Management', 'Analytics']}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-sm text-slate-600">Total Users</p>
          <p className="text-2xl font-bold text-slate-900">{users.length}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-sm text-slate-600">Active Counsellors</p>
          <p className="text-2xl font-bold text-slate-900">4</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-sm text-slate-600">Open Legal Requests</p>
          <p className="text-2xl font-bold text-slate-900">8</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-sm text-slate-600">Emergency Alerts Today</p>
          <p className="text-2xl font-bold text-red-700">3</p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <h3 className="text-lg font-bold text-slate-900">Manage Users (CRUD UI)</h3>
        <form className="mt-4 grid gap-3 sm:grid-cols-4" onSubmit={onAddUser}>
          <input
            className="rounded-md border border-slate-300 px-3 py-2"
            placeholder="Name"
            value={newUser.name}
            onChange={(event) => setNewUser((prev) => ({ ...prev, name: event.target.value }))}
          />
          <input
            className="rounded-md border border-slate-300 px-3 py-2"
            placeholder="Email"
            value={newUser.email}
            onChange={(event) => setNewUser((prev) => ({ ...prev, email: event.target.value }))}
          />
          <select
            className="rounded-md border border-slate-300 px-3 py-2"
            value={newUser.role}
            onChange={(event) => setNewUser((prev) => ({ ...prev, role: event.target.value }))}
          >
            <option value="victim">Victim/Survivor</option>
            <option value="counsellor">Counsellor</option>
            <option value="legal-advisor">Legal Advisor</option>
            <option value="admin">Admin</option>
          </select>
          <button className="rounded-md bg-primary-700 px-4 py-2 font-semibold text-white hover:bg-primary-600">
            Add User
          </button>
        </form>

        <div className="mt-4 space-y-2 text-sm">
          {users.map((user) => (
            <div key={user.id} className="flex flex-col justify-between gap-2 rounded-md bg-slate-100 px-3 py-2 sm:flex-row">
              <span>
                {user.name} • {user.email} • {user.role}
              </span>
              <div className="flex gap-2">
                <button className="rounded bg-slate-300 px-2 py-1">Edit</button>
                <button className="rounded bg-red-600 px-2 py-1 text-white" onClick={() => onDelete(user.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-bold text-slate-900">Manage Content/Resources</h3>
          <textarea
            className="mt-3 w-full rounded-md border border-slate-300 px-3 py-2"
            rows="4"
            placeholder="Update awareness content, legal resources, and support guidance"
          />
          <button className="mt-3 rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
            Save Content
          </button>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-bold text-slate-900">Role Management UI</h3>
          <p className="mt-2 text-sm text-slate-700">
            Assign and review platform permissions for admin, counsellor, legal advisor, and
            victim/survivor accounts.
          </p>
          <button className="mt-3 rounded-md bg-primary-700 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-600">
            Open Role Controls
          </button>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default AdminDashboard
