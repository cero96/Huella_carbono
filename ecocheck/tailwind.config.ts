import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#FF4D79",
        /*secondary: "#F5741C",*/
        darkBg: "#131424",
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90deg, rgba(2,29,36,1) 0%, rgba(9,121,29,1) 100%, rgba(0,212,255,1) 111.58%)",
      }
    },
  },
  plugins: [],
} satisfies Config;


/*          "Linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
*/