/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        heart: 'heart 1s ease-in-out',
      },
      keyframes: {
        heart: {
          '0%': { transform: 'translate(-50%, -50%) scale(0)' },
          '50%': { transform: 'translate(-50%, -50%) scale(1.2)' },
          '100%': { transform: 'translate(-50%, -50%) scale(0)' },
        },
      },
    },
  },
  plugins: [],
};
