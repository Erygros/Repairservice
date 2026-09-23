import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div><div className="footer-brand">GROSS SERVICES</div><div className="footer-note">Elektronik-Diagnose und Reparatur deutschlandweit.</div></div>
        <nav className="footer-links" aria-label="Footer-Navigation">
          <Link href="/reparaturen">Reparaturen</Link><Link href="/ablauf">Ablauf</Link><Link href="/preise">Preise</Link><Link href="/versand">Versand</Link><Link href="/faq">FAQ</Link>
        </nav>
      </div>
    </footer>
  )
}
