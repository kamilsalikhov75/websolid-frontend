import { cn } from "@/shared/utils/cn";
import { tv } from "tailwind-variants";

const dot = tv({
  base: "h-[10px] w-[10px] z-0 absolute rounded-full top-[50%] left-[50%] transition-all duration-500 ease-in-out",
  variants: {
    variant: {
      ring: "border border-blue-500",
      default: "bg-blue-500",
    },
  },
});

interface DotProps {
  variant?: "ring" | "default";
  className?: string;
}

export const Dot = ({ variant = "default", className }: DotProps) => {
  return <div className={cn(dot({ variant }), className)} />;
};
