"use client";
import { useEffect, useState } from "react";

export default function Sucesso() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("hefezzia-theme");
      const preferred = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", saved || preferred);
    } catch {}
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <main
      className="font-body bg-[var(--bg-primary)] text-[var(--text-primary)]"
      style={{ height: "100dvh", display: "flex", flexDirection: "column", overflow: "hidden" }}
    >
      {/* ─── NAVBAR ─── */}
      <header className="border-b border-[var(--border-5)] bg-[var(--bg-primary)]/95 backdrop-blur py-4 flex-shrink-0">
        <div className="container flex items-center justify-center">
          <a href="/" className="font-display font-bold text-xl text-[var(--text-primary)] cursor-pointer">
            Hefe<span className="font-display yellow">zz</span>ia
          </a>
        </div>
      </header>

      {/* ─── CONTEÚDO ─── */}
      <div
        className="flex-1 container flex items-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        {/* Glow decorativo */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #152fb2, #5E5C96, transparent)" }}
        />

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-0 items-center py-8">

          {/* ── ESQUERDA: confirmação ── */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <svg viewBox="0 -12 100 100" width="80" height="80" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                <path
                  d="M50 4
                    a4 4 0 0 1 5.5 1
                    a4 4 0 0 0 6 0
                    a4 4 0 0 1 5.5 1
                    a4 4 0 0 0 5.5 2
                    a4 4 0 0 1 4 3.5
                    a4 4 0 0 0 5 3.5
                    a4 4 0 0 1 2 5
                    a4 4 0 0 0 3 5.5
                    a4 4 0 0 1 0 5.5
                    a4 4 0 0 0 1 6
                    a4 4 0 0 1 -1 5.5
                    a4 4 0 0 0 -2 5.5
                    a4 4 0 0 1 -3.5 4
                    a4 4 0 0 0 -3.5 5
                    a4 4 0 0 1 -5 2
                    a4 4 0 0 0 -5.5 3
                    a4 4 0 0 1 -5.5 0
                    a4 4 0 0 0 -6 1
                    a4 4 0 0 1 -5.5 -1
                    a4 4 0 0 0 -5.5 -2
                    a4 4 0 0 1 -4 -3.5
                    a4 4 0 0 0 -5 -3.5
                    a4 4 0 0 1 -2 -5
                    a4 4 0 0 0 -3 -5.5
                    a4 4 0 0 1 0 -5.5
                    a4 4 0 0 0 -1 -6
                    a4 4 0 0 1 1 -5.5
                    a4 4 0 0 0 2 -5.5
                    a4 4 0 0 1 3.5 -4
                    a4 4 0 0 0 3.5 -5
                    a4 4 0 0 1 5 -2
                    a4 4 0 0 0 5.5 -3
                    a4 4 0 0 1 5.5 0
                    Z"
                  fill="var(--brand-yellow)"
                />
                <path
                  d="M40 40 l10 10 l18 -18"
                  stroke="var(--text-on-yellow)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <p className="font-display font-bold text-lg text-[var(--text-primary)] leading-tight">
                Pagamento<br />confirmado
              </p>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-primary)] leading-tight mb-4">
              Tudo certo!<br />
              <span className="font-display yellow">Bem-vindo.</span>
            </h1>

            <p className="font-body text-[var(--text-55)] leading-relaxed mb-8 max-w-sm">
              Entraremos em contato pelo <strong className="text-[var(--text-primary)]">e-mail cadastrado</strong> em até 4 horas úteis para dar início ao seu projeto.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/"
                className="yellow-bg font-body font-semibold text-sm px-6 py-3.5 rounded-full cursor-pointer hover:opacity-90 transition-opacity"
              >
                Voltar à página principal
              </a>
              <a
                href="https://wa.me/5522996173383"
                className="border border-[var(--border-20)] text-[var(--text-primary)] font-body text-sm px-6 py-3.5 rounded-full cursor-pointer hover:border-[var(--brand-yellow)] hover:text-[var(--brand-yellow)] transition-all inline-flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.549 4.109 1.514 5.845L.057 23.272a.75.75 0 00.921.921l5.442-1.453A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.896 0-3.67-.523-5.185-1.432l-.371-.221-3.853 1.03 1.034-3.837-.229-.381A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Divisor vertical */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-[var(--border-8)]" style={{ transform: "translateX(-50%)" }} />

          {/* ── DIREITA: próximos passos ── */}
          <div className="bg-[var(--bg-secondary)] border border-[var(--border-8)] rounded-2xl p-8 lg:ml-12">
            <p className="font-body text-xs tracking-widest uppercase text-[var(--text-30)] mb-6">
              O que acontece agora
            </p>
            <div className="space-y-5">
              {[
                { n: "01", t: "E-mail de confirmação", d: "Enviamos os detalhes do plano e os próximos passos." },
                { n: "02", t: "Briefing",               d: "Pedimos logo, cores, fotos e textos do seu negócio." },
                { n: "03", t: "Desenvolvimento",        d: "Você acompanha e aprova cada etapa." },
                { n: "04", t: "Site no ar",             d: "Publicamos com seu domínio e você aparece no Google." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 yellow-bg rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-bold text-xs" style={{ color: "var(--text-on-yellow)" }}>{step.n}</span>
                  </div>
                  <div>
                    <p className="font-body font-semibold text-sm text-[var(--text-primary)]">{step.t}</p>
                    <p className="font-body text-xs text-[var(--text-50)] mt-0.5">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-[var(--border-5)] py-4 flex-shrink-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-2">
          <a href="/" className="font-display font-bold text-lg text-[var(--text-primary)] cursor-pointer">
            Hefe<span className="font-display yellow">zz</span>ia
          </a>
          <p className="font-body text-xs text-[var(--text-25)]">
            © {new Date().getFullYear()} · Hefezzia · Todos os direitos reservados
          </p>
          <p className="font-body text-xs text-[var(--text-25)]">
            hefezzia@gmail.com · (22) 99617-3383
          </p>
        </div>
      </footer>
    </main>
  );
}
