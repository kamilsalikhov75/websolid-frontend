import { nunito } from "@/app/styles/fonts";
import "@/app/styles/globals.css";
import PrelineScript from "@/app/config/PrelineLoader";
import { Header, WithBanner } from "@/widgets/headers";

export interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ru">
      <body className={nunito.className}>
        <WithBanner>
          <Header />
        </WithBanner>
        <main className="py-10 max-w-[1240px] px-5 mx-auto">{children}</main>
      </body>
      <PrelineScript />
    </html>
  );
};
