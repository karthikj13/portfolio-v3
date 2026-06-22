import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    const bar = ref.current;
    const onScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop || 0;
      const max = document.documentElement.scrollHeight - window.innerHeight || 1;
      if (bar) bar.style.width = Math.min(100, (st / max) * 100) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed left-0 top-0 z-[70] h-0.5 w-0 bg-[linear-gradient(90deg,var(--accent),var(--accent2))]"
      style={{ boxShadow: '0 0 12px color-mix(in srgb, var(--accent) 80%, transparent)' }}
    />
  );
}
