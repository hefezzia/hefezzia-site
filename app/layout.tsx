import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hefezzia | Sites Profissionais",
  description: "Criamos sites rápidos, bonitos e acessíveis para pequenos negócios em todo o MUNDO. Do briefing ao ar em poucos dias.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body>{children}</body>
    </html>
  );
}