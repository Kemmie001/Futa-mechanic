/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1671D9",
        primaryI: "#E3F1FF",
        primary1: "#B6D8FF",
        primary2: "#80BBFF",
        primary5: "#0D5EBA",
        primary6: "#034592",
        primary9: "#001633",
        secondary: "#51e1a7",
        light: "#FDFDFD",
        dark: "#333333",
        "dark-light": "#323259",
        neutral: "#828282",
        "neutral-border": "#DFDFDF",
        "neutral-bg": "#F2F2F2",
      },
    },
  },
  plugins: [],
};
