import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold cursor-default transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        muted: "border-transparent bg-muted text-foreground hover:bg-muted/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        react: "border-transparent bg-[#70d5fc] text-black",
        typescript: "border-transparent bg-[#4973bd] text-white",
        node: "border-transparent bg-green-600 text-white",
        aws: "border-transparent bg-[#ed9f2a] text-white",
        express: "border-transparent bg-black text-white",
        nextjs: "border bg-white text-black",
        stripe: "border-transparent bg-[#655efa] text-white",
        oauth: "border-transparent bg-purple-300 text-black",
        postgresql: "border-transparent bg-[#44668f] text-white",
        mongodb: "border-transparent bg-[#6ba749] text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type BadgeVariant = NonNullable<
  VariantProps<typeof badgeVariants>["variant"]
>;

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
