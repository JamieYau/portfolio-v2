import { z } from "zod";

export const formSchema = z.object({
  email: z.string().trim().email("Invalid email address."),
  message: z.string().min(1, { message: "This field has to be filled." }),
});
