import {
  Twitch,
  Youtube,
  Twitter,
  Send,
  MessageCircle,
  Heart,
  type LucideIcon,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { socials, type SocialIcon } from '../../data/socials';

const iconMap: Record<SocialIcon, LucideIcon> = {
  Twitch,
  Youtube,
  Twitter,
  Send,
  MessageCircle,
  Heart,
};

const toneClass: Record<string, string> = {
  coral: 'from-coral/20 via-pink-warm/30 to-cream text-coral',
  lavender: 'from-lavender/20 via-pink-soft/25 to-cream text-lavender',
  peach: 'from-peach/35 via-pink-warm/25 to-cream text-ink-brown',
  pink: 'from-pink-soft/30 via-pink-warm/20 to-cream text-lavender',
};

export default function Connect() {
  return (
    <section id="connect" className="section-pad relative">
      <div className="container-soft">
        <Reveal>
          <SectionHeading
            eyebrow="связаться"
            title={
              <>
                зайти <em className="not-italic text-coral">в гости</em>
              </>
            }
            subtitle="Где меня можно найти, поддержать и поболтать. Нажми — откроется в новой вкладке."
            align="center"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {socials.map((s, i) => {
              const Icon = iconMap[s.icon];
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`group relative overflow-hidden rounded-5xl bg-gradient-to-br ${toneClass[s.tone]} p-6 sm:p-7 shadow-soft ring-1 ring-white/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft`}
                  style={{ animationDelay: `${i * 60}ms` }}
                  aria-label={`Открыть ${s.name}`}
                >
                  <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/30 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
                  <div className="relative flex items-start justify-between">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-white/85 shadow-paper">
                      <Icon size={26} strokeWidth={1.8} />
                    </span>
                    <span className="rounded-full bg-white/70 px-3 py-1 font-ui text-[11px] uppercase tracking-widish">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="relative mt-6">
                    <p className="font-display text-3xl sm:text-4xl text-ink-brown leading-none">
                      {s.name}
                    </p>
                    <p className="mt-1 font-ui text-sm text-ink-soft/80">
                      {s.handle}
                    </p>
                  </div>
                  <div className="relative mt-6 flex items-center justify-between">
                    <span className="font-ui text-sm font-semibold text-ink-brown">
                      перейти →
                    </span>
                    <span className="font-jp text-2xl text-ink-brown/60 group-hover:translate-x-1 transition-transform">
                      ♪
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 mx-auto max-w-3xl text-center">
            <p className="font-jp text-2xl sm:text-3xl text-ink-soft/80">
              また明日ね — до завтра, лисята ♡
            </p>
            <p className="mt-3 font-ui text-sm text-ink-soft/70">
              сайт сделан вручную, с любовью и тёплым чаем
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
