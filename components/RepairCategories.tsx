import { REPAIRS } from '../data/repairs'
import Link from 'next/link'
import WhatsAppButton from './WhatsAppButton'

const categoryLinks: Record<string, string> = {
  'Kameras': '/kamera-reparatur',
  'Audio & HiFi': '/audio-reparatur',
  'Netzteile & Strom': '/netzteil-reparatur',
  'Elektronik & Platinen': '/platinen-reparatur',
  'Bedienelemente': '/elektronik-reparatur'
}

export default function RepairCategories(){
  return (
    <section className="repair-overview">
      <div className="repair-overview-heading">
        <div>
          <h2>Was wird<br /><em>repariert?</em></h2>
        </div>
        <div className="repair-overview-intro">
          <p>Kompakte elektronische Geräte und Baugruppen. Jede Anfrage beginnt mit einer technischen Einschätzung.</p>
          <WhatsAppButton label="Reparatur anfragen" message="Hallo, ich habe ein Gerät und möchte den Versand zur Reparatur besprechen." className="overview-whatsapp" />
        </div>
      </div>

      <div className="repair-overview-grid">
        {REPAIRS.map((repair) => (
          <Link key={repair.category} href={categoryLinks[repair.category] ?? '/reparaturen'} className="repair-overview-item">
            <span className="repair-overview-arrow" aria-hidden="true">↗</span>
            <h3>{repair.category}</h3>
            <p>{repair.description}</p>
            <span className="repair-overview-items">{repair.items.join(' / ')}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
