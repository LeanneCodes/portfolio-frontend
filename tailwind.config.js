/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Use Roboto Slab for headings
        'heading': ['Roboto Slab', 'serif'],
        // Use Montserrat for body
        'body': ['Montserrat', 'sans-serif'],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#5c509c',
      'mint': '#b8eac7',
      'green': '#79c27b',
      'pink': '#c60f8e',
      'black': '#000000',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
