export type SocialIcon =
  | 'Twitch'
  | 'Youtube'
  | 'Twitter'
  | 'Send'
  | 'MessageCircle'
  | 'Heart'
  | 'Coffee';

export type SocialLink = {
  name: string;
  handle: string;
  url: string;
  icon: SocialIcon;
  tone: 'coral' | 'lavender' | 'peach' | 'pink';
};

export const socials: SocialLink[] = [
  {
    name: 'Twitch',
    handle: 'melissa_play_and_song',
    url: 'https://www.twitch.tv/melissa_play_and_song',
    icon: 'Twitch',
    tone: 'coral',
  },
  {
    name: 'YouTube',
    handle: '@MeLissa',
    url: 'https://m.youtube.com/channel/UClrE-3ivRfVDaLkfBkoWrig',
    icon: 'Youtube',
    tone: 'coral',
  },
  {
    name: 'Telegram',
    handle: '@melissa_funtime',
    url: 'https://t.me/melissa_funtime',
    icon: 'Send',
    tone: 'coral',
  },
  {
    name: 'Telegram · РМХ',
    handle: '@redmoonhorizon',
    url: 'https://t.me/redmoonhorizon',
    icon: 'Send',
    tone: 'coral',
  },
  {
    name: 'ВКонтакте',
    handle: 'melissa2025voice',
    url: 'https://vk.com/melissa2025voice',
    icon: 'MessageCircle',
    tone: 'coral',
  },
  {
    name: 'Поддержать',
    handle: '@vixen_voice',
    url: 'https://www.donationalerts.com/r/vixen_voice',
    icon: 'Heart',
    tone: 'coral',
  },
  {
    name: 'Boosty',
    handle: 'melissa2026',
    url: 'https://boosty.to/melissa2026',
    icon: 'Coffee',
    tone: 'coral',
  },
];
