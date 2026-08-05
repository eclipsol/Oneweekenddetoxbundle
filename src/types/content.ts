export type PlanId = 'weekend-kit' | 'full-bundle' | 'life-beyond-screens'
export type FaqId = 'bundle-difference' | 'print' | 'weekend-kit' | 'ten-day-challenge' | 'creator'
export type TestimonialAccent = 'sage' | 'clay' | 'blue'

export interface HeroStat {
  value: string
  label: string
}

export interface TrustItem {
  label: string
  value?: string
}

export interface AudienceCard {
  title: string
  body: string
}

export interface Testimonial {
  quote: string
  author: string
  accent: TestimonialAccent
}

export interface Benefit {
  index: string
  title: string
  body: string
}

export interface Plan {
  id: PlanId
  title: string
  price: number
  description: string
  cta: string
  highlighted?: boolean
  promo?: string
}

export interface FaqItem {
  id: FaqId
  question: string
  answer: string
}

export interface CouponOffer {
  oldPrice: number
  newPrice: number
  savingsLabel: string
  code: string
  expiresLabel: string
}

export interface LandingPageContent {
  heroStats: HeroStat[]
  trustItems: TrustItem[]
  audience: AudienceCard[]
  testimonials: Testimonial[]
  benefits: Benefit[]
  plans: Plan[]
  faq: FaqItem[]
  coupon: CouponOffer
  purchaseUrl: string
}
