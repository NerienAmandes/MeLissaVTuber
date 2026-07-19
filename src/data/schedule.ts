export type StreamSlot = {
  day: string;
  fullDay: string;
  time: string;
  type: string;
  isOff?: boolean;
  tag?: string;
};

export const schedule: StreamSlot[] = [
  { day: 'Пн', fullDay: 'Понедельник', time: '—',      type: 'выходной', isOff: true },
  { day: 'Вт', fullDay: 'Вторник',     time: '19:00',  type: 'Игровой стрим', tag: 'основной' },
  { day: 'Ср', fullDay: 'Среда',       time: '—',      type: 'выходной', isOff: true },
  { day: 'Чт', fullDay: 'Четверг',     time: '20:00',  type: 'ASMR / чилл-беседа' },
  { day: 'Пт', fullDay: 'Пятница',     time: '21:00',  type: 'Совместный с гостьей' },
  { day: 'Сб', fullDay: 'Суббота',     time: '18:00',  type: 'Большой марафон', tag: '!' },
  { day: 'Вс', fullDay: 'Воскресенье', time: '17:00',  type: 'Арт-стрим' },
];
