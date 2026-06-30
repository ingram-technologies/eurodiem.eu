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

export default function HowItWorksPage() {
	return (
		<>
			<section className="page-intro">
				<div className="page-intro__inner">
					<h1 className="page-intro__title">
						How <em>EuroDIEM</em> works
					</h1>
					<p className="page-intro__lead">
						The platform connects risk transferors with insurance carriers
						(B2B) or investors (B2B+) through an innovative pre matchmaking
						process, with brokers playing a central and supportive role.
					</p>
				</div>
			</section>

			{/* Platform Overview */}
			<section className="section">
				<div className="container">
					<p className="section__eyebrow">Platform Overview</p>
					<h2 className="section__title">
						EuroDIEM operates at EU+EFTA level
					</h2>
					<p className="section__lead">
						Bringing significant geographical capital diversification and
						risk mutualization.
					</p>

					<div className="split split--2">
						<div className="panel">
							<h3 className="panel__title">B2B Coinsurance Platform</h3>
							<p style={{ margin: 0, color: "var(--color-muted)" }}>
								Connects SMEs and Corporates (risk transferors) with a
								diversified pool of insurance carriers, enabling more
								efficient risk transfer and coverage.
							</p>
						</div>
						<div className="panel">
							<h3 className="panel__title">
								B2B+: Securitization Platform
							</h3>
							<p style={{ margin: 0, color: "var(--color-muted)" }}>
								Connects sponsors/cedants risks with a diversified pool
								of investors of which (re)insurance carriers, enabling
								more efficient net transfer and coverage.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Risk Tiering */}
			<section className="section section--pale">
				<div className="container">
					<p className="section__eyebrow">Risk Tiering System</p>
					<h2 className="section__title">
						Risk Tiering System for the B2B coinsurance platform
					</h2>
					<p className="section__lead">
						The level of matchmaking will be more or less partial depending
						on the level of complexity and standardization of the risks
						presented.
					</p>

					<div className="tier-list">
						{tiers.map((t) => (
							<article key={t.n} className="tier">
								<span className="tier__num">{t.n}</span>
								<div>
									<h3 className="tier__title">{t.title}</h3>
									<ul className="tier__list">
										{t.items.map((i) => (
											<li key={i}>{i}</li>
										))}
									</ul>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Matchmaking Process */}
			<section className="section">
				<div className="container">
					<p className="section__eyebrow">The Matchmaking Process</p>
					<h2 className="section__title">
						A structured process to match risks with carriers efficiently
					</h2>
					<p className="section__lead">
						Our platform facilitates a structured process to match risks
						with carriers efficiently.
					</p>

					<div className="steps">
						<article className="step">
							<span className="step__num">01</span>
							<h3 className="step__title">Round 1: Initial Matching</h3>
							<ul className="tier__list" style={{ marginTop: 4 }}>
								<li>
									Insurance carriers upload and update their risk
									appetite on the platform
								</li>
								<li>
									Risk transferors upload a standardized description
									of the risk
								</li>
								<li>
									The platform performs initial matching between risks
									and carrier appetites
								</li>
							</ul>
						</article>
						<article className="step">
							<span className="step__num">02</span>
							<h3 className="step__title">Round 2: Syndication</h3>
							<ul className="tier__list" style={{ marginTop: 4 }}>
								<li>
									Pre-selected carriers decide whether to participate
									in the syndication
								</li>
								<li>
									For Tier 1 risks, an algorithm leads to optimal
									subscription
								</li>
								<li>
									For Tier 2 &amp; 3, brokers help refine the
									structure after NDAs are signed
								</li>
							</ul>
						</article>
						<article className="step">
							<span className="step__num">03</span>
							<h3 className="step__title">Processing &amp; Execution</h3>
							<ul className="tier__list" style={{ marginTop: 4 }}>
								<li>
									EuroDIEM manages policy issuance based on the final
									structure
								</li>
								<li>
									Messages related to premium, commission, and claims
									are processed
								</li>
								<li>
									Anonymized, aggregated data is captured for future
									market insights
								</li>
							</ul>
						</article>
					</div>
				</div>
			</section>

			{/* Data + PPP */}
			<section className="section section--pale">
				<div className="container">
					<p className="section__eyebrow">Data &amp; Public-Private</p>
					<h2 className="section__title">
						Data sharing and Public-Private Partnerships
					</h2>

					<div className="split split--2">
						<div className="panel">
							<h3 className="panel__title">Data Sharing Module</h3>
							<p
								style={{
									margin: "0 0 16px",
									color: "var(--color-muted)",
								}}
							>
								Data is an essential enabler in the matchmaking
								capabilities of the platform and an additional factor of
								price reduction boosting demand.
							</p>
							<ul className="panel__list">
								<li>
									Consolidates aggregated and anonymized claims data
								</li>
								<li>
									Data is retrievable at a meaningful granular level
									by market participants
								</li>
								<li>
									Provides valuable insights for risk assessment and
									pricing
								</li>
								<li>
									Enhances market transparency while protecting
									confidentiality
								</li>
							</ul>
						</div>
						<div className="panel">
							<h3 className="panel__title">
								Public-Private Partnerships
							</h3>
							<p
								style={{
									margin: "0 0 16px",
									color: "var(--color-muted)",
								}}
							>
								The primary objective is to increase the size of the
								private insurance market, reducing the burden of
								national and (supra)national debt, while still keeping
								PPPs at a higher attachment point than today.
							</p>
							<ul className="panel__list">
								<li>PPPs comfort the private sector in taking risks</li>
								<li>
									Encourage governments in investing in risk-reducing
									infrastructures
								</li>
								<li>
									Combines private, private &amp; public, and public
									layers on one platform
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="cta-band">
				<div className="container">
					<h2 className="cta-band__title">
						Ready to <em>Learn More</em>?
					</h2>
					<p className="cta-band__lead">
						Discover how EuroDIEM can benefit your organization and the
						wider European insurance market.
					</p>
					<div className="cta-band__actions">
						<Link href="/benefits" className="btn btn--solid-light">
							Explore benefits →
						</Link>
						<Link href="/contact" className="btn btn--ghost-light">
							Contact Us
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
