import "@radix-ui/themes/styles.css";
import { ThemeProvider } from "@/app/providers";
import { nunito } from "@/app/styles/fonts";
import "@/app/styles/globals.css";
import { Header } from "@/widgets/headers";

export interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ru">
      <body className={nunito.variable}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};
