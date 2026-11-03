/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#FF7334", // Lighter Orange
          500: "#FF4D00", // Signature Moxa Orange
          600: "#CC3D00", // Darker
        },
        moxa: {
          white: "#F4F4F0", // Warm Off-White/Cream
          black: "#111111", // Soft Black
        },
        // Generic Neutral Palette (True Black/Grey)
        dark: {
          950: "#050505", // Deep Black Background
          900: "#121212", // Surface (Card)
          800: "#1F1F1F", // Interactable / Border
        },
        surface: {
          DEFAULT: "#121212",
          light: "#1F1F1F",
        },
        // Alias 'neutral' for ease of use 
        neutral: {
          900: "#171717",
          800: "#262626",
          500: "#737373",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
