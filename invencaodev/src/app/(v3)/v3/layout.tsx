import { ThemeProvider } from "@/componentsV3/providers/theme-provider";

export default function V3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
