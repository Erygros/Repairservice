const FAQS = [
  {q:'Was kostet eine Reparatur?', a:'Die Arbeitszeit beträgt 20 € pro Stunde. Ersatzteile werden separat berechnet.'},
  {q:'Kann ich mein Gerät einschicken?', a:'Ja — nach vorheriger Abstimmung per WhatsApp kannst du das Gerät einsenden.'},
  {q:'Welche Geräte werden repariert?', a:'Kompakte elektronische Geräte wie Kameras, Audio-/Videogeräte, Netzteile, Platinen und ähnliche Kleingeräte.'},
  {q:'Repariert ihr Kameras?', a:'Ja, Kameras und zugehörige Baugruppen werden geprüft und, wenn möglich, repariert.'},
  {q:'Was passiert nach dem Einsenden?', a:'Wir führen eine technische Diagnose durch und melden uns mit einer Einschätzung und einem Kostenvoranschlag.'},
  {q:'Muss ich Ersatzteile vorab bezahlen?', a:'Bei speziellen Ersatzteilen kann eine Vorauszahlung erforderlich sein — das klären wir vor Bestellung.'},
  {q:'Was passiert, wenn eine Reparatur nicht wirtschaftlich ist?', a:'Wir besprechen die Optionen mit dir — ggf. bieten wir ein Rückversand-Angebot an.'},
  {q:'Wie kann ich mein Gerät beschreiben?', a:'Beschreibe Marke, Modell, Seriennummer (wenn vorhanden) und das beobachtete Fehlverhalten. Fotos helfen.'}
]

import WhatsAppButton from './WhatsAppButton'

export default function FAQ(){
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-bold">FAQ</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {FAQS.map(f=> (
          <div key={f.q} className="p-4 bg-[color:var(--card)] rounded border border-gray-800">
            <div className="font-semibold">{f.q}</div>
            <div className="text-sm text-gray-400 mt-2">{f.a}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <div className="text-lg font-semibold">Gerät defekt?</div>
        <div className="text-gray-300 mt-2">Beschreib uns kurz das Problem. Wir klären gemeinsam, ob eine Reparatur sinnvoll ist.</div>
        <div className="mt-4"><WhatsAppButton label="Reparatur über WhatsApp anfragen" message="Hallo, ich möchte eine Reparatur anfragen. Mein Gerät ist: ; Der Fehler ist: " /></div>
      </div>
    </div>
  )
}
