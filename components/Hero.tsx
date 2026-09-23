import Image from 'next/image'
import WhatsAppButton from './WhatsAppButton'

export default function Hero(){
  return (
    <div className="hero-stage">
      <div className="hero-copy">
        <div className="hero-copy-inner">
          <h1>Elektronik<br /><em>reparieren.</em></h1>
          <p>Elektronische Kleingeräte prüfen und reparieren lassen. Einsendung nach vorheriger Abstimmung.</p>
          <WhatsAppButton label="Reparatur anfragen" message="Hallo, ich möchte ein Gerät zur Reparatur anfragen." className="hero-whatsapp" />
        </div>
      </div>
      <div className="hero-image-wrap">
        <div className="hero-image-frame">
          <Image
            src="/images/hero/electronics-repair.jpg"
            alt="Detailaufnahme einer elektronischen Leiterplatte während der Reparatur"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 70vw"
            className="hero-image"
          />
          <span className="hero-image-mark hero-image-mark-top" aria-hidden="true" />
          <span className="hero-image-mark hero-image-mark-bottom" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
