"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ui/toggle-mode";
import { navigationLinks } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-100 fixed top-0 flex w-full items-center justify-center p-4 sm:p-8">
      <div className="flex-1"></div>
      <NavigationMenu className="rounded-3xl bg-muted/90 p-4 shadow-lg">
        <NavigationMenuList className="gap-4 text-sm text-muted-foreground">
          {navigationLinks.map((link) => (
            <NavigationMenuItem
              key={link.href}
              className="hover:text-foreground"
            >
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink>
                  <span className="mr-1">{link.index}</span>
                  {link.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex flex-1 justify-end">
        <ModeToggle />
      </div>
    </header>
  );
}
