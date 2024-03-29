/** @type {import('tailwindcss').Config} */
export default {
 content: ['./index.html', './src/**/*.{js,ts,vue}'],
 theme: {
  extend: {},
  fontFamily: {
   roboto: ['Roboto', 'sans-serif'],
  },
  fontSize: {
   12: 'var(--sz-12)',
   14: 'var(--sz-14)',
   16: 'var(--sz-16)',
   18: 'var(--sz-18)',
   20: 'var(--sz-20)',
   24: 'var(--sz-24)',
   26: 'var(--sz-26)',
   28: 'var(--sz-28)',
   30: 'var(--sz-30)',
   32: 'var(--sz-32)',
   50: 'var(--sz-50)',
   80: 'var(--sz-80)',
  },
  colors: {
   trp: 'transparent',
  },
  fontWeight: {
   300: '300',
   400: '400',
   500: '500',
   600: '600',
   700: '700',
   800: '800',
   900: '900',
  },
  lineHeight: {
   n: 'normal',
  },
 },
 plugins: [],
};
