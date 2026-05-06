import Image from "next/image";
import Link from "next/link";

type HeroAction = {
  href: string;
  label: string;
  variant?: "solid-light" | "ghost-light";
};

type HeroProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  image: string;
  imageAlt: string;
  actions?: HeroAction[];
};

export function Hero({ eyebrow, title, lead, image, imageAlt, actions }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero__media">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" />
      </div>
      <div className="hero__inner">
        {eyebrow && <p className="hero__eyebrow">{eyebrow}</p>}
        <h1 className="hero__title">{title}</h1>
        {lead && <p className="hero__lead">{lead}</p>}
        {actions && actions.length > 0 && (
          <div className="hero__actions">
            {actions.map((a) => (
              <Link
                key={a.href + a.label}
                href={a.href}
                className={`btn btn--${a.variant ?? "solid-light"}`}
              >
                {a.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
