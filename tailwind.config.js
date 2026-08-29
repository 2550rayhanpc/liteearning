/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          850: '#047857',
          950: '#064e3b',
        },
        mint: {
          50: '#e8f7f2',
        },
        amber: {
          cta: '#f59e0b',
          ctaHover: '#d97706',
        },
      },
      fontFamily: {
        bengali: ['var(--font-hind-siliguri)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
