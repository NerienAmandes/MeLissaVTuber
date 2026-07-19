export type SongKind = 'cover' | 'original';
export type CoverTone = 'coral' | 'lavender' | 'peach' | 'pink' | 'navy' | 'rose';

export interface Song {
  id: string;
  title: string;
  artist: string;
  kind: SongKind;
  description: string;
  releaseDate: string;
  duration: string;
  url: string;
  /** Тон обложки (фон) и кольца/бейджей */
  tone: CoverTone;
  /** Промпт для генерации обложки (если подключим внешний API в будущем) */
  prompt: string;
  /** Подпись снизу на обложке */
  caption?: string;
}

export const songs: Song[] = [
  {
    id: 'fox-waltz',
    title: 'Лисий вальс',
    artist: 'MeLissa',
    kind: 'original',
    description:
      'Моя первая авторская песня — про рыжую тень, что танцует между сосен на закате.',
    releaseDate: '2026-03-08',
    duration: '3:42',
    url: 'https://soundcloud.com/',
    tone: 'coral',
    prompt:
      'A cute anime fox girl in a flowing cream dress dancing a slow waltz in an autumn forest, golden leaves swirling around, soft sunset light, warm color palette, dreamy illustration style, album cover art',
    caption: 'vol. I',
  },
  {
    id: 'sparkle-cover',
    title: 'Sparkle',
    artist: 'RADWIMPS · кавер',
    kind: 'cover',
    description:
      'Нежный кавер на тему из «Твоё имя». Тихо, как первый снег в декабре.',
    releaseDate: '2026-02-14',
    duration: '4:18',
    url: 'https://soundcloud.com/',
    tone: 'lavender',
    prompt:
      'Anime style album cover, soft pink and blue gradient sky with glowing stars, a small silhouette of a girl on a rooftop looking at falling stars, dreamy nostalgic mood, sparkles, watercolor style',
    caption: 'cover',
  },
  {
    id: 'tea-time',
    title: 'Тёплый чай',
    artist: 'MeLissa',
    kind: 'original',
    description:
      'Колыбельная для тех, кто засиделся за компьютером. Просто выдохни и налей себе чаю.',
    releaseDate: '2026-01-20',
    duration: '2:58',
    url: 'https://soundcloud.com/',
    tone: 'peach',
    prompt:
      'Cozy warm illustration of a steaming cup of tea on a wooden table near a window, candles glowing softly, a knitted blanket, rainy evening outside the window, soft warm lighting, anime aesthetic, album cover art',
    caption: 'зимнее',
  },
  {
    id: 'gurenge-cover',
    title: 'Gurenge',
    artist: 'LiSA · кавер',
    kind: 'cover',
    description:
      'Энергичный кавер на открывающую «Клинок, рассекающий демонов». С оркестром и живым вокалом.',
    releaseDate: '2025-12-30',
    duration: '3:55',
    url: 'https://soundcloud.com/',
    tone: 'rose',
    prompt:
      'Intense anime style album cover with red and orange flames, a fierce demon slayer girl silhouette, dynamic pose, dramatic lighting, sparks flying, bold composition, vivid red and black colors',
    caption: 'cover',
  },
  {
    id: 'between-lines',
    title: 'Между строк',
    artist: 'MeLissa · с Тосей',
    kind: 'original',
    description:
      'Дуэт с подругой-пианисткой. История о письмах, которые никогда не отправят.',
    releaseDate: '2025-11-11',
    duration: '4:32',
    url: 'https://soundcloud.com/',
    tone: 'navy',
    prompt:
      'Elegant album cover, an open book with glowing handwritten text floating off the pages, ink swirling into the air, soft warm sepia tones, vintage paper texture, anime aesthetic, mysterious and intimate mood',
    caption: 'duet',
  },
  {
    id: 'kaikai-kitan',
    title: 'Kaikai Kitan',
    artist: 'Eve · кавер',
    kind: 'cover',
    description:
      'Самая странная и самая любимая. Кавер на opening «Магической битвы».',
    releaseDate: '2025-10-05',
    duration: '3:48',
    url: 'https://soundcloud.com/',
    tone: 'pink',
    prompt:
      'Dark mysterious anime album cover, a girl with long hair standing in a surreal night city, deep purple and indigo sky, glowing ritual circles, ethereal atmosphere, intricate details, bold typography space',
    caption: 'cover',
  },
];
