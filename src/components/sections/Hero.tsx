import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { avatarUrl } from '../../data/visuals';
import { mantra } from '../../data/lore';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative section-pad pt-36 sm:pt-40 md:pt-44 overflow-hidden"
    >
      <div className="container-soft grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-10 lg:gap-16">
        {/* Левая колонка — текст */}
        <div className="relative z-10 flex flex-col items-start text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-[11px] uppercase tracking-widish text-lavender shadow-paper backdrop-blur">
            <Sparkles size={12} className="text-coral" />
            <span>vtuber · fox · вайб</span>
          </span>

          <h1 className="mt-6 font-display text-[clamp(4rem,12vw,9rem)] leading-[0.88] text-ink-brown tracking-tightish">
            Me<span className="text-coral">·</span>Lissa
          </h1>

          <p className="mt-2 font-jp text-2xl sm:text-3xl text-ink-soft/80 italic">
            {mantra.jp}
          </p>
          <p className="mt-1 font-ui text-base sm:text-lg text-ink-soft/90 max-w-md">
            {mantra.ru} — стримы, ASMR, тёплые разговоры у камина.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://twitch.tv/"
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 font-ui text-base font-semibold text-white shadow-pill transition-transform hover:-translate-y-0.5 hover:shadow-soft"
            >
              смотреть стрим
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full bg-white/70 px-6 py-3.5 font-ui text-base font-semibold text-ink-brown shadow-paper hover:bg-white transition-colors"
            >
              узнать больше
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm font-ui text-ink-soft/80">
            <span className="flex -space-x-2">
              <span className="h-7 w-7 rounded-full bg-coral border-2 border-cream" />
              <span className="h-7 w-7 rounded-full bg-pink-soft border-2 border-cream" />
              <span className="h-7 w-7 rounded-full bg-lavender border-2 border-cream" />
            </span>
            <span>уже с нами 2 400+ лисят</span>
          </div>
        </div>

        {/* Правая колонка — аватар */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-5xl shadow-soft ring-1 ring-white/60 bg-white/30">
            <img
              src={avatarUrl}
              alt="MeLissa — аниме-лисичка"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cream/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-full bg-white/95 dark:bg-[#404449]/95 px-4 py-2.5 shadow-paper backdrop-blur">
              <span className="flex items-center gap-2 font-ui text-sm text-ink-brown dark:text-white">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-soft-pulse rounded-full bg-coral opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-coral" />
                </span>
                скоро в эфире
              </span>
              <span className="font-display text-xl text-coral">♡</span>
            </div>
          </div>

          {/* Декоративные стикеры */}
          <div className="pointer-events-none absolute -top-6 -left-6 hidden sm:block animate-float">
            <div className="rounded-3xl bg-white/80 px-4 py-3 shadow-soft backdrop-blur">
              <span className="font-jp text-2xl text-ink-brown">こんにちは</span>
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-4 -right-2 hidden sm:block animate-float" style={{ animationDelay: '-3s' }}>
            <div className="rounded-full bg-coral px-4 py-2 font-ui text-sm font-semibold text-white shadow-pill">
              ✿ fox mode
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
