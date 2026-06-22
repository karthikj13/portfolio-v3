import HeroCanvas from './HeroCanvas.jsx';
import Reveal from './Reveal.jsx';
import { useParallax } from '../hooks/useParallax.js';
import { stats } from '../data/portfolio.js';

export default function Hero() {
  const blob1 = useParallax(0.18);
  const blob2 = useParallax(0.32);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-[clamp(24px,6vw,120px)]"
    >
      <div
        ref={blob1}
        className="absolute right-[-6%] top-[8%] z-[1] h-[560px] w-[560px] rounded-full blur-[30px] animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, color-mix(in srgb, var(--accent) 30%, transparent), transparent 62%)',
        }}
      />
      <div
        ref={blob2}
        className="absolute bottom-[-10%] left-[-4%] z-[1] h-[420px] w-[420px] rounded-full blur-[40px]"
        style={{
          background: 'radial-gradient(circle, color-mix(in srgb, var(--accent2) 22%, transparent), transparent 60%)',
        }}
      />

      <HeroCanvas />

      <div
        className="absolute inset-0 z-[3]"
        style={{
          background:
            'linear-gradient(90deg, #0b0a0f 0%, rgba(11,10,15,.82) 30%, rgba(11,10,15,.25) 62%, transparent 80%)',
        }}
      />

      <div className="relative z-[4] mx-auto w-full max-w-[1180px]">
        <Reveal className="mb-[34px] inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[.03] px-4 py-2">
          <span
            className="h-[7px] w-[7px] rounded-full bg-accent"
            style={{ boxShadow: '0 0 10px var(--accent)' }}
          />
          <span className="font-mono text-xs uppercase tracking-[.18em] text-[#c9c4d6]">
            Technology Architect · 8+ Years
          </span>
        </Reveal>

        <Reveal
          as="h1"
          delay={0.05}
          className="m-0 mb-1.5 animate-shimmer bg-clip-text font-display text-[clamp(46px,8.5vw,128px)] font-extrabold leading-[.92] tracking-[-.03em] text-transparent"
          style={{
            backgroundImage:
              'linear-gradient(100deg, #ffffff 0%, #ffffff 38%, var(--accent) 74%, var(--accent2) 100%)',
            backgroundSize: '220% auto',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Karthik J
        </Reveal>

        <Reveal
          as="p"
          delay={0.14}
          className="mt-[18px] max-w-[540px] text-[clamp(17px,2vw,21px)] leading-[1.6] text-[#b6b1c2]"
        >
          I architect scalable, high-concurrency systems — and the intelligent agents that run on them.
          Fintech, Web3, and PropTech at the edge of LLMs and blockchain.
        </Reveal>

        <Reveal delay={0.22} className="mt-[38px] flex flex-wrap gap-3.5">
          <a
            href="#projects"
            className="rounded-xl bg-accent px-7 py-[15px] font-mono text-[13px] font-medium uppercase tracking-[.06em] text-bg no-underline transition-[transform,box-shadow] duration-300 hover:-translate-y-[3px]"
            style={{ '--tw-shadow-color': 'var(--accent)' }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 16px 40px -12px var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
          >
            View Projects →
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/[.16] px-7 py-[15px] font-mono text-[13px] uppercase tracking-[.06em] text-ink no-underline transition-[border-color,background] duration-300 hover:bg-white/[.03]"
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--accent) 60%, transparent)')
            }
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.16)')}
          >
            Get in touch
          </a>
        </Reveal>

        <Reveal delay={0.34} className="mt-16 flex flex-wrap gap-[46px]">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-[34px] font-extrabold leading-none text-white">
                {s.value}
                {s.suffix && <span className="text-accent">{s.suffix}</span>}
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[.16em] text-faint">
                {s.label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      <div className="absolute bottom-[30px] left-1/2 z-[4] flex -translate-x-1/2 flex-col items-center gap-2.5">
        <span className="font-mono text-[10px] uppercase tracking-[.24em] text-faint">Scroll</span>
        <div className="relative h-10 w-px overflow-hidden bg-[linear-gradient(180deg,#6b6578,transparent)]">
          <span className="absolute left-[-1px] top-0 h-2.5 w-[3px] rounded-[2px] bg-accent animate-scroll-cue" />
        </div>
      </div>
    </section>
  );
}
