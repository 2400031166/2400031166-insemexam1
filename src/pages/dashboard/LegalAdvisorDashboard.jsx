import DashboardLayout from '../../layouts/DashboardLayout.jsx'
import { legalRequests } from '../../services/dummyData.js'

function LegalAdvisorDashboard() {
  return (
    <DashboardLayout
      title="Legal Advisor Dashboard"
      links={['Provide Legal Advice', 'Upload/Update Resources', 'Victim Legal Requests']}
    >
      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <h3 className="text-lg font-bold text-slate-900">Provide Legal Advice</h3>
        <textarea
          className="mt-3 w-full rounded-md border border-slate-300 px-3 py-2"
          rows="5"
          placeholder="Draft legal guidance for a victim"
        />
        <button className="mt-3 rounded-md bg-primary-700 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-600">
          Publish Advice
        </button>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <h3 className="text-lg font-bold text-slate-900">Upload/Update Legal Resources</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <input className="rounded-md border border-slate-300 px-3 py-2" placeholder="Resource Title" />
          <input className="rounded-md border border-slate-300 px-3 py-2" placeholder="Resource Link" />
        </div>
        <button className="mt-3 rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
          Update Resource
        </button>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <h3 className="text-lg font-bold text-slate-900">Victim Legal Requests</h3>
        <div className="mt-3 space-y-2 text-sm">
          {legalRequests.map((request) => (
            <div key={request.id} className="flex flex-col justify-between gap-1 rounded-md bg-slate-100 px-3 py-2 sm:flex-row">
              <span>
                {request.id} • {request.victim} • {request.request}
              </span>
              <span className="font-semibold text-slate-800">{request.status}</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default LegalAdvisorDashboard
