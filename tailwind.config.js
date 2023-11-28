/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-link': '#FCE7F3',
        'secondary-link' : '#9D174D',
        'primary-gradient': '#881337',
        'secondary-gradient': '#be185d',
        'third-gradient': '#d946ef',
        // 'primary': '#12c2e9',
        // 'secondary': '#c471ed',
      }
    },
  },
  plugins: [],
}
