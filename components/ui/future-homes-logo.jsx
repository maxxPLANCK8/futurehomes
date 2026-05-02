export function FutureHomesLogo({ className = '', stacked = false }) {
  return (
    <div className={`future-homes-logo ${stacked ? 'is-stacked' : ''} ${className}`.trim()}>
      <svg viewBox="0 0 76 76" aria-hidden="true" className="future-homes-logo-mark">
        <rect width="76" height="76" fill="#0B1F3A" />
        <path
          d="M22 46V27.5L38 17L54 27.5V46"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="3.6"
          strokeLinejoin="miter"
          strokeLinecap="square"
        />
        <path
          d="M29 45V32L38 26L47 32V45H29Z"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="3.6"
          strokeLinejoin="miter"
          strokeLinecap="square"
        />
        <path
          d="M21 25.5L38 14L57 25.5"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="3.6"
          strokeLinejoin="miter"
          strokeLinecap="square"
        />
        <path d="M18 33V47" fill="none" stroke="#C9A84C" strokeWidth="3.2" strokeLinecap="square" />
        <path d="M58 30V46" fill="none" stroke="#C9A84C" strokeWidth="3.2" strokeLinecap="square" />
      </svg>
      <div className="future-homes-logo-type">
        <span className="future-homes-logo-wordmark">FUTURE</span>
        <span className="future-homes-logo-wordmark">HOMES</span>
        <span className="future-homes-logo-subline">PROPERTIES LTD</span>
      </div>
    </div>
  )
}
