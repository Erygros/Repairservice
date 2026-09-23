import WhatsAppButton from './WhatsAppButton'

export default function Hero(){
  return (
    <div className="min-h-[80vh] flex items-center" style={{backgroundImage:'linear-gradient(180deg, rgba(255,255,255,0.02), transparent)'}}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center py-24">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Elektronik defekt? <br/>Wir finden den Fehler.</h1>
            <p className="mt-4 text-gray-300 max-w-lg">Kompakte elektronische Geräte professionell prüfen und reparieren lassen – deutschlandweit per Versand.</p>

            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <WhatsAppButton label="Reparatur anfragen" message="Hallo, ich möchte ein Gerät zur Reparatur anfragen." />
              <a href="#repairs" className="px-4 py-2 border border-gray-700 text-gray-200 rounded">Reparaturen ansehen</a>
            </div>

            <div className="mt-6 flex gap-6 text-sm text-gray-300">
              <div>
                <div className="text-2xl font-semibold">20 €</div>
                <div className="text-xs text-gray-400">/ Stunde</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">Deutschlandweit</div>
                <div className="text-xs text-gray-400">Versand möglich</div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-black/40 to-transparent rounded-lg p-6" aria-hidden>
              <div className="h-64 bg-[color:var(--card)] rounded-md flex items-center justify-center text-sm text-gray-400">Hero Video / Bildplatzhalter</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
