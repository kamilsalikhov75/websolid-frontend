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
    },
  },
  plugins: [require("preline/plugin")],
};
export default config;
