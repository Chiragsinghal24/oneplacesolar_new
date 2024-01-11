/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        'custom-color': 'rgba(24, 23, 21, 0.9)',
        'custom-color-hero': 'rgba(24, 23, 21,1)',
        'footer-colour':'rgba(31,33,39,255)',
      },
    },
  },
  plugins: [require("daisyui")],
};
