/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        cream: '#f6ecdc',
        'cream-soft': 'var(--surface-strong)',
        lavender: 'rgb(var(--lavender-rgb) / <alpha-value>)',
        'pink-soft': 'rgb(var(--pink-soft-rgb) / <alpha-value>)',
        'pink-warm': 'rgb(var(--pink-warm-rgb) / <alpha-value>)',
        coral: 'rgb(var(--coral-rgb) / <alpha-value>)',
        peach: 'rgb(var(--peach-rgb) / <alpha-value>)',
        coffee: '#3d2e2a',
        'ink-brown': 'rgb(var(--ink-rgb) / <alpha-value>)',
        'ink-soft': 'rgb(var(--ink-soft-rgb) / <alpha-value>)',
        'paper-shadow': 'rgba(61, 46, 42, 0.08)',
        'navy-deep': '#1d1019',
      },
      fontFamily: {
        display: ['Comfortaa', 'system-ui', 'sans-serif'],
        ui: ['Nunito', 'Inter', 'system-ui', 'sans-serif'],
        jp: ['Nunito', 'Comfortaa', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightish: '-0.01em',
        widish: '0.04em',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        soft: '0 18px 40px -18px rgba(163, 125, 153, 0.45)',
        pill: '0 10px 24px -10px rgba(232, 164, 140, 0.55)',
        paper: '0 1px 0 rgba(255,255,255,0.6) inset, 0 20px 40px -28px rgba(61,46,42,0.35)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(0,-18px,0) scale(1.04)' },
        },
        drift: {
          '0%': { transform: 'translate3d(-2%,1%,0)' },
          '50%': { transform: 'translate3d(3%,-2%,0)' },
          '100%': { transform: 'translate3d(-2%,1%,0)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wiggle: {
          '0%,100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'soft-pulse': {
          '0%,100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 9s ease-in-out infinite',
        drift: 'drift 18s ease-in-out infinite',
        reveal: 'reveal 0.9s cubic-bezier(0.22,1,0.36,1) both',
        wiggle: 'wiggle 6s ease-in-out infinite',
        'soft-pulse': 'soft-pulse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
