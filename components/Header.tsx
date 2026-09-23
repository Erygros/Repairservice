import Link from 'next/link'
import WhatsAppButton from './WhatsAppButton'

export default function Header(){
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/60 backdrop-blur z-40">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <div className="text-white font-semibold">[UNTERNEHMENSNAME EINTRAGEN]</div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm text-gray-300">
          <a href="#hero">Start</a>
          <a href="#repairs">Reparaturen</a>
          <a href="#examples">Fehlerbilder</a>
          <a href="#process">Ablauf</a>
          <a href="#pricing">Preise</a>
          <a href="#shipping">Versand</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <WhatsAppButton label="Anfrage" />
        </div>
      </div>
    </header>
  )
}
