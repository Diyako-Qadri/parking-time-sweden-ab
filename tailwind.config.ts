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
        'pt-green-transparent':'#48937ECC',
        'pt-darkblue1': '#14243C',
        'pt-dark-btn': '#0B051D', 
        'pt-darkblue2': '#2A394E',
        'pt-gray1': '#868686',
        'pt-desktopBlackHover': "rgba(9, 44, 76, 1)",
        'pt-lightgrayborder': '#E8E8E8',
        'pt-gray2': '#F0F0F0',
        'pt-light-gray': '#F9F9F9',
        'pt-dark-text': '#0B051D',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "homeHero-image": "linear-gradient(#00000075, #0000004d), url(/images/homeHero.jpeg)",
        "newsHero-image": "url(/images/newsHero.png)",
        "aboutHero-image": "url(/images/aboutHero.png)",
        "contactHero-image": "url(/images/contactHero.png)",
      },
      backgroundPosition: {
        'left-200': '-200px',
      },
      height: {
        'custom-home': 'calc(100vh - 80px)',
      },
      screens: {
        'NavbarScrren': '856px',   
          's': {'max':'410px'},
          'custom-small': {'min':'450px'},
          'hover-hover': {'raw': '(hover: hover) and (pointer: fine)'},
            'tablet': '850px',
      },
      padding: {
        '1/5': '20%',
      },
    },
  },
  plugins: [],
};
export default config;