import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
	title: "About",
	description:
		"EuroDIEM is developing a European platform to industrialize syndication of large and unconventional insurance risks, decreasing the protection gap and doubling the size of the insurance market, combined with a European PPP.",
	path: "/about",
});

const cmuPoints = [
	"Increases financial protection of citizens and businesses",
	"Transforms savings into investments in European priorities — ca. €200 bn annually",
	"Hence supports large industrial innovative projects and SMEs development via both insurance and funding",
	"Decreases national and supra-national debt by increasing private support and structuring public back stops",
	"Represents the insurance sub module of the European securitization platform, a key feature of CMU/SIU",
	"Builds a cross-border European digital infrastructure, within the 28th regime hence granting de facto harmonization, a first to be supervised centrally by ESMA and EIOPA",
];

const solutionCards = [
	{
		title: "Matchmaking Platform",
		text: "A digital infrastructure that connects risk transferors capital efficiently, facilitating risk syndication across Europe.",
	},
	{
		title: "Data Sharing Module",
		text: "Consolidating aggregated and anonymized claims data retrievable at a meaningful granular level by market participants.",
	},
	{
		title: "Public-Private Partnerships",
		text: "Integration with public sector support to provide additional security and capacity for extreme risks.",
	},
];

const archLayers = [
	{
		tone: "orange",
		icon: "🏛️",
		label: "PPP Pillars",
		sub: "Public-Private Partnership framework",
		desc: "Government collaboration and regulatory support",
	},
	{
		tone: "blue",
		icon: "📈",
		label: "Capital Exchange Platform",
		sub: "Investment and capital management",
		desc: "Connecting investors with insurance opportunities",
	},
	{
		tone: "green",
		icon: "🤝",
		label: "Underwriting Syndication",
		sub: "Exchange matchmaking platform",
		desc: "Core risk matching and distribution engine",
		chips: [
			{ code: "B2B", label: "Coinsurance" },
			{ code: "B2B+", label: "Securitization" },
		],
	},
	{
		tone: "red",
		icon: "📊",
		label: "Data Sharing Platform",
		sub: "Analytics and insights foundation",
		desc: "Aggregated market data and risk intelligence",
	},
];

const highlights = [
	{
		icon: "🔗",
		label: "Integrated Ecosystem",
		text: "All layers work together seamlessly",
	},
	{
		icon: "📊",
		label: "Data-Driven Insights",
		text: "Foundation layer provides market intelligence",
	},
	{
		icon: "🚀",
		label: "Scalable Architecture",
		text: "Modular design supports growth",
	},
];

