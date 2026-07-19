import type { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
};

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }: Props) {
  return (
    <div
      className={`mb-12 flex flex-col gap-3 ${
        align === 'center' ? 'items-center text-center' : 'items-start text-left'
      }`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-[11px] uppercase tracking-widish text-lavender shadow-paper">
          <span className="h-1.5 w-1.5 rounded-full bg-coral" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-ink-brown leading-[0.95]">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl font-ui text-base sm:text-lg text-ink-soft/90">
          {subtitle}
        </p>
      )}
    </div>
  );
}
