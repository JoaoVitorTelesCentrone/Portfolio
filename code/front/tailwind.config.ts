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
      screens: {
        'xs': '360px',        // Cell phone
        'md': '768px',        // Tablets
        'lg': '1024px',       // Notebooks
        'xl': '1280px',       // Full HD
        '2xl': '1536px',      // Larger screens
      },
      colors: {
        primary: {
          DEFAULT: '#041C32',
          light: '#063A52',
          dark: '#02111F',
          50: '#E0E7ED',
          100: '#B2C3CF',
          200: '#7D9FB0',
          300: '#497B90',
          400: '#255A74',
          500: '#041C32', // Original primary
          600: '#031629',
          700: '#021020',
          800: '#010A16',
          900: '#00040B',
        },
        secondary: {
          DEFAULT: '#04293A',
          light: '#054559',
          dark: '#021921',
          50: '#D4E4EA',
          100: '#A9C9D5',
          200: '#7DAFBE',
          300: '#5295A7',
          400: '#2A798E',
          500: '#04293A', // Original secondary
          600: '#03232E',
          700: '#021B24',
          800: '#02121A',
          900: '#01090F',
        },
        accent: {
          DEFAULT: '#ECB365',
          light: '#FFD596',
          dark: '#C99444',
          50: '#FFF5E5',
          100: '#FFE9CC',
          200: '#FFD7A5',
          300: '#FFC47E',
          400: '#ECB365',
          500: '#D29A4B',
          600: '#B97F33',
          700: '#A36626',
          800: '#814E1F',
          900: '#5C3718',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
};

export default config;
