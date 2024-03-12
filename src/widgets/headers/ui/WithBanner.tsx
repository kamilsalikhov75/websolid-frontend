"use client";

import { Typography } from "@/shared/ui/typography";
import { cn } from "@/shared/utils/cn";
import Image from "next/image";
import { usePathname } from "next/navigation";
import heroImage from "@/shared/assets/images/hero.png";
import { useEffect } from "react";

export interface WithBannerProps {
  children: React.ReactNode;
}

export const WithBanner = ({ children }: WithBannerProps) => {
  const path = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="bg-blue-500">
      {children}
      <div
        className={cn(
          "flex flex-col lg:flex-row  gap-5 max-w-[1240px] px-5 mx-auto text-white py-10 transition-[height,padding] ",
          {
            "h-0 py-0 invisible": path !== "/",
          }
        )}
      >
        <div className="flex flex-col gap-5">
          <Typography size="3xl" tag="h1">
            Создавайте креативные веб-решения с нашей командой разработчиков.
          </Typography>
          <Typography tag="p" size="lg">
            Мы создаём привлекательные и функциональные веб-сайты, которые
            заставят ваш бизнес выделиться среди конкурентов. Доверьте нам ваш
            веб-проект и дайте вашему бренду светлое будущее в онлайн-мире.
          </Typography>
        </div>
        <Image
          className="lg:max-w-[600px]"
          alt="Примеры сайтов"
          src={heroImage}
        />
      </div>
    </div>
  );
};
