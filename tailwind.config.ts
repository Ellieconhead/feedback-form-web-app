import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        'background-color': 'rgb(10 10 10)'
      },
      colors: {
        'black': 'rgb(17 24 39)',
        'yellow': 'rgb(255 255 200)',
        'white': 'rgb(255 255 255)',
        'blue': 'rgb(12, 17, 66)',
        'light-blue': 'rgb(43, 212, 219)'
      },
      fontSize: {
        'l': ['1.5rem', {
          lineHeight: '1.375rem',
          fontWeight: '700'
        }],
        'm': ['1.125rem', {
          lineHeight: '1.375rem',
          fontWeight: '400'
        }],
      },
    }
  },
  plugins: [],
}
export default config
