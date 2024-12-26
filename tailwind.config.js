module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        arabic: ['Cairo', 'Amiri', 'serif'], // Cairo for Arabic font
      },
      colors: {
        primary: '#65338f',
        accent: '#beb482',
      },
    },
  },
  plugins: [],
}
