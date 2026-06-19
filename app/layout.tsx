import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hefezzia | Sites Profissionais",
  description: "Criamos sites rápidos, bonitos e acessíveis para pequenos negócios em todo o MUNDO. Do briefing ao ar em poucos dias.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 1. Adicionado suppressionHydrationWarning aqui
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('hefezzia-theme');
                  // 2. Mudança no fallback padrão para 'dark' se não houver preferência explícita por 'light'
                  var theme = saved ? saved : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      {/* 3. Adicionado as classes base estruturais no body para combinar com o seu CSS */}
      <body className="antialiased bg-[var(--bg-primary)] text-[var(--text-primary)]">
        {children}
      </body>
    </html>
  );
}
