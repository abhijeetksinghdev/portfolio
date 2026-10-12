export default function PortfolioBackground() {
  return (
    <div aria-hidden="true" className="portfolio-background pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="portfolio-background__base absolute inset-0" />
      <div className="portfolio-background__grid absolute inset-0" />
      <div className="portfolio-background__scan absolute" />
      <div className="portfolio-background__ring absolute" />
      <div className="portfolio-background__vignette absolute inset-0" />
    </div>
  );
}
