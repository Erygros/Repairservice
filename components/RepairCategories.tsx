import { REPAIRS } from '../data/repairs'
import WhatsAppButton from './WhatsAppButton'

export default function RepairCategories(){
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-bold">Was wird repariert?</h2>
      <p className="text-gray-400 mt-2 max-w-2xl">Kompakte elektronische Geräte und Baugruppen — per Versand einsenden.</p>

      <div className="grid md:grid-cols-4 gap-6 mt-6">
        {REPAIRS.map((r)=> (
          <div key={r.category} className="bg-[color:var(--card)] p-4 rounded border border-gray-800">
            <div className="h-10 w-10 bg-gray-800 rounded flex items-center justify-center text-sm">🔧</div>
            <h3 className="mt-3 font-semibold">{r.category}</h3>
            <p className="text-sm text-gray-400 mt-1">{r.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <WhatsAppButton label="Versand & Reparatur anfragen" message="Hallo, ich habe ein Gerät und möchte den Versand zur Reparatur besprechen." />
      </div>
    </div>
  )
}
