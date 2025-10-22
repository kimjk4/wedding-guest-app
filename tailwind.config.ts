import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#fdfcf9',
          100: '#f6f1e9',
          200: '#ede3d1',
        },
        taupe: {
          50: '#f4f0eb',
          100: '#e5ddd1',
          300: '#cbbda9',
          500: '#a6927b',
        },
        espresso: {
          400: '#7c6753',
          500: '#6d5745',
          600: '#564536',
          700: '#3f3026',
          800: '#34261d',
          900: '#2a1f18',
        },
        coal: {
          400: '#5b5753',
          500: '#45413d',
          700: '#2f2b27',
        },
        bronze: {
          300: '#d7c3a6',
          400: '#c5ae89',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      boxShadow: {
        soft: '0 25px 60px -35px rgba(71, 48, 37, 0.45)',
        ring: '0 0 0 1px rgba(213, 174, 146, 0.35), 0 25px 60px -40px rgba(71, 48, 37, 0.55)',
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
export default config
