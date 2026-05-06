import { fromAddress, sendEmail } from "@/lib/email";
import { contactFormSchema } from "@/lib/schemas";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

const contactEmail = process.env.CONTACT_EMAIL || "contact@eurodiem.eu";

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const data = contactFormSchema.parse(body);
		const { firstName, lastName, email, subscribe, message } = data;
		const fullName = `${firstName} ${lastName}`.trim();

		const htmlContent = `
			<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
				<h2 style="color: #011489;">New EuroDIEM contact form submission</h2>
				<div style="background-color: #f3f4fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
					<p style="margin: 10px 0;"><strong>Name:</strong> ${fullName}</p>
					<p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
					<p style="margin: 10px 0;"><strong>Newsletter:</strong> ${subscribe ? "Yes" : "No"}</p>
					<div style="margin-top: 20px;">
						<strong>Message:</strong>
						<p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px; border: 1px solid #ddd;">${message}</p>
					</div>
				</div>
				<p style="color: #666; font-size: 14px; margin-top: 20px;">
					Sent from the eurodiem.eu contact form.
				</p>
			</div>
		`;

		const textContent = `New EuroDIEM contact form submission

Name: ${fullName}
Email: ${email}
Newsletter: ${subscribe ? "Yes" : "No"}

Message:
${message}

---
Sent from the eurodiem.eu contact form.`;

		await sendEmail({
			to: contactEmail,
			from: fromAddress("EuroDIEM"),
			replyTo: email,
			subject: `[EuroDIEM] New inquiry from ${fullName}`,
			text: textContent,
			html: htmlContent,
		});

		return NextResponse.json(
			{ message: "Message sent successfully" },
			{ status: 200 },
		);
	} catch (error) {
		console.error("Contact form error:", error);

		if (error instanceof ZodError) {
			return NextResponse.json(
				{ error: "Invalid form data. Please check your input." },
				{ status: 400 },
			);
		}

		return NextResponse.json(
			{ error: "Failed to send message. Please try again later." },
			{ status: 500 },
		);
	}
}
