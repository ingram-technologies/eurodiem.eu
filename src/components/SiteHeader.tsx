"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/how-it-works", label: "How it works" },
	{ href: "/benefits", label: "Benefits" },
	{ href: "/news", label: "News" },
];

function isActivePath(href: string, pathname: string) {
	return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	// Close the mobile menu whenever the route changes.
	useEffect(() => {
		setOpen(false);
	}, [pathname]);

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
						const isActive = isActivePath(link.href, pathname);
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
				<button
					type="button"
					className="site-header__burger"
					aria-label={open ? "Close menu" : "Open menu"}
					aria-expanded={open}
					aria-controls="site-mobile-nav"
					onClick={() => setOpen((value) => !value)}
				>
					<span />
					<span />
					<span />
				</button>
			</div>

			{open ? (
				<nav
					id="site-mobile-nav"
					className="site-header__mobile"
					aria-label="Mobile"
				>
					{navLinks.map((link) => {
						const isActive = isActivePath(link.href, pathname);
						return (
							<Link
								key={link.href}
								href={link.href}
								className={
									isActive ? "site-header__link--active" : undefined
								}
								aria-current={isActive ? "page" : undefined}
								onClick={() => setOpen(false)}
							>
								{link.label}
							</Link>
						);
					})}
					<Link
						href="/contact"
						className="site-header__mobile-cta"
						onClick={() => setOpen(false)}
					>
						Contact
					</Link>
				</nav>
			) : null}
		</header>
	);
}
