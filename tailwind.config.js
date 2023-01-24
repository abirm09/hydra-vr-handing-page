/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*"],
  theme: {
    extend: {
      colors: {
        primary: "#302C42",
        gradient1: "#8176AF",
        gradient2: "#C0B7E8",
        gradient3: "#211e2e",
        gradient4: "#383253",
        clr: "#2B1E26",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
