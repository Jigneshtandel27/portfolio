import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string({
      message: "Name is required",
    })
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, { message: "Name must be under 50 characters" })
    .regex(/^[a-zA-Z\s]+$/, { message: "Name must contain only letters" }),

  email: z
    .string({
      message: "Email is required",
    })
    .trim()
    .email({ message: "Enter a valid email address" })
    .max(100, { message: "Email is too long" })
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: "Enter a valid email address",
    }),

  message: z
    .string({
      message: "Messsage is required",
    })
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be under 1000 characters" }),
});
