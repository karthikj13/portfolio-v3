const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
];

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-[60] flex items-center justify-between px-[clamp(20px,5vw,60px)] py-4 backdrop-blur-md bg-[linear-gradient(180deg,rgba(11,10,15,.78),rgba(11,10,15,0))]">
      <a href="#home" className="flex items-center gap-[11px] no-underline">
        <span
          className="grid h-[38px] w-[38px] place-items-center rounded-[11px] font-display text-[15px] font-extrabold text-white"
          style={{
            background: 'color-mix(in srgb, var(--accent) 16%, transparent)',
            border: '1px solid color-mix(in srgb, var(--accent) 42%, transparent)',
          }}
        >
          KJ
        </span>
        <span className="font-display text-[15.5px] font-bold text-ink">Karthik J</span>
      </a>

      <div className="hidden items-center gap-8 md:flex">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="font-mono text-xs uppercase tracking-[.14em] text-muted no-underline transition-colors duration-300 hover:text-white"
          >
            {l.label}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="rounded-full px-5 py-2.5 font-mono text-xs uppercase tracking-[.1em] text-white no-underline transition-[background,box-shadow] duration-300"
        style={{
          border: '1px solid color-mix(in srgb, var(--accent) 42%, transparent)',
          background: 'color-mix(in srgb, var(--accent) 12%, transparent)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'color-mix(in srgb, var(--accent) 26%, transparent)';
          e.currentTarget.style.boxShadow = '0 0 24px -4px color-mix(in srgb, var(--accent) 70%, transparent)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'color-mix(in srgb, var(--accent) 12%, transparent)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        Let's talk
      </a>
    </nav>
  );
}
