import DashboardLayout from '../../layouts/DashboardLayout.jsx'
import { assignedVictims } from '../../services/dummyData.js'

function CounsellorDashboard() {
  return (
    <DashboardLayout
      title="Counsellor Dashboard"
      links={['Assigned Victims', 'Chat Interface', 'Progress Notes', 'Schedule Sessions']}
    >
      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <h3 className="text-lg font-bold text-slate-900">Assigned Victims</h3>
        <div className="mt-3 space-y-2 text-sm">
          {assignedVictims.map((victim) => (
            <div key={victim.id} className="rounded-md bg-slate-100 px-3 py-2">
              <p className="font-semibold text-slate-900">{victim.name}</p>
              <p className="text-slate-700">
                {victim.case} • Next Session: {victim.nextSession}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-bold text-slate-900">Chat Interface</h3>
          <div className="mt-3 rounded-md bg-slate-100 p-3 text-sm text-slate-700">
            Victim: I need help planning my next steps safely.
          </div>
          <input
            className="mt-3 w-full rounded-md border border-slate-300 px-3 py-2"
            placeholder="Send a response"
          />
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-bold text-slate-900">Add Progress Notes</h3>
          <textarea
            className="mt-3 w-full rounded-md border border-slate-300 px-3 py-2"
            rows="5"
            placeholder="Write progress notes"
          />
          <button className="mt-3 rounded-md bg-primary-700 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-600">
            Save Notes
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <h3 className="text-lg font-bold text-slate-900">Schedule Sessions</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <input className="rounded-md border border-slate-300 px-3 py-2" type="date" />
          <input className="rounded-md border border-slate-300 px-3 py-2" type="time" />
          <button className="rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-700">
            Schedule
          </button>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default CounsellorDashboard
