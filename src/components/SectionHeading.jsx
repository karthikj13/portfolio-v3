import Reveal from './Reveal.jsx';

export default function SectionHeading({ number, title, className = '' }) {
  return (
    <Reveal className={`mb-[50px] flex items-baseline gap-[18px] ${className}`}>
      <span className="font-mono text-[13px] tracking-[.22em] text-accent">{number}</span>
      <h2 className="m-0 font-display text-[clamp(32px,5vw,60px)] font-extrabold leading-none tracking-[-.02em] text-ink">
        {title}
      </h2>
    </Reveal>
  );
}
