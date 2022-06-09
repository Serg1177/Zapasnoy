import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  palette: {
    background: '#ffffff',
    defaultText: '#000000',
    disabledText: '#a0a5b1',
  },
  spacing: (factor: number) => `${8 * factor}px`,
  typography: {
    fontSize: (factor: number) => `${2 * factor}px`,
  },
};
