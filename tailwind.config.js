// tailwind.config.js
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        lavender: { 50: '#F8F5FF', 100: '#E8E0F0', 200: '#D4C4E8', 500: '#9B7ED9' },
        mint: { 50: '#F0FDF4', 100: '#D4EDDA', 200: '#A7D9B8', 500: '#5DB075' },
        peach: { 50: '#FFFAF5', 100: '#FFECD2', 200: '#FFD9A8', 500: '#FFAA5C' },
        sky: { 50: '#F0F9FF', 100: '#D6EAF8', 200: '#AED6F1', 500: '#5DADE2' },
        rose: { 50: '#FFF5F5', 100: '#FADBD8', 200: '#F5B7B1', 500: '#EC7063' },
      },
      fontFamily: {
        display: ['Nunito', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
