/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0F",
        card: "#16161F",
        cardHover: "#1E1E2A",
        border: "#23232F",
        accent: {
          DEFAULT: "#C8FF00",
          hover: "#B2E600",
          dim: "rgba(200, 255, 0, 0.1)",
          border: "rgba(200, 255, 0, 0.2)",
        },
        primary: "#FFFFFF",
        secondary: "#A1A1AA",
      },
    },
  },
  plugins: [],
};
