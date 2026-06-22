import { useEffect, useRef } from 'react';

// Mirrors the design's initReveals(): fade + rise elements into view on scroll,
// with a safety fallback that force-reveals everything after a few seconds.
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal();
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' }
    );

    io.observe(el);
    const safety = setTimeout(reveal, 3500);

    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, []);

  return ref;
}
