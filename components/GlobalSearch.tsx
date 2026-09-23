'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

type SearchResult = {type: string; title: string; detail: string; href: string; terms: string[]}

const results: SearchResult[] = [
  {type: 'Reparatur', title: 'Kamera-Reparatur', detail: 'Digitalkameras, Camcorder und Objektive', href: '/kamera-reparatur', terms: ['kamera', 'camcorder', 'objektiv', 'digitalkamera']},
  {type: 'Reparatur', title: 'Audio-Reparatur', detail: 'Player, Receiver und Verstärker', href: '/audio-reparatur', terms: ['audio', 'hifi', 'dvd', 'dvd-player', 'blu-ray', 'vhs', 'receiver', 'verstärker', 'cd']},
  {type: 'Reparatur', title: 'Netzteil-Reparatur', detail: 'Netzteile und Stromversorgungen', href: '/netzteil-reparatur', terms: ['netzteil', 'strom', 'stromversorgung']},
  {type: 'Reparatur', title: 'Platinen-Reparatur', detail: 'Steuerplatinen, Displays und Anschlüsse', href: '/platinen-reparatur', terms: ['platine', 'platinen', 'display', 'usb', 'buchse', 'elektronik', 'kein bild', 'kontaktprobleme']},
  {type: 'Gerät', title: 'Elektronik-Reparatur', detail: 'Elektronische Baugruppen und Bedienelemente', href: '/elektronik-reparatur', terms: ['elektronik', 'baugruppe', 'schalter', 'taster', 'bedienelement', 'usb-anschluss', 'audio-anschluss']},
  {type: 'Fehler', title: 'Gerät geht nicht an', detail: 'Diagnose für Strom- und Elektronikfehler', href: '/reparaturen#fehlerbilder', terms: ['geht nicht an', 'defekt', 'strom', 'ausfall', 'funktioniert nicht', 'startprobleme', 'überhitzung']},
  {type: 'Seite', title: 'Versand & Einsendung', detail: 'So kommt Ihr Gerät sicher zu uns', href: '/versand', terms: ['versand', 'einsenden', 'paket']},
  {type: 'Seite', title: 'Ablauf der Reparatur', detail: 'Von der Anfrage bis zur Rücksendung', href: '/ablauf', terms: ['ablauf', 'prozess', 'diagnose']},
  {type: 'Seite', title: 'Preise', detail: 'Arbeitszeit und Diagnose', href: '/preise', terms: ['preis', 'kosten', '20 euro', 'arbeitszeit']}
]

function SearchIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3"/><path d="m16 16 4.5 4.5"/></svg>
}

export default function GlobalSearch({open, onClose}: {open: boolean; onClose: () => void}){
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (open) {
      setQuery('')
      window.setTimeout(() => inputRef.current?.focus(), 30)
      document.body.classList.add('search-is-open')
    } else {
      document.body.classList.remove('search-is-open')
    }
    return () => document.body.classList.remove('search-is-open')
  }, [open])

  const normalized = query.trim().toLowerCase()
  const filtered = normalized ? results.filter(result => `${result.title} ${result.detail} ${result.terms.join(' ')}`.toLowerCase().includes(normalized)) : results.slice(0, 6)

  if (!open) return null

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && filtered.length > 0) {
      onClose()
      router.push(filtered[0].href)
    }
  }

  return (
    <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Globale Suche" onMouseDown={event => event.target === event.currentTarget && onClose()}>
      <div className="search-panel">
        <div className="search-panel-heading"><span className="search-kicker">GROSS SERVICES / FINDER</span><button type="button" onClick={onClose} aria-label="Suche schließen">ESC <span aria-hidden="true">×</span></button></div>
        <label className="search-input-wrap"><SearchIcon /><input ref={inputRef} value={query} onChange={event => setQuery(event.target.value)} onKeyDown={handleInputKeyDown} placeholder="Was möchtest du reparieren?" aria-label="Suchbegriff" /></label>
        <div className="search-results" aria-live="polite">
          {filtered.length ? filtered.map(result => <Link key={result.title} className="search-result" href={result.href} onClick={onClose}>
            <span className="search-result-type">{result.type}</span><span><strong>{result.title}</strong><small>{result.detail}</small></span><span className="search-arrow" aria-hidden="true">↗</span>
          </Link>) : <p className="search-empty">Keine passende Reparatur gefunden. Schreib uns direkt über WhatsApp.</p>}
        </div>
        <div className="search-footer"><span>ENTER öffnet Ergebnis</span><span>/ Suche öffnen</span></div>
      </div>
    </div>
  )
}
