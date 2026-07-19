import { ContactForm } from "@/components/ContactForm";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
	title: "Contact",
	description:
		"Interested in working together? Fill out some info and we will be in touch shortly.",
	path: "/contact",
});

export default function ContactPage() {
	return (
		<section className="contact-page">
			<div className="contact-page__inner">
				<div className="contact-page__copy">
					<h1 className="contact-page__title">Let&rsquo;s work together</h1>
					<p className="contact-page__subtitle">
						Interested in working together? Fill out some info and we will
						be in touch shortly! We can&rsquo;t wait to hear from you!
					</p>

					<ContactForm submitLabel="Submit" />
				</div>
			</div>
		</section>
	);
}
