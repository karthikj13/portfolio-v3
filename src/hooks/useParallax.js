import { useEffect, useRef } from 'react';

// Translates an element on the Y axis as the page scrolls (data-parallax in the design).
export function useParallax(speed = 0.2) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop || 0;
      el.style.transform = `translate3d(0, ${(st * speed).toFixed(1)}px, 0)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return ref;
}
