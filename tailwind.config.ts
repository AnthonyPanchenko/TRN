import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: [
          'Nunito',
          'Arial',
          '-apple-system',
          'BlinkMacSystemFont',
          'Helvetica',
          'Apple Color Emoji',
          'Segoe UI Emoji',
        ],
      },
      backgroundImage: {
        'body-custom-gradient': 'var(--bg-body-gradient)',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    nextui({
      layout: {
        radius: {
          small: '0.25rem',
          medium: '0.5rem',
          large: '0.75rem',
        },
      },
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: '#d94',
            },
          },
        },
        light: {
          colors: {
            primary: {
              DEFAULT: '#d946ef',
            },
          },
        },
      },
    }),
  ],
};

export default config;
