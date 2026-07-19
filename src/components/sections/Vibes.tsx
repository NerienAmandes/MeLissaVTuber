import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { vibeUrls, vibeTags } from '../../data/visuals';

export default function Vibes() {
  return (
    <section id="vibes" className="section-pad relative">
      <div className="container-soft">
        <Reveal>
          <SectionHeading
            eyebrow="вайбы"
            title={
              <>
                моё <em className="not-italic text-coral">настроение</em>
              </>
            }
            subtitle="Маленький мудборд из вещей, которые я люблю. Здесь — мой внутренний климат."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {vibeUrls.map((src, i) => (
              <figure
                key={src}
                className={`group relative overflow-hidden rounded-5xl shadow-soft ring-1 ring-white/40 ${
                  i === 0 ? 'sm:row-span-2 sm:aspect-[3/4] aspect-[4/3]' : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={src}
                  alt={vibeTags[i] ?? `вайб ${i + 1}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-brown/70 via-ink-brown/10 to-transparent opacity-80" />
                <figcaption className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <span className="font-display text-2xl sm:text-3xl text-white drop-shadow">
                    #{vibeTags[i] ?? `vibe${i + 1}`}
                  </span>
                  <span className="rounded-full bg-white/85 px-3 py-1 font-ui text-[11px] uppercase tracking-widish text-ink-brown">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
