function EmergencyModal({ open, onClose, contacts }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-lg rounded-xl bg-white p-6">
        <h3 className="text-xl font-bold text-red-700">Emergency Alert</h3>
        <p className="mt-2 text-sm text-slate-700">
          If you are in immediate danger, call emergency services now.
        </p>
        <div className="mt-4 space-y-2">
          {contacts.map((contact) => (
            <div key={contact.id} className="flex items-center justify-between rounded-md bg-slate-100 px-3 py-2">
              <span className="font-medium text-slate-800">{contact.title}</span>
              <span className="text-red-700">{contact.phone}</span>
            </div>
          ))}
        </div>
        <button
          className="mt-5 w-full rounded-md bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default EmergencyModal
