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
          dark: "#080b11",
          surface: "#0e131d",
          border: "rgba(255, 255, 255, 0.08)",
          inputBg: "rgba(255, 255, 255, 0.07)",
          textMuted: "#6b7c96",
        }
      }
    },
  },
  plugins: [],
}
