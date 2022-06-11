import 'styled-components';

interface IPalette {
  borders: {
    default: string;
  };
  layout: {
    background: string;
  };
  typography: {
    default: string;
    disabled: string;
  };
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
