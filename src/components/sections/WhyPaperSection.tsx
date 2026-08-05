import type { Benefit } from '../../types/content'
import { Container } from '../layout/Container'

interface WhyPaperSectionProps {
  benefits: Benefit[]
}

export function WhyPaperSection({ benefits }: WhyPaperSectionProps) {
  return <section className="why-paper-section" id="included"><Container><div className="why-paper-section__heading"><p className="eyebrow">Our method succeeds where others don&apos;t</p><h2>Why paper works where<br />screens don&apos;t.</h2><span className="section-rule" aria-hidden="true" /></div><div className="benefit-grid">{benefits.map((benefit) => <article className="benefit-item" key={benefit.index}><span className="benefit-item__index">{benefit.index}</span><h3>{benefit.title}</h3><p>{benefit.body}</p></article>)}</div></Container></section>
}
