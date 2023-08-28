/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          from: {  transform: 'translateY(-1px)' },
          to: {  transform: 'translateY(0)' },
        },
      },

      animation: {
        slideDown:
          'slideDown 500ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

