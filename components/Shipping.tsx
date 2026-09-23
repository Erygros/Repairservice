import WhatsAppButton from './WhatsAppButton'

export default function Shipping(){
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-bold">Reparatur deutschlandweit per Versand</h2>
      <p className="text-gray-400 mt-2">Du kannst dein Gerät nach vorheriger Abstimmung zur Reparatur einschicken.</p>

      <ol className="mt-4 list-decimal list-inside space-y-2 text-gray-300">
        <li>WhatsApp-Anfrage</li>
        <li>Gerät und Fehler besprechen</li>
        <li>Versand abstimmen</li>
        <li>Diagnose</li>
        <li>Rückmeldung</li>
        <li>Reparatur nach Abstimmung</li>
        <li>Rückversand</li>
      </ol>

      <div className="mt-6"><WhatsAppButton label="Versand & Reparatur anfragen" message="Hallo, ich möchte den Versand und die Reparatur meines Geräts besprechen." /></div>
    </div>
  )
}
