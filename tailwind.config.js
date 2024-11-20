/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
        backgroundColor: {
            customPrimary: '#0A2647',
            customSecondary: '#144272',
            customTernary: '#205295',
            customHighlight: '#2C74B3',
        },
        colors: {
            customPrimary: '#0A2647',
            customSecondary: '#144272',
            customTernary: '#205295',
            customHighlight: '#2C74B3',
        }
    },
  },
  plugins: [],
}

