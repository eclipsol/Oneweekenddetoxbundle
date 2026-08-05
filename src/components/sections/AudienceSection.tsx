import type { AudienceCard, Testimonial } from '../../types/content'
import { Container } from '../layout/Container'

interface AudienceSectionProps {
  audience: AudienceCard[]
  testimonials: Testimonial[]
}

export function AudienceSection({ audience, testimonials }: AudienceSectionProps) {
  return <section className="audience-section"><div className="audience-section__shapes" aria-hidden="true"><span /><span /><span /><span /></div><Container><div className="audience-section__intro"><p className="eyebrow eyebrow--light">Built to make a change that lasts</p><h2>Made for those who<br />want to break free.</h2></div><div className="audience-grid">{audience.map((item) => <article className="audience-card" key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div><div className="audience-section__divider" /><div className="testimonial-section"><h2>And here&apos;s what they say<br />after one weekend.</h2><div className="testimonial-grid">{testimonials.map((item) => <article className="testimonial-card" key={item.author}><span className="testimonial-card__quote" aria-hidden="true">“</span><p>{item.quote}</p><footer><span className={`testimonial-card__avatar testimonial-card__avatar--${item.accent}`} aria-hidden="true">{item.author[0]}</span><strong>{item.author}</strong></footer></article>)}</div></div></Container></section>
}
