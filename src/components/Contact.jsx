import Reveal from './Reveal.jsx';
import { useParallax } from '../hooks/useParallax.js';
import { contact } from '../data/portfolio.js';

function ContactCard({ label, value, href, target }) {
  return (
    <a
      href={href}
      target={target}
      rel={target ? 'noopener' : undefined}
      className="rounded-[14px] border border-white/[.08] bg-white/[.02] p-6 text-left no-underline transition-[border-color,background] duration-[400ms]"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--accent) 50%, transparent)';
        e.currentTarget.style.background = 'rgba(255,255,255,.04)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)';
        e.currentTarget.style.background = 'rgba(255,255,255,.02)';
      }}
    >
      <div className="mb-2.5 font-mono text-[11px] uppercase tracking-[.16em] text-faint">{label}</div>
      <div className="text-[15px] text-ink">{value}</div>
    </a>
  );
}

export default function Contact() {
  const blob = useParallax(0.1);

  return (
    <section
      id="contact"
      className="relative z-[5] overflow-hidden px-[clamp(24px,6vw,120px)] pb-[60px] pt-[clamp(90px,12vh,150px)]"
    >
      <div
        ref={blob}
        className="absolute left-1/2 top-0 z-0 h-[520px] w-[760px] -translate-x-1/2 rounded-full blur-[50px] animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, color-mix(in srgb, var(--accent) 22%, transparent), transparent 64%)',
        }}
      />

      <div className="relative z-[2] mx-auto max-w-[1000px] text-center">
        <Reveal>
          <span className="font-mono text-[13px] tracking-[.22em] text-accent">06 / Contact</span>
          <h2 className="m-0 mt-6 font-display text-[clamp(40px,8vw,108px)] font-extrabold leading-[.95] tracking-[-.03em] text-ink [text-wrap:balance]">
            Let's build
            <br />
            something{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(100deg, var(--accent), var(--accent2))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              exceptional.
            </span>
          </h2>
          <p className="mx-auto mt-[26px] max-w-[520px] text-[18px] leading-[1.6] text-muted">
            Open to architecture, AI, and full-stack roles. Have a hard problem at scale? Let's talk.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-[38px] inline-flex items-center gap-3 rounded-full bg-accent px-[34px] py-[17px] font-mono text-sm font-medium tracking-[.04em] text-bg no-underline transition-[transform,box-shadow] duration-300 hover:-translate-y-[3px]"
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 20px 50px -14px var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
          >
            {contact.email} →
          </a>
        </Reveal>

        <Reveal delay={0.12} className="mt-[60px] grid grid-cols-1 gap-4 md:grid-cols-3">
          <ContactCard label="Email" value={contact.email} href={`mailto:${contact.email}`} />
          <ContactCard label="Phone" value={contact.phone} href={`tel:${contact.phoneHref}`} />
          <ContactCard
            label="LinkedIn"
            value={contact.linkedin}
            href={contact.linkedinUrl}
            target="_blank"
          />
        </Reveal>
      </div>

      <div className="relative z-[2] mx-auto mt-[90px] flex max-w-[1180px] flex-wrap items-center justify-between gap-3 border-t border-white/[.08] pt-7">
        <span className="font-display text-[15px] font-bold text-ink">Karthik J</span>
        <span className="font-mono text-[11px] tracking-[.06em] text-faint">
          Designed &amp; engineered · Bengaluru · 2026
        </span>
      </div>
    </section>
  );
}
