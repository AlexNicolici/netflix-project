/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "netlflix-red": "#E50914",
        "netflix-black": "#141414",
      },
      fontFamily: {
        roboto: ["Roboto"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
