import Link from 'next/link'
import { REPAIRS } from '../../data/repairs'
import WhatsAppButton from '../../components/WhatsAppButton'

export const metadata = { title: 'Reparaturen | GROSS SERVICES', description: 'Elektronik-Reparaturen für Kameras, Audio, Netzteile, Platinen und Bedienelemente.' }

export default function Reparaturen(){
  return <div className="service-page"><section className="service-hero"><div className="service-hero-inner"><span className="page-kicker">GROSS SERVICES / REPARATUREN</span><h1>Elektronik, die wieder funktioniert.</h1><p>Von der Kamera bis zur Platine: Wir prüfen Kleingeräte, Baugruppen und Stromversorgungen mit technischer Sorgfalt.</p><WhatsAppButton label="Reparatur anfragen" /></div></section><section className="repair-directory"><div className="page-kicker">Übersicht</div><div className="repair-directory-grid">{REPAIRS.map(category => <article key={category.category}><span className="directory-index">0{REPAIRS.indexOf(category) + 1}</span><h2>{category.category}</h2><p>{category.description}</p><div>{category.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div><div id="fehlerbilder" className="fault-strip"><span className="page-kicker">Fehlerbilder</span><h2>Geht nicht an? Macht Geräusche? Kein Signal?</h2><p>Schreib uns, was passiert. Eine klare Fehlerbeschreibung hilft bei der ersten Einschätzung.</p><Link href="/ablauf">Zum Ablauf der Diagnose ↗</Link></div></section></div>
}
