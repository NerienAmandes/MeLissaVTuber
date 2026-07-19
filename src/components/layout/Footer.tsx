import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const links = [
  { to: '/about', label: 'обо мне' },
  { to: '/schedule', label: 'расписание' },
  { to: '/music', label: 'музыка' },
  { to: '/vibes', label: 'вайбы' },
  { to: '/connect', label: 'связаться' },
];

export default function Footer() {
  return (
    <footer className="relative pt-10 pb-10">
      <div className="container-soft">
        <div className="rounded-5xl glass px-6 sm:px-10 py-8 sm:py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-coral/20 text-coral">
              <Heart size={18} fill="currentColor" />
            </span>
            <div>
              <Link
                to="/"
                className="font-display text-2xl text-ink-brown leading-none hover:text-coral transition-colors"
              >
                Me·Lissa
              </Link>
              <p className="font-ui text-xs text-ink-soft/70 mt-1">
                © {new Date().getFullYear()} · все права у лисички
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 font-ui text-sm text-ink-soft/80">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="hover:text-coral transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="font-ui text-xs text-ink-soft/60">
            made with warmth · 焦らなくていいよ
          </p>
        </div>
      </div>
    </footer>
  );
}
