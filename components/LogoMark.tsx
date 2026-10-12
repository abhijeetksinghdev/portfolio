export default function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path d="M4 4h12M4 4v12M36 36H24M36 36V24" stroke="rgb(var(--c-accent-400))" strokeWidth="2" />
      <path d="m11 29 9-19 9 19M14.5 22h11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" strokeLinejoin="miter" />
      <circle cx="11" cy="29" r="2" fill="rgb(var(--c-teal-400))" />
      <circle cx="29" cy="29" r="2" fill="rgb(var(--c-accent-400))" />
    </svg>
  );
}
