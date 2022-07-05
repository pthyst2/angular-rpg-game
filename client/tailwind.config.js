/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        btnBaseColor: "#0abb7b",
        btnBaseColorHover: "#00f29a",
      },
      spacing: {},
      fontSize: {
        gameTitle: "5em",
        btnBaseTextSize: "1em",
      },
      fontFamily: {
        splash: ["Splash"],
        glory: ["Glory"],
      },
    },
  },
  plugins: [],
};
