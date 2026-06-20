import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hefezzia | Sites Profissionais",
  description: "Criamos sites rápidos, bonitos e acessíveis para pequenos negócios em todo o MUNDO. Do briefing ao ar em poucos dias.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
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
