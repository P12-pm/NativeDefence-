import { ArrowRight } from 'lucide-react'

interface TextRollButtonProps {
  text: string
  href?: string
  variant?: 'primary' | 'dark'
  size?: 'sm' | 'md'
  className?: string
}

export default function TextRollButton({ text, href = '#', variant = 'primary', size = 'md', className = '' }: TextRollButtonProps) {
  const isPrimary = variant === 'primary'

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const span = e.currentTarget.querySelector('.roll-text') as HTMLElement
    const arrow = e.currentTarget.querySelector('.roll-arrow') as HTMLElement
    if (span) span.style.transform = 'translateY(-50%)'
    if (arrow) arrow.style.transform = 'rotate(-45deg)'
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const span = e.currentTarget.querySelector('.roll-text') as HTMLElement
    const arrow = e.currentTarget.querySelector('.roll-arrow') as HTMLElement
    if (span) span.style.transform = 'translateY(0)'
    if (arrow) arrow.style.transform = 'rotate(0deg)'
  }

  const pl = size === 'sm' ? '20px' : '24px'
  const iconSize = size === 'sm' ? 28 : 32
  const arrowSize = size === 'sm' ? 12 : 14

  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 cursor-pointer ${className}`}
      style={{
        background: isPrimary
          ? 'linear-gradient(135deg, #0062cc 0%, #0096ff 100%)'
          : 'linear-gradient(135deg, #0a1a3a 0%, #0d2050 100%)',
        borderRadius: '50px',
        paddingLeft: pl,
        paddingRight: '8px',
        paddingTop: '8px',
        paddingBottom: '8px',
        border: isPrimary ? 'none' : '1px solid rgba(0, 150, 255, 0.2)',
        boxShadow: isPrimary ? '0 4px 20px rgba(0, 100, 255, 0.3)' : '0 2px 8px rgba(0,0,0,0.3)',
        width: 'fit-content',
        transition: 'box-shadow 0.3s ease',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden flex flex-col" style={{ height: '20px' }}>
        <span
          className="roll-text font-medium whitespace-nowrap"
          style={{
            fontSize: size === 'sm' ? '13px' : '14px',
            color: 'white',
            display: 'block',
            transition: 'transform 500ms cubic-bezier(0.25,0.1,0.25,1)',
          }}
        >
          {text}
        </span>
        <span
          className="font-medium whitespace-nowrap"
          style={{
            fontSize: size === 'sm' ? '13px' : '14px',
            color: 'white',
          }}
        >
          {text}
        </span>
      </div>
      <div
        className="roll-arrow flex items-center justify-center flex-shrink-0"
        style={{
          width: `${iconSize}px`,
          height: `${iconSize}px`,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.2)',
          transition: 'transform 500ms cubic-bezier(0.25,0.1,0.25,1)',
        }}
      >
        <ArrowRight size={arrowSize} color="white" />
      </div>
    </a>
  )
}
