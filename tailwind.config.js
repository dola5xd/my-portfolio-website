/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-background": "#191919",
        "dark-gray-800": "#666666",
        "dark-gray-500": "#A7A7A7",
        "dark-gray-300": "#CCCCCC",
        "dark-gradient-blue": "#13B0F5",
        "dark-gradient-purple": "#E70FAA",
      },
    },
  },
  plugins: [],
};
