import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
	title: "Benefits",
	description:
		"EuroDIEM delivers significant advantages to all stakeholders in the insurance ecosystem, from carriers and risk transferors to brokers and the wider European economy.",
	path: "/benefits",
});

const benefitRows = [
	{
		tone: "deep",
		reverse: false,
		title: "Expand Capacity and Reduce Capital Requirements",
		image: "/images/benefits/1.webp",
		alt: "EuroDIEM syndication coverage diagram showing layered capacity",
		lead: "Insurance carriers benefit from EuroDIEM through enhanced risk diversification, reduced capital requirements, and access to new markets.",
		items: [
			"Access to a wider range of risks for portfolio diversification",
			"Reduced capital requirements through risk sharing",
			"Enhanced data insights through the data sharing module",
			"Opportunity (ca. €200 bn premium) to enter new markets and risk categories",
			"Improved risk assessment through collective intelligence",
		],
	},
	{
		tone: "plain",
		reverse: true,
		title: "Lower Premiums and Broader Coverage",
		image: "/images/benefits/2.webp",
		alt: "Planet Earth seen from space",
		lead: "SMEs, corporates, and other risk transferors benefit from more affordable insurance and access to coverage for previously uninsurable risks.",
		items: [
			"Lower premiums primarily due to reduced cost of capital",
			"Increased access to coverage for previously uninsurable risks",
			"Simplified access to a wider range of insurance providers",
			"Resulting expected increase in demand leading to a further expected decrease in premium in due time: higher prevention, better data with the sharing module and lower costs",
		],
	},
	{
		tone: "deep",
		reverse: false,
		title: "Enhanced Placement Capabilities",
		image: "/images/benefits/3.webp",
		alt: "Laptop and phone showing financial trading dashboards",
		lead: "Brokers play a central and supportive role in the EuroDIEM platform, benefiting from enhanced capabilities to serve their clients and a significant development opportunity (ca. €200 bn premium):",
		items: [
			"Enhanced ability to place complex and unconventional risks",
			"Access to a wider range of carriers and capacity",
			"Streamlined processes through technology integration",
			"Value-added services through data insights and analytics",
			"Improved client satisfaction through better risk solutions and lower premium",
		],
	},
	{
		tone: "plain",
		reverse: true,
		title: "Reducing the Protection Gap",
		image: "/images/benefits/4.webp",
		alt: "Golden padlock on a weathered blue surface",
		lead: "EuroDIEM contributes significantly to the European economy by reducing the protection gap and supporting EU priorities.",
		items: [
			"Reduced protection gap, estimated at €200 billion annually",
			"Decreased national and supranational debt burden",
			"Support for large industrial innovative projects",
			"Transformation of savings into investments in European priorities",
			"Enhanced European resilience to catastrophic events",
		],
	},
];

const useCases = [
	{
		title: "Cyber Risk Protection",
		text: "Addressing the growing cyber threat landscape by providing more capacity and expertise for this rapidly evolving risk category.",
	},
	{
		title: "Natural Catastrophe Coverage",
		text: "Enabling more affordable and accessible coverage for natural disasters like floods, earthquakes, and wildfires through efficient risk syndication.",
	},
	{
		title: "Emerging Technology Risks",
		text: "Supporting innovation by providing insurance solutions for new technologies like carbon capture, automative softwares, and other emerging risks.",
	},
];

export default function BenefitsPage() {
	return (
		<>
			{/* Hero */}
			<section className="page-intro">
				<div className="page-intro__inner ben-hero">
					<div className="ben-hero__copy">
						<p className="about-hero__eyebrow">Benefits of</p>
						<h1 className="page-intro__title">EuroDIEM</h1>
						<p className="page-intro__lead">
							EuroDIEM delivers significant advantages to all stakeholders
							in the insurance ecosystem, from carriers and risk
							transferors to brokers and the wider European economy.
						</p>
					</div>
					<figure className="ben-hero__media">
						<Image
							src="/images/benefits/hero.webp"
							alt="Neon sign reading “this must be the place”"
							width={1000}
							height={667}
							priority
							sizes="(min-width: 900px) 44vw, 90vw"
						/>
					</figure>
				</div>
			</section>

			{/* Benefit rows */}
			{benefitRows.map((row) => (
				<section
					key={row.title}
					className={`section${row.tone === "deep" ? " section--deep" : ""}`}
				>
					<div className="container">
						<div
							className={`hiw-row${row.reverse ? " hiw-row--reverse" : ""}`}
						>
							<div className="hiw-row__text">
								<h2 className="ben-title">{row.title}</h2>
								<p className="ben-lead">{row.lead}</p>
								<ul className="ben-check">
									{row.items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</div>
							<figure className="hiw-row__media">
								<Image
									src={row.image}
									alt={row.alt}
									width={1000}
									height={640}
									sizes="(min-width: 860px) 46vw, 90vw"
								/>
							</figure>
						</div>
					</div>
				</section>
			))}

			{/* Use Cases */}
			<section className="section">
				<div className="container">
					<h2 className="hiw-title">Use Cases</h2>
					<p className="hiw-sub">
						Explore how EuroDIEM can address various insurance challenges
						across different sectors.
					</p>

					<div className="about-solution-grid">
						{useCases.map((useCase) => (
							<article
								key={useCase.title}
								className="about-solution-card"
							>
								<h3 className="about-solution-card__title">
									{useCase.title}
								</h3>
								<p className="about-solution-card__text">
									{useCase.text}
								</p>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="cta-band cta-band--brand">
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
						<Link href="/contact" className="btn btn--yellow">
							Contact Us
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
