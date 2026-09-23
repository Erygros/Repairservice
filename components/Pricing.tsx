export default function Pricing(){
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-bold">Preise & Diagnose</h2>
      <p className="text-gray-400 mt-2">Transparente Preise — keine Überraschungen.</p>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-[color:var(--card)] rounded border border-gray-800">
          <div className="text-sm text-gray-400">Arbeitszeit</div>
          <div className="text-3xl font-bold mt-2">20 €<span className="text-sm font-medium"> / Stunde</span></div>
          <div className="mt-3 text-sm text-gray-400">Ersatzteile werden separat berechnet. Die tatsächliche Reparaturdauer hängt vom Gerät und Fehler ab.</div>
        </div>

        <div className="p-6 bg-[color:var(--card)] rounded border border-gray-800">
          <div className="font-semibold">Zahlung</div>
          <div className="text-sm text-gray-400 mt-2">Bei speziellen Ersatzteilen kann vor der Bestellung eine Vorauszahlung erforderlich sein.</div>
        </div>

        <div className="p-6 bg-[color:var(--card)] rounded border border-gray-800">
          <div className="font-semibold">Wirtschaftlichkeit</div>
          <div className="text-sm text-gray-400 mt-2">Ob eine Reparatur sinnvoll ist, wird nach technischer Diagnose beurteilt.</div>
        </div>
      </div>
    </div>
  )
}
