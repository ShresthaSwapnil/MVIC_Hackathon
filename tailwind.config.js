/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sanf-serif"],
        general: ["general", "sanf-serif"],
        "circular-web": ["circular-web", "sanf-serif"],
        "robert-medium": ["robert-medium", "sanf-serif"],
        "robert-regular": ["robert-regular", "sanf-serif"],
      },
    },
    colors: {
      default: "#00e091", // green
      blue: {
        50: "#dfdff0",
        75: "#dfdff2",
        100: "#f0f2fa",
        200: "#010101",
        300: "#4fb7dd",
      },
      voilet: {
        300: "#5724ff",
      },
      yellow: {
        100: "#8e983f",
        300: "#edff66",
      },
    },
  },
  plugins: [],
};
