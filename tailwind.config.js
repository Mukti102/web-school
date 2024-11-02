const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content(),
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors:{
        primary : 'rgba(var(--primary))',
        background : 'rgba(var(--background))',
        text : 'rgba(var(--text))',
        accent : 'rgba(var(--accent))',
        card : 'rgba(var(--card))',
        secondary : 'rgba(var(--secondary))',
        light: 'rgba(var(--light))',

      }
    },
  },
  plugins: [
    // require('daisyui'),
    require("tw-elements/plugin.cjs"),
    require('flowbite/plugin'),
    flowbite.plugin(),
    require('@tailwindcss/typography'),
  ],
}

