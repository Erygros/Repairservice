export default function RepairProcess(){
  const steps = [
    {n:'01',title:'Anfrage',desc:'Du beschreibst das Gerät und den Fehler per WhatsApp.'},
    {n:'02',title:'Einsenden',desc:'Nach Abstimmung wird das Gerät sicher zur Reparatur eingesendet.'},
    {n:'03',title:'Diagnose',desc:'Das Gerät wird technisch geprüft und der Fehler eingegrenzt.'},
    {n:'04',title:'Reparatur',desc:'Nach Abstimmung erfolgt die Reparatur.'}
  ]

  return (
    <section className="process-overview">
      <div className="process-heading"><div><div className="section-kicker"><span>05</span> SERVICE / ABLAUF</div><h2>So läuft die<br /><em>Reparatur ab</em></h2></div><p>Vor einer Reparatur wird das weitere Vorgehen mit dir abgestimmt.</p></div>
      <div className="process-line">
        {steps.map(s=> (
          <div key={s.n} className="process-step"><span>{s.n}</span><h3>{s.title}</h3><p>{s.desc}</p></div>
        ))}
      </div>
    </section>
  )
}
