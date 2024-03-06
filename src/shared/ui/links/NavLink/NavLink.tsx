"use client";

import clsx from "clsx";
import type { LinkProps } from "next/link";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
}

export const NavLink = ({ children, href, ...props }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "body-lg border-b-2 p-1 transition-colors text-whiteA-12",
        {
          "border-b-whiteA-12": isActive,
          "border-b-transparent hover:text-whiteA-8": !isActive,
        }
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
