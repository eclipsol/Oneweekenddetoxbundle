import type { TrustItem } from '../../types/content'
import { Container } from '../layout/Container'

interface TrustBarProps {
  items: TrustItem[]
}

export function TrustBar({ items }: TrustBarProps) {
  return <section className="trust-bar" aria-label="Product trust signals"><Container><div className="trust-bar__inner">{items.map((item, index) => <span className="trust-bar__item" key={`${item.label}-${index}`}>{item.value ? <><small>{item.label}</small><strong>{item.value}</strong></> : item.label}</span>)}</div></Container></section>
}
