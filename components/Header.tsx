import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ui/toggle-mode";
import { navigationLinks } from "@/lib/data";

export default function Header() {
  return (
    <header className="fixed top-0 z-100 flex w-full items-center justify-center p-8">
      <div className="flex-1"></div>
      <NavigationMenu className="rounded-3xl bg-muted p-4">
        <NavigationMenuList className="gap-4 text-sm text-muted-foreground">
          {navigationLinks.map((link) => (
            <NavigationMenuItem
              key={link.href}
              className="hover:text-foreground"
            >
              <NavigationMenuLink href={link.href}>
                {link.label}
              </NavigationMenuLink>
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
