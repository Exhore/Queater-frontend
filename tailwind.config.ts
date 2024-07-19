import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'oxford-blue': '#364659',
        "trinidad": '#F25C05',
        "jaffa": "#F27F3D",
        "orange": "#F28B28",
        "strong-orage": "#F24405",
        "concrete": "#F2F2F2"
      },
      maxWidth: {
        '8xl': '1512px'
      },
      fontFamily: {
        'satoshi-regular': ['var(--font-satoshi-regular)'],
        'satoshi-bold': ['var(--font-satoshi-bold)'],
        'satoshi-light': ['var(--font-satoshi-light)'],
        'satoshi-medium': ['var(--font-satoshi-medium)'],
        'satoshi-black': ['var(--font-satoshi-black)'],
      },
    },
  },
  plugins: [],
}
export default config
