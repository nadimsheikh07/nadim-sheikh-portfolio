import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const AppTheme = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#effcf4',
      100: '#d8f7e4',
      200: '#b4efd0',
      300: '#81e1b0',
      400: '#47cb89',
      500: '#1faa68',
      600: '#168a53',
      700: '#136d44',
      800: '#125637',
      900: '#10472f',
      950: '#07281a',
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '#f5fbf7',
          100: '#edf7f0',
          200: '#d9ecdf',
          300: '#b7d9c3',
          400: '#8dbc9f',
          500: '#679f7f',
          600: '#4d7d61',
          700: '#3f654f',
          800: '#355141',
          900: '#2d4336',
          950: '#14221b',
        },
        primary: {
          color: '{primary.600}',
          inverseColor: '#ffffff',
          hoverColor: '{primary.700}',
          activeColor: '{primary.800}',
        },
        highlight: {
          background: '#ecfbf3',
          focusBackground: '{primary.100}',
          color: '{primary.800}',
          focusColor: '{primary.900}',
        },
        formField: {
          background: '#ffffff',
          hoverBorderColor: '{primary.color}',
          focusBorderColor: '{primary.color}',
        },
      },
    },
    focusRing: {
      width: '2px',
      style: 'solid',
      color: '{primary.color}',
      offset: '2px',
    },
  },
});
