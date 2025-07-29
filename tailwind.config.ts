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
        primary: {
          50: '#faf8f5',
          100: '#f5f1ea',
          200: '#e8dcc6',
          300: '#d4c4a0',
          400: '#c4a97a',
          500: '#b8956b', // Main brand brown
          600: '#9d7c4f',
          700: '#7d6040',
          800: '#5d4730',
          900: '#3d2f20',
        },
        accent: {
          50: '#fffbf0',
          100: '#fef7e0',
          200: '#fdecc4',
          300: '#fbdb9b',
          400: '#f8c572',
          500: '#f4a949', // Gold accent
          600: '#e8922e',
          700: '#d07a1a',
          800: '#a8621a',
          900: '#804b14',
        },
        dark: {
          50: '#f8f7f4',
          100: '#f0ede6',
          200: '#ddd6c7',
          300: '#c5b8a3',
          400: '#a89680',
          500: '#8b7355',
          600: '#6d5742',
          700: '#4a3d2f', // Dark brown
          800: '#2d241a',
          900: '#1a1410', // Very dark
        },
        neutral: {
          50: '#fafaf9',
          100: '#f4f4f3',
          200: '#e5e5e4',
          300: '#d1d1cf',
          400: '#b8b8b5',
          500: '#9e9e9a',
          600: '#82827e',
          700: '#6a6a66',
          800: '#54544f',
          900: '#3f3f3c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)',
        'fluid-5xl': 'clamp(3rem, 2.5rem + 2.5vw, 4rem)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
export default config