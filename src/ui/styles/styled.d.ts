import 'styled-components';

interface IPalette {
  background: string;
  defaultText: string;
  disabledText: string;
}

interface ITypography {
  fontSize: (factor: number) => string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: IPalette;
    spacing: (factor: number) => string;
    typography: ITypography;
  }
}
