import type { Config } from "tailwindcss";
 
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'pt-primary': 'rgb(6, 67, 62)',
        'pt-secondary': 'rgb(12, 5, 29)',
        'pt-red': '#F85252',
        'pt-background': '#ECF2F1',
        'pt-green': '#48937E',
        'pt-darkblue1': '#14243C',
        'pt-darkblue2': '#2A394E',
        'pt-gray1': '#868686',
        'pt-lightgrayborder': '#E8E8E8',
        'pt-gray2': '#F0F0F0',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "newsHero-image": "linear-gradient(#00000075, #0000004d), url(/images/newsHero.png)",
        "aboutHero-image": "linear-gradient(#00000075, #0000004d), url(/images/aboutHero.png)",
        "contactHero-image": "linear-gradient(#00000075, #0000004d), url(/images/contactHero.png)",
      },
      height: {
        'custom-458': '28.625rem',
      },
      screens: {
        's': {'max':'410px'},
      }
    },
  },
  plugins: [],
};
export default config;
