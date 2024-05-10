import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          "500": "var(--blue-500)",
        },
      },
      boxShadow: {
        service: "0 0 10px 0 #4c5eff",
        serviceHover: "0 0 60px 0 #4c5eff",
      },
      transitionTimingFunction: {
        "in-out": "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
export default config;
