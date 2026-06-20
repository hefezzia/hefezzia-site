import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

/* Fontes da marca registradas via next/font/google:
   - build self-hosted local (sem chamada externa em runtime)
   - sem flash de fonte errada e sem risco de o CSS otimizado do Next
     descartar um @import remoto em produção (era a causa da fonte
     Syne não aparecer no site)
   Cada fonte gera uma CSS variable, consumida em globals.css
   pelas classes utilitárias font-display / font-body. */
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hefezzia | Sites Profissionais",
  description: "Criamos sites rápidos, bonitos e acessíveis para pequenos negócios em todo o MUNDO. Do briefing ao ar em poucos dias.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // As variáveis das fontes vão na tag <html> para já estarem
    // disponíveis para todo o documento antes da primeira renderização.
    <html lang="pt-BR" className={`${syne.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        {/* Aplica o tema (claro/escuro) salvo ou a preferência do sistema
            ANTES da primeira renderização, evitando o "flash" de tema errado */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('hefezzia-theme');
                  var theme = saved ? saved : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      {/* Cor de fundo no body cobre áreas de overscroll/bounce em mobile */}
      <body className="antialiased bg-[var(--bg-primary)] text-[var(--text-primary)]">
        {children}
      </body>
    </html>
  );
}
