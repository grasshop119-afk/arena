/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gg: {
          dark: "#080b11",
          surface: "#0e131d",
          border: "#1d2636",
          input: "#141b29",
          primary: "#2563eb",
          primaryHover: "#1d4ed8",
          textMuted: "#6b7c96",
        }
      }
    },
  },
  plugins: [],
}
