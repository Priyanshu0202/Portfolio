/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "50px": "50px",
      },
    },
    fontFamily: {
      signature: ["Pacifico"],
    },
  },
  plugins: [],
};
