/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // ← SEULEMENT CETTE LIGNE EST IMPORTANTE
  theme: {
    extend: {},
  },
  plugins: [],
}
