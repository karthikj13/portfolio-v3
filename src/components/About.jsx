import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { whatIDo } from '../data/portfolio.js';

const chips = ['Detail-oriented', 'Problem solver', 'Team player', 'Self-motivated'];
const domains = ['Fintech / Web3', 'E-commerce', 'PropTech'];

export default function About() {
  return (
    <section id="about" className="relative z-[5] px-[clamp(24px,6vw,120px)] py-[clamp(90px,12vh,150px)]">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading number="01" title="About" />

        <div className="grid grid-cols-1 items-start gap-[42px] md:grid-cols-[1.5fr_1fr] md:gap-[70px]">
          <Reveal delay={0.1}>
            <p className="m-0 mb-7 font-display text-[clamp(22px,2.6vw,34px)] font-semibold leading-[1.32] tracking-[-.01em] text-ink [text-wrap:pretty]">
              I design platforms that handle <span className="text-accent">high-volume transactions</span> and
              complex data ecosystems — built to scale, built to last.
            </p>
            <p className="m-0 mb-[18px] text-[17px] leading-[1.7] text-muted [text-wrap:pretty]">
              A Technology Architect with 8+ years across Fintech, E-commerce, and Real Estate (PropTech). I
              leverage Large Language Models for automated decision-making, and Blockchain for transparent asset
              tokenization and secure digital commerce.
            </p>
            <p className="m-0 text-[17px] leading-[1.7] text-muted [text-wrap:pretty]">
              From scraping engines to AI-powered valuation systems, microservices to agent architectures — I
              manage complexity so products move fast without breaking.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/10 px-[15px] py-2 font-mono text-xs tracking-[.04em] text-[#c9c4d6]"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col gap-3.5">
            <span className="mb-1 font-mono text-[11px] uppercase tracking-[.2em] text-faint">What I do</span>
            {whatIDo.map((item, i) => (
              <div
                key={item.id}
                className={`flex items-start gap-3.5 border-t border-white/[.08] py-4 ${
                  i === whatIDo.length - 1 ? 'border-b' : ''
                }`}
              >
                <span className="font-mono text-[13px] text-accent">{item.id}</span>
                <span className="text-[15.5px] leading-[1.5] text-soft">{item.text}</span>
              </div>
            ))}
            <div className="mt-3.5 flex flex-wrap gap-2">
              {domains.map((d) => (
                <span
                  key={d}
                  className="rounded-lg px-[13px] py-[7px] font-mono text-[11px] tracking-[.06em] text-[#e4cdff]"
                  style={{ background: 'color-mix(in srgb, var(--accent) 14%, transparent)' }}
                >
                  {d}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
