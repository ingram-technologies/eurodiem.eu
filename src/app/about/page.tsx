import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "EuroDIEM is developing a European platform to industrialize syndication of large and unconventional insurance risks — a key component of the EU's Capital Markets Union and Savings and Investments Union.",
};

const cmuPoints = [
  "Increases financial protection of citizens and businesses",
  "Transforms savings into investments in European priorities — c. €200 bn annually",
  "Supports large industrial innovative projects and SMEs through both insurance and funding",
  "Decreases national and supra-national debt by increasing private support and structuring public back-stops",
  "Represents the insurance sub-module of the European securitization platform — a key feature of CMU/SIU",
  "Builds a cross-border European digital infrastructure within the 28th regime, granting de facto harmonization, supervised centrally by ESMA and EIOPA",
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
            the protection gap and doubling the size of the insurance market —
            combined with a European public-private partnership.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mv-grid">
            <article className="mv-card">
              <p className="mv-card__eyebrow">Our Mission</p>
              <h2 className="mv-card__title">
                Decrease the protection gap, double the market
              </h2>
              <p className="mv-card__text">
                Our mission is to decrease the protection gap and double the
                size of the insurance market by creating a more efficient and
                accessible platform for risk syndication. We aim to transform
                how insurance risks are shared and managed across Europe.
              </p>
            </article>
            <article className="mv-card">
              <p className="mv-card__eyebrow">Our Vision</p>
              <h2 className="mv-card__title">
                Make uninsurable risks insurable
              </h2>
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

      <section className="section section--pale">
        <div className="container">
          <p className="section__eyebrow">EU Capital Markets Union</p>
          <h2 className="section__title">
            A key component of the <em>Capital Markets Union</em>
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
              <h3 className="benefit-block__title">CMU/SIU alignment</h3>
              <p className="benefit-block__lead">
                Built within the 28th regime to grant{" "}
                <em>de facto</em> harmonization, supervised centrally by ESMA
                and EIOPA.
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

      <section className="section">
        <div className="container">
          <p className="section__eyebrow">EuroDIEM&rsquo;s Solution</p>
          <h2 className="section__title">
            A multi-layer platform for <em>insurance risk syndication</em>
          </h2>
          <p className="section__lead">
            EuroDIEM is a comprehensive platform that addresses both supply and
            demand challenges in the insurance market.
          </p>

          <div className="arch">
            <div className="arch__row">
              <div>
                <div className="arch__label">PPP Pillars</div>
                <p className="arch__desc">
                  Public-Private Partnership framework for government
                  collaboration and regulatory support.
                </p>
              </div>
              <p className="arch__desc">
                Combines private, private &amp; public, and public layers so
                governments can step in only at higher attachment points.
              </p>
            </div>
            <div className="arch__row">
              <div>
                <div className="arch__label">Capital Exchange Platform</div>
                <p className="arch__desc">
                  Investment and capital management — connecting investors with
                  insurance opportunities.
                </p>
              </div>
              <p className="arch__desc">
                A wider pool of carriers and investors with calibrated, smaller
                exposures and lower cost of capital.
              </p>
            </div>
            <div className="arch__row">
              <div>
                <div className="arch__label">Underwriting Syndication</div>
                <p className="arch__desc">
                  Exchange matchmaking platform — the core risk matching and
                  distribution engine.
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
                  Analytics and insights foundation: aggregated, anonymized
                  market data and risk intelligence.
                </p>
              </div>
              <p className="arch__desc">
                Data is retrievable at a meaningful granular level by market
                participants — enhancing transparency while protecting
                confidentiality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2 className="cta-band__title">
            Join us in <em>transforming</em> insurance
          </h2>
          <p className="cta-band__lead">
            EuroDIEM is at a pivotal moment — be part of this transformative
            journey.
          </p>
          <div className="cta-band__actions">
            <Link href="/how-it-works" className="btn btn--solid-light">
              Learn how it works
            </Link>
            <Link href="/contact" className="btn btn--ghost-light">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
