import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

const heroImages = [
	{ src: "/images/risk-wildfire.jpg", alt: "" },
	{ src: "/images/risk-natcat.jpg", alt: "" },
	{ src: "/images/risk-data.jpg", alt: "" },
	{ src: "/images/risk-industrial.jpg", alt: "" },
];

const risks = [
	{
		title: "Natural Catastrophes",
		text: "Increasing frequency and severity of natural disasters create significant financial exposure.",
		image: "/images/risk-wildfire.jpg",
		className: "home-risk-card--wide",
	},
	{
		title: "Cyber Risk",
		text: "Evolving cyber threats pose new challenges for traditional insurance.",
		image: "/images/hero.jpg",
		className: "",
	},
	{
		title: "Industrial Risks",
		text: "Complex industrial risks require innovative insurance solutions.",
		image: "/images/risk-industrial.jpg",
		className: "",
	},
	{
		title: "Long Term Care",
		text: "Aging populations create new insurance challenges across Europe.",
		image: "/images/risk-longterm.jpg",
		className: "home-risk-card--wide",
	},
];

const challengeColumns = [
	{
		title: "Demand-Side Challenges",
		items: [
			"Affordability (high cost of capital, limited prevention, low volumes)",
			"Fragmented/lack of clear access",
			"Reliance on public support",
		],
	},
	{
		title: "Supply-Side Challenges",
		items: [
			"Limited risk appetite for emerging risks",
			"High cost of capital for large and unconventional risks",
			"Concentrated capacity, insufficient infrastructures facilitating syndication",
		],
	},
	{
		title: "Consequences",
		items: [
			"Lower prevention",
			"Significant losses and slow recovery",
			"Higher government debt, inefficient risk management",
		],
	},
];

const stats = [
	{ value: "€200B", label: "Annual protection gap in Europe" },
	{ value: "2x", label: "Potential market size increase" },
	{ value: "30%", label: "Reduction in capital requirements" },
	{ value: "EU+", label: "Coverage across Europe" },
];

const benefits = [
	{
		title: "For Insurance Carriers",
		items: [
			"Reduced capital requirements through risk sharing",
			"Access to a wider range of risks for portfolio diversification",
			"Enhanced data insights through the data sharing module",
		],
	},
	{
		title: "For Risk Transferors",
		items: [
			"Lower premiums due to reduced cost of capital",
			"Increased access to coverage for previously uninsurable risks",
			"Simplified access to a wider range of insurance providers",
		],
	},
	{
		title: "For European Economy",
		items: [
			"Reduced protection gap, estimated at €200 billion annually",
			"Decreased national and supranational debt burden",
			"Support for large industrial innovative projects",
		],
	},
	{
		title: "For Brokers",
		items: [
			"Enhanced ability to place complex and unconventional risks",
			"Access to a wider range of carriers and capacity",
			"Streamlined processes through technology integration",
		],
	},
];

