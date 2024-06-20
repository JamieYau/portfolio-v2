"use client";

import { useSectionInView } from "@/lib/hooks";
import ContactForm from "../ContactForm";
import Section from "./Section";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <Section
      ref={ref}
      sectionName="Contact"
      className="before:content-['03.']"
      containerClassName="min-h-screen"
    >
      <div className="flex flex-col items-center">
        <ContactForm className="w-full max-w-xl" />
      </div>
    </Section>
  );
}
