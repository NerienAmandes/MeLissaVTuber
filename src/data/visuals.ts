import { imgUrl } from './images';

export const avatarUrl = imgUrl(
  'anime style fox girl character, beautiful young woman with fluffy orange fox ears and long orange cream hair, big sparkling pink eyes, sweet gentle smile, cream white dress with lace and bow, soft pink peach pastel background, cherry blossoms, high quality anime illustration, kawaii, dreamy atmosphere, portrait',
  'portrait_4_3'
);

export const vibeTags: string[] = [
  'тишина',
  'вишнёвый цвет',
  'закаты',
  'дождь',
  'мягкие пледы',
  'чай',
  'фонари',
  'бамбук',
  'луна',
];

export const vibePrompts: string[] = [
  // 1. тишина — минимализм, одинокий лепесток
  'anime style zen minimalist scene, single falling cherry blossom petal against vast empty cream sky, soft pastel warm tones, peaceful japanese aesthetic, dreamy illustration, no people, no objects, just empty air and one petal',
  // 2. вишнёвый цвет — сакура в цвету
  'anime style japanese cherry blossom tree in full bloom, soft pink petals falling, pastel pink cream background, dreamy soft lighting, romantic spring atmosphere, illustration',
  // 3. закаты — тёплое небо
  'anime style beautiful sunset sky with cotton candy pink orange clouds, soft dreamy atmosphere, pastel warm tones, illustration, no ground just sky',
  // 4. дождь — капли на стекле
  'anime style rain drops on window glass, blurred warm lights behind, soft pastel cream and pink colors, cozy melancholic atmosphere, illustration, seen from inside',
  // 5. мягкие пледы — уютная ткань
  'anime style cozy soft cream knitted blanket folded on wooden floor, warm golden light, pastel peach tones, dreamy bokeh, soft illustration, textile texture, close up',
  // 6. чай — чашка с паром
  'anime style steaming ceramic teacup on wooden table, soft warm light from window, pastel cream and pink colors, cozy atmosphere, three wisps of steam, illustration',
  // 7. фонари — японский фонарь
  'anime style japanese red paper lantern chochin glowing in soft misty evening, warm soft light, traditional asian aesthetic, dreamy illustration, soft pink and warm coral tones, single lantern',
  // 8. бамбук — бамбуковая роща
  'anime style bamboo grove with soft mist filtering through, green and gray pastel tones, japanese aesthetic, peaceful zen atmosphere, soft illustration, vertical composition',
  // 9. луна — полумесяц с сакурой
  'anime style crescent moon in deep blue purple night sky, soft pink cherry blossom petals floating, glowing stars, dreamy pastel colors, japanese aesthetic, illustration',
];

export const vibeUrls = vibePrompts.map((p) => imgUrl(p, 'landscape_4_3'));
