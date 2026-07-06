"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/how-it-works", label: "How it works" },
	{ href: "/benefits", label: "Benefits" },
	{ href: "/news", label: "News" },
];

export function SiteHeader() {
	const pathname = usePathname();

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
					{navLinks.map((link) => {
						const isActive =
							link.href === "/"
								? pathname === "/"
								: pathname.startsWith(link.href);

						return (
							<Link
								key={link.href}
								href={link.href}
								className={
									isActive ? "site-header__link--active" : undefined
								}
								aria-current={isActive ? "page" : undefined}
							>
								{link.label}
							</Link>
						);
					})}
				</nav>
				<Link href="/contact" className="site-header__cta">
					Contact
				</Link>
			</div>
		</header>
	);
}
