/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    backgroundImage:{
      'drag':"url('../assets/paper.webp')"
    }

    },
  },
  plugins: [],
};
