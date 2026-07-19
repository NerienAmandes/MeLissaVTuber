import { Music, Disc3, Calendar, Clock, ArrowUpRight, Mic2 } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import Cover from '../components/ui/Cover';
import { songs, type Song } from '../data/songs';

const toneClass: Record<Song['tone'], string> = {
  coral: 'from-coral/25 via-pink-warm/20 to-cream/10 text-coral',
  lavender: 'from-lavender/30 via-pink-soft/20 to-cream/10 text-lavender',
  peach: 'from-peach/35 via-pink-warm/20 to-cream/10 text-peach',
  pink: 'from-pink-soft/30 via-pink-warm/15 to-cream/10 text-pink-soft',
  navy: 'from-coral/20 via-lavender/20 to-cream/10 text-coral',
  rose: 'from-coral/30 via-pink-soft/20 to-cream/10 text-coral',
};

const toneBorder: Record<Song['tone'], string> = {
  coral: 'ring-coral/30',
  lavender: 'ring-lavender/30',
  peach: 'ring-peach/40',
  pink: 'ring-pink-soft/30',
  navy: 'ring-coral/25',
  rose: 'ring-coral/40',
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function MusicPage() {
  const originals = songs.filter((s) => s.kind === 'original');
  const covers = songs.filter((s) => s.kind === 'cover');

  return (
    <>
      {/* Hero */}
      <section className="section-pad relative pt-36 sm:pt-40 md:pt-44 overflow-hidden">
        <div className="container-soft">
          <Reveal>
            <div className="flex flex-col items-start max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-coral/20 px-3 py-1.5 text-[11px] uppercase tracking-widish text-coral">
                <Mic2 size={12} />
                <span>вокал · музыка</span>
              </span>
              <h1 className="mt-6 font-display text-[clamp(3.5rem,11vw,8rem)] leading-[0.9] text-ink-brown tracking-tightish">
                пою <span className="text-coral">·</span> иногда
              </h1>
              <p className="mt-4 font-jp text-2xl sm:text-3xl text-ink-soft/80 italic">
                声に乗せて — передать через голос
              </p>
              <p className="mt-3 font-ui text-base sm:text-lg text-ink-soft/90 max-w-xl">
                Каверы на аниме-опенинги, баллады у камина и мои авторские
                вещи. Тут живёт то, что я иногда напеваю между стримов.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Сетка карточек */}
      <section className="section-pad relative pt-0">
        <div className="container-soft">
          <Reveal>
            <SectionHeading
              eyebrow="плейлист"
              title={
                <>
                  последние <em className="not-italic text-coral">записи</em>
                </>
              }
              subtitle={`${originals.length} авторских · ${covers.length} каверов`}
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {songs.map((song, i) => (
              <Reveal key={song.id} delay={i * 80}>
                <a
                  href={song.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`group relative flex flex-col overflow-hidden rounded-5xl glass shadow-soft ring-1 ${toneBorder[song.tone]} transition-all duration-500 hover:-translate-y-1 hover:shadow-soft`}
                  aria-label={`Слушать: ${song.title}`}
                >
                  {/* Обложка */}
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Cover
                      tone={song.tone}
                      title={song.title}
                      caption={song.caption}
                      seed={song.id}
                      className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent pointer-events-none" />

                    {/* Бейдж типа */}
                    <span
                      className={`absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-coffee/85 px-2.5 py-1 font-ui text-[10px] font-bold uppercase tracking-widish text-cream backdrop-blur`}
                    >
                      {song.kind === 'cover' ? (
                        <>
                          <Disc3 size={11} /> кавер
                        </>
                      ) : (
                        <>
                          <Music size={11} /> оригинал
                        </>
                      )}
                    </span>

                    {/* Продолжительность */}
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-cream/90 px-2.5 py-1 font-ui text-[11px] font-semibold text-coffee backdrop-blur">
                      <Clock size={11} />
                      {song.duration}
                    </span>

                    {/* Кнопка play поверх */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-cream text-coffee shadow-soft">
                        <svg
                          width="22"
                          height="24"
                          viewBox="0 0 22 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M21 12L1 23.6603V0.339746L21 12Z" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Контент карточки */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="font-display text-2xl sm:text-3xl text-ink-brown leading-tight">
                      {song.title}
                    </h3>
                    <p className="mt-1 font-ui text-sm text-ink-soft/80">
                      {song.artist}
                    </p>
                    <p className="mt-3 font-ui text-sm text-ink-soft/90 leading-relaxed line-clamp-3">
                      {song.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-[11px] font-ui text-ink-soft/70">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={12} className="text-coral" />
                        {formatDate(song.releaseDate)}
                      </span>
                      <span className="inline-flex items-center gap-1 font-semibold text-coral group-hover:translate-x-0.5 transition-transform">
                        слушать
                        <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </div>

                  {/* Декоративный фон-градиент (тёплый, незаметный) */}
                  <div
                    className={`pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${toneClass[song.tone]} opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70`}
                  />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA внизу */}
      <section className="section-pad pt-0">
        <div className="container-soft">
          <Reveal>
            <div className="rounded-5xl glass shadow-soft p-8 sm:p-10 text-center">
              <p className="font-jp text-2xl sm:text-3xl text-ink-soft/80">
                もっと聴きたい？ — хочешь ещё?
              </p>
              <p className="mt-2 font-ui text-base sm:text-lg text-ink-soft/80 max-w-xl mx-auto">
                Там — черновики, дубль два и шёпотом в микрофон. Подписывайся,
                чтобы не пропустить следующую.
              </p>
              <a
                href="https://soundcloud.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 font-ui text-base font-semibold text-cream shadow-pill hover:-translate-y-0.5 hover:shadow-soft transition-transform"
              >
                <Disc3 size={18} />
                открыть SoundCloud
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
