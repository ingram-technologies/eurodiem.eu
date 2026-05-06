import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benefits",
  description:
    "EuroDIEM delivers significant advantages to all stakeholders in the insurance ecosystem, from carriers and risk transferors to brokers and the wider European economy.",
};

const useCases = [
  {
    title: "Natural Catastrophe Coverage",
    text: "Enabling more affordable and accessible coverage for natural disasters like floods, earthquakes, and wildfires through efficient risk syndication.",
    image: "/images/risk-natcat.jpg",
  },
  {
    title: "Cyber Risk Protection",
    text: "Addressing the growing cyber threat landscape by providing more capacity and expertise for this rapidly evolving risk category.",
    image: "/images/risk-cyber.jpg",
  },
  {
    title: "Emerging Technology Risks",
    text: "Supporting innovation by providing insurance solutions for new technologies like carbon capture, automative softwares, and other emerging risks.",
    image: "/images/risk-emerging.jpg",
  },
];

export default function BenefitsPage() {
  return (
    <>
      <section className="page-intro">
        <div className="page-intro__inner">
          <h1 className="page-intro__title">
            Benefits of <em>EuroDIEM</em>
          </h1>
          <p className="page-intro__lead">
            EuroDIEM delivers significant advantages to all stakeholders in the
            insurance ecosystem, from carriers and risk transferors to brokers
            and the wider European economy.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Carriers */}
          <div className="benefit-block">
            <div>
              <p className="section__eyebrow" style={{ textAlign: "left" }}>
                For Insurance Carriers
              </p>
              <h2 className="benefit-block__title">
                Expand Capacity and Reduce Capital Requirements
              </h2>
              <p className="benefit-block__lead">
                Insurance carriers benefit from EuroDIEM through enhanced risk
                diversification, reduced capital requirements, and access to
                new markets.
              </p>
            </div>
            <ul className="benefit-block__list">
              <li>Access to a wider range of risks for portfolio diversification</li>
              <li>Reduced capital requirements through risk sharing</li>
              <li>Enhanced data insights through the data sharing module</li>
              <li>
                Opportunity (ca. €200 bn premium) to enter new markets and risk
                categories
              </li>
              <li>Improved risk assessment through collective intelligence</li>
            </ul>
          </div>

          {/* Risk Transferors */}
          <div className="benefit-block">
            <div>
              <p className="section__eyebrow" style={{ textAlign: "left" }}>
                For Risk Transferors
              </p>
              <h2 className="benefit-block__title">
                Lower Premiums and Broader Coverage
              </h2>
              <p className="benefit-block__lead">
                SMEs, corporates, and other risk transferors benefit from more
                affordable insurance and access to coverage for previously
                uninsurable risks.
              </p>
            </div>
            <ul className="benefit-block__list">
              <li>Lower premiums primarily due to reduced cost of capital</li>
              <li>Increased access to coverage for previously uninsurable risks</li>
              <li>Simplified access to a wider range of insurance providers</li>
              <li>
                Resulting expected increase in demand leading to a further
                expected decrease in premium in due time: higher prevention,
                better data with the sharing module and lower costs
              </li>
            </ul>
          </div>

          {/* Brokers */}
          <div className="benefit-block">
            <div>
              <p className="section__eyebrow" style={{ textAlign: "left" }}>
                For Brokers
              </p>
              <h2 className="benefit-block__title">
                Enhanced Placement Capabilities
              </h2>
              <p className="benefit-block__lead">
                Brokers play a central and supportive role in the EuroDIEM
                platform, benefiting from enhanced capabilities to serve their
                clients and a significant development opportunity (ca. €200 bn
                premium):
              </p>
            </div>
            <ul className="benefit-block__list">
              <li>Enhanced ability to place complex and unconventional risks</li>
              <li>Access to a wider range of carriers and capacity</li>
              <li>Streamlined processes through technology integration</li>
              <li>Value-added services through data insights and analytics</li>
              <li>
                Improved client satisfaction through better risk solutions and
                lower premium
              </li>
            </ul>
          </div>

          {/* European Economy */}
          <div className="benefit-block">
            <div>
              <p className="section__eyebrow" style={{ textAlign: "left" }}>
                For European Economy
              </p>
              <h2 className="benefit-block__title">
                Reducing the Protection Gap
              </h2>
              <p className="benefit-block__lead">
                EuroDIEM contributes significantly to the European economy by
                reducing the protection gap and supporting EU priorities.
              </p>
            </div>
            <ul className="benefit-block__list">
              <li>Reduced protection gap, estimated at €200 billion annually</li>
              <li>Decreased national and supranational debt burden</li>
              <li>Support for large industrial innovative projects</li>
              <li>
                Transformation of savings into investments in European
                priorities
              </li>
              <li>Enhanced European resilience to catastrophic events</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section section--pale">
        <div className="container">
          <p className="section__eyebrow">Use Cases</p>
          <h2 className="section__title">Use Cases</h2>
          <p className="section__lead">
            Explore how EuroDIEM can address various insurance challenges
            across different sectors.
          </p>

          <div
            className="risk-grid"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
          >
            {useCases.map((u) => (
              <article key={u.title} className="risk-card">
                <div className="risk-card__media">
                  <Image
                    src={u.image}
                    alt=""
                    width={640}
                    height={427}
                    sizes="(min-width: 1024px) 33vw, (min-width: 720px) 50vw, 100vw"
                  />
                </div>
                <div className="risk-card__body">
                  <h3 className="risk-card__title">{u.title}</h3>
                  <p className="risk-card__text">{u.text}</p>
                </div>
              </article>
            ))}
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
            <Link href="/contact" className="btn btn--solid-light">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
