import { Heart, Coffee, Music, BookOpen } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { loreFacts, traits, mantra } from '../../data/lore';

const highlights = [
  { icon: Heart, label: 'ASMR у камина', tone: 'bg-coral/15 text-coral' },
  { icon: Coffee, label: 'Чайные стримы', tone: 'bg-peach/40 text-ink-brown' },
  { icon: Music, label: 'Совместные джемы', tone: 'bg-pink-soft/30 text-lavender' },
  { icon: BookOpen, label: 'Деликатные игры', tone: 'bg-lavender/20 text-lavender' },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-soft">
        <Reveal>
          <SectionHeading
            eyebrow="персонаж"
            title={<>немного <em className="not-italic text-coral">обо мне</em></>}
            subtitle="Лисичка-мечтательница из весеннего леса. Я стримлю, чтобы создавать тёплое пространство, где можно замедлиться."
          />
        </Reveal>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-stretch">
          {/* Левая — текст и цитата */}
          <Reveal className="order-2 lg:order-1" delay={100}>
            <div className="glass rounded-5xl p-7 sm:p-10 shadow-soft h-full flex flex-col">
              <p className="font-jp text-3xl sm:text-4xl text-ink-brown leading-snug">
                {mantra.jp}
              </p>
              <p className="mt-3 font-ui text-lg sm:text-xl text-ink-soft">
                — {mantra.ru}.
              </p>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-lavender/40 to-transparent" />

              <p className="mt-8 font-ui text-base sm:text-lg text-ink-soft leading-relaxed">
                Привет! Я — MeLissa. Рыжая лисичка, которая верит, что уют
                спасает миры. Я люблю тёплые пледы, дораяки, длинные ночные
                стримы и тишину, в которой слышно, как за стеной идёт дождь.
                На стримах мы играем, болтаем, иногда молчим — и это тоже
                уютно.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {traits.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-white/70 px-3.5 py-1.5 font-ui text-sm text-ink-brown shadow-paper"
                  >
                    #{t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Правая — карточка-референс */}
          <Reveal className="order-1 lg:order-2" delay={200}>
            <div className="relative h-full rounded-5xl bg-gradient-to-br from-pink-warm via-cream to-peach p-7 sm:p-10 shadow-soft overflow-hidden">
              <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-coral/40 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-lavender/40 blur-2xl" />

              <h3 className="relative font-display text-3xl text-ink-brown">
                референс персонажа
              </h3>
              <p className="relative mt-1 font-ui text-sm text-ink-soft/80">
                маленькая шпаргалка для художников
              </p>

              <dl className="relative mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {loreFacts.map((f) => (
                  <div
                    key={f.label}
                    className="rounded-3xl bg-white/70 px-4 py-3 shadow-paper"
                  >
                    <dt className="font-ui text-[11px] uppercase tracking-widish text-lavender">
                      {f.label}
                    </dt>
                    <dd className="mt-1 font-ui text-sm sm:text-base text-ink-brown">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="relative mt-7 grid grid-cols-2 sm:grid-cols-4 gap-2">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className={`flex flex-col items-center justify-center gap-1.5 rounded-3xl ${h.tone} px-3 py-4 text-center`}
                  >
                    <h.icon size={20} />
                    <span className="font-ui text-[11px] sm:text-xs font-medium leading-tight">
                      {h.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
