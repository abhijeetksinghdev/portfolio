export default function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="logoGrad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6B7BFF" />
          <stop offset="0.55" stopColor="#8B6BF5" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      <path
        d="M20 3 35 11.5v17L20 37 5 28.5v-17L20 3Z"
        stroke="url(#logoGrad)"
        strokeWidth="1.6"
        fill="none"
      />
      <path
        d="M13 27 20.5 12 28 27"
        stroke="url(#logoGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M15.8 22 25.2 22"
        stroke="url(#logoGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="13" cy="27" r="1.6" fill="#22D3EE" />
      <circle cx="28" cy="27" r="1.6" fill="#6B7BFF" />
    </svg>
  );
}
