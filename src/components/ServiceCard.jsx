function ServiceCard({ title, description }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-700">{description}</p>
    </article>
  )
}

export default ServiceCard
