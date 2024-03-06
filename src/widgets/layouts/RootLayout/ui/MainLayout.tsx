import "@radix-ui/themes/styles.css";
import { ThemeProvider } from "@/app/providers";
import { nunito } from "@/app/styles/fonts";
import "@/app/styles/globals.css";
import { Header } from "@/widgets/headers";
import { Heading } from "@radix-ui/themes";

export interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main className="max-w-[1240px] px-5 mx-auto">{children}</main>
    </>
  );
};
