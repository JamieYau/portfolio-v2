import { SectionName } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface SectionProps {
  sectionName: SectionName;
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  threshold?: number;
}

const sectionVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Section({
  sectionName,
  children,
  containerClassName,
  threshold,
  className,
}: SectionProps) {
  const { ref } = useSectionInView(sectionName, threshold);
  return (
    <motion.section
      ref={ref}
      id={sectionName.toLowerCase().replace(/\s+/g, "-")}
      className={cn("mx-auto flex w-full flex-col pt-24", containerClassName)}
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
        margin: "0px 0px -200px 0px",
      }}
    >
      <h2
        className={cn(
          "mb-10 flex items-center text-[clamp(26px,5vw,2em)] font-semibold before:mr-2 before:text-primary after:h-px after:flex-1 after:bg-muted",
          className,
        )}
      >
        <span className="mr-4">{sectionName}</span>
      </h2>
      {children}
    </motion.section>
  );
}
