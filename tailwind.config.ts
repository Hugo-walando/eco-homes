import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        col_gray_1: '#605C53',
        col_gray_2: '#909090',
        col_white_1: '#F3F4ED',
        col_white_2: '#FBF8F3',
        col_primary_1: '#FF5912',
      },
    },
  },
  plugins: [],
};
export default config;
