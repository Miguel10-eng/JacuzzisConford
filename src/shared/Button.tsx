import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren, ReactElement } from 'react'

type Variant = 'primary' | 'secondary'

type CommonProps = {
  variant?: Variant
  className?: string
}

type AnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & {
    href: string
  }

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
    href?: undefined
  }

export function Button(props: PropsWithChildren<AnchorProps>): ReactElement
export function Button(props: PropsWithChildren<ButtonProps>): ReactElement
export function Button(props: PropsWithChildren<AnchorProps | ButtonProps>) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70'

  const variants: Record<Variant, string> = {
    primary:
      'bg-gradient-to-b from-sky-400/95 to-blue-500/95 text-white shadow-[0_18px_45px_rgba(0,123,255,0.25)] hover:shadow-[0_22px_70px_rgba(25,181,254,0.35)] hover:brightness-110 active:scale-[0.98]',
    secondary:
      'border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--app-fg)] shadow-[0_0_0_1px_rgba(0,0,0,0.04)_inset] backdrop-blur hover:bg-[var(--glass-bg-hover)] hover:shadow-[0_18px_55px_rgba(0,123,255,0.10)] active:scale-[0.99]',
  }

  const glow =
    'relative overflow-hidden before:absolute before:inset-0 before:opacity-0 before:transition before:duration-500 before:bg-[radial-gradient(circle_at_30%_20%,rgba(25,181,254,0.35),transparent_55%)] group-hover:before:opacity-100'

  const cls = `${base} ${variants[props.variant ?? 'primary']} ${glow} ${props.className ?? ''}`

  if ('href' in props && typeof props.href === 'string') {
    const anchorProps = props as PropsWithChildren<AnchorProps>
    const { children, className: _className, variant: _variant, ...rest } = anchorProps
    return (
      <a className={cls} {...rest}>
        {children}
      </a>
    )
  }

  const buttonProps = props as PropsWithChildren<ButtonProps>
  const { children, className: _className, variant: _variant, ...rest } = buttonProps
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  )
}
