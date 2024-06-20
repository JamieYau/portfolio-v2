"use server";

import EmailTemplate from "@/components/EmailTemplate";
import { formSchema } from "./formSchema";
import { Resend } from "resend";
import { validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);
const RESEND_EMAIL = process.env.RESEND_EMAIL;
const RECIPIENT = process.env.RESEND_RECIPIENT;

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function onSubmitAction(
  prevState: FormState,
  data: FormData,
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = formSchema.safeParse(formData);
  const senderEmail = parsed.data?.email;
  const message = parsed.data?.message;

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  // simple server-side validation
  if (!validateString(senderEmail, 100)) {
    return {
      message: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      message: "Invalid message",
    };
  }

  try {
    const response = await resend.emails.send({
      from: `Resume Contact Form <${RESEND_EMAIL}>`,
      to: [`${RECIPIENT}`], // Change to your desired recipient
      subject: "New Contact Form Submission",
      react: EmailTemplate({
        email: parsed.data.email,
        message: parsed.data.message,
      }) as React.ReactElement,
    });

    if (response.error) {
      console.log(response)
      throw new Error(response.error.message);
    }

    return { message: "Message Sent" };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error sending email:", errorMessage, error); // Improved logging
    return {
      message: "Failed to send message",
      issues: [errorMessage],
    };
  }
}