function CheckList({ items }: { items: string[] }) {
	return (
		<ul className="home-check-list">
			{items.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	);
}

function MiniRiskNode({
	tone = "blue",
	children,
}: {
	tone?: "blue" | "yellow";
	children: React.ReactNode;
}) {
	return <div className={`mini-risk-node mini-risk-node--${tone}`}>{children}</div>;
}

export default function HomePage() {
	return (
		<>
			<section className="home-hero" id="home">
				<div className="home-container home-hero__inner">
					<div className="home-hero__copy">
						<h1>
							Insurance Risk
							<br />
							Syndication of
							<br />
							the Future
						</h1>
						<p>
							EuroDIEM is developing a European platform to industrialize
							syndication of large and unconventional insurance risks,
							decreasing the protection gap and doubling the size of the
							insurance market, combined with a European PPP.
						</p>
						<Link href="/about" className="btn btn--solid">
							Learn More
						</Link>
					</div>

					<div className="home-hero__mosaic" aria-hidden="true">
						{heroImages.map((image) => (
							<div key={image.src} className="home-hero__tile">
								<Image
									src={image.src}
									alt={image.alt}
									fill
									priority
									sizes="(min-width: 960px) 24vw, 50vw"
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="home-section home-gap" id="about">
				<div className="home-container">
					<h2 className="home-section-title">The Growing Protection Gap</h2>
					<p className="home-gap__statement">
						<span className="home-mark home-mark--yellow">Europe</span>{" "}
						faces a significant and growing protection gap across various
						risk categories, with estimated annual uninsured losses of{" "}
						<span className="home-mark home-mark--blue">€200 billion</span>{" "}
						that could be covered by the private market.
					</p>

					<div className="home-risk-grid">
						{risks.map((risk) => (
							<article
								key={risk.title}
								className={`home-risk-card ${risk.className}`}
							>
								<Image
									src={risk.image}
									alt=""
									fill
									sizes="(min-width: 1000px) 45vw, 100vw"
								/>
								<div className="home-risk-card__overlay">
									<h3>{risk.title}</h3>
									<p>{risk.text}</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="home-section home-section--blue">
				<div className="home-container">
					<h2 className="home-blue-title">The Protection Gap Challenge</h2>
					<p className="home-blue-kicker">Which main causes?</p>
					<p className="home-blue-lead">
						Reasons for the protection gap are multiple, involving both
						supply and demand.
					</p>

					<div className="home-challenge-grid">
						{challengeColumns.map((column) => (
							<article key={column.title} className="home-challenge-card">
								<h3>{column.title}</h3>
								<CheckList items={column.items} />
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="home-section home-solution" id="how-it-works">
				<div className="home-container">
					<div className="home-solution__intro">
						<p>The Solution</p>
						<h2>
							Syndicating <span>Supply</span>,
							<br />
							Boosting <span>Demand</span>
						</h2>
						<p>
							Sharing risks via syndication mechanisms (coinsurance or
							securitization) decreases the cost of capital, igniting the
							spark that unlocks risk appetite, lowering premium levels,
							improving affordability, fostering demand.
						</p>
					</div>

					<div className="home-syndication">
						<div className="home-syndication__copy">
							<h3>
								Risk Syndication Made Simple and How to Industrialize it
							</h3>
							<p>
								Rather than finding one carrier matching 100% of the
								capacity, let&rsquo;s find more easily multiple carriers
								to share the capacity thanks to EuroDIEM.
							</p>
							<p>
								Creating a syndication platform will allow undertaking
								smaller and more numerous risk portions, creating a
								wider pool at scale, attracting more carriers/investors
								to access the insurance risk transfer market with a
								lower cost of capital.
							</p>

							<div className="home-icon-row">
								<div>
									<span aria-hidden="true">&#8644;</span>
									<strong>Distributed Risk</strong>
								</div>
								<div>
									<span aria-hidden="true">&#8599;</span>
									<strong>Increased Capacity</strong>
								</div>
								<div>
									<span aria-hidden="true">&#8364;</span>
									<strong>Lower Capital Requirements</strong>
								</div>
							</div>
						</div>

						<div
							className="home-diagram-card"
							aria-label="Syndication comparison"
						>
							<h3>Traditional Approach</h3>
							<div className="home-diagram-row home-diagram-row--top">
								<MiniRiskNode>
									Risk Transferor
									<br />
									100%
								</MiniRiskNode>
								<span aria-hidden="true">→</span>
								<MiniRiskNode>
									Single Carrier
									<br />
									100%
								</MiniRiskNode>
							</div>
							<p className="home-diagram-card__label">EuroDIEM</p>
							<span
								className="home-diagram-card__down"
								aria-hidden="true"
							>
								↓
							</span>
							<h3>EuroDIEM Facilitated Syndication</h3>
							<div className="home-diagram-row home-diagram-row--bottom">
								<MiniRiskNode>
									Risk Transferor
									<br />
									100%
								</MiniRiskNode>
								<div className="home-carrier-grid">
									{[
										["Carrier A", "25%"],
										["Carrier B", "20%"],
										["Carrier C", "15%"],
										["Carrier D", "20%"],
										["Carrier E", "10%"],
										["Carrier F", "10%"],
									].map(([name, pct]) => (
										<MiniRiskNode key={name} tone="yellow">
											{name}
											<br />
											{pct}
										</MiniRiskNode>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="home-section home-participants">
				<div className="home-container home-participants__grid">
					<div className="home-participants__legend">
						<h2>Participant Types</h2>
						<div className="home-participant-type">
							<span
								className="home-dot home-dot--yellow"
								aria-hidden="true"
							/>
							<div>
								<h3>Insurance companies</h3>
								<p>
									Insurance companies already underwriting such risks,
									but also new entrants such as local mutuals and
									bancassurers now able to test these new waters both
									on the B2B and B2B+ market with small exposures (%).
								</p>
							</div>
						</div>
						<div className="home-participant-type">
							<span
								className="home-dot home-dot--blue"
								aria-hidden="true"
							/>
							<div>
								<h3>Risk Transferors</h3>
								<p>
									SMEs, corporates, sponsors, and cedants seeking to
									transfer risk through the EuroDIEM platform.
								</p>
							</div>
						</div>
						<div className="home-participant-type">
							<span
								className="home-dot home-dot--red"
								aria-hidden="true"
							/>
							<div>
								<h3>Other non-Insurance companies</h3>
								<p>
									Other non insurance investors: private equity,
									pension funds, family offices.
								</p>
							</div>
						</div>
					</div>

					<div className="home-participants__diagrams">
						<article>
							<h3>B2B: coinsurance</h3>
							<Image
								src="/images/syndication-traditional.jpg"
								alt=""
								width={1290}
								height={1220}
								sizes="(min-width: 1000px) 26vw, 70vw"
							/>
							<p>
								Matching the customer (SME/corporate) risks with
								insurance carriers risk appetite
							</p>
						</article>
						<article>
							<h3>B2B+: securitization</h3>
							<Image
								src="/images/syndication-eurodiem.jpg"
								alt=""
								width={1290}
								height={1220}
								sizes="(min-width: 1000px) 26vw, 70vw"
							/>
							<p>
								Matching sponsors/cedants risks with investors risk
								appetite (of which (re) insurance carriers)
							</p>
						</article>
						<p className="home-participants__note">
							The B2B market is dedicated to commercial risks (corporate
							and SMEs) and the B2B+ market deals with both commercial and
							bundled securitized retail individual risks
						</p>
					</div>
				</div>
			</section>

			<section className="home-section home-eu">
				<div className="home-container">
					<div className="home-eu__top">
						<h2>
							EuroDIEM operates at EU+EFTA level, bringing significant
							geographical capital diversification and risk mutualization
						</h2>
						<Image
							src="/images/eu-efta.png"
							alt="EU and EFTA member states"
							width={453}
							height={398}
							sizes="(min-width: 900px) 42vw, 90vw"
						/>
					</div>
					<div className="home-stats">
						{stats.map((stat) => (
							<div key={stat.label}>
								<strong>{stat.value}</strong>
								<span>{stat.label}</span>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="home-section home-section--blue home-data">
				<div className="home-container">
					<h2>
						EuroDIEM also combines a data sharing module and Public-Private
					</h2>
					<div className="home-data__grid">
						<article>
							<h3>Data Sharing Module</h3>
							<p>
								Data is an essential enabler in the matchmaking
								capabilities of the platform. It is also a key factor of
								price reduction boosting demand and prevention as data
								collection accelerates.
							</p>
							<CheckList
								items={[
									"Consolidates aggregated and anonymized data",
									"Provides valuable insights for risk assessment and pricing",
									"Enhances market transparency while protecting confidentiality",
									"Data is retrievable at a meaningful granular level by market participants",
								]}
							/>
						</article>
						<article>
							<h3>Public-Private Partnerships</h3>
							<p>
								The primary objective is to increase the size of the
								private insurance market, reducing the burden of
								national and (supra)national debt, while still keeping
								PPPs, but at a higher attachment point than today.
							</p>
							<CheckList
								items={[
									"PPPs comfort the private sector in taking risks",
									"Encourage governments in investing in risk-reducing infrastructures",
									"Combines private, private & public, and public layers on one platform",
								]}
							/>
							<p>
								The proposed schemes are consistent with the December
								2024 ECB/EIOPA joint report proposal, expending though
								to risks beyond nat cat property risks.
							</p>
						</article>
					</div>
				</div>
			</section>

			<section className="home-section home-benefits" id="benefits">
				<div className="home-container">
					<h2>Key Benefits</h2>
					<p>
						EuroDIEM delivers significant advantages to all stakeholders in
						the insurance ecosystem.
					</p>
					<div className="home-benefits__grid">
						{benefits.map((benefit) => (
							<article key={benefit.title}>
								<h3>{benefit.title}</h3>
								<CheckList items={benefit.items} />
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="newsletter" id="newsletter">
				<div className="newsletter__inner">
					<div className="newsletter__copy">
						<h2 className="newsletter__title">Join the EuroDIEM Network</h2>
						<p className="newsletter__lead">
							Stay informed about our progress.
						</p>
						<p className="newsletter__lead">
							Sign up for our newsletter to receive updates.
						</p>
					</div>
					<ContactForm submitLabel="Send" />
				</div>
			</section>
		</>
	);
}
