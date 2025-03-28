/** @type {import("prettier").Options} */
module.exports = {
  printWidth: 60,
  bracketSameLine: true,
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-astro-organize-imports",
  ],
};
