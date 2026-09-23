export default function RepairProcess(){
  const steps = [
    {title:'Anfrage',desc:'Du beschreibst das Gerät und den Fehler per WhatsApp.'},
    {title:'Einsenden',desc:'Nach Abstimmung wird das Gerät sicher zur Reparatur eingesendet.'},
    {title:'Diagnose',desc:'Das Gerät wird technisch geprüft und der Fehler eingegrenzt.'},
    {title:'Reparatur',desc:'Nach Abstimmung erfolgt die Reparatur.'}
  ]

  return (
    <section className="process-overview">
      <div className="process-heading"><div><h2>So läuft die<br /><em>Reparatur ab</em></h2></div><p>Vor einer Reparatur wird das weitere Vorgehen mit dir abgestimmt.</p></div>
      <div className="process-line">
        {steps.map(s=> (
          <div key={s.title} className="process-step"><h3>{s.title}</h3><p>{s.desc}</p></div>
        ))}
      </div>
    </section>
  )
}
