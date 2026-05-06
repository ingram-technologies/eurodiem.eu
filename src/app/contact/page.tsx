import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Get in touch with EuroDIEM. Tell us about your interest in the European Digital Insurance Exchange Market and how we can collaborate.",
};

export default function ContactPage() {
	return (
		<section className="contact-page">
			<div className="contact-page__inner">
				<div className="contact-page__copy">
					<h1 className="contact-page__title">Let&rsquo;s work together</h1>
					<p className="contact-page__subtitle">
						Interested in joining the EuroDIEM network?
					</p>
					<p className="contact-page__lead">
						Whether you&rsquo;re a carrier, broker, sponsor, investor, or
						public-sector partner — fill out the form and we&rsquo;ll be in
						touch shortly. We&rsquo;d love to hear from you.
					</p>

					<ContactForm />
				</div>
			</div>
		</section>
	);
}
