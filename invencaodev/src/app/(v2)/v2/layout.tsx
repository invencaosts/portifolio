import { ThemeProvider } from "@/componentsV2/providers/theme-provider";

export default function V2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
