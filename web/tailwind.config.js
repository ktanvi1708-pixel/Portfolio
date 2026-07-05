/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['General Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: 'var(--color-bg)',
        ink: 'var(--color-text)',
        muted: 'var(--color-muted)',
        hairline: 'var(--color-border)',
        accent: 'var(--color-accent)',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.25' },
        },
      },
      animation: {
        pulseDot: 'pulseDot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
