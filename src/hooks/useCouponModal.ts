import { useEffect, useRef, useState } from 'react'

interface UseCouponModalOptions {
  initialOpen?: boolean
}

export function useCouponModal({ initialOpen = true }: UseCouponModalOptions = {}) {
  const [isOpen, setIsOpen] = useState(initialOpen)
  const lastActiveElement = useRef<HTMLElement | null>(null)

  const open = () => {
    lastActiveElement.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
    window.requestAnimationFrame(() => lastActiveElement.current?.focus())
  }

  useEffect(() => {
    if (initialOpen) window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [initialOpen])

  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') close() }
    document.addEventListener('keydown', onKeyDown)
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', onKeyDown) }
  }, [isOpen])

  return { isOpen, open, close }
}
