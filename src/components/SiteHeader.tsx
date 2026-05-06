import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/benefits", label: "Benefits" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="EuroDIEM">
          <Image
            src="/images/logo.png"
            alt="EuroDIEM"
            width={886}
            height={188}
            className="site-header__logo"
            priority
          />
        </Link>
        <nav className="site-header__nav" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="site-header__cta">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
