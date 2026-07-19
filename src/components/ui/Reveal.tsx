import type { ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article';
};

export default function Reveal({ children, className = '', delay = 0, as = 'div' }: Props) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const Tag = as as 'div';
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
