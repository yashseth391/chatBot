/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/src/screens.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

