import { z } from "zod";

/** Shared by the client form and the /api/contact route. */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100, "That name is a little long."),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  subject: z.string().trim().min(3, "Add a short subject.").max(150, "Keep the subject under 150 characters."),
  message: z
    .string()
    .trim()
    .min(20, "Tell me a bit more (at least 20 characters).")
    .max(5000, "Please keep the message under 5,000 characters."),
  /** Honeypot. Real users never fill this in. */
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactField = Exclude<keyof ContactInput, "company">;
