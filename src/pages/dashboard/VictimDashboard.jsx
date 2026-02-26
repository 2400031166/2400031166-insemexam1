import DashboardLayout from '../../layouts/DashboardLayout.jsx'
import {
  emergencyContacts,
  legalRights,
  riskAwarenessTips,
  victimSupportRequests,
} from '../../services/dummyData.js'

function VictimDashboard() {
  return (
    <DashboardLayout
      title="Victim/Survivor Dashboard"
      links={[
        'Legal Rights Information',
        'Emergency Contacts',
        'Request Counselling',
        'Chat with Counsellor',
        'Support Request Status',
        'Health Risk Awareness',
      ]}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-bold text-slate-900">Legal Rights Information</h3>
          <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-700">
            {legalRights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-bold text-slate-900">Emergency Contacts</h3>
          <div className="mt-3 space-y-2">
            {emergencyContacts.map((contact) => (
              <div key={contact.id} className="rounded-md bg-red-50 px-3 py-2">
                <p className="font-medium text-slate-900">{contact.title}</p>
                <p className="text-red-700">{contact.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-bold text-slate-900">Request Counselling</h3>
          <textarea
            className="mt-3 w-full rounded-md border border-slate-300 px-3 py-2"
            rows="4"
            defaultValue="Need support for trauma counselling."
          />
          <button className="mt-3 rounded-md bg-primary-700 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-600">
            Submit Request
          </button>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-bold text-slate-900">Chat with Counsellor</h3>
          <div className="mt-3 rounded-md bg-slate-100 p-3 text-sm text-slate-700">
            Counsellor: Hello, how are you feeling today?
          </div>
          <input
            className="mt-3 w-full rounded-md border border-slate-300 px-3 py-2"
            placeholder="Type your message"
          />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-bold text-slate-900">Track Support Request Status</h3>
          <div className="mt-3 space-y-2 text-sm">
            {victimSupportRequests.map((request) => (
              <div key={request.id} className="flex justify-between rounded-md bg-slate-100 px-3 py-2">
                <span>
                  {request.id} • {request.type}
                </span>
                <span className="font-semibold">{request.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-bold text-slate-900">Health Risk Awareness</h3>
          <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-700">
            {riskAwarenessTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default VictimDashboard
