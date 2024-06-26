import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      md: '768px',
      // => @media (min-width: 768px) { ... }
      xl: '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(196, 196, 196, 0) 5%, #bedbb0 95.19%)',
      },
      gap: {
        '14': '14px',
      },
      spacing: {
        '18': '18px',
      },
      width: {
        '473': '473px',
        '24': '24px',
        '260': '260px',
        '1440': '1440px',
      },
      height: {
        '24': '24px',
      },
    },
  },
  plugins: [],
};

export default config;
