import { cn } from "@/src/shared/utils/cn";
import { tv } from "tailwind-variants";

export type ButtonColor = "white" | "primary";
export type ButtonSize = "small" | "medium" | "large";
export interface ButtonProps extends ReactTagProps<"button"> {
  color?: ButtonColor;
  size?: ButtonSize;
}

const button = tv({
  base: "inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border  disabled:opacity-50 disabled:pointer-events-none",
  variants: {
    color: {
      primary:
        "text-blue-500 border-blue-500 hover:text-blue-400 hover:border-blue-400",
      white:
        "text-white border-white hover:text-gray-300 hover:border-gray-300",
    },
    size: {
      small: "py-2 px-3",
      medium: "py-3 px-4",
      large: "p-4 sm:p-5",
    },
  },
});

export const Button = ({
  children,
  color = "primary",
  size = "small",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(button({ color, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
};
