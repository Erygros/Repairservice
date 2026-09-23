import WhatsAppButton from './WhatsAppButton'

export default function Shipping(){
  return (
    <section className="shipping-overview"><div className="shipping-heading"><div><h2>Reparatur deutschlandweit<br /><em>per Versand</em></h2></div><p>Du kannst dein Gerät nach vorheriger Abstimmung sicher zur Reparatur einschicken.</p></div><div className="shipping-route">{['WhatsApp-Anfrage','Gerät und Fehler besprechen','Versand abstimmen','Diagnose','Rückmeldung','Reparatur nach Abstimmung','Rückversand'].map(step => <div key={step}>{step}</div>)}</div><WhatsAppButton label="Versand & Reparatur anfragen" message="Hallo, ich möchte den Versand und die Reparatur meines Geräts besprechen." className="shipping-whatsapp" /></section>
  )
}
