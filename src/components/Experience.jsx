import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { experience } from '../data/portfolio.js';

export default function Experience() {
  return (
    <section id="work" className="relative z-[5] px-[clamp(24px,6vw,120px)] py-[clamp(80px,10vh,130px)]">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading number="02" title="Experience" className="!mb-[56px]" />

        {experience.map((job, i) => (
          <Reveal
            key={job.company}
            delay={i * 0.06}
            className={`grid grid-cols-1 gap-9 border-t border-white/10 py-[30px] md:grid-cols-[160px_1fr] ${
              i === experience.length - 1 ? 'border-b' : ''
            }`}
          >
            <div>
              <div
                className={`font-mono text-[13px] tracking-[.08em] ${
                  job.current ? 'text-accent' : 'text-muted'
                }`}
              >
                {job.period}
              </div>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="m-0 font-display text-[23px] font-bold text-ink">{job.role}</h3>
                <span className="font-mono text-xs text-muted">· {job.company}</span>
              </div>
              <div className="mb-3 mt-[5px] font-mono text-[11.5px] text-faint">{job.location}</div>
              <p className="m-0 max-w-[660px] text-[15.5px] leading-[1.65] text-muted">{job.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
