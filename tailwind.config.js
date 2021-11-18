/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'home-header-bg': "url('./src/assets/HomeBg2.webp')",
        'launches1-bg': "url('./src/assets/Launches1.webp')",
        'rocket1-bg': "url('./src/assets/Rocket1.webp')",
        'launchPad1-bg': "url('./src/assets/launchPad1.webp')",
        'launches2-bg': "url('./src/assets/Launches2.webp')",
        'rocket2-bg': "url('./src/assets/Rocket2.webp')",
      },
      fontFamily: { space: ['Space Mono', 'monospace'] },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
