import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "How it works",
	description:
		"The EuroDIEM platform connects risk transferors with insurance carriers (B2B) or investors (B2B+) through an innovative pre-matchmaking process, with brokers playing a central and supportive role.",
};

const tiers = [
	{
		n: 1,
		title: "Tier 1: Standardized Risks",
		items: [
			"Highly standardized risks with direct platform access",
			"Automated matching and subscription process",
			"Carriers include desired participation range in risk appetite",
		],
	},
	{
		n: 2,
		title: "Tier 2: Semi-Standardized",
		items: [
			"Moderately standardized risks with broker support",
			"Access to data room and risk managers after NDA signing",
			"Brokers help refine policy structure and select leads",
		],
	},
	{
		n: 3,
		title: "Tier 3: Complex Risks",
		items: [
			"Less standardized, more complex risks requiring expertise, however a pre matching eases syndication",
			"Enhanced broker involvement throughout the process",
			"More extended data room and speaking windows",
		],
	},
];

const processSteps = [
	{
		title: "Round 1: Initial Matching",
		image: "/images/how-it-works/set1.webp",
		alt: "Two monitors on a desk showing code and dashboards",
		reverse: false,
		items: [
			"Insurance carriers upload and update their risk appetite on the platform",
			"Risk transferors upload a standardized description of the risk",
			"The platform performs initial matching between risks and carrier appetites",
		],
	},
	{
		title: "Round 2: Syndication",
		image: "/images/how-it-works/set2.webp",
		alt: "Container port with cranes and stacked shipping containers",
		reverse: true,
		items: [
			"Pre-selected carriers decide whether to participate in the syndication",
			"For Tier 1 risks, an algorithm leads to optimal subscription",
			"For Tier 2 & 3, brokers help refine the structure after NDAs are signed",
		],
	},
	{
		title: "Processing & Execution",
		image: "/images/how-it-works/set3.webp",
		alt: "Laptop displaying an analytics dashboard",
		reverse: false,
		items: [
			"EuroDIEM manages policy issuance based on the final structure",
			"Messages related to premium, commission, and claims are processed",
			"Anonymized, aggregated data is captured for future market insights",
		],
	},
];

const dataPpp = [
	{
		title: "Data Sharing Module",
		text: "Data is an essential enabler in the matchmaking capabilities of the platform and an additional factor of price reduction boosting demand.",
		items: [
			"Consolidates aggregated and anonymized claims data",
			"Data is retrievable at a meaningful granular level by market participants",
			"Provides valuable insights for risk assessment and pricing",
			"Enhances market transparency while protecting confidentiality",
		],
	},
	{
		title: "Public-Private Partnerships",
		text: "The primary objective is to increase the size of the private insurance market, reducing the burden of national and (supra)national debt, while still keeping PPPs at a higher attachment point than today.",
		items: [
			"PPPs comfort the private sector in taking risks",
			"Encourage governments in investing in risk-reducing infrastructures",
			"Combines private, private & public, and public layers on one platform",
		],
	},
];

export default function HowItWorksPage() {
	return (
		<>
			{/* Hero */}
			<section className="page-intro">
				<div className="page-intro__inner about-hero">
					<figure className="about-hero__media hiw-hero__media">
						<Image
							src="/images/how-it-works/hero.png"
							alt="Stylized atom representing the EuroDIEM platform"
							width={750}
							height={750}
							priority
							sizes="(min-width: 900px) 40vw, 80vw"
						/>
					</figure>
					<div className="about-hero__copy">
						<p className="about-hero__eyebrow">How</p>
						<h1 className="page-intro__title">EuroDIEM works</h1>
						<p className="page-intro__lead">
							The platform connects risk transferors with insurance
							carriers (B2B) or investors (B2B+) through an innovative pre
							matchmaking process, with brokers playing a central and
							supportive role.
						</p>
					</div>
				</div>
			</section>

			{/* Platform Overview */}
			<section className="section">
				<div className="container">
					<h2 className="hiw-title">Platform Overview</h2>
					<p className="hiw-sub">
						EuroDIEM operates at EU+EFTA level, bringing significant
						geographical capital diversification and risk mutualization.
					</p>

					<div className="hiw-duo">
						<article>
							<h3 className="hiw-duo__title">B2B Coinsurance Platform</h3>
							<p className="hiw-duo__text">
								Connects SMEs and Corporates (risk transferors) with a
								diversified pool of insurance carriers, enabling more
								efficient risk transfer and coverage.
							</p>
						</article>
						<article>
							<h3 className="hiw-duo__title">
								B2B+: Securitization Platform
							</h3>
							<p className="hiw-duo__text">
								Connects sponsors/cedants risks with a diversified pool
								of investors of which (re)insurance carriers, enabling
								more efficient net transfer and coverage.
							</p>
						</article>
					</div>
				</div>
			</section>

			{/* Risk Tiering */}
			<section className="section section--deep">
				<div className="container">
					<h2 className="hiw-title hiw-title--light">
						Risk Tiering System for the B2B coinsurance platform
					</h2>
					<p className="hiw-sub hiw-sub--light">
						The level of matchmaking will be more or less partial depending
						on the level of complexity and standardization of the risks
						presented.
					</p>

					<div className="hiw-tiers">
						{tiers.map((tier) => (
							<article key={tier.n}>
								<div className="hiw-tier__num">{tier.n}</div>
								<h3 className="hiw-tier__title">{tier.title}</h3>
								<ul className="hiw-tier__list">
									{tier.items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Matchmaking Process */}
			<section className="section">
				<div className="container">
					<h2 className="hiw-title">The Matchmaking Process</h2>
					<p className="hiw-sub">
						Our platform facilitates a structured process to match risks
						with carriers efficiently.
					</p>

					<div className="hiw-process">
						{processSteps.map((step) => (
							<div
								key={step.title}
								className={`hiw-row${step.reverse ? " hiw-row--reverse" : ""}`}
							>
								<div className="hiw-row__text">
									<h3 className="hiw-row__title">{step.title}</h3>
									<ul className="hiw-row__list">
										{step.items.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</div>
								<figure className="hiw-row__media">
									<Image
										src={step.image}
										alt={step.alt}
										width={1000}
										height={667}
										sizes="(min-width: 860px) 46vw, 90vw"
									/>
								</figure>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Data + PPP */}
			<section className="section section--deep">
				<div className="container">
					<div className="hiw-cols">
						{dataPpp.map((col) => (
							<article key={col.title}>
								<h3 className="hiw-col__title">{col.title}</h3>
								<p className="hiw-col__text">{col.text}</p>
								<ul className="about-check">
									{col.items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="cta-band cta-band--light">
				<div className="container">
					<h2 className="cta-band__title">
						Ready to <span className="about-underline">Learn More</span> ?
					</h2>
					<p className="cta-band__lead">
						Discover how EuroDIEM can benefit your organization and the
						wider European insurance market.
					</p>
					<div className="cta-band__actions">
						<Link href="/benefits" className="btn btn--solid">
							Explore benefits →
						</Link>
						<Link href="/contact" className="btn">
							Contact Us
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
