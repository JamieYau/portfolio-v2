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

export default function Header() {
  return (
    <header className="flex w-full items-center justify-center p-8">
      <div className="flex-1"></div>
      <NavigationMenu className="rounded-2xl bg-muted p-4">
        <NavigationMenuList>
          <NavigationMenuItem className="bg-slate-700">
            <NavigationMenuLink href="/#about">01. About</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="bg-slate-700">
            <NavigationMenuLink href="/#about">02. Projects</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="bg-slate-700">
            <NavigationMenuLink href="/#about">03. Contact</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex flex-1 justify-end">
        <ModeToggle />
      </div>
    </header>
  );
}
