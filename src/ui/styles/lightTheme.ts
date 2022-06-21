import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  palette: {
    borders: {
      default: '#c6cdd7',
    },
    layout: {
      background: '#ffffff',
    },
    typography: {
      default: '#000000',
      disabled: '#a0a5b1'
    },

  },
  spacing: (factor: number) => `${8 * factor}px`,
  typography: {
    fontSize: (factor: number) => `${2 * factor}px`,
  },

};
