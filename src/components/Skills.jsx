import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { skills, marqueeTags } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section id="skills" className="relative z-[5] py-[clamp(80px,10vh,130px)]">
      <div className="mx-auto max-w-[1180px] px-[clamp(24px,6vw,120px)]">
        <SectionHeading number="04" title="Tech Stack" />

        <Reveal delay={0.1} className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 md:grid-cols-5">
          {skills.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-white/[.08] bg-white/[.02] px-[22px] py-6"
            >
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[.16em] text-accent">
                {cat.title}
              </div>
              <div className="flex flex-col gap-[11px]">
                {cat.items.map((item) => (
                  <span key={item} className="text-[15.5px] text-soft">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      <Reveal
        delay={0.2}
        className="relative mt-[46px] overflow-hidden"
        style={{
          opacity: 0,
          transform: 'none',
          transition: 'opacity 1s ease .2s',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)',
          maskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)',
        }}
      >
        <div className="flex w-max gap-3.5 animate-marquee">
          {marqueeTags.map((m, i) => (
            <span
              key={`${m}-${i}`}
              className="whitespace-nowrap rounded-full border border-white/10 px-[22px] py-[11px] font-mono text-[15px] text-[#c9c4d6]"
            >
              {m}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
