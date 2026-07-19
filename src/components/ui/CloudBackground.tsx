/** Мягкие градиентные «облака», которые медленно дрейфуют. */
export default function CloudBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-32 -left-24 h-[60vh] w-[60vh] rounded-full opacity-70 animate-drift"
        style={{
          background:
            'radial-gradient(closest-side, #f6c9a4 0%, rgba(246,201,164,0) 70%)',
          filter: 'blur(20px)',
        }}
      />
      <div
        className="absolute top-1/3 -right-32 h-[55vh] w-[55vh] rounded-full opacity-70 animate-drift"
        style={{
          background:
            'radial-gradient(closest-side, #d4a4b0 0%, rgba(212,164,176,0) 70%)',
          filter: 'blur(20px)',
          animationDelay: '-6s',
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[50vh] w-[50vh] rounded-full opacity-60 animate-drift"
        style={{
          background:
            'radial-gradient(closest-side, #e8b8a8 0%, rgba(232,184,168,0) 70%)',
          filter: 'blur(20px)',
          animationDelay: '-12s',
        }}
      />
      <div
        className="absolute top-2/3 right-1/4 h-[40vh] w-[40vh] rounded-full opacity-50 animate-drift"
        style={{
          background:
            'radial-gradient(closest-side, #a37d99 0%, rgba(163,125,153,0) 70%)',
          filter: 'blur(20px)',
          animationDelay: '-3s',
        }}
      />
    </div>
  );
}
