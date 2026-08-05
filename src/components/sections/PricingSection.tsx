import type { Plan } from '../../types/content'
import { Button } from '../ui/Button'

interface PricingSectionProps {
  plans: Plan[]
  purchaseUrl: string
}

export function PricingSection({ plans, purchaseUrl }: PricingSectionProps) {
  const getPlanPurchaseUrl = (planId: string) => {
    switch (planId) {
      case 'weekend-kit':
        return 'https://pay.hotmart.com/O106959074O'
      case 'life-beyond-screens':
        return 'https://pay.hotmart.com/O106961581X'
      default:
        return purchaseUrl
    }
  }

  return <section className="pricing-section" id="pricing"><div className="pricing-section__media" aria-hidden="true" /><div className="pricing-section__heading"><p className="eyebrow eyebrow--light">Ready to actually see the world again?</p><h2>Choose your challenge.</h2><p>One payment. Yours to keep. Print it out this weekend or the next one you need another reset.</p></div><div className="container"><div className="pricing-grid">{plans.map((plan) => <article className={`pricing-card ${plan.highlighted ? 'pricing-card--highlighted' : ''}`} key={plan.id}><h3>{plan.title}</h3><div className="pricing-card__price">${plan.price}</div><span className="pricing-card__label">One-time payment</span>{plan.promo ? <p className="pricing-card__promo">{plan.promo}</p> : null}<p className="pricing-card__description">{plan.description}</p><Button href={getPlanPurchaseUrl(plan.id)} variant={plan.highlighted ? 'primary' : 'outline'}>{plan.cta}</Button></article>)}</div></div></section>
}