export default function AboutPage() {
	return (
		<>
			{/* Hero */}
			<section className="page-intro">
				<div className="page-intro__inner about-hero">
					<figure className="about-hero__media">
						<Image
							src="/images/about/hero.webp"
							alt="European Union flags outside the European Commission building"
							width={615}
							height={410}
							priority
							sizes="(min-width: 900px) 44vw, 90vw"
						/>
					</figure>
					<div className="about-hero__copy">
						<p className="about-hero__eyebrow">About</p>
						<h1 className="page-intro__title">EuroDIEM</h1>
						<p className="page-intro__lead">
							EuroDIEM is developing a European platform to industrialize
							syndication of large and unconventional insurance risks,
							decreasing the protection gap and doubling the size of the
							insurance market, combined with a European PPP.
						</p>
					</div>
				</div>
			</section>

			{/* Mission & Vision */}
			<section className="section">
				<div className="container">
					<div className="mv2-grid">
						<article className="mv2">
							<h2 className="mv2__title">
								EuroDIEM&rsquo;s{" "}
								<span className="about-underline">Mission</span>
							</h2>
							<p className="mv2__text">
								Our mission is to decrease the protection gap and double
								the size of the insurance market by creating a more
								efficient and accessible platform for risk syndication.
								We aim to transform how insurance risks are shared and
								managed across Europe.
							</p>
						</article>
						<article className="mv2">
							<h2 className="mv2__title">
								EuroDIEM&rsquo;s{" "}
								<span className="about-underline">Vision</span>
							</h2>
							<p className="mv2__text">
								We envision a future where previously uninsurable risks
								become insurable, where the cost of capital for
								insurance is significantly reduced, and where the
								European economy is more resilient to catastrophic
								events and emerging risks.
							</p>
						</article>
					</div>
				</div>
			</section>

			{/* Capital Markets Union */}
			<section className="section section--deep">
				<div className="container about-cmu__grid">
					<div className="about-cmu__copy">
						<h2 className="about-cmu__title">
							A Key Component of the Capital Markets Union
						</h2>
						<p className="about-cmu__lead">
							EuroDIEM is a key component of the EU&rsquo;s Capital
							Markets Union (CMU) and Savings and Investments Union (SIU)
							initiatives. By developing a cross-border digital
							infrastructure, we help increase financial protection and
							European resilience while funding EU priorities.
						</p>
						<ul className="about-check">
							{cmuPoints.map((point) => (
								<li key={point}>{point}</li>
							))}
						</ul>
					</div>
					<figure className="about-cmu__media">
						<Image
							src="/images/about/about.webp"
							alt="Financial market chart overlaid with the European Union stars and euro banknotes"
							width={1000}
							height={655}
							sizes="(min-width: 900px) 40vw, 90vw"
						/>
					</figure>
				</div>
			</section>

			{/* EuroDIEM's Solution */}
			<section className="section">
				<div className="container">
					<h2 className="about-heading">EuroDIEM&rsquo;s Solution</h2>
					<p className="about-heading__lead">
						EuroDIEM is creating a comprehensive platform that addresses
						both supply and demand challenges in the insurance market.
					</p>

					<div className="about-solution-grid">
						{solutionCards.map((card) => (
							<article key={card.title} className="about-solution-card">
								<h3 className="about-solution-card__title">
									{card.title}
								</h3>
								<p className="about-solution-card__text">{card.text}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Platform Architecture */}
			<section className="section section--pale">
				<div className="container">
					<h2 className="about-arch-title">EuroDIEM Platform Architecture</h2>
					<p className="about-arch-sub">
						A comprehensive multi-layer platform for insurance risk
						syndication
					</p>

					<div className="arch-stack">
						{archLayers.map((layer) => (
							<div
								key={layer.label}
								className={`arch-layer arch-layer--${layer.tone}`}
							>
								<span className="arch-layer__icon" aria-hidden>
									{layer.icon}
								</span>
								<div className="arch-layer__text">
									<p className="arch-layer__label">{layer.label}</p>
									<p className="arch-layer__sub">{layer.sub}</p>
									<p className="arch-layer__desc">{layer.desc}</p>
								</div>
								{layer.chips ? (
									<div className="arch-layer__chips">
										{layer.chips.map((chip) => (
											<span key={chip.code} className="arch-chip">
												<strong>{chip.code}</strong>
												<span>{chip.label}</span>
											</span>
										))}
									</div>
								) : null}
							</div>
						))}
					</div>

					<div className="icon-trio">
						{highlights.map((item) => (
							<div key={item.label} className="icon-trio__item">
								<span className="icon-trio__icon" aria-hidden>
									{item.icon}
								</span>
								<p className="icon-trio__label">{item.label}</p>
								<p
									className="about-solution-card__text"
									style={{ maxWidth: "28ch" }}
								>
									{item.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="cta-band cta-band--light">
				<div className="container">
					<h2 className="cta-band__title">
						Join Us in <span className="about-underline">Transforming</span>{" "}
						Insurance
					</h2>
					<p className="cta-band__lead">
						EuroDIEM is at a pivotal moment with an incredible alignment of
						factors making this the perfect time to launch our platform. Be
						part of this transformative journey.
					</p>
					<div className="cta-band__actions">
						<Link href="/how-it-works" className="btn btn--solid">
							Learn how it works →
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
