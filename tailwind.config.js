/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["lato"],
      },
      colors: {
        "my-blue": "#747474",
        "my-border": "#c2c2c1",
        "my-black": "#191919",
        "my-alert": "#e34843",
        "my-heading": "#5e5e5e",
      },
      borderRadius: {
        "3px": "3px",
      },
      width: {
        "45%": "45%",
        "55%": "55%",
        "my-form": "542px",
      },
      screens: {
        "my-xs": "269px",
        "my-sm": "360px",
      },
    },
  },
  plugins: [],
};
