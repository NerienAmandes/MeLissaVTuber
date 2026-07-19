import { imgUrl } from './images';

export const avatarUrl = imgUrl(
  'anime style fox girl character, beautiful young woman with fluffy orange fox ears and long orange cream hair, big sparkling pink eyes, sweet gentle smile, cream white dress with lace and bow, soft pink peach pastel background, cherry blossoms, high quality anime illustration, kawaii, dreamy atmosphere, portrait',
  'portrait_4_3'
);

export const vibePrompts: string[] = [
  'anime style cozy reading nook, warm golden light, journal notebook and steaming tea cup on wooden desk, pastel peach and cream tones, dreamy bokeh, soft illustration',
  'anime style sunset sky with pink orange cotton candy clouds, soft dreamy atmosphere, pastel warm tones, illustration',
  'cute fluffy anime fox sleeping curled up on soft cream blanket, pastel orange and cream colors, kawaii illustration, warm lighting',
  'anime style spring garden with cherry blossom petals falling, soft pink peach colors, dreamy soft lighting, pastel illustration',
  'anime style steaming teacup on windowsill with rain drops on glass, soft pastel cream and pink colors, cozy atmosphere, illustration',
  'anime style girl silhouette watching pink orange sunset sky with birds and clouds, dreamy cinematic, soft pastel colors',
];

export const vibeUrls = vibePrompts.map((p) => imgUrl(p, 'landscape_4_3'));
