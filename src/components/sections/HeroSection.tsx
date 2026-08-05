import { ArrowRight } from 'lucide-react'
import { productImages } from '../../data/content'
import type { HeroStat } from '../../types/content'
import { Container } from '../layout/Container'
import { Button } from '../ui/Button'
import { SiteHeader } from './SiteHeader'

interface HeroSectionProps {
  stats: HeroStat[]
  purchaseUrl: string
  onGetStarted: () => void
}

export function HeroSection({ stats, purchaseUrl, onGetStarted }: HeroSectionProps) {
  return (
    <>
      <SiteHeader onGetStarted={onGetStarted} />
      <section className="hero-section" id="top">
        <img className="hero-section__background" src={productImages.heroBackground} alt="" aria-hidden="true" />
        <div className="hero-section__overlay" aria-hidden="true" />
        <Container>
          <div className="hero-section__content">
            <div className="hero-section__copy">
              <p className="eyebrow eyebrow--light">A 48 hour printable reset</p>
              <h1>One Weekend Home Declutter & Digital Detox<br />Challenge Kit</h1>
              <p className="hero-section__lede">A quietly designed, printable challenge for clearing your space and stepping back from your screen. One weekend, on paper. No app to download, no account to make.</p>
              <div className="hero-section__actions">
                <Button href={purchaseUrl}>Get the Bundle</Button>
                <a className="hero-section__secondary" href="#pricing">or see all three options <ArrowRight size={15} strokeWidth={1.5} aria-hidden="true" /></a>
              </div>
              <div className="hero-stats" aria-label="What is included">
                {stats.map((stat) => <div className="hero-stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
              </div>
            </div>
            <div className="hero-section__foreground">
              <img src={productImages.heroForeground} alt="Tablet displaying the Life Beyond Screens challenge kit on top of printed pages" loading="eager" />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
