// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export const content = [
  // ...
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  container: {
    center: true,
    screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    // '2xl': '1220px',
  },
  },
  extend: {},
};
export const darkMode = "class";
export const plugins = [nextui()];