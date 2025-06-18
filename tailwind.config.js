/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textStrokeColor: theme => theme('colors'),
      keyframes: {
       glitch: {
         "0%": { "clip-path": "inset(20% 0 50% 0)" },
         "5%": { "clip-path": "inset(10% 0 60% 0)" },
         "10%": { "clip-path": "inset(15% 0 55% 0)" },
         "15%": { "clip-path": "inset(25% 0 35% 0)" },
         "20%": { "clip-path": "inset(30% 0 40% 0)" },
         "25%": { "clip-path": "inset(40% 0 20% 0)" },
         "30%": { "clip-path": "inset(10% 0 60% 0)" },
         "35%": { "clip-path": "inset(15% 0 55% 0)" },
         "40%": { "clip-path": "inset(25% 0 35% 0)" },
         "45%": { "clip-path": "inset(30% 0 40% 0)" },
         "50%": { "clip-path": "inset(20% 0 50% 0)" },
         "55%": { "clip-path": "inset(10% 0 60% 0)" },
         "60%": { "clip-path": "inset(15% 0 55% 0)" },
         "65%": { "clip-path": "inset(25% 0 35% 0)" },
         "70%": { "clip-path": "inset(30% 0 40% 0)" },
         "75%": { "clip-path": "inset(40% 0 20% 0)" },
         "80%": { "clip-path": "inset(20% 0 50% 0)" },
         "85%": { "clip-path": "inset(10% 0 60% 0)" },
         "90%": { "clip-path": "inset(15% 0 55% 0)" },
         "95%": { "clip-path": "inset(25% 0 35% 0)" },
         "100%": { "clip-path": "inset(30% 0 40% 0)" },
       },
     },
     animation: {
       "glitch-after": "glitch var(--after-duration) infinite linear alternate-reverse",
       "glitch-before": "glitch var(--before-duration) infinite linear alternate-reverse",
     },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme, e }) {
      const values = theme('textStrokeColor');
      const utilities = Object.entries(values).map(([key, value]) => ({
        [`.${e(`text-stroke-${key}`)}`]: {
          '-webkit-text-stroke-color': value,
        },
      }));
      addUtilities(utilities);
    }),
    plugin(function ({ addUtilities }) {
        const newUtilities = {
            '.text-stroke-1': { '-webkit-text-stroke-width': '1px' },
            '.text-stroke-2': { '-webkit-text-stroke-width': '2px' },
            '.text-stroke-3': { '-webkit-text-stroke-width': '3px' },
            '.text-stroke-4': { '-webkit-text-stroke-width': '4px' },
        }
        addUtilities(newUtilities)
    }),
  ],
};
