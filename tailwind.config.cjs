/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        tsukihi: {
          black: '#1F1F1F',
        },
      },
      fontFamily: {
        tsukihiEN: ['owners-xxwide', 'sans-serif'],
        tsukihiJA: ['fot-udkakugoc80-pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
