import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";

const risks = [
  {
    title: "Natural Catastrophes",
    text: "Increasing frequency and severity of natural disasters create significant financial exposure.",
    image: "/images/risk-natcat.jpg",
  },
  {
    title: "Industrial Risks",
    text: "Complex industrial risks require innovative insurance solutions.",
    image: "/images/risk-industrial.jpg",
  },
  {
    title: "Cyber Risk",
    text: "Evolving cyber threats pose new challenges for traditional insurance.",
    image: "/images/risk-cyber.jpg",
  },
  {
    title: "Long Term Care",
    text: "Aging populations create new insurance challenges across Europe.",
    image: "/images/risk-longterm.jpg",
  },
];

const stats = [
  { value: "€200B", label: "Annual protection gap in Europe" },
  { value: "2×", label: "Potential market size increase" },
  { value: "30%", label: "Reduction in capital requirements" },
  { value: "EU+EFTA", label: "Coverage across Europe" },
];

const carrierBenefits = [
  "Reduced capital requirements through risk sharing",
  "Access to a wider range of risks for portfolio diversification",
  "Enhanced data insights through the data sharing module",
];
const economyBenefits = [
  "Reduced protection gap, estimated at €200 billion annually",
  "Decreased national and supranational debt burden",
  "Support for large industrial innovative projects",
];
const transferorBenefits = [
  "Lower premiums due to reduced cost of capital",
  "Increased access to coverage for previously uninsurable risks",
  "Simplified access to a wider range of insurance providers",
];
const brokerBenefits = [
  "Enhanced ability to place complex and unconventional risks",
  "Access to a wider range of carriers and capacity",
  "Streamlined processes through technology integration",
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="European Digital Insurance Exchange Market"
        title="Insurance Risk Syndication of the Future"
        lead="EuroDIEM is developing a European platform to industrialize syndication of large and unconventional insurance risks, decreasing the protection gap and doubling the size of the insurance market, combined with a European PPP."
        image="/images/hero.jpg"
        imageAlt="EuroDIEM platform — European insurance risk syndication"
        actions={[
          { href: "/how-it-works", label: "Learn more", variant: "solid-light" },
          { href: "/contact", label: "Get in touch", variant: "ghost-light" },
        ]}
      />

      {/* The Growing Protection Gap */}
      <section className="section">
        <div className="container">
          <p className="section__eyebrow">The Growing Protection Gap</p>
          <h2 className="section__title">
            Europe faces a <em>€200 billion</em> annual protection gap
          </h2>
          <p className="section__lead">
            Across natural catastrophes, industrial risks, cyber, and long-term
            care — uninsured losses that the private market could cover today
            remain stranded.
          </p>

          <div className="risk-grid">
            {risks.map((r) => (
              <article key={r.title} className="risk-card">
                <div className="risk-card__media">
                  <Image
                    src={r.image}
                    alt=""
                    width={640}
                    height={427}
                    sizes="(min-width: 1024px) 25vw, (min-width: 720px) 50vw, 100vw"
                  />
                </div>
                <div className="risk-card__body">
                  <h3 className="risk-card__title">{r.title}</h3>
                  <p className="risk-card__text">{r.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Causes panel */}
      <section className="section section--pale">
        <div className="container">
          <p className="section__eyebrow">The Protection Gap Challenge</p>
          <h2 className="section__title">Which main causes?</h2>
          <p className="section__lead">
            Reasons for the protection gap are multiple, involving both supply
            and demand.
          </p>

          <div className="split split--3">
            <div className="panel">
              <h3 className="panel__title">Supply-Side Challenges</h3>
              <ul className="panel__list">
                <li>Limited risk appetite for emerging risks</li>
                <li>High cost of capital for large and unconventional risks</li>
                <li>
                  Concentrated capacity, insufficient infrastructures
                  facilitating syndication
                </li>
              </ul>
            </div>
            <div className="panel">
              <h3 className="panel__title">Demand-Side Challenges</h3>
              <ul className="panel__list">
                <li>
                  Affordability (high cost of capital, limited prevention, low
                  volumes)
                </li>
                <li>Fragmented and unclear access</li>
                <li>Reliance on public support</li>
              </ul>
            </div>
            <div className="panel">
              <h3 className="panel__title">Consequences</h3>
              <ul className="panel__list">
                <li>Lower prevention</li>
                <li>Significant losses and slow recovery</li>
                <li>Higher government debt and inefficient risk management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section">
        <div className="container">
          <p className="section__eyebrow">The Solution</p>
          <h2 className="section__title">
            Syndicating <em>supply</em>, boosting <em>demand</em>
          </h2>
          <p className="section__lead">
            Sharing risks via syndication mechanisms — coinsurance or
            securitization — decreases the cost of capital, ignites the spark
            that unlocks risk appetite, lowers premium levels, and improves
            affordability.
          </p>

          <div className="steps">
            <article className="step">
              <span className="step__num">01</span>
              <h3 className="step__title">Distributed Risk</h3>
              <p className="step__text">
                Rather than finding one carrier matching 100% of the capacity,
                EuroDIEM lets multiple carriers share the capacity in smaller,
                more manageable portions.
              </p>
            </article>
            <article className="step">
              <span className="step__num">02</span>
              <h3 className="step__title">Increased Capacity</h3>
              <p className="step__text">
                A wider pool at scale attracts more carriers and investors to
                access the insurance risk transfer market with a lower cost of
                capital.
              </p>
            </article>
            <article className="step">
              <span className="step__num">03</span>
              <h3 className="step__title">Lower Capital Requirements</h3>
              <p className="step__text">
                Coinsurance for B2B and securitization for B2B+ unlock new
                entrants — local mutuals, bancassurers, pension funds, family
                offices — at small, calibrated exposures.
              </p>
            </article>
          </div>

          <div className="section__cta">
            <Link href="/how-it-works" className="btn btn--solid">
              See how it works
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container">
          <div className="stats__grid">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stats__value">{s.value}</div>
                <div className="stats__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key benefits preview */}
      <section className="section section--pale">
        <div className="container">
          <p className="section__eyebrow">Key Benefits</p>
          <h2 className="section__title">
            Advantages for <em>every</em> stakeholder
          </h2>
          <p className="section__lead">
            EuroDIEM delivers significant advantages across the insurance
            ecosystem.
          </p>

          <div className="split split--2">
            <div className="panel">
              <h3 className="panel__title">For Insurance Carriers</h3>
              <ul className="panel__list">
                {carrierBenefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="panel">
              <h3 className="panel__title">For European Economy</h3>
              <ul className="panel__list">
                {economyBenefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="panel">
              <h3 className="panel__title">For Risk Transferors</h3>
              <ul className="panel__list">
                {transferorBenefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="panel">
              <h3 className="panel__title">For Brokers</h3>
              <ul className="panel__list">
                {brokerBenefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="section__cta">
            <Link href="/benefits" className="btn">
              Explore all benefits
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2 className="cta-band__title">
            Join the <em>EuroDIEM</em> network
          </h2>
          <p className="cta-band__lead">
            Stay informed about our progress. Sign up for updates, or reach out
            if you would like to be part of the conversation.
          </p>
          <div className="cta-band__actions">
            <Link href="/contact" className="btn btn--solid-light">
              Get in touch
            </Link>
            <Link href="/about" className="btn btn--ghost-light">
              Learn about EuroDIEM
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
