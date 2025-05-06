/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}",
            "./assets/components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        custom: {
          grey: "#F5F6FB",
          red: "#FBC7C7",
          green: "#AAF6D0",
          yellow: "#FDF0C4",
          text: "#377EB5",
          dark: "#5A729A",
          light: "#76A0E8",
          symbol: "#0D99FF"
        }
      }
    },
  },
  plugins: [],
}