import Image from "next/image";
import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";

const risks = [
  {
    title: "Natural Catastrophes",
    text: "Increasing frequency and severity of natural disasters create significant financial exposure.",
    image: "/images/risk-wildfire.jpg",
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
  { value: "2x", label: "Potential market size increase" },
  { value: "30%", label: "Reduction in capital requirements" },
  { value: "EU+", label: "Coverage across Europe" },
];

const participants = [
  {
    title: "Insurance companies",
    text: "Insurance companies already underwriting such risks, but also new entrants such as local mutuals and bancassurers now able to test these new waters both on the B2B and B2B+ market with small exposures (%).",
  },
  {
    title: "Risk Transferors",
    text: "SMEs, corporates, sponsors, and cedants seeking to transfer risk through the EuroDIEM platform.",
  },
  {
    title: "Other non-Insurance companies",
    text: "Other non insurance investors: private equity, pension funds, family offices.",
  },
  {
    title: "B2B: coinsurance",
    text: "Matching the customer (SME/corporate) risks with insurance carriers risk appetite.",
  },
  {
    title: "B2B+: securitization",
    text: "Matching sponsors/cedants risks with investors risk appetite (of which (re) insurance carriers).",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="Insurance Risk Syndication of the Future"
        lead="EuroDIEM is developing a European platform to industrialize syndication of large and unconventional insurance risks, decreasing the protection gap and doubling the size of the insurance market, combined with a European PPP."
        image="/images/hero.jpg"
        imageAlt=""
        actions={[{ href: "/about", label: "Learn More", variant: "solid-light" }]}
      />

      {/* The Growing Protection Gap */}
      <section className="section">
        <div className="container">
          <p className="section__eyebrow">The Growing Protection Gap</p>
          <h2 className="section__title">
            Europe faces a significant and growing protection gap
          </h2>
          <p className="section__lead">
            Across various risk categories, with estimated annual uninsured
            losses of <strong>€200 billion</strong> that could be covered by
            the private market.
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

      {/* The Protection Gap Challenge */}
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
              <h3 className="panel__title">Consequences</h3>
              <ul className="panel__list">
                <li>Lower prevention</li>
                <li>Significant losses and slow recovery</li>
                <li>Higher government debt, inefficient risk management</li>
              </ul>
            </div>
            <div className="panel">
              <h3 className="panel__title">Demand-Side Challenges</h3>
              <ul className="panel__list">
                <li>
                  Affordability (high cost of capital, limited prevention, low
                  volumes)
                </li>
                <li>Fragmented/lack of clear access</li>
                <li>Reliance on public support</li>
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
            Syndicating <em>Supply</em>, Boosting <em>Demand</em>
          </h2>
          <p className="section__lead">
            Sharing risks via syndication mechanisms (coinsurance or
            securitization) decreases the cost of capital, igniting the spark
            that unlocks risk appetite, lowering premium levels, improving
            affordability, fostering demand.
          </p>
        </div>
      </section>

      {/* Risk Syndication Made Simple */}
      <section className="section section--pale">
        <div className="container">
          <p className="section__eyebrow">Risk Syndication</p>
          <h2 className="section__title">
            Risk Syndication Made Simple and How to Industrialize it
          </h2>
          <p className="section__lead">
            Rather than finding one carrier matching 100% of the capacity,
            let&rsquo;s find more easily multiple carriers to share the
            capacity thanks to EuroDIEM. Creating a syndication platform will
            allow undertaking smaller and more numerous risk portions, creating
            a wider pool at scale, attracting more carriers/investors to access
            the insurance risk transfer market with a lower cost of capital.
          </p>

          <div className="icon-trio">
            <div className="icon-trio__item">
              <span className="icon-trio__icon" aria-hidden>
                🔄️
              </span>
              <p className="icon-trio__label">Distributed Risk</p>
            </div>
            <div className="icon-trio__item">
              <span className="icon-trio__icon" aria-hidden>
                📈
              </span>
              <p className="icon-trio__label">Increased Capacity</p>
            </div>
            <div className="icon-trio__item">
              <span className="icon-trio__icon" aria-hidden>
                💰
              </span>
              <p className="icon-trio__label">Lower Capital Requirements</p>
            </div>
          </div>

          <div className="synd">
            <div className="synd__col">
              <h3 className="synd__title">Traditional Approach</h3>
              <div className="synd__diagram">
                <div className="synd__node">
                  Risk Transferor <small>100%</small>
                </div>
                <span className="synd__arrow" aria-hidden>
                  ↓
                </span>
                <div className="synd__node">
                  Single Carrier <small>100%</small>
                </div>
              </div>
            </div>

            <div className="synd__col synd__col--accent">
              <h3 className="synd__title">EuroDIEM Facilitated Syndication</h3>
              <div className="synd__diagram">
                <div className="synd__node">
                  Risk Transferor <small>100%</small>
                </div>
                <span className="synd__arrow" aria-hidden>
                  ↓
                </span>
                <div className="synd__node synd__node--accent">EuroDIEM</div>
                <span className="synd__arrow" aria-hidden>
                  ↓
                </span>
                <div className="synd__split">
                  <div className="synd__node">
                    Carrier A <small>25%</small>
                  </div>
                  <div className="synd__node">
                    Carrier B <small>20%</small>
                  </div>
                  <div className="synd__node">
                    Carrier C <small>15%</small>
                  </div>
                  <div className="synd__node">
                    Carrier D <small>20%</small>
                  </div>
                  <div className="synd__node">
                    Carrier E <small>10%</small>
                  </div>
                  <div className="synd__node">
                    Carrier F <small>10%</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Participant Types */}
      <section className="section">
        <div className="container">
          <p className="section__eyebrow">Participant Types</p>
          <h2 className="section__title">Who takes part on the platform</h2>

          <div className="participants">
            {participants.map((p) => (
              <article key={p.title} className="participants__card">
                <h3 className="participants__title">{p.title}</h3>
                <p className="participants__text">{p.text}</p>
              </article>
            ))}
          </div>

          <p className="participants__caption">
            The B2B market is dedicated to commercial risks (corporate and
            SMEs) and the B2B+ market deals with both commercial and bundled
            securitized retail individual risks.
          </p>
        </div>
      </section>

      {/* EU+EFTA banner */}
      <section className="eu-banner">
        <div className="eu-banner__inner">
          <h2 className="eu-banner__title">
            EuroDIEM operates at EU+EFTA level, bringing significant
            geographical capital diversification and risk mutualization.
          </h2>
          <div className="eu-banner__map">
            <Image
              src="/images/eu-efta.png"
              alt="EU and EFTA member states"
              width={453}
              height={398}
              sizes="(min-width: 820px) 360px, 60vw"
            />
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

      {/* Data Sharing + Public-Private */}
      <section className="section">
        <div className="container">
          <p className="section__eyebrow">Data &amp; Public-Private</p>
          <h2 className="section__title">
            EuroDIEM also combines a data sharing module and Public-Private
          </h2>

          <div className="split split--2">
            <div className="panel">
              <h3 className="panel__title">Data Sharing Module</h3>
              <p style={{ margin: "0 0 16px", color: "var(--color-muted)" }}>
                Data is an essential enabler in the matchmaking capabilities of
                the platform. It is also a key factor of price reduction
                boosting demand and prevention as data collection accelerates.
              </p>
              <ul className="panel__list">
                <li>Consolidates aggregated and anonymized data</li>
                <li>Provides valuable insights for risk assessment and pricing</li>
                <li>
                  Enhances market transparency while protecting confidentiality
                </li>
                <li>
                  Data is retrievable at a meaningful granular level by market
                  participants
                </li>
              </ul>
            </div>
            <div className="panel">
              <h3 className="panel__title">Public-Private Partnerships</h3>
              <p style={{ margin: "0 0 16px", color: "var(--color-muted)" }}>
                The primary objective is to increase the size of the private
                insurance market, reducing the burden of national and
                (supra)national debt, while still keeping PPPs, but at a higher
                attachment point than today.
              </p>
              <ul className="panel__list">
                <li>PPPs comfort the private sector in taking risks</li>
                <li>
                  Encourage governments in investing in risk-reducing
                  infrastructures
                </li>
                <li>
                  Combines private, private &amp; public, and public layers on
                  one platform
                </li>
              </ul>
            </div>
          </div>

          <p className="combo-note">
            The proposed schemes are consistent with the December 2024
            ECB/EIOPA joint report proposal, expending though to risks beyond
            nat cat property risks.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section section--pale">
        <div className="container">
          <p className="section__eyebrow">Key Benefits</p>
          <h2 className="section__title">
            EuroDIEM delivers significant advantages to all stakeholders
          </h2>
          <p className="section__lead">
            EuroDIEM delivers significant advantages to all stakeholders in the
            insurance ecosystem.
          </p>

          <div className="split split--2">
            <div className="panel">
              <h3 className="panel__title">For Insurance Carriers</h3>
              <ul className="panel__list">
                <li>Reduced capital requirements through risk sharing</li>
                <li>Access to a wider range of risks for portfolio diversification</li>
                <li>Enhanced data insights through the data sharing module</li>
              </ul>
            </div>
            <div className="panel">
              <h3 className="panel__title">For European Economy</h3>
              <ul className="panel__list">
                <li>Reduced protection gap, estimated at €200 billion annually</li>
                <li>Decreased national and supranational debt burden</li>
                <li>Support for large industrial innovative projects</li>
              </ul>
            </div>
            <div className="panel">
              <h3 className="panel__title">For Risk Transferors</h3>
              <ul className="panel__list">
                <li>Lower premiums due to reduced cost of capital</li>
                <li>Increased access to coverage for previously uninsurable risks</li>
                <li>Simplified access to a wider range of insurance providers</li>
              </ul>
            </div>
            <div className="panel">
              <h3 className="panel__title">For Brokers</h3>
              <ul className="panel__list">
                <li>Enhanced ability to place complex and unconventional risks</li>
                <li>Access to a wider range of carriers and capacity</li>
                <li>Streamlined processes through technology integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter" id="newsletter">
        <div className="newsletter__inner">
          <h2 className="newsletter__title">Join the EuroDIEM Network</h2>
          <p className="newsletter__lead">
            Stay informed about our progress. Sign up for our newsletter to
            receive updates.
          </p>
          <ContactForm submitLabel="Send" />
        </div>
      </section>
    </>
  );
}
