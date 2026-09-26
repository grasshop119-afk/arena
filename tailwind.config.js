/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        gg: {
          dark: "#050b14",
          surface: "#0e131d",
          border: "rgba(79, 172, 254, 0.3)",
          textMuted: "#6b7c96",
        }
      }
    },
  },
  plugins: [],
}
