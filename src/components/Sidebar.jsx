function Sidebar({ title, links }) {
  return (
    <aside className="w-full rounded-xl border border-slate-200 bg-white p-4 md:w-72">
      <h2 className="mb-4 text-lg font-bold text-slate-900">{title}</h2>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link} className="rounded-md bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">
            {link}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
