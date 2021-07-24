module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2F80ED",
        "gray-light": "#BDBDBD",
        "gray-medium": "#828282",
        "gray-dark": "#343647",
        "gray-darker": "#252735",
      },

      fontFamily: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
