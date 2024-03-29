/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customMainBg: '#f7fee7',
        customHeaderBg: '#f1ece7',
        customCartBg: '#1e1e1e99',
        customWhite: '#fcfcfc',
        customBlack: '#202020',
        customGrey: '#464646',
        customGreen: '#9DD458'
      },
      screens: {
        "2xs": "384px",
        '3xs': '320px'
      },
      backgroundImage: {
        headerBg: "url('/images/headerBackground.png')"
      },
      gradientColorStopPositions: {
        70: '70%'
      }
    }
  },
  plugins: []
}
