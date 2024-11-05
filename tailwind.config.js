/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blueBg: '#5570F1',
        titleColor: '#45464E',
        labelBg: '#5E6366',
        sectionTitle: '#8B8D97',
        lightBlueBg: '#EFF1F999',
      },
      borderRadius: {
        inputRadius: '8px',
        boxRadius: '16px',
      },
      screens: {
        smMobile: '320px',
        mobile: '480px',
        tablet: '768px',
      },
    },
  },
  plugins: [],
};
