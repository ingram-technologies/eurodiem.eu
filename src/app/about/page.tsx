import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "EuroDIEM is developing a European platform to industrialize syndication of large and unconventional insurance risks, decreasing the protection gap and doubling the size of the insurance market, combined with a European PPP.",
};

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

export default function AboutPage() {
  return (
    <>
      <section className="page-intro">
        <div className="page-intro__inner">
          <h1 className="page-intro__title">
            About <em>EuroDIEM</em>
          </h1>
          <p className="page-intro__lead">
            EuroDIEM is developing a European platform to industrialize
            syndication of large and unconventional insurance risks, decreasing
            the protection gap and doubling the size of the insurance market,
            combined with a European PPP.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="mv-grid">
            <article className="mv-card">
              <p className="mv-card__eyebrow">EuroDIEM&rsquo;s Mission</p>
              <h2 className="mv-card__title">Our Mission</h2>
              <p className="mv-card__text">
                Our mission is to decrease the protection gap and double the
                size of the insurance market by creating a more efficient and
                accessible platform for risk syndication. We aim to transform
                how insurance risks are shared and managed across Europe.
              </p>
            </article>
            <article className="mv-card">
              <p className="mv-card__eyebrow">EuroDIEM&rsquo;s Vision</p>
              <h2 className="mv-card__title">Our Vision</h2>
              <p className="mv-card__text">
                We envision a future where previously uninsurable risks become
                insurable, where the cost of capital for insurance is
                significantly reduced, and where the European economy is more
                resilient to catastrophic events and emerging risks.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Capital Markets Union */}
      <section className="section section--pale">
        <div className="container">
          <p className="section__eyebrow">Capital Markets Union</p>
          <h2 className="section__title">
            A Key Component of the Capital Markets Union
          </h2>
          <p className="section__lead">
            EuroDIEM is a key component of the EU&rsquo;s Capital Markets Union
            (CMU) and Savings and Investments Union (SIU) initiatives. By
            developing a cross-border digital infrastructure, we help increase
            financial protection and European resilience while funding EU
            priorities.
          </p>

          <div className="benefit-block" style={{ marginTop: 56 }}>
            <div>
              <h3 className="benefit-block__title">CMU / SIU alignment</h3>
              <p className="benefit-block__lead">
                Built within the 28th regime, granting <em>de facto</em>{" "}
                harmonization, supervised centrally by ESMA and EIOPA.
              </p>
            </div>
            <ul className="benefit-block__list">
              {cmuPoints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EuroDIEM's Solution */}
      <section className="section">
        <div className="container">
          <p className="section__eyebrow">EuroDIEM&rsquo;s Solution</p>
          <h2 className="section__title">
            A comprehensive platform addressing supply and demand
          </h2>
          <p className="section__lead">
            EuroDIEM is creating a comprehensive platform that addresses both
            supply and demand challenges in the insurance market.
          </p>

          <div className="solution-grid">
            {solutionCards.map((s) => (
              <article key={s.title} className="solution-card">
                <h3 className="solution-card__title">{s.title}</h3>
                <p className="solution-card__text">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Architecture */}
      <section className="section section--pale">
        <div className="container">
          <p className="section__eyebrow">EuroDIEM Platform Architecture</p>
          <h2 className="section__title">
            A comprehensive multi-layer platform for insurance risk syndication
          </h2>

          <div className="arch">
            <div className="arch__row">
              <div>
                <div className="arch__label">PPP Pillars</div>
                <p className="arch__desc">
                  Public-Private Partnership framework
                </p>
              </div>
              <p className="arch__desc">
                Government collaboration and regulatory support
              </p>
            </div>
            <div className="arch__row">
              <div>
                <div className="arch__label">Capital Exchange Platform</div>
                <p className="arch__desc">
                  Investment and capital management
                </p>
              </div>
              <p className="arch__desc">
                Connecting investors with insurance opportunities
              </p>
            </div>
            <div className="arch__row">
              <div>
                <div className="arch__label">Underwriting Syndication</div>
                <p className="arch__desc">
                  Exchange matchmaking platform — core risk matching and
                  distribution engine
                </p>
              </div>
              <p className="arch__desc">
                <span className="arch__sub">B2B</span> Coinsurance —{" "}
                <span className="arch__sub">B2B+</span> Securitization
              </p>
            </div>
            <div className="arch__row">
              <div>
                <div className="arch__label">Data Sharing Platform</div>
                <p className="arch__desc">
                  Analytics and insights foundation
                </p>
              </div>
              <p className="arch__desc">
                Aggregated market data and risk intelligence
              </p>
            </div>
          </div>

          <div className="icon-trio">
            <div className="icon-trio__item">
              <span className="icon-trio__icon" aria-hidden>
                🔗
              </span>
              <p className="icon-trio__label">Integrated Ecosystem</p>
              <p
                className="risk-card__text"
                style={{ maxWidth: "32ch", textAlign: "center" }}
              >
                All layers work together seamlessly
              </p>
            </div>
            <div className="icon-trio__item">
              <span className="icon-trio__icon" aria-hidden>
                📊
              </span>
              <p className="icon-trio__label">Data-Driven Insights</p>
              <p
                className="risk-card__text"
                style={{ maxWidth: "32ch", textAlign: "center" }}
              >
                Foundation layer provides market intelligence
              </p>
            </div>
            <div className="icon-trio__item">
              <span className="icon-trio__icon" aria-hidden>
                🚀
              </span>
              <p className="icon-trio__label">Scalable Architecture</p>
              <p
                className="risk-card__text"
                style={{ maxWidth: "32ch", textAlign: "center" }}
              >
                Modular design supports growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2 className="cta-band__title">
            Join Us in <em>Transforming</em> Insurance
          </h2>
          <p className="cta-band__lead">
            EuroDIEM is at a pivotal moment with an incredible alignment of
            factors making this the perfect time to launch our platform. Be
            part of this transformative journey.
          </p>
          <div className="cta-band__actions">
            <Link href="/how-it-works" className="btn btn--solid-light">
              Learn how it works →
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
