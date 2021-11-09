/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'home-header-bg': "url('./src/Pics/HomeBg2.webp')",
        'launches1-bg': "url('./src/Pics/Launches1.webp')",
        'rocket1-bg': "url('./src/Pics/Rocket1.webp')",
        'launchPad1-bg': "url('./src/Pics/launchPad1.webp')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
