/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customMainBg: '#f7fee7',
        customWhite: '#fcfcfc',
        customBlack: '#202020',
        customGrey: '#464646'
      },
      screens: {
        '3xs': '320px'
      }
    }
  },
  plugins: []
}
