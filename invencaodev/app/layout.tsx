import type { Metadata } from "next";
import { Arvo } from "next/font/google";
import "./globals.css";

const arvo = Arvo({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portifólio | <invencaodev/>",
  description:
    "Portifólio de projetos voltados a programação de Guilherme da Invenção.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${arvo.className} antialiased`}>{children}</body>
    </html>
  );
}
