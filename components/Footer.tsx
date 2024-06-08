"use client";
import { socials } from "@/lib/data";
import { Social } from "@/lib/data";

interface SocialProps {
  social: Social;
}

function SocialItem({ social }: SocialProps) {
  return (
    <a key={social.label} href={social.href} className="text-primary">
      {social.icon ? (
        <>
          <social.icon className="h-6 w-6" />
          <span className="sr-only">{social.label}</span>
        </>
      ) : (
        <span className="font-bold">{social.label}</span>
      )}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="w-full border-t py-8">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row md:px-6">
        <div className="flex items-center space-x-4">
          {socials.map((social) => (
            <SocialItem social={social} key={social.label}/>
          ))}
        </div>
        <p className="mt-4 text-sm md:mt-0">
          &copy; 2024 Acme Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
