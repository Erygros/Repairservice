'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import GlobalSearch from './GlobalSearch'
import Logo from './Logo'
import WhatsAppButton from './WhatsAppButton'

const leftLinks = [
  { href: '/', label: 'Startseite' },
  { href: '/reparaturen', label: 'Reparaturen' },
  { href: '/reparaturen#geraete', label: 'Geräte' },
  { href: '/reparaturen#fehlerbilder', label: 'Fehlerbilder' }
]

const rightLinks = [
  { href: '/ablauf', label: 'Ablauf' },
  { href: '/preise', label: 'Preise' },
  { href: '/versand', label: 'Versand' },
  { href: '/faq', label: 'FAQ' }
]

const repairLinks = [
  { href: '/kamera-reparatur', label: 'Kamera-Reparatur' },
  { href: '/audio-reparatur', label: 'Audio-Reparatur' },
  { href: '/elektronik-reparatur', label: 'Elektronik-Reparatur' },
  { href: '/platinen-reparatur', label: 'Platinen-Reparatur' },
  { href: '/netzteil-reparatur', label: 'Netzteil-Reparatur' }
]

function SearchIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3"/><path d="m16 16 4.5 4.5"/></svg>
}

function MenuIcon({open}: {open: boolean}){
  return <span className={`menu-icon ${open ? 'is-open' : ''}`} aria-hidden="true"><i /><i /><i /></span>
}

export default function Header(){
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const closeMenu = () => {
    setMenuOpen(false)
    window.setTimeout(() => menuButtonRef.current?.focus(), 0)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes((event.target as HTMLElement)?.tagName)) {
        event.preventDefault()
        setSearchOpen(true)
      }
      if (event.key === 'Escape') {
        if (menuOpen) closeMenu()
        setSearchOpen(false)
      }
    }
    window.addEventListener('scroll', onScroll, {passive: true})
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="nav-shell">
          <button ref={menuButtonRef} className="mobile-nav-button" type="button" onClick={() => setMenuOpen(true)} aria-label="Menü öffnen" aria-expanded={menuOpen} aria-controls="mobile-navigation">
            <MenuIcon open={false} />
          </button>
          <nav className="desktop-nav desktop-nav-left" aria-label="Hauptnavigation links">
            {leftLinks.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          </nav>
          <Link className="header-logo" href="/" aria-label="GROSS SERVICES Startseite"><Logo /></Link>
          <nav className="desktop-nav desktop-nav-right" aria-label="Hauptnavigation rechts">
            {rightLinks.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}
            <button className="search-button" type="button" onClick={() => setSearchOpen(true)} aria-label="Website durchsuchen" title="Suche öffnen"><SearchIcon /></button>
          </nav>
          <div className="mobile-nav-actions"><button className="search-button" type="button" onClick={() => setSearchOpen(true)} aria-label="Website durchsuchen" title="Suche öffnen"><SearchIcon /></button></div>
          <div className="header-contact"><WhatsAppButton label="Anfrage" className="header-whatsapp" /></div>
        </div>
      </header>

      {menuOpen && <div id="mobile-navigation" className="mobile-menu is-open" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
        <div className="mobile-menu-top"><span>Navigation</span><button type="button" onClick={closeMenu} aria-label="Menü schließen"><MenuIcon open={true} /></button></div>
        <div className="mobile-menu-content">
          <div className="mobile-menu-group"><span className="menu-kicker">Reparaturen</span>{repairLinks.map(link => <Link key={link.href} href={link.href} onClick={closeMenu}>{link.label}</Link>)}</div>
          <div className="mobile-menu-group"><span className="menu-kicker">Service</span>{rightLinks.map(link => <Link key={link.href} href={link.href} onClick={closeMenu}>{link.label}</Link>)}<Link href="/" onClick={closeMenu}>Startseite</Link></div>
          <WhatsAppButton label="Reparatur anfragen" className="mobile-menu-cta" />
        </div>
      </div>}
      <GlobalSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
