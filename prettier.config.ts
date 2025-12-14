import { type Config } from "prettier";

const config: Config = {
  trailingComma: "none",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 80,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/app/globals.css",
};

export default config;