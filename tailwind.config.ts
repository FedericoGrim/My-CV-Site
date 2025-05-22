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
        LighterGreen: '#a7f099', // verde chiaro
        MantisGreen: '#5CB84A', // verde evidenziatore
        HunterGreen: '#2E5C25', // verde scuro
        DarkGreen:'#172E13', // verde più scuro
        DarkerGreen:'#051206'
      },
    },
  },
  plugins: [],
};
export default config;
