import { Theme, ThemePanel } from "@radix-ui/themes";

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <Theme>
      {children}
      {/* <ThemePanel /> */}
    </Theme>
  );
};
