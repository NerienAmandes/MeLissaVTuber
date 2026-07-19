import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="section-pad relative min-h-[60vh] flex items-center">
      <div className="container-soft text-center">
        <p className="font-ui text-xs uppercase tracking-widish text-lavender">
          404
        </p>
        <h1 className="mt-4 font-display text-6xl sm:text-8xl text-ink-brown">
          потерялись<span className="text-coral">·</span>
        </h1>
        <p className="mt-4 font-ui text-lg text-ink-soft/80">
          Здесь пусто и тихо — но не грустно.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 font-ui text-base font-semibold text-white shadow-pill hover:-translate-y-0.5 transition-transform"
        >
          вернуться домой →
        </Link>
      </div>
    </section>
  );
}
