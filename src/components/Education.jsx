import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { education } from '../data/portfolio.js';

export default function Education() {
  return (
    <section id="education" className="relative z-[5] px-[clamp(24px,6vw,120px)] py-[clamp(80px,10vh,130px)]">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading number="05" title="Education" />

        <Reveal delay={0.1} className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
          {education.map((e) => (
            <div
              key={e.title}
              className="rounded-2xl border border-white/[.08] bg-white/[.02] px-[26px] py-[30px]"
            >
              <div className="mb-[18px] font-mono text-xs tracking-[.08em] text-accent">{e.period}</div>
              <h3 className="m-0 mb-1.5 font-display text-xl font-bold text-ink">{e.title}</h3>
              <p className="m-0 text-[14.5px] text-muted">{e.place}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
