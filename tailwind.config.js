module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: "class", // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          "midnight-blue": "#242A45",
        },
      },
      fontFamily: {
        Poppins: ["Poppins,sans-serif "],
      },
      container: {
        center: true,
        padding: '0.5rem',
        screens: {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px",
        },
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }