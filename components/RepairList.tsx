import { useState, useMemo } from 'react'
import { REPAIRS } from '../data/repairs'
import WhatsAppButton from './WhatsAppButton'

export default function RepairList(){
  const [q,setQ] = useState('')
  const flattened = useMemo(()=> REPAIRS.flatMap(c => c.items.map(i=>({category:c.category, item:i}))),[])
  const filtered = useMemo(()=>{
    if(!q) return flattened
    const s = q.toLowerCase()
    return flattened.filter(f=> f.item.toLowerCase().includes(s) || f.category.toLowerCase().includes(s))
  },[q,flattened])

  return (
    <div className="container py-16">
      <h2 className="text-2xl font-bold">Reparaturen & Geräteübersicht</h2>
      <p className="text-gray-400 mt-2">Schnell suchen: z.B. „Kamera“, „Canon“, „Netzteil“.</p>

      <div className="mt-4">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Suchen..." className="w-full p-3 bg-[color:var(--card)] border border-gray-800 rounded" />
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {filtered.length === 0 ? (
          <div className="p-6 bg-[color:var(--card)] rounded"> 
            <p className="text-gray-300">Nicht gefunden? Schreib uns direkt über WhatsApp.</p>
            <div className="mt-3"><WhatsAppButton label="WhatsApp" /></div>
          </div>
        ) : filtered.map((f,idx)=> (
          <div key={idx} className="p-4 bg-[color:var(--card)] rounded border border-gray-800">
            <div className="text-sm text-gray-400">{f.category}</div>
            <div className="mt-2 font-semibold">{f.item}</div>
            <div className="mt-3 text-xs text-gray-400">Ob eine Reparatur möglich und wirtschaftlich sinnvoll ist, wird nach einer technischen Diagnose beurteilt.</div>
            <div className="mt-3"><WhatsAppButton label="Reparatur anfragen" message={`Hallo, ich habe ein ${f.item} und möchte wissen, ob eine Reparatur möglich ist.`} /></div>
          </div>
        ))}
      </div>
    </div>
  )
}
