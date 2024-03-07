import { tv } from "tailwind-variants";
import { cn } from "../../utils/cn";

export type TypographySize = "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
export type TypographyTag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div";
export type TypographyProps<Tag extends TypographyTag> = ReactTagProps<
  Exclude<Tag, "span">
> & {
  size: TypographySize;
  tag?: TypographyTag;
  children: React.ReactNode;
};

const typography = tv({
  variants: {
    size: {
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
    },
  },
});

export const Typography = <T extends TypographyTag>({
  tag: Tag = "div",
  children,
  size = "base",
  className,
  ...props
}: TypographyProps<T>) => {
  return (
    <Tag className={cn(typography({ size }), className)} {...props}>
      {children}
    </Tag>
  );
};
