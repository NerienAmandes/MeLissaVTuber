export type SocialIcon =
  | 'Twitch'
  | 'Youtube'
  | 'Twitter'
  | 'Send'
  | 'MessageCircle'
  | 'Heart';

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
    handle: '/MeLissa',
    url: 'https://twitch.tv/',
    icon: 'Twitch',
    tone: 'lavender',
  },
  {
    name: 'YouTube',
    handle: '@melissa-fox',
    url: 'https://youtube.com/',
    icon: 'Youtube',
    tone: 'coral',
  },
  {
    name: 'Twitter / X',
    handle: '@melissa_vt',
    url: 'https://x.com/',
    icon: 'Twitter',
    tone: 'peach',
  },
  {
    name: 'Telegram',
    handle: '@melissa_fox',
    url: 'https://t.me/',
    icon: 'Send',
    tone: 'pink',
  },
  {
    name: 'Discord',
    handle: 'Сервер лисьей норы',
    url: 'https://discord.gg/',
    icon: 'MessageCircle',
    tone: 'lavender',
  },
  {
    name: 'Поддержать',
    handle: 'DonationAlerts',
    url: 'https://donationalerts.com/',
    icon: 'Heart',
    tone: 'coral',
  },
];
