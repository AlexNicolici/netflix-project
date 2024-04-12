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
      backgroundImage: {
        "netflix-login":
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/2cd003b7-50bc-4fd8-a4a3-ebbeda57b37e/RO-ro-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
      },
    },
  },
  plugins: [],
};
