import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../ui/Button'

interface SiteHeaderProps {
  onGetStarted: () => void
}

export function SiteHeader({ onGetStarted }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#top" aria-label="Human Behavior Lab home">
          <span className="brand__mark" aria-hidden="true">◉</span>
          <span>Human Behavior Lab</span>
        </a>
        <button className="mobile-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X aria-hidden="true" size={18} strokeWidth={1.8} /> : <Menu aria-hidden="true" size={18} strokeWidth={1.8} />}
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
        </button>
        <nav id="site-navigation" className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`} aria-label="Primary navigation">
          <a href="#included" onClick={() => setMenuOpen(false)}>Our Method</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <Button href="#pricing" onClick={() => { setMenuOpen(false); onGetStarted() }}>Get started</Button>
        </nav>
      </div>
    </header>
  )
}
