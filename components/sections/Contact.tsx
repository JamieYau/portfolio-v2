import ContactForm from "../ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-screen w-full flex-col pt-24"
    >
      <h2 className="mb-4 flex items-center text-[clamp(26px,5vw,2em)] font-semibold before:mr-2 before:text-primary before:content-['04.'] after:h-px after:flex-1 after:bg-muted">
        <span className="mr-4">Contact Me</span>
      </h2>
      <div>
        <ContactForm />
      </div>
    </section>
  );
}
