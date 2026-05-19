import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070B17',
          900: '#0A0F1E',
          850: '#0E1426',
          800: '#111827',
          700: '#1A2236',
        },
        electric: {
          DEFAULT: '#3B7BF5',
          400: '#5A93FF',
          600: '#2A65D8',
          200: '#A8C4FF',
        },
        mute: '#8892A4',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
