const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito-sans)', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'light-orange': {
          '50': '#fffefe',
          '100': '#fefefd',
          '200': '#fdfbf9',
          '300': '#fbf9f6',
          '400': '#f9f5ef',
          '500': '#f6f0e8',
          '600': '#ddd8d1',
          '700': '#b9b4ae',
          '800': '#94908b',
          '900': '#797672'
        },
        'orange': {
          '50': '#fefefd',
          '100': '#fefdfb',
          '200': '#fbf9f6',
          '300': '#f9f5f1',
          '400': '#f5eee6',
          '500': '#f0e7db',
          '600': '#d8d0c5',
          '700': '#b4ada4',
          '800': '#908b83',
          '900': '#76716b'
        },
        'dark-gray': {
          '50': '#f5f5f5',
          '100': '#ebebeb',
          '200': '#cccccc',
          '300': '#adadae',
          '400': '#707071',
          '500': '#323234',
          '600': '#2d2d2f',
          '700': '#262627',
          '800': '#1e1e1f',
          '900': '#191919'
        },
        'very-dark-gray': {
          '50': '#f4f4f4',
          '100': '#e9e9e9',
          '200': '#c7c7c8',
          '300': '#a6a6a7',
          '400': '#636365',
          '500': '#202023',
          '600': '#1d1d20',
          '700': '#18181a',
          '800': '#131315',
          '900': '#101011'
        }
      }
    },
  },
  plugins: [],
}
