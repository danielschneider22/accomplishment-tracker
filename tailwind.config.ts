import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      minHeight: {
        '5': '1.25rem',
        '10': '2.5rem',
      },
      width: {
        '1/2calc': 'calc(50% - 10px)',
        '1/3calc': 'calc(33.333333% - 20px)',
      }
    },
  },
  plugins: [],
}
export default config
