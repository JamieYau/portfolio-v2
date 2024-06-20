"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFormState } from "react-dom";
import { useEffect, useRef, useTransition } from "react";
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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoadingIcon from "./icons/LoadingIcon";

interface ContactFormProps {
  className?: string;
}

function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
    <Button type="submit" disabled={isPending}>
      {isPending ? (
        <div className="flex items-center justify-center gap-1">
          <LoadingIcon className="-ml-1 h-5 w-5 animate-spin" />
          <span>Submitting...</span>
        </div>
      ) : (
        "Submit"
      )}
    </Button>
  );
}

export default function ContactForm({ className }: ContactFormProps) {
  const [state, formAction] = useFormState(onSubmitAction, {
    message: "",
  });
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

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
        form.reset();
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
    <Card className={`${className}`}>
      <CardHeader className="pb-2">
        <CardTitle>Contact Form</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <FormDescription className="pb-2">
            Use this form to contact me
          </FormDescription>
          <form
            ref={formRef}
            action={formAction}
            onSubmit={(evt) => {
              evt.preventDefault();
              form.handleSubmit(() => {
                startTransition(() => {
                  formAction(new FormData(formRef.current!));
                });
              })(evt);
            }}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Your email"
                      {...field}
                      disabled={isPending}
                    />
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
                  <FormControl>
                    <Textarea
                      placeholder="Your message"
                      className="min-h-40"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SubmitButton isPending={isPending} />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
