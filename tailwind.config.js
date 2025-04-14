/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Markazlashtirish
        padding: '15px', // Kengaytirish
      },
      screens: {
        'xs': '480px',  // Yangi ekran o'lchamini qo'shish
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1336px',
      },
      colors: {
        primary: '#1D4ED8', // Asosiy rang
        secondary: '#9333EA', // Ikkinchi rang
        accent: '#F59E0B', // Accent rangi
        background: '#F3F4F6', // Fon rangi
      },
    },
  },
  plugins: [],
}
