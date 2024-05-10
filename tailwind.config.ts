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
        primary: 'var(--primary)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xl: '1280px',
        lg: '1024px',
        md: '768px',
        sm: '640px',
        xs: '480px',
        xxs: '  375px',
      },
      fontFamily: {
        poppins: ['var(--poppins)'],
        rubik: ['var(--rubik)'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        // 'heading-1': '-1.5%',
        // 'heading-2': '-0.5%',
        // 'heading-3': '0%',
      },
      fontSize: {
        // 'heading_1': '96px',
        // 'heading_2': '60px',
        // 'heading_3': '48px',
        // '4xl': '40px',
        // '3xl': '35px',
        // '2xl': '28px',
        // 'xs': '12px',
        // 'sm': '14px',
        // 'base':'16px',
        // 'lg': '18px',
        // 'xl': '20px',
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      transitionProperty: {
        width: 'width',
      },
      gridTemplateAreas: {
        categories: ['featured top-1 top-2 top-3', 'featured bottom-1 bottom-2 bottom-3'],
      },
      gridTemplateColumns: {
        categories: '39% 20.3% 20.3% 20.3%',
        categories_lg: '530px 250px 250px 250px',
        categories_xl: '530px 250px 250px 250px',
      },
      gridTemplateRows: {},
    },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
};

export default config;
