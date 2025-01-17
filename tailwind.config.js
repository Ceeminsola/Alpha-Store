/** @type {import('tailwindcss').Config} */
import { gray } from "@material-tailwind/html/theme/base/colors";
import withMT from "@material-tailwind/html/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/images/bg-fruits.svg')"
      },
      screens: {
        xs: "480px",
        mds: "600px",
        md: "800px",
        lgss: "976px",
        lg: "1200px",
        xxl: "1440px",
      },
      colors: {
        basegreen: '#3BB77E',
        fontgreen: '#253D4E',
        herogreen: '#C5EAD9',
        peachcolor: '#FEEFEA',
        vegcolor: '#FFF3FF',
        strawgreen: '#F2FCE4',
        applecolor: '#FEEFEA',
        orangecolor: '#ECFFEC',
        potatocolor: '#FFFCEB',
        carrotgreen: '#DEF9EC',
        offercolor1: '#FFF5E1',
        offercolor2: '#D2EFE1',
        buttoncolor: '#FFD480',
        black: '#1A1A1A',
        Ash: '#F2F2F2'
        
      }
    },

    fontFamily: {
      'quicksand': ['Quicksand', 'sans-serif'],
    },
  },
  plugins: [
  ],
});

