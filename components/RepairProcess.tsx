export default function RepairProcess(){
  const steps = [
    {n:'01',title:'Anfrage',desc:'Du beschreibst das Gerät und den Fehler per WhatsApp.'},
    {n:'02',title:'Einsenden',desc:'Nach Abstimmung wird das Gerät sicher zur Reparatur eingesendet.'},
    {n:'03',title:'Diagnose',desc:'Das Gerät wird technisch geprüft und der Fehler eingegrenzt.'},
    {n:'04',title:'Reparatur',desc:'Nach Abstimmung erfolgt die Reparatur.'}
  ]

  return (
    <div className="container py-16">
      <h2 className="text-2xl font-bold">So läuft die Reparatur ab</h2>
      <p className="text-gray-400 mt-2">Vor einer Reparatur wird das weitere Vorgehen mit dir abgestimmt.</p>

      <div className="mt-6 grid md:grid-cols-4 gap-4">
        {steps.map(s=> (
          <div key={s.n} className="p-4 bg-[color:var(--card)] rounded border border-gray-800 text-center">
            <div className="font-mono text-sm text-gray-400">{s.n}</div>
            <div className="font-semibold mt-2">{s.title}</div>
            <div className="text-sm text-gray-400 mt-2">{s.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
