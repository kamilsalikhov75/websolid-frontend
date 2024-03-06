import "@radix-ui/themes/styles.css";
import { ThemeProvider } from "@/app/providers";
import { nunito } from "@/app/styles/fonts";
import "@/app/styles/globals.css";
import { Header } from "@/widgets/headers";
import { Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import heroImage from "@/shared/assets/images/hero.png";

export interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <div className="bg-accent-9">
        <Header />
        <div className="flex flex-col md:flex-row  gap-5 max-w-[1240px] px-5 mx-auto text-whiteA-12 py-5">
          <div className="flex flex-col gap-5">
            <Heading size="8">
              Создавайте креативные веб-решения с нашей командой разработчиков.
            </Heading>
            <Text size="5">
              Мы создаём привлекательные и функциональные веб-сайты, которые
              заставят ваш бизнес выделиться среди конкурентов. Доверьте нам ваш
              веб-проект и дайте вашему бренду светлое будущее в онлайн-мире.
            </Text>
          </div>
          <Image
            className="md:max-w-[600px]"
            alt="Примеры сайтов"
            src={heroImage}
          />
        </div>
      </div>
      <main className="max-w-[1240px] px-5 mx-auto">{children}</main>
    </>
  );
};
