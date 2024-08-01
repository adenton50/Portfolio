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
        "red-sm": "0 1px 3px rgba(255, 0, 0, 0.2)",
        "red-md": "0 4px 6px rgba(255, 0, 0, 0.3)",
        "red-lg": "0 10px 15px rgba(255, 0, 0, 0.4)",
        "red-xl": "0 20px 25px rgba(255, 0, 0, 0.5)",
        "red-2xl": "0px 0px 50px rgba(255, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
