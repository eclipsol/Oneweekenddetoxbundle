import { Button } from '../ui/Button'

interface FinalCtaSectionProps {
  purchaseUrl: string
}

export function FinalCtaSection({ purchaseUrl }: FinalCtaSectionProps) {
  return <section className="final-cta-section"><div className="container"><p className="eyebrow">This weekend, then</p><h2>One weekend. One printed stack. A house<br />and a head that feel like yours again.</h2><p>Start with the Bundle at $20, the way the program was designed to be used. The Weekend Kit and The Life Beyond Screens Challenge, together. Use code 5OFFBUNDLE before August 15 and pay $15. Then print it out and begin.</p><Button href={purchaseUrl}>Get the Bundle — $20</Button><div className="final-cta-section__reassurance"><span>Secure checkout</span><i aria-hidden="true">·</i><span>Instant download</span><i aria-hidden="true">·</i><span>Print &amp; reuse</span></div></div></section>
}
