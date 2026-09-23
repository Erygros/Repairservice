'use client'

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
    <section id="geraete" className="device-overview">
      <div className="device-overview-heading">
        <div><h2>Reparaturen &<br /><em>Geräteübersicht</em></h2></div>
        <label className="device-search"><span>Gerät oder Kategorie suchen</span><input type="search" value={q} onChange={e=>setQ(e.target.value)} placeholder="Kamera, Canon, Netzteil ..." aria-label="Gerät oder Kategorie suchen" autoComplete="off" /></label>
      </div>
      <div className="device-grid">
        {filtered.length === 0 ? (
          <div className="device-empty">
            <p>Nicht gefunden? Schreib uns direkt über WhatsApp.</p><WhatsAppButton label="WhatsApp" />
          </div>
        ) : filtered.map((f,idx)=> (
          <div key={idx} className="device-item"><span className="device-category">{f.category}</span><strong>{f.item}</strong><span className="device-note">Technische Diagnose nach Einsendung</span><WhatsAppButton label="Anfragen" message={`Hallo, ich habe ein ${f.item} und möchte wissen, ob eine Reparatur möglich ist.`} /></div>
        ))}
      </div>
    </section>
  )
}
