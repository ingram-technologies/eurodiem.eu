"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const initialState = {
	firstName: "",
	lastName: "",
	email: "",
	subscribe: false,
	message: "",
};

type ContactFormProps = {
	submitLabel?: string;
};

export function ContactForm({ submitLabel = "Send" }: ContactFormProps) {
	const [data, setData] = useState(initialState);
	const [status, setStatus] = useState<Status>("idle");
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const update =
		<K extends keyof typeof initialState>(key: K) =>
		(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const value =
				e.target instanceof HTMLInputElement && e.target.type === "checkbox"
					? e.target.checked
					: e.target.value;
			setData((prev) => ({ ...prev, [key]: value }));
		};

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus("submitting");
		setErrorMessage(null);

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!res.ok) {
				const body = await res.json().catch(() => ({}));
				throw new Error(body.error || "Failed to send message");
			}

			setStatus("success");
			setData(initialState);
		} catch (err) {
			setStatus("error");
			setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
		}
	};

	if (status === "success") {
		return (
			<div className="contact-form contact-form--success">
				<h3>Thank you for reaching out.</h3>
				<p>We will get back to you shortly.</p>
			</div>
		);
	}

	return (
		<form className="contact-form" onSubmit={onSubmit} noValidate>
			<p className="contact-form__group-label">Name</p>
			<div className="contact-form__row">
				<div className="contact-form__field">
					<label htmlFor="firstName">
						First Name <span className="contact-form__hint">(required)</span>
					</label>
					<input
						id="firstName"
						name="firstName"
						type="text"
						required
						value={data.firstName}
						onChange={update("firstName")}
					/>
				</div>
				<div className="contact-form__field">
					<label htmlFor="lastName">
						Last Name <span className="contact-form__hint">(required)</span>
					</label>
					<input
						id="lastName"
						name="lastName"
						type="text"
						required
						value={data.lastName}
						onChange={update("lastName")}
					/>
				</div>
			</div>

			<div className="contact-form__field">
				<label htmlFor="email">
					Email <span className="contact-form__hint">(required)</span>
				</label>
				<input
					id="email"
					name="email"
					type="email"
					required
					value={data.email}
					onChange={update("email")}
				/>
			</div>

			<label className="contact-form__check" htmlFor="subscribe">
				<input
					id="subscribe"
					name="subscribe"
					type="checkbox"
					checked={data.subscribe}
					onChange={update("subscribe")}
				/>
				Sign up for news and updates
			</label>

			<div className="contact-form__field">
				<label htmlFor="message">
					Message <span className="contact-form__hint">(required)</span>
				</label>
				<textarea
					id="message"
					name="message"
					required
					rows={6}
					value={data.message}
					onChange={update("message")}
				/>
			</div>

			{status === "error" && errorMessage && (
				<p className="contact-form__error" role="alert">
					{errorMessage}
				</p>
			)}

			<button
				type="submit"
				className="btn btn--solid"
				disabled={status === "submitting"}
			>
				{status === "submitting" ? "Sending…" : submitLabel}
			</button>
		</form>
	);
}
