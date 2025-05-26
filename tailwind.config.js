module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  //darkMode: 'class',
  theme: {
    extend: {
      screens: {
        mobile: {
          min: '340px',
          max: '1200px',
        },
      },
    },
  },
  plugins: [],
}