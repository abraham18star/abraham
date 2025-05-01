/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#c0dfff',
          300: '#87ceeb', // Sky blue
          400: '#80c8ff',
          500: '#3b82f6',
          600: '#3070d4',
          700: '#2563eb',
          800: '#1e4fd0',
          900: '#1e40af',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float-delay 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
