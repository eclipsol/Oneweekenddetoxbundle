import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'text'
  className?: string
  type?: 'button' | 'submit'
}

export function Button({ children, href, onClick, variant = 'primary', className = '', type = 'button' }: ButtonProps) {
  const classes = `button button--${variant} ${className}`.trim()
  const content = <><span>{children}</span><span className="button__arrow" aria-hidden="true">→</span></>

  if (href) {
    return <a className={classes} href={href} onClick={onClick}>{content}</a>
  }

  return <button className={classes} type={type} onClick={onClick}>{content}</button>
}
