/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF9F6", // Warm off-white
        foreground: "#2D3748", // Soft charcoal
        primary: {
          50: "#F0F7F7",
          100: "#E1EFEF",
          200: "#B8D9D9",
          300: "#8FC2C2",
          400: "#66ABAC",
          500: "#5D9B9B", // CALM TEAL
          600: "#4A7C7C",
          700: "#385D5D",
          800: "#253E3E",
          900: "#131F1F",
        },
        secondary: {
          500: "#E6A57E", // Soft Terra Cotta
        },
        accent: {
          500: "#F4D35E", // Muted Yellow
        },
        surface: "#FFFFFF",
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
  plugins: [],
}
