import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "EuroDIEM connects risk transferors with insurance carriers (B2B) or investors (B2B+) through an innovative pre-matchmaking process — operating at EU+EFTA level.",
};

const tiers = [
  {
    n: 1,
    title: "Tier 1 — Standardized Risks",
    items: [
      "Highly standardized risks with direct platform access",
      "Automated matching and subscription process",
      "Carriers include desired participation range in their risk appetite",
    ],
  },
  {
    n: 2,
    title: "Tier 2 — Semi-Standardized",
    items: [
      "Moderately standardized risks with broker support",
      "Access to data room and risk managers after NDA signing",
      "Brokers help refine policy structure and select leads",
    ],
  },
  {
    n: 3,
    title: "Tier 3 — Complex Risks",
    items: [
      "Less standardized, complex risks requiring expertise — pre-matching eases syndication",
      "Enhanced broker involvement throughout the process",
      "Extended data room and speaking windows",
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
            The platform connects risk transferors with insurance carriers (B2B)
            or investors (B2B+) through an innovative pre-matchmaking process,
            with brokers playing a central and supportive role.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section__eyebrow">Platform Overview</p>
          <h2 className="section__title">
            EU+EFTA scale, with <em>capital diversification</em> and risk
            mutualization
          </h2>

          <div className="split split--2">
            <div className="panel">
              <h3 className="panel__title">B2B — Coinsurance</h3>
              <p style={{ margin: 0, color: "var(--color-muted)" }}>
                Connects SMEs and corporates (risk transferors) with a
                diversified pool of insurance carriers, enabling more efficient
                risk transfer and coverage. Matches customer risks with
                carrier risk appetite.
              </p>
            </div>
            <div className="panel">
              <h3 className="panel__title">B2B+ — Securitization</h3>
              <p style={{ margin: 0, color: "var(--color-muted)" }}>
                Connects sponsors and cedants with a diversified pool of
                investors — including (re)insurance carriers — enabling more
                efficient net transfer and coverage. Matches sponsor risks with
                investor appetite.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--pale">
        <div className="container">
          <p className="section__eyebrow">Risk Tiering</p>
          <h2 className="section__title">
            Matchmaking <em>scaled</em> to risk complexity
          </h2>
          <p className="section__lead">
            Matchmaking is more or less partial depending on the level of
            complexity and standardization of the risks presented.
          </p>

          <div className="tier-list">
            {tiers.map((t) => (
              <article key={t.n} className="tier">
                <span className="tier__num">{String(t.n).padStart(2, "0")}</span>
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

      <section className="section">
        <div className="container">
          <p className="section__eyebrow">The Matchmaking Process</p>
          <h2 className="section__title">
            A structured process to match risks with carriers
          </h2>

          <div className="steps">
            <article className="step">
              <span className="step__num">01</span>
              <h3 className="step__title">Round 1 — Initial Matching</h3>
              <p className="step__text">
                Insurance carriers upload and update their risk appetite. Risk
                transferors upload a standardized description of the risk. The
                platform performs initial matching between risks and appetites.
              </p>
            </article>
            <article className="step">
              <span className="step__num">02</span>
              <h3 className="step__title">Round 2 — Syndication</h3>
              <p className="step__text">
                Pre-selected carriers decide whether to participate. Tier 1
                follows an algorithmic optimal subscription. Tier 2 &amp; 3 are
                refined with brokers after NDAs are signed.
              </p>
            </article>
            <article className="step">
              <span className="step__num">03</span>
              <h3 className="step__title">Processing &amp; Execution</h3>
              <p className="step__text">
                EuroDIEM manages policy issuance based on the final structure.
                Premium, commission, and claims messages are processed.
                Anonymized aggregated data is captured for future market
                insights.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <p className="section__eyebrow" style={{ color: "rgba(255,255,255,0.85)" }}>
            Data Sharing &amp; PPP
          </p>
          <h2 className="section__title">
            <em>Data</em> and <em>public backstops</em>, woven in
          </h2>
          <p className="section__lead">
            Data is an essential enabler of the matchmaking platform — and an
            additional factor of price reduction. Public-Private Partnerships
            increase the size of the private market while keeping public
            support at higher attachment points.
          </p>

          <div className="split split--2">
            <div className="panel">
              <h3 className="panel__title">Data Sharing Module</h3>
              <ul className="panel__list">
                <li>Consolidates aggregated and anonymized claims data</li>
                <li>
                  Retrievable at a meaningful granular level by market
                  participants
                </li>
                <li>Provides valuable insights for risk assessment and pricing</li>
                <li>
                  Enhances market transparency while protecting confidentiality
                </li>
              </ul>
            </div>
            <div className="panel">
              <h3 className="panel__title">Public-Private Partnerships</h3>
              <ul className="panel__list">
                <li>Comfort the private sector in taking risks</li>
                <li>
                  Encourage governments to invest in risk-reducing
                  infrastructures
                </li>
                <li>
                  Combine private, private &amp; public, and public layers on
                  one platform
                </li>
                <li>
                  Consistent with the December 2024 ECB/EIOPA joint report —
                  extended beyond nat-cat property risks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2 className="cta-band__title">
            Ready to <em>learn more</em>?
          </h2>
          <p className="cta-band__lead">
            Discover how EuroDIEM can benefit your organization and the wider
            European insurance market.
          </p>
          <div className="cta-band__actions">
            <Link href="/benefits" className="btn btn--solid-light">
              Explore benefits
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
