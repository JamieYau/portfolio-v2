"use client";

import ContactForm from "../ContactForm";
import Section from "./Section";

export default function Contact() {
  return (
    <Section
      sectionName="Contact"
      threshold={0.4}
      className="before:content-['03.']"
      containerClassName="min-h-screen"
    >
      <div className="flex flex-col items-center">
        <ContactForm className="w-full max-w-xl" />
      </div>
    </Section>
  );
}
