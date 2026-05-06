import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__about">
            <strong>EuroDIEM</strong>
            European Digital Insurance Exchange Market — accelerating and
            industrializing syndication of large and unconventional insurance
            risks.
          </p>
          <p className="site-footer__legal">
            © {new Date().getFullYear()} EuroDIEM. All rights reserved.
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          <Link href="/about">About</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/benefits">Benefits</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
