import WhatsAppButton from './WhatsAppButton'

const EXAMPLES = [
  'Gerät geht nicht mehr an',
  'Display bleibt dunkel',
  'Netzteil defekt',
  'Kamera zeigt Streifen',
  'USB-Anschluss beschädigt',
  'Gerät startet und schaltet wieder ab',
  'Ton fällt aus',
  'Bedienung funktioniert teilweise nicht',
  'Gerät wird ungewöhnlich heiß',
  'Spannungsversorgung fehlerhaft'
]

export default function RepairExamples(){
  return (
    <section className="fault-overview">
      <div className="fault-overview-heading"><div><div className="section-kicker"><span>04</span> DIAGNOSE / FEHLERBILDER</div><h2>Beispiele &<br /><em>Fehlerbilder</em></h2></div><p>Erkennst du dein Problem wieder? Eine klare Beschreibung hilft bei der ersten technischen Einschätzung.</p></div>
      <div className="fault-list">{EXAMPLES.map((e, index) => <div key={e}><span>0{index + 1}</span><strong>{e}</strong><i aria-hidden="true">↗</i></div>)}</div>
      <div className="fault-cta"><span>Du findest deinen Fehler nicht?</span><WhatsAppButton label="Fehler über WhatsApp beschreiben" message="Hallo, ich möchte den Fehler meines Geräts beschreiben: " /></div>
    </section>
  )
}
