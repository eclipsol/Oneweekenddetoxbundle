import { useCouponModal } from './hooks/useCouponModal'
import { AudienceSection } from './components/sections/AudienceSection'
import { FaqSection } from './components/sections/FaqSection'
import { FinalCtaSection } from './components/sections/FinalCtaSection'
import { Footer } from './components/sections/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { PricingSection } from './components/sections/PricingSection'
import { PrintCalloutSection } from './components/sections/PrintCalloutSection'
import { SundayFeelingSection } from './components/sections/SundayFeelingSection'
import { TrustBar } from './components/sections/TrustBar'
import { WhyPaperSection } from './components/sections/WhyPaperSection'
import { CouponModal } from './components/overlays/CouponModal'
import { landingPageContent } from './data/content'
import './styles/tokens.css'
import './styles/globals.css'
import './styles/sections.css'

export interface AppProps {
  purchaseUrl?: string
  initialCouponOpen?: boolean
}

function App({ purchaseUrl = landingPageContent.purchaseUrl, initialCouponOpen = true }: AppProps) {
  const couponModal = useCouponModal({ initialOpen: initialCouponOpen })
  return <><div className="app-shell" aria-hidden={couponModal.isOpen}><HeroSection stats={landingPageContent.heroStats} purchaseUrl={purchaseUrl} onGetStarted={couponModal.open} /><main><TrustBar items={landingPageContent.trustItems} /><SundayFeelingSection /><AudienceSection audience={landingPageContent.audience} testimonials={landingPageContent.testimonials} /><WhyPaperSection benefits={landingPageContent.benefits} /><div className="section-visual-sequence"><PrintCalloutSection /><PricingSection plans={landingPageContent.plans} purchaseUrl={purchaseUrl} /></div><FaqSection items={landingPageContent.faq} /><FinalCtaSection purchaseUrl={purchaseUrl} /></main><Footer /></div><CouponModal open={couponModal.isOpen} offer={landingPageContent.coupon} onClose={couponModal.close} /></>
}

export default App
