import { useState } from 'react'
import type { FaqId, FaqItem } from '../../types/content'
import { Container } from '../layout/Container'
import { Accordion } from '../ui/Accordion'

interface FaqSectionProps {
  items: FaqItem[]
}

export function FaqSection({ items }: FaqSectionProps) {
  const [openId, setOpenId] = useState<FaqId>('bundle-difference')
  return <section className="faq-section" id="faq"><Container><div className="faq-section__heading"><p className="eyebrow eyebrow--light">Before you buy</p><h2>Small answers, before you invest in your peace of mind.</h2></div><Accordion items={items} openId={openId} onToggle={setOpenId} /></Container></section>
}
