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
    <header className="z-100 fixed top-0 flex w-full items-center justify-between p-0 sm:gap-2 sm:p-8">
      <div className=""></div>
      <NavigationMenu className="flex max-w-full grow bg-muted/[98%] p-4 shadow-lg sm:max-w-fit sm:rounded-3xl">
        <NavigationMenuList className="flex flex-wrap gap-4 text-sm text-muted-foreground sm:w-fit font-medium">
          {navigationLinks.map((link) => (
            <NavigationMenuItem
              key={link.href}
              className="text-center last-of-type:basis-full hover:text-foreground sm:[&:last-of-type]:basis-0"
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
      <div className="hidden justify-end sm:flex">
        <ModeToggle />
      </div>
    </header>
  );
}
