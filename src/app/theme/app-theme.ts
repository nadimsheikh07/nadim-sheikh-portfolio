import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const AppTheme = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f3fcf5',
      100: '#ddf7e5',
      200: '#bdefc7',
      300: '#8fe39f',
      400: '#59d06f',
      500: '#35c759',
      600: '#2fad53',
      700: '#1f8a3d',
      800: '#1b7b37',
      900: '#16642d',
      950: '#0c3818',
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '#eef9f0',
          100: '#e3f3e8',
          200: '#cde8d5',
          300: '#aed8b8',
          400: '#87c596',
          500: '#67ad77',
          600: '#508a5d',
          700: '#416f4d',
          800: '#395a42',
          900: '#314a37',
          950: '#18271d',
        },
        primary: {
          color: '{primary.600}',
          inverseColor: '#ffffff',
          hoverColor: '{primary.700}',
          activeColor: '{primary.800}',
        },
        highlight: {
          background: '{primary.50}',
          focusBackground: '{primary.100}',
          color: '{primary.800}',
          focusColor: '{primary.900}',
        },
        formField: {
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
