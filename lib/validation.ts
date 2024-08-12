import { z } from "zod"

export const UserFormValidation = z.object({
  name: z.string()
    .min(3, "Name must be at least 2 characters.")
    .max(50, "Name must be at Most 15 characters."),
  email: z.string().email("invalid email address."),
  phone: z.string().refine((phone) => /^\+\d(10,15)$/.test(phone), "Invalid phone number")
});
