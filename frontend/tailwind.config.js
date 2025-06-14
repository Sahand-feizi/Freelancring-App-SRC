/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme'
import tailwindFormPlugin from "@tailwindcss/forms";

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue) return `rgba(var(${variableName}), ${opacityValue})`

    return `rgb(var(${variableName}))`
  }
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '460px',
      'md': '768px',
      'lg': '1050px',
      'xl': '1280px',
      '2xl': '1536'
    },
    extend: {
      colors: {
        transparent: 'transparent',
        primary: {
          900: withOpacity('--color-primary-900'),
          800: withOpacity('--color-primary-800'),
          700: withOpacity('--color-primary-700'),
          600: withOpacity('--color-primary-600'),
          500: withOpacity('--color-primary-500'),
          400: withOpacity('--color-primary-400'),
          300: withOpacity('--color-primary-300'),
          200: withOpacity('--color-primary-200'),
          100: withOpacity('--color-primary-100'),
          50: withOpacity('--color-primary-50')
        },
        secondary: {
          900: withOpacity('--color-secondary-900'),
          800: withOpacity('--color-secondary-800'),
          700: withOpacity('--color-secondary-700'),
          600: withOpacity('--color-secondary-600'),
          500: withOpacity('--color-secondary-500'),
          400: withOpacity('--color-secondary-400'),
          300: withOpacity('--color-secondary-300'),
          200: withOpacity('--color-secondary-200'),
          100: withOpacity('--color-secondary-100'),
          50: withOpacity('--color-secondary-50'),
          0: withOpacity('--color-secondary-0')
        },
        success: withOpacity('--color-success'),
        warning: withOpacity('--color-warning'),
        error: withOpacity('--color-error')
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1050px',
          xl: '1280px',
          '2xl': '1536px'
        }
      },
      fontFamily: {
        sans: ['Vazir', fontFamily.sans],
        yekan: ['Leaner', fontFamily.sans]
      }
    },
  },
  plugins: [
    tailwindFormPlugin({
      strategy: 'class'
    }),
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}

