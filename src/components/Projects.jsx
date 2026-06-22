import Reveal from './Reveal.jsx';
import { projects } from '../data/portfolio.js';

function ProjectCard({ p }) {
  return (
    <article
      className="relative flex h-full flex-col gap-3.5 overflow-hidden rounded-[18px] border border-white/[.08] bg-[linear-gradient(160deg,rgba(255,255,255,.05),rgba(255,255,255,.012))] px-7 pb-[26px] pt-[30px] transition-[transform,border-color,box-shadow] duration-500"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-7px)';
        e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--accent) 55%, transparent)';
        e.currentTarget.style.boxShadow = '0 28px 64px -30px color-mix(in srgb, var(--accent) 75%, transparent)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs tracking-[.18em] text-accent">{p.id}</span>
        <span className="font-mono text-[11px] tracking-[.1em] text-faint">{p.duration}</span>
      </div>
      <h3 className="m-0 font-display text-2xl font-bold leading-[1.12] text-ink">{p.name}</h3>
      <span
        className="self-start rounded-[7px] px-[11px] py-[5px] font-mono text-[11px] tracking-[.04em] text-[#e4cdff]"
        style={{ background: 'color-mix(in srgb, var(--accent) 16%, transparent)' }}
      >
        {p.kind}
      </span>
      <p className="m-0 mt-1 flex-1 text-[14.5px] leading-[1.62] text-muted [text-wrap:pretty]">{p.desc}</p>
      <div className="mt-1.5 flex flex-wrap gap-[7px]">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-[7px] border border-white/10 px-2.5 py-[5px] font-mono text-[11px] text-[#8a8498]"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-[5] px-[clamp(24px,6vw,120px)] py-[clamp(80px,10vh,130px)]">
      <div className="mx-auto max-w-[1180px]">
        <Reveal className="mb-[54px] flex flex-wrap items-baseline justify-between gap-3.5">
          <div className="flex items-baseline gap-[18px]">
            <span className="font-mono text-[13px] tracking-[.22em] text-accent">03</span>
            <h2 className="m-0 font-display text-[clamp(32px,5vw,60px)] font-extrabold leading-none tracking-[-.02em] text-ink">
              Selected Work
            </h2>
          </div>
          <span className="font-mono text-xs tracking-[.08em] text-faint">10 projects · 2018 — 2025</span>
        </Reveal>

        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.06}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
