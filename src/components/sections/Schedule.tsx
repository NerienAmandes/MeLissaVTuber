import { Calendar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { schedule } from '../../data/schedule';

export default function Schedule() {
  return (
    <section id="schedule" className="section-pad relative">
      <div className="container-soft">
        <Reveal>
          <SectionHeading
            eyebrow="расписание"
            title={<>когда <em className="not-italic text-coral">зажигаем</em>?</>}
            subtitle="Таймзона указана примерная — лучше сверяться с анонсами в Telegram и Discord."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-5xl glass shadow-soft p-4 sm:p-6 md:p-8">
            <div className="hidden md:grid grid-cols-7 gap-3 pb-4 border-b border-lavender/20 font-ui text-xs uppercase tracking-widish text-lavender">
              {schedule.map((s) => (
                <div key={s.fullDay} className="text-center">
                  {s.fullDay}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 mt-4 md:mt-0">
              {schedule.map((slot, i) => (
                <div
                  key={slot.day}
                  className={`relative flex flex-col gap-2 rounded-4xl p-4 sm:p-5 transition-transform hover:-translate-y-1 ${
                    slot.isOff
                      ? 'bg-white/40 text-ink-soft/70'
                      : 'bg-gradient-to-br from-coral/15 via-cream to-pink-warm/40 text-ink-brown shadow-paper'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl">{slot.day}</span>
                    {slot.tag && (
                      <span className="rounded-full bg-coral px-2 py-0.5 text-[10px] font-ui font-bold uppercase tracking-widish text-white">
                        {slot.tag}
                      </span>
                    )}
                  </div>
                  <span className="font-ui text-2xl font-semibold tracking-tightish">
                    {slot.time}
                  </span>
                  <span className="font-ui text-sm leading-snug min-h-[2.5rem]">
                    {slot.type}
                  </span>
                  {i === new Date().getDay() - 1 && !slot.isOff && (
                    <span className="absolute -top-2 -right-2 inline-flex items-center gap-1 rounded-full bg-lavender px-2 py-1 font-ui text-[10px] font-bold uppercase tracking-widish text-white shadow-soft">
                      <Sparkles size={10} />
                      сегодня
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-lavender/20">
              <p className="font-ui text-sm text-ink-soft/80 flex items-center gap-2">
                <Calendar size={16} className="text-lavender" />
                анонсы в Telegram · напоминания в Discord за 15 минут до старта
              </p>
              <Link
                to="/connect"
                className="font-ui text-sm font-semibold text-coral hover:text-lavender transition-colors"
              >
                подписаться на расписание →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
