import { z } from "zod";

export const contactFormSchema = z.object({
	firstName: z.string().min(1, "First name is required").max(100, "First name is too long"),
	lastName: z.string().min(1, "Last name is required").max(100, "Last name is too long"),
	organization: z
		.string()
		.max(200, "Organization name is too long")
		.optional(),
	email: z.email("Invalid email address"),
	role: z.string().max(200, "Role description is too long").optional(),
	subscribe: z.boolean().optional(),
	message: z
		.string()
		.min(1, "Message is required")
		.max(5000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
