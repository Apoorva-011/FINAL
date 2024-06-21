/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'custom-289px': '289px',
      },
      height: {
        'custom-257px': '257px',
      },
    },
  },
  plugins: [],
}

