"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFormState } from "react-dom";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "@/app/api/formSchema";
import { onSubmitAction } from "@/app/api/formSubmit";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

export default function ContactForm() {
  const [state, formAction] = useFormState(onSubmitAction, {
    message: "",
  });
  const { toast } = useToast();

  const form = useForm<z.output<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
      ...(state?.fields ?? {}),
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.message !== "") {
      if (state.message === "Message Sent") {
        // Handle successful form submission
        toast({
          variant: "success",
          title: "Success",
          description: state.message,
        });
        // Reset the form on successful submission
      } else {
        // Handle server-side error message
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: state.message,
        });
      }
    }
  }, [state, toast, form]);

  return (
    <Form {...form}>
      {state?.issues && (
        <div className="text-red-500">
          <ul>
            {state.issues.map((issue) => (
              <li key={issue} className="flex gap-1">
                {issue}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form
        ref={formRef}
        action={formAction}
        onSubmit={(evt) => {
          evt.preventDefault();
          form.handleSubmit(() => {
            formAction(new FormData(formRef.current!));
          })(evt);
        }}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="placeholder.mail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="example message"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
