/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        typewriter: ['"Press Start 2P"', "monospace"],
        // You can also add Google Fonts or other custom fonts here
      },
      boxShadow: {
        "red-2xl": "0px 0px 50px rgb(255, 95, 31)",
      },
    },
  },
  plugins: [],
};
