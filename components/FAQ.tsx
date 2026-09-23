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
    <section className="faq-overview"><div className="faq-heading"><div><div className="section-kicker"><span>08</span> SERVICE / ANTWORTEN</div><h2>Häufige<br /><em>Fragen</em></h2></div><p>Die wichtigsten Antworten zu Diagnose, Kosten und Einsendung auf einen Blick.</p></div><div className="faq-list">{FAQS.map((f,index) => <details key={f.q}><summary><span>0{index + 1}</span>{f.q}<b>+</b></summary><p>{f.a}</p></details>)}</div><div className="faq-cta"><div><strong>Gerät defekt?</strong><span>Beschreib uns kurz das Problem. Wir klären gemeinsam, ob eine Reparatur sinnvoll ist.</span></div><WhatsAppButton label="Reparatur über WhatsApp anfragen" message="Hallo, ich möchte eine Reparatur anfragen. Mein Gerät ist: ; Der Fehler ist: " /></div>
    </section>
  )
}
