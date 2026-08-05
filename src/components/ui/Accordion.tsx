import { Minus, Plus } from 'lucide-react'
import type { FaqId, FaqItem } from '../../types/content'

interface AccordionProps {
  items: FaqItem[]
  openId: FaqId
  onToggle: (id: FaqId) => void
}

export function Accordion({ items, openId, onToggle }: AccordionProps) {
  return <div className="accordion">{items.map((item) => { const isOpen = item.id === openId; const panelId = `faq-panel-${item.id}`; return <div className={`accordion__item ${isOpen ? 'accordion__item--open' : ''}`} key={item.id}><button className="accordion__trigger" type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => onToggle(item.id)}><span>{item.question}</span>{isOpen ? <Minus size={18} strokeWidth={1.5} aria-hidden="true" /> : <Plus size={18} strokeWidth={1.5} aria-hidden="true" />}</button><div className="accordion__panel" id={panelId} hidden={!isOpen}><p>{item.answer}</p></div></div> })}</div>
}
