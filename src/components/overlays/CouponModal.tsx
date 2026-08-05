import { Sun, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { CouponOffer } from '../../types/content'
import { Button } from '../ui/Button'

interface CouponModalProps {
  open: boolean
  offer: CouponOffer
  onClose: () => void
}

export function CouponModal({ open, offer, onClose }: CouponModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open || !dialogRef.current) return
    dialogRef.current.focus()
    const dialog = dialogRef.current
    const onTab = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>('button, a, [tabindex]:not([tabindex="-1"])'))
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onTab)
    return () => document.removeEventListener('keydown', onTab)
  }, [open])

  if (!open) return null

  return <div className="coupon-modal" role="presentation"><button className="coupon-modal__scrim" type="button" aria-label="Close coupon offer" onClick={onClose} /><div className="coupon-modal__dialog" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="coupon-modal-title" tabIndex={-1}><button className="coupon-modal__close" type="button" aria-label="Close coupon offer" onClick={onClose}><X size={18} strokeWidth={1.6} aria-hidden="true" /></button><Sun className="coupon-modal__sun" size={36} strokeWidth={1.2} aria-hidden="true" /><p className="eyebrow">Before you go</p><h2 id="coupon-modal-title">Begin your reset for $5 less.</h2><p>The Full Bundle is the way this was designed to be used — the weekend that clears your space, and the ten days after that make it stick. Take $5 off while this offer lasts.</p><div className="coupon-modal__price"><s>${offer.oldPrice}</s><span aria-hidden="true">→</span><strong>${offer.newPrice}</strong><b>{offer.savingsLabel}</b></div><Button href="#pricing" onClick={onClose}>Claim the Bundle</Button><small>Code <strong>{offer.code}</strong> · {offer.expiresLabel}</small><button className="coupon-modal__continue" type="button" onClick={onClose}>Continue without the discount</button></div></div>
}
