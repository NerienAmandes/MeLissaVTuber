import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const links = [
  { to: '/about', label: 'Обо мне', short: 'обо мне', emoji: '✿' },
  { to: '/schedule', label: 'Расписание', short: 'расписание', emoji: '☾' },
  { to: '/music', label: 'Музыка', short: 'музыка', emoji: '♪' },
  { to: '/vibes', label: 'Вайбы', short: 'вайбы', emoji: '❀' },
  { to: '/connect', label: 'Связаться', short: 'связаться', emoji: '✉' },
];

const routeMeta: Record<string, { label: string; emoji: string }> = {
  '/': { label: 'главная', emoji: '✦' },
  '/about': { label: 'обо мне', emoji: '✿' },
  '/schedule': { label: 'расписание', emoji: '☾' },
  '/vibes': { label: 'вайбы', emoji: '❀' },
  '/music': { label: 'музыка', emoji: '♪' },
  '/connect': { label: 'связаться', emoji: '✉' },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { theme, toggle } = useTheme();

  const current = routeMeta[location.pathname] ?? routeMeta['/'];

  // Закрываем мобильное меню при смене маршрута
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Лочим скролл, когда открыто мобильное меню
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'translate-y-2' : 'translate-y-4'
        }`}
      >
        <nav
          className={`container-soft flex items-center justify-between gap-3 sm:gap-4 rounded-full px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled
              ? 'glass shadow-paper ring-1 ring-coral/20'
              : 'bg-cream-soft/70 shadow-soft ring-1 ring-coral/15'
          }`}
          aria-label="Главная навигация"
        >
          {/* Лого + индикатор страницы */}
          <div className="flex items-center gap-3 min-w-0">
            <Link
              to="/"
              className="font-display text-2xl sm:text-3xl text-ink-brown tracking-tightish whitespace-nowrap"
              aria-label="MeLissa — на главную"
            >
              Me<span className="text-coral">·</span>Lissa
            </Link>
            <span
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-coral/15 px-2.5 py-1 font-ui text-[11px] font-semibold uppercase tracking-widish text-coral"
              aria-live="polite"
            >
              <span aria-hidden="true">{current.emoji}</span>
              <span>{current.label}</span>
            </span>
          </div>

          {/* Центральные ссылки (только десктоп) */}
          <ul className="hidden md:flex items-center gap-1 font-ui text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 transition-colors ${
                      isActive
                        ? 'text-ink-brown bg-white/70 shadow-paper'
                        : 'text-ink-brown/80 hover:text-ink-brown hover:bg-white/60'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Правая часть: тема + CTA + бургер */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={toggle}
              aria-label={
                theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'
              }
              title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-coral/20 text-coral hover:bg-coral/30 transition-colors"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              to="/connect"
              className="hidden sm:inline-flex items-center gap-2 font-ui text-sm font-bold rounded-full bg-coffee px-4 sm:px-5 py-2.5 text-cream shadow-soft hover:opacity-90 transition-opacity"
            >
              зайти в гости →
            </Link>
            {/* Бургер только на мобильных */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-coral/20 text-coral hover:bg-coral/30 transition-colors"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
        <span className="sr-only">Текущая страница: {location.pathname}</span>
      </header>

      {/* Мобильная панель: full-screen overlay */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-30 transition-opacity duration-300 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Затемнение */}
        <div
          className="absolute inset-0 bg-navy-deep/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        {/* Панель с ссылками */}
        <div
          className={`absolute inset-x-3 top-20 rounded-4xl glass shadow-soft ring-1 ring-coral/20 p-5 transition-transform duration-300 ${
            mobileOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `flex items-center justify-between gap-3 rounded-3xl px-4 py-3.5 font-ui text-lg transition-colors ${
                      isActive
                        ? 'text-coral bg-coral/10'
                        : 'text-ink-brown hover:bg-coral/10 hover:text-coral'
                    }`
                  }
                >
                  <span className="flex items-center gap-3">
                    <span aria-hidden="true" className="text-coral">
                      {l.emoji}
                    </span>
                    <span className="font-semibold">{l.label}</span>
                  </span>
                  <span aria-hidden="true" className="text-ink-soft/60">
                    →
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-coral/15 flex items-center justify-between gap-3">
            <span className="font-ui text-[11px] uppercase tracking-widish text-ink-soft/70">
              {current.emoji} {current.label}
            </span>
            <Link
              to="/connect"
              className="inline-flex items-center gap-2 font-ui text-sm font-bold rounded-full bg-coffee px-4 py-2.5 text-cream shadow-soft hover:opacity-90 transition-opacity"
            >
              зайти в гости →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
