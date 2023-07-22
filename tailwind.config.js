module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#4935FF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("postcss-nesting")],
};