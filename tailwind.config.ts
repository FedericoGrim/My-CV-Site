import { Light } from "@mui/icons-material";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        LightGreen: '#BEE8B4', //chiaro
        MantisGreen: '#7CD068',
        FernGreen: '#44793A',
        CalPolyGreen: '#284D23',
        DarkGreen: '#0B210C',
        NightGreen: '#061106',
        BlackGreen: '#030903',
        Black: '#000000',  //scuro
      },
    },
  },
  plugins: [],
};
export default config;
