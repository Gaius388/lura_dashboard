/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    extend: {
      gridTemplateColumns: {
        dashboard: "minmax(17vw,12.5em) 1fr",
      },
      backgroundImage: {
        "sidebar-1": "url('/src/images/sidebar-1.jpg')",
        "sidebar-2": "url('/src/images/sidebar-2.jpg')",
        "sidebar-3": "url('/src/images/sidebar-3.jpg')",
        "sidebar-4": "url('/src/images/sidebar-4.jpg')",
      },
    },
  },
  plugins: [],
};
