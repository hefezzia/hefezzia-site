"use client";
import { useState, useEffect } from "react";

const portfolio = [
  {
    titulo: "Barbearia Noir",
    nicho: "Barbearia",
    plano: "Gold",
    url: "https://barbearia-demo-ecru.vercel.app/",
    cor: "#1a1a1a",
    acento: "#c9a84c",
  },
  {
    titulo: "Restaurante",
    nicho: "Restaurante",
    plano: "Premium",
    url: "https://restaurante-demo-gamma.vercel.app/",
    cor: "#1f0a0a",
    acento: "#ce1212",
  },
  {
    titulo: "Dra. Ana Souza",
    nicho: "Psicóloga",
    plano: "Gold",
    url: "https://psicologo-demo-bice.vercel.app/",
    cor: "#eef3ee",
    acento: "#6b8f71",
  },
  {
    titulo: "Lucas Ferreira",
    nicho: "Personal Trainer",
    plano: "Gold",
    url: "https://personal-trainer-demo.vercel.app/",
    cor: "#111010",
    acento: "#f04e1a",
  },
  {
    titulo: "Dr. Rafael Mendes",
    nicho: "Advocacia",
    plano: "Premium",
    url: "https://advogado-demo-lovat.vercel.app/",
    cor: "#1a2744",
    acento: "#b8972a",
  },
  {
    titulo: "Nexo Contabilidade",
    nicho: "Contabilidade",
    plano: "Premium",
    url: "https://contabilidade-demo.vercel.app/",
    cor: "#0d1f2d",
    acento: "#0f7173",
  },
];

const planos = [
  {
    nome: "Silver",
    precoAnterior: "497",
    preco: "297",
    precoAnual: "2970",
    foto: "Fornecida pelo cliente",
    copy: "Básico incluso",
    itens: [
      "Site one-page até 4 seções",
      "Formulário de contato + WhatsApp",
      "Responsivo para celular",
      "Domínio próprio configurado",
      "Hospedagem e Manutenção inclusas",
      "Suporte por WhatsApp ativo",
      "1 rodada de revisão",
    ],
    destaque: false,
  },
  {
    nome: "Gold",
    precoAnterior: "697",
    preco: "447",
    precoAnual: "4470",
    foto: "Fornecida pelo cliente",
    copy: "Intermediário incluso",
    itens: [
      "Site completo até 7 seções",
      "Animações e interatividade",
      "FAQ, galeria ou planos",
      "Botão flutuante WhatsApp",
      "Domínio próprio configurado",
      "Hospedagem e Manutenção inclusas",
      "Suporte por WhatsApp ativo",
      "2 rodadas de revisão",
    ],
    destaque: true,
  },
  {
    nome: "Premium",
    precoAnterior: "997",
    preco: "797",
    precoAnual: "7970",
    foto: "Equipe profissional inclusa",
    copy: "Profissional incluso",
    itens: [
      "Site completo até 10 seções",
      "Design exclusivo por identidade",
      "Copywriting estratégico completo",
      "Domínio próprio configurado",
      "Hospedagem e Manutenção inclusas",
      "Suporte prioritário ativo",
      "3 rodadas de revisão",
      "Entrega do código-fonte",
    ],
    destaque: false,
  },
];

const faq = [
  { p: "Quanto tempo leva para ficar pronto?",        r: "Silver: 5 dias úteis. Gold: 10 dias úteis. Premium: 15 dias úteis. O prazo começa após a aprovação do briefing e recebimento dos materiais." },
  { p: "O site fica no ar depois que eu pagar?",      r: "Sim. O site fica hospedado pela Hefezzia enquanto o plano mensal estiver ativo. Se cancelar, você pode adquirir o código-fonte e hospedar onde quiser." },
  { p: "Preciso fornecer textos e fotos?",            r: "Nos planos Silver e Gold, o cliente fornece as fotos. O copywriting está incluso em todos os planos. No Premium, a equipe de fotografia vai até o seu negócio." },
  { p: "Posso pedir alterações depois?",              r: "Sim, a manutenção e o suporte técnico contínuo já estão inclusos no valor da sua assinatura mensal, garantindo atualizações regulares e ajustes conforme necessário." },
  { p: "Vocês atendem fora do Brasil?",               r: "Atendemos em todo o MUNDO! Trabalhamos de forma 100% remota. Para fotografia presencial, atuamos nas principais capitais e regiões metropolitanas." },
];

export default function Home() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [activeFaq, setActiveFaq]   = useState<number | null>(null);
  const [showTop, setShowTop]       = useState(false);
  const [phoneValue, setPhoneValue] = useState("");
  const [nameValue, setNameValue]   = useState("");
  const [theme, setTheme]           = useState<"dark" | "light">("dark");
  const [ciclo, setCiclo]           = useState<"mensal" | "anual">("mensal");

  useEffect(() => {
    const savedTheme = localStorage.getItem("hefezzia-theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const current = document.documentElement.getAttribute("data-theme") as "dark" | "light" | null;
      if (current) setTheme(current);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("hefezzia-theme", next); } catch {}
  };

  useEffect(() => {
    const fn = () => { 
      setScrolled(window.scrollY > 40); 
      setShowTop(window.scrollY > 300); 
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handlePhone = (e: React.FormEvent<HTMLInputElement>) => {
    let input = e.currentTarget.value.replace(/\D/g, "");
    if (input.length > 11) input = input.substring(0, 11);
    if (input.length > 2) {
      input = `(${input.substring(0, 2)}) ${input.substring(2)}`;
    } else if (input.length > 0) {
      input = `(${input}`;
    }
    setPhoneValue(input);
  };

  const handleName = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget.value.replace(/[0-9]/g, "");
    setNameValue(input);
  };

  const navLinks = ["Início","Portfólio","Planos","FAQ","Contato"];

  return (
    <main className="font-body bg-[var(--bg-primary)] text-[var(--text-primary)]">

      {/* ─── SCROLL TOP ──────────────────────────────────── */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed right-4 z-[999] yellow-bg w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg cursor-pointer transition-all duration-400 ${showTop ? "bottom-4 opacity-100" : "-bottom-16 opacity-0"}`}>
        ↑
      </button>

      {/* ─── NAVBAR ──────────────────────────────────────── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[var(--bg-primary)]/95 backdrop-blur border-b border-[var(--border-5)] py-4" : "bg-transparent py-6"}`}>
        <div className="container flex items-center justify-between">
          <div className="font-display font-bold text-xl text-[var(--text-primary)]">
            Hefe<span className="font-display yellow">zz</span>ia
          </div>
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase().replace("ó","o").replace("í","i")}`}
                className="font-body text-xs tracking-widest uppercase text-[var(--text-50)] hover:text-[var(--text-primary)] nav-line cursor-pointer transition-colors">
                {link}
              </a>
            ))}
          </nav>
          <a href="#contato"
            className="hidden lg:flex items-center gap-2 yellow-bg font-body font-semibold text-xs tracking-widest uppercase px-5 py-2.5 rounded-full cursor-pointer hover:opacity-90 transition-opacity">
            Solicitar Orçamento
          </a>
          <button className="lg:hidden text-[var(--text-primary)] cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="material-icons">{menuOpen ? "close" : "menu"}</span>
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-[var(--bg-secondary)] border-t border-[var(--border-5)] px-6 py-6 space-y-4">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase().replace("ó","o").replace("í","i")}`}
                className="block font-body text-xs tracking-widest uppercase text-[var(--text-50)] hover:text-[var(--text-primary)] cursor-pointer"
                onClick={() => setMenuOpen(false)}>{link}</a>
            ))}
            <a href="#contato" className="block yellow-bg font-body font-semibold text-xs tracking-widest uppercase px-5 py-3 text-center rounded-full cursor-pointer"
              onClick={() => setMenuOpen(false)}>Solicitar Orçamento</a>
          </div>
        )}
      </header>

      {/* ─── THEME TOGGLE ────────────────────────────────── */}
      <div className="fixed top-20 lg:top-24 right-4 z-50">
        <button
          onClick={toggleTheme}
          aria-label="Alternar tema claro/escuro"
          className="theme-toggle-btn cursor-pointer w-10 h-10 rounded-full flex items-center justify-center bg-[var(--bg-secondary)] border border-[var(--border-15)] shadow-lg"
        >
          <span className="material-icons text-[var(--text-primary)] text-lg">
            {theme === "dark" ? "light_mode" : "dark_mode"}
          </span>
        </button>
      </div>

      {/* ─── HERO ────────────────────────────────────────── */}
      <section id="início" className="min-h-screen flex flex-col justify-center pt-32 pb-20 relative overflow-hidden border-b border-[var(--border-5)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #152fb2, #5E5C96, transparent)" }} />

        <div className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden">
          <p className="font-display font-bold text-[20vw] text-[var(--text-3)] leading-none">ZZ</p>
        </div>

        <div className="container relative z-10">
          <p className="font-body text-xs tracking-widest uppercase text-[var(--text-40)] mb-6 fade-up">
            Desenvolvimento Web · Design Digital · Brasil
          </p>
          <h1 className="font-display font-bold leading-none mb-8 fade-up-2 text-[var(--text-primary)]"
            style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)" }}>
            Seu negócio merece<br />
            um site que <span className="font-display yellow">converte</span>
          </h1>
          <p className="font-body text-[var(--text-55)] text-lg leading-relaxed mb-10 max-w-xl fade-up-3">
            Criamos sites profissionais para pequenos negócios em todo o MUNDO! Sites rápidos, bonitos e com domínio próprio. Do briefing ao ar em poucos dias.
          </p>
          <div className="flex flex-wrap gap-4 fade-up-4">
            <a href="#portfolio"
              className="yellow-bg font-body font-semibold text-sm px-8 py-4 rounded-full cursor-pointer hover:opacity-90 transition-opacity">
              Ver Portfólio
            </a>
            <a href="#planos"
              className="border border-[var(--border-15)] text-[var(--text-primary)] font-body text-sm px-8 py-4 rounded-full cursor-pointer hover:border-[var(--brand-yellow)] hover:text-[var(--brand-yellow)] transition-all">
              Ver Planos
            </a>
          </div>

          <div className="flex flex-wrap gap-12 mt-16 pt-8 border-t border-[var(--border-8)] fade-up-4">
            {[["6+","Nichos atendidos"],["100%","Responsivo"],["5 dias","Entrega Silver"]].map(([n,l]) => (
              <div key={l}>
                <p className="font-display font-bold text-3xl yellow">{n}</p>
                <p className="font-body text-xs text-[var(--text-40)] uppercase tracking-wider mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─────────────────────────────────────── */}
      <div className="blue-bg py-3 overflow-hidden border-b border-[var(--border-5)]">
        <div className="flex marquee-track whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="font-display font-bold text-white text-xl tracking-widest px-8">
              SITES PROFISSIONAIS · DESIGN EXCLUSIVO · DOMÍNIO PRÓPRIO · HOSPEDAGEM INCLUSA · COPY INCLUSO · ENTREGA RÁPIDA · SUPORTE CONTÍNUO · SITES PROFISSIONAIS · DESIGN EXCLUSIVO · DOMÍNIO PRÓPRIO · HOSPEDAGEM INCLUSA · COPY INCLUSO · ENTREGA RÁPIDA · SUPORTE CONTÍNUO ·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ─── PORTFÓLIO ───────────────────────────────────── */}
      <section id="portfolio" className="py-28 bg-[var(--bg-primary)] border-b border-[var(--border-5)]">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-[var(--text-40)] mb-3">Nosso trabalho</p>
              <h2 className="font-display font-bold text-5xl md:text-6xl text-[var(--text-primary)] leading-none">Portfólio</h2>
            </div>
            <p className="font-body text-sm text-[var(--text-40)] max-w-xs">
              Sites ilustrativos desenvolvidos pela Hefezzia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolio.map((item, i) => (
              <a key={i} href={item.url} target="_blank" rel="noopener noreferrer"
                className="portfolio-card group block rounded-2xl overflow-hidden border border-[var(--border-8)] cursor-pointer">
                <div className="h-48 relative overflow-hidden flex items-center justify-center bg-[var(--bg-tertiary)] border-b border-[var(--border-5)]">
                  <div className="absolute inset-0 opacity-40"
                    style={{ background: `linear-gradient(135deg, ${item.cor}, ${item.acento}44)` }} />
                  <div className="relative z-10 text-center px-6">
                    <p className="font-display font-bold text-3xl text-[var(--text-primary)]">{item.titulo}</p>
                    <p className="font-body text-xs text-[var(--text-40)] uppercase tracking-widest mt-1">{item.nicho}</p>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-icons text-[var(--text-primary)] text-sm">open_in_new</span>
                  </div>
                </div>
                <div className="bg-[var(--bg-secondary)] px-5 py-4 flex items-center justify-between">
                  <div>
                    <p className="font-body font-medium text-sm text-[var(--text-primary)]">{item.titulo}</p>
                    <p className="font-body text-xs text-[var(--text-40)]">{item.nicho}</p>
                  </div>
                  <span className="font-body text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: `${item.acento}22`, color: item.acento }}>
                    {item.plano}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMO FUNCIONA ───────────────────────────────── */}
      <section className="py-28 bg-[var(--bg-secondary)] border-b border-[var(--border-5)]">
        <div className="container">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-widest uppercase text-[var(--text-40)] mb-3">Simples assim</p>
            <h2 className="font-display font-bold text-5xl md:text-6xl text-[var(--text-primary)]">Como funciona</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Briefing",         d: "Você preenche nosso formulário com as informações do seu negócio. Leva menos de 10 minutos." },
              { n: "02", t: "Proposta",          d: "Em até 24h enviamos uma proposta personalizada com plano, prazo e valor." },
              { n: "03", t: "Desenvolvimento",   d: "Com a aprovação e o sinal pago, começamos. Você acompanha cada etapa." },
              { n: "04", t: "Site no ar",        d: "Aprovado o site, publicamos com seu domínio próprio. Você já aparece no Google." },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="w-12 h-12 yellow-bg rounded-full flex items-center justify-center font-display font-bold text-lg mb-4">
                  {step.n}
                </div>
                {i < 3 && <div className="hidden md:block absolute top-6 left-12 right-0 h-px bg-[var(--border-8)]" />}
                <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-2">{step.t}</h3>
                <p className="font-body text-sm text-[var(--text-50)] leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PLANOS ──────────────────────────────────────── */}
      <section id="planos" className="py-28 bg-[var(--bg-primary)] border-b border-[var(--border-5)]">
        <div className="container">
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-widest uppercase text-[var(--text-40)] mb-3">Investimento Tudo Incluso</p>
            <h2 className="font-display font-bold text-5xl md:text-6xl text-[var(--text-primary)]">
              Planos {ciclo === "mensal" ? "Mensais" : "Anuais"}
            </h2>
            <p className="font-body text-sm text-[var(--text-50)] mt-4">Hospedagem, suporte técnico e manutenção já inclusos na assinatura.</p>
            
            <div className="inline-flex items-center gap-1 mt-8 p-1 rounded-full border border-[var(--border-15)] bg-[var(--bg-secondary)]">
              <button onClick={() => setCiclo("mensal")} className={`font-body text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full cursor-pointer transition-all ${ciclo === "mensal" ? "yellow-bg" : "text-[var(--text-50)]"}`}>
                Mensal
              </button>
              <button onClick={() => setCiclo("anual")} className={`font-body text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full cursor-pointer transition-all flex items-center gap-2 ${ciclo === "anual" ? "yellow-bg" : "text-[var(--text-50)]"}`}>
                Anual
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${ciclo === "anual" ? "bg-[var(--text-on-yellow)] text-[var(--brand-yellow)]" : "blue-bg text-white"}`}>
                  -17%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {planos.map((p, i) => (
              <div key={i} className={`plan-card rounded-2xl p-8 relative ${!p.destaque ? "plan-card-border" : ""} ${p.destaque ? "blue-bg border-0 scale-105" : "bg-[var(--bg-secondary)]"}`}>
                {p.destaque && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 yellow-bg font-body font-bold text-xs px-4 py-1.5 rounded-full tracking-widest uppercase">
                    Mais popular
                  </div>
                )}
                <p className={`font-body text-xs tracking-widest uppercase mb-2 ${p.destaque ? "text-white/70" : "text-[var(--text-50)]"}`}>{p.nome}</p>

                <div className={`font-body text-xs line-through -mb-1 ${p.destaque ? "text-white/40" : "text-[var(--text-30)]"}`}>
                  R$ {p.precoAnterior}/mês
                </div>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`font-body text-sm ${p.destaque ? "text-white/50" : "text-[var(--text-40)]"}`}>R$</span>
                  <span className={`font-display font-bold text-5xl ${p.destaque ? "text-white" : "text-[var(--text-primary)]"}`}>{p.preco}</span>
                  <span className={`font-body text-xs mb-1 ${p.destaque ? "text-white/50" : "text-[var(--text-40)]"}`}>/mês</span>
                </div>

                {/* Preço cheio (mensal x 12) riscado para evidenciar o desconto anual */}
                    <div className={`font-body text-xs line-through -mb-1 ${p.destaque ? "text-white/40" : "text-[var(--text-30)]"}`}>
                      R$ {Number(p.preco) * 12}/ano
                    </div>
                    <div className="flex items-end gap-1 mb-2">
                      <span className={`font-body text-sm ${p.destaque ? "text-white/50" : "text-[var(--text-40)]"}`}>R$</span>
                      <span className={`font-display font-bold text-5xl ${p.destaque ? "text-white" : "text-[var(--text-primary)]"}`}>{p.precoAnual}</span>
                      <span className={`font-body text-xs mb-1 ${p.destaque ? "text-white/50" : "text-[var(--text-40)]"}`}>/ano</span>
                    </div>
                    <p className={`font-body text-xs -mt-1 mb-1 ${p.destaque ? "text-white/60" : "text-[var(--text-40)]"}`}>
                      equivale a R$ {Math.round(Number(p.precoAnual) / 12)}/mês · pagamento único anual
                    </p>
                )}

                <div className="flex flex-col gap-1 mb-6">
                  <span className={`font-body text-xs ${p.destaque ? "text-white/70" : "text-[var(--text-50)]"}`}>📸 Fotos: {p.foto}</span>
                  <span className={`font-body text-xs ${p.destaque ? "text-white/70" : "text-[var(--text-50)]"}`}>✍️ Copy: {p.copy}</span>
                </div>
                <ul className="space-y-2.5 mb-8">
                  {p.itens.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="material-icons yellow text-sm mt-0.5 flex-shrink-0">check</span>
                      <span className={`font-body text-sm ${p.destaque ? "text-white/85" : "text-[var(--text-70)]"}`}>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contato"
                  className={`block text-center font-body font-semibold text-xs tracking-widest uppercase py-3.5 rounded-full cursor-pointer transition-all ${p.destaque ? "yellow-bg hover:opacity-90" : "border border-[var(--border-20)] text-[var(--text-primary)] hover:border-[var(--brand-yellow)] hover:text-[var(--brand-yellow)]"}`}>
                  Solicitar Orçamento
                </a>
              </div>
            ))}
          </div>

          {/* CARD DE SERVIÇO ADICIONAL ADAPTÁVEL (Tema Claro / Escuro) */}
          <div className="mt-16 border border-white/10 bg-[#111111] rounded-2xl p-6 max-w-2xl mx-auto text-center transition-all duration-300">
            <p className="font-body text-xs tracking-widest uppercase mb-2 font-semibold yellow">
              Serviço adicional
            </p>
            <h3 className="font-body font-bold mb-1 text-xl text-white">
              Ensaio Fotográfico Profissional
            </h3>
            <p className="font-body text-sm mb-4 leading-relaxed text-white/60">
              Uma equipe profissional vai até o seu negócio para fotografar o espaço, produtos e equipe. Fotos entregues tratadas e prontas para o site e redes sociais.
            </p>
            <p className="font-display font-bold text-4xl my-3 yellow">
              R$ 1.500
            </p>
            <p className="font-body text-xs mt-2 text-white/40 font-medium">
              Já incluso no Plano Premium · Desconto automático se você fornecer as fotos
            </p>
          </div>
        </div>
      </section>
      
      {/* ─── FAQ ─────────────────────────────────────────── */}
      <section id="faq" className="py-28 bg-[var(--bg-secondary)] border-b border-[var(--border-5)]">
        <div className="container max-w-3xl">
          <div className="mb-14">
            <p className="font-body text-xs tracking-widest uppercase text-[var(--text-40)] mb-3">Dúvidas</p>
            <h2 className="font-display font-bold text-5xl md:text-6xl text-[var(--text-primary)]">FAQ</h2>
          </div>
          <div className="divide-y divide-[var(--border-8)]">
            {faq.map((item, i) => (
              <div key={i}>
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-start justify-between py-6 text-left gap-6 cursor-pointer">
                  <span className="font-body font-medium text-[var(--text-primary)]">{item.p}</span>
                  <span className={`material-icons yellow transition-transform duration-300 flex-shrink-0 mt-0.5 ${activeFaq === i ? "rotate-45" : ""}`}>add</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? "max-h-40 pb-6" : "max-h-0"}`}>
                  <p className="font-body text-sm text-[var(--text-55)] leading-relaxed">{item.r}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ──────────────────────────────────── */}
      <section className="py-24 blue-bg border-b border-[var(--border-5)]">
        <div className="container text-center">
          <p className="font-body text-xs tracking-widest uppercase text-white/60 mb-4">Pronto para começar?</p>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white leading-tight mb-6">
            Seu site pode estar no ar<br />
            <span className="font-display yellow">ainda essa semana</span>
          </h2>
          <p className="font-body text-white/70 mb-10 max-w-lg mx-auto">
            Sem enrolação. Sem burocracia. Você foca no seu negócio e a gente cuida da sua presença digital.
          </p>
          <a href="#contato"
            className="inline-block yellow-bg font-body font-semibold text-sm px-10 py-4 rounded-full cursor-pointer hover:opacity-90 transition-opacity">
            ORÇAMENTO GRATUITO
          </a>
        </div>
      </section>

      {/* ─── CONTATO ─────────────────────────────────────── */}
      <section id="contato" className="py-28 bg-[var(--bg-primary)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-[var(--text-40)] mb-4">Fale com a gente</p>
              <h2 className="font-display font-bold text-5xl md:text-6xl text-[var(--text-primary)] leading-none mb-8">
                Vamos criar algo{" "}
                <span className="font-display yellow">incrível juntos?</span>
              </h2>
              <p className="font-body text-[var(--text-50)] leading-relaxed max-w-sm mb-12">
                Responderemos em até 4 horas úteis. Se preferir algo mais rápido, envie uma mensagem pelo WhatsApp.
              </p>
              <div className="space-y-5">
                {[
                  { icone: "phone",    titulo: "WhatsApp",    info: "(22) 99617-3383" },
                  { icone: "mail",     titulo: "E-mail",      info: "hefezzia@gmail.com" },
                  { icone: "schedule", titulo: "Atendimento", info: "Seg–Sex: 9h–18h" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="material-icons yellow">{item.icone}</span>
                    <div>
                      <p className="font-body text-xs text-[var(--text-30)] uppercase tracking-wider">{item.titulo}</p>
                      <p className="font-body text-sm text-[var(--text-70)]">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/5522996173383"
                className="inline-flex items-center gap-3 yellow-bg font-body font-semibold text-sm px-6 py-4 rounded-full cursor-pointer hover:opacity-90 transition-opacity mt-8">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.549 4.109 1.514 5.845L.057 23.272a.75.75 0 00.921.921l5.442-1.453A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.896 0-3.67-.523-5.185-1.432l-.371-.221-3.853 1.03 1.034-3.837-.229-.381A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Falar pelo WhatsApp
              </a>
            </div>

            <form onSubmit={(e) => {
                if (!e.currentTarget.checkValidity()) e.preventDefault();
              }} className="space-y-5">
              <input type="text" placeholder="Nome completo *" required value={nameValue} onInput={handleName}
                className="w-full bg-transparent border-b border-[var(--border-15)] text-[var(--text-primary)] px-0 py-4 text-sm font-body focus:outline-none focus:border-[var(--brand-yellow)] transition-colors placeholder:text-[var(--text-40)]" />

              <input type="text" placeholder="Nome do negócio *" required
                className="w-full bg-transparent border-b border-[var(--border-15)] text-[var(--text-primary)] px-0 py-4 text-sm font-body focus:outline-none focus:border-[var(--brand-yellow)] transition-colors placeholder:text-[var(--text-40)]" />

              <input type="email" placeholder="E-mail *" required
                className="w-full bg-transparent border-b border-[var(--border-15)] text-[var(--text-primary)] px-0 py-4 text-sm font-body focus:outline-none focus:border-[var(--brand-yellow)] transition-colors placeholder:text-[var(--text-40)]" />

              <input type="tel" placeholder="WhatsApp (com DDD) - Opcional" value={phoneValue} onInput={handlePhone}
                className="w-full bg-transparent border-b border-[var(--border-15)] text-[var(--text-primary)] px-0 py-4 text-sm font-body focus:outline-none focus:border-[var(--brand-yellow)] transition-colors placeholder:text-[var(--text-40)]" />

              <select required className="w-full bg-transparent border-b border-[var(--border-15)] text-[var(--text-40)] px-0 py-4 text-sm font-body focus:outline-none focus:border-[var(--brand-yellow)] transition-colors appearance-none cursor-pointer">
                <option value="" className="bg-[var(--bg-primary)]">Plano de interesse *</option>
                <option value="silver" className="bg-[var(--bg-primary)]">Silver — MENSAL</option>
                <option value="silver" className="bg-[var(--bg-primary)]">Silver — ANUAL</option>
                <option value="gold" className="bg-[var(--bg-primary)]">Gold — MENSAL</option>
                <option value="gold" className="bg-[var(--bg-primary)]">Gold — ANUAL</option>
                <option value="premium" className="bg-[var(--bg-primary)]">Premium — MENSAL</option>
                <option value="premium" className="bg-[var(--bg-primary)]">Premium — ANUAL</option>
                <option value="nao-sei" className="bg-[var(--bg-primary)]">Ainda não sei</option>
              </select>

              <select required className="w-full bg-transparent border-b border-[var(--border-15)] text-[var(--text-40)] px-0 py-4 text-sm font-body focus:outline-none focus:border-[var(--brand-yellow)] transition-colors appearance-none cursor-pointer">
                <option value="" className="bg-[var(--bg-primary)]">Segmento do negócio *</option>
                <option className="bg-[var(--bg-primary)]">Barbearia / Salão</option>
                <option className="bg-[var(--bg-primary)]">Restaurante / Alimentação</option>
                <option className="bg-[var(--bg-primary)]">Saúde / Estética</option>
                <option className="bg-[var(--bg-primary)]">Fitness / Personal</option>
                <option className="bg-[var(--bg-primary)]">Jurídico / Contabilidade</option>
                <option className="bg-[var(--bg-primary)]">Pet Shop / Veterinário</option>
                <option className="bg-[var(--bg-primary)]">Outro</option>
              </select>

              <textarea placeholder="Conta um pouco sobre o seu negócio (opcional)" rows={3}
                className="w-full bg-transparent border-b border-[var(--border-15)] text-[var(--text-primary)] px-0 py-4 text-sm font-body focus:outline-none focus:border-[var(--brand-yellow)] transition-colors resize-none placeholder:text-[var(--text-40)]" />

              <button type="submit" className="w-full yellow-bg font-body font-semibold text-sm py-4 rounded-full hover:opacity-90 transition-opacity mt-4 scale-100 active:scale-98 cursor-pointer">
                Enviar Mensagem
              </button>
              <p className="font-body text-xs text-[var(--text-25)] text-center">
                Respondemos em até 4 horas úteis. Seus dados não são compartilhados.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────── */}
      <footer className="py-8 border-t border-[var(--border-5)] bg-[var(--bg-tertiary)]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="font-display font-bold text-xl text-[var(--text-primary)]">
            Hefe<span className="font-display yellow">zz</span>ia
          </div>
          <p className="font-body text-xs text-[var(--text-25)]">
            © {new Date().getFullYear()} · Hefezzia · Desenvolvimento Web · Todos os direitos reservados
          </p>
          <p className="font-body text-xs text-[var(--text-25)]">
            hefezzia@gmail.com · (22) 99617-3383
          </p>
        </div>
      </footer>

    </main>
  );
}
