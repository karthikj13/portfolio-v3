import { useReveal } from '../hooks/useReveal.js';

// Wrapper that fades + rises its children into view, with an optional stagger delay.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style = {}, children, ...rest }) {
  const ref = useReveal();
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: 'translateY(28px)',
        transition: `opacity .9s cubic-bezier(.16,1,.3,1) ${delay}s, transform .9s cubic-bezier(.16,1,.3,1) ${delay}s`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
