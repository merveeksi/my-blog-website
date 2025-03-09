import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#fff",
        accent: "#7B00D3", 
        accentDark: "#ffdb4d",
        mgray: "#747474",
      },
      fontFamily: {
        in: ['var(--font-in)'],
        mr: ['var(--font-mr)'],
      },
    },
  },
  plugins: [require('daisyui'),
    require('tailwind-scrollbar')({nocompatible: true}),
  ],
}
export default config
