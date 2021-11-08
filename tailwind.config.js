/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'home-header-bg': "url('./src/Pics/HomeBg2.webp')",
        'launches1-bg': "url('./src/Pics/Launches1.webp')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
