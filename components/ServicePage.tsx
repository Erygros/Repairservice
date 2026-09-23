import Link from 'next/link'
import WhatsAppButton from './WhatsAppButton'

export type ServicePageProps = {
  eyebrow: string
  title: string
  intro: string
  items: string[]
  related: {href: string; label: string}[]
}

export default function ServicePage({eyebrow, title, intro, items, related}: ServicePageProps){
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-inner">
          <span className="page-kicker">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
          <WhatsAppButton label="Gerät anfragen" message={`Hallo, ich habe eine Anfrage zur ${title}.`} />
        </div>
      </section>
      <section className="service-content">
        <div className="service-copy">
          <span className="page-kicker">Was wir prüfen</span>
          <h2>Technische Diagnose statt Vermutung.</h2>
          <p>Wir prüfen Fehlerbild, Stromversorgung, Baugruppen und Anschlüsse. Erst nach der Diagnose lässt sich seriös beurteilen, ob eine Reparatur technisch und wirtschaftlich sinnvoll ist.</p>
          <div className="service-list">{items.map(item => <div key={item}><span aria-hidden="true">+</span>{item}</div>)}</div>
        </div>
        <aside className="service-aside">
          <span className="page-kicker">Weiterführend</span>
          <nav aria-label="Verwandte Reparaturseiten">{related.map(item => <Link key={item.href} href={item.href}>{item.label}<span aria-hidden="true">↗</span></Link>)}</nav>
        </aside>
      </section>
    </div>
  )
}
