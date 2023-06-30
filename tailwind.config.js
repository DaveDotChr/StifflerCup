/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      flexGrow: {
        2: '2'
      },
      scale: {
        102: "1.02"
      }
    },
  },
  plugins: [],
}
