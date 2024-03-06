import { LogoIcon } from "@/shared/ui/icons/LogoIcon";
import Link from "next/link";
import { ROUTES } from "../model/routes";
import { NavLink } from "@/shared/ui/links";
import { CONTACTS } from "@/shared/const/contacts";
import { Button } from "@radix-ui/themes";

export const Header = () => {
  return (
    <header className="bg-accent-9">
      <div className="max-w-[1240px] p-5 mx-auto flex justify-between items-center">
        <Link href="/">
          <LogoIcon className="fill-whiteA-12" />
        </Link>
        <nav>
          {ROUTES.map((route, index) => {
            return (
              <NavLink key={index} href={route.href}>
                {route.label}
              </NavLink>
            );
          })}
        </nav>
        <div className="text-whiteA-12 flex gap-2 items-center">
          <Link href={`tel:${CONTACTS.PHONE}`}>{CONTACTS.PHONE}</Link>
          <Button className="text-accent-9 rounded-full bg-whiteA-12 cursor-pointer">
            Оставить заявку
          </Button>
        </div>
      </div>
    </header>
  );
};
