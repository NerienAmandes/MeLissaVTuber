import type { CoverTone } from '../../data/songs';

type Props = {
  tone: CoverTone;
  title: string;
  caption?: string;
  className?: string;
  /** Уникальный seed, чтобы узоры не повторялись на разных карточках */
  seed?: string;
};

/** Палитра обложки под каждый тон (мягкие тёплые/холодные сочетания). */
const palette: Record<
  CoverTone,
  { from: string; to: string; accent: string; ink: string }
> = {
  coral: { from: '#f6c9a4', to: '#e8a48c', accent: '#fff5e8', ink: '#3d2e2a' },
  lavender: { from: '#d4a4b0', to: '#a37d99', accent: '#fbeef3', ink: '#3d2e2a' },
  peach: { from: '#f6c9a4', to: '#e8b8a8', accent: '#fff0e0', ink: '#3d2e2a' },
  pink: { from: '#e8b8a8', to: '#d4a4b0', accent: '#fde6e6', ink: '#3d2e2a' },
  navy: { from: '#596f9a', to: '#2a3142', accent: '#f0c9a4', ink: '#f0f3fa' },
  rose: { from: '#e89a8a', to: '#b85860', accent: '#fff0e6', ink: '#3d2e2a' },
};

/** Простой детерминированный хэш для seed (чтобы узор был стабильным). */
function hash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export default function Cover({ tone, title, caption, className = '', seed = title }: Props) {
  const p = palette[tone];
  const h = hash(seed);

  // Несколько декоративных элементов, расположение зависит от seed
  const cx1 = 25 + (h % 30);
  const cy1 = 30 + ((h >> 3) % 25);
  const cx2 = 55 + ((h >> 5) % 30);
  const cy2 = 60 + ((h >> 7) % 25);
  const r1 = 22 + (h % 10);
  const r2 = 14 + ((h >> 2) % 8);
  const angle = (h % 12) - 6;
  const accentOpacity = 0.18 + ((h >> 9) % 12) / 100;
  const stripeY = 20 + ((h >> 11) % 50);

  // Инициалы для крупной типографики (первые 2 буквы заголовка)
  const initials =
    title
      .replace(/[^\p{L}\p{N}]/gu, '')
      .slice(0, 2)
      .toUpperCase() || '♪';

  const id = `g-${h.toString(36)}`;

  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label={`Обложка: ${title}`}
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p.from} />
          <stop offset="100%" stopColor={p.to} />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={p.accent} stopOpacity={0.55} />
          <stop offset="100%" stopColor={p.accent} stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-noise`} x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            seed={h % 1000}
          />
          <feColorMatrix
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.18 0"
          />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
      </defs>

      {/* Фон-градиент */}
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />

      {/* Декоративный круг-сияние */}
      <circle cx={cx1 * 4} cy={cy1 * 4} r={r1 * 4} fill={`url(#${id}-glow)`} />
      <circle
        cx={cx2 * 4}
        cy={cy2 * 4}
        r={r2 * 4}
        fill={p.accent}
        opacity={accentOpacity}
      />

      {/* Диагональная лента-акцент */}
      <g transform={`rotate(${angle} 200 200)`}>
        <rect
          x="-20"
          y={stripeY * 4}
          width="440"
          height="6"
          fill={p.accent}
          opacity="0.55"
        />
        <rect
          x="-20"
          y={(stripeY + 14) * 4}
          width="440"
          height="2"
          fill={p.accent}
          opacity="0.35"
        />
      </g>

      {/* Инициалы — крупно */}
      <text
        x="200"
        y="220"
        textAnchor="middle"
        fontFamily="Comfortaa, system-ui, sans-serif"
        fontWeight="700"
        fontSize="160"
        fill={p.ink}
        opacity="0.16"
      >
        {initials}
      </text>

      {/* Заголовок — с лёгкой тенью для читаемости */}
      <text
        x="200"
        y="332"
        textAnchor="middle"
        fontFamily="Comfortaa, system-ui, sans-serif"
        fontWeight="700"
        fontSize="28"
        fill={p.ink}
        letterSpacing="-0.5"
      >
        {title.length > 22 ? title.slice(0, 20) + '…' : title}
      </text>

      {caption && (
        <text
          x="200"
          y="360"
          textAnchor="middle"
          fontFamily="Nunito, system-ui, sans-serif"
          fontWeight="600"
          fontSize="13"
          fill={p.ink}
          opacity="0.7"
          letterSpacing="3"
        >
          {caption.toUpperCase()}
        </text>
      )}

      {/* Лёгкая виньетка */}
      <rect
        width="400"
        height="400"
        fill="none"
        stroke={p.ink}
        strokeOpacity="0.08"
        strokeWidth="8"
      />
    </svg>
  );
}
