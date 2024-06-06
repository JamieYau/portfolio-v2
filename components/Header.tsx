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
    <header className="z-100 fixed top-0 flex w-full items-center justify-between p-4 gap-2 sm:p-8">
      <div className=""></div>
      <NavigationMenu className="grow rounded-3xl bg-muted/90 p-2 shadow-lg sm:p-4">
        <NavigationMenuList className="flex flex-wrap gap-4 text-sm text-muted-foreground">
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
      <div className="flex justify-end">
        <ModeToggle />
      </div>
    </header>
  );
}
