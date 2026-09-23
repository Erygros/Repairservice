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
    <div className="container py-16">
      <h2 className="text-2xl font-bold">Beispiele & Fehlerbilder</h2>
      <p className="text-gray-400 mt-2">Erkennst du dein Problem wieder? Das hilft bei der ersten Einschätzung.</p>

      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {EXAMPLES.map((e)=> (
          <div key={e} className="p-4 bg-[color:var(--card)] rounded border border-gray-800">
            <div className="font-semibold">{e}</div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <div className="text-gray-300">Du findest deinen Fehler nicht?</div>
        <div className="mt-3"><WhatsAppButton label="Fehler über WhatsApp beschreiben" message="Hallo, ich möchte den Fehler meines Geräts beschreiben: " /></div>
      </div>
    </div>
  )
}
