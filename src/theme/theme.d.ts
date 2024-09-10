import { DefaultTheme } from 'react-native-paper';

declare module 'react-native-paper' {
  export interface ThemeColors {
    bgDark: string;
    bgLight: string;
    onPrimaryContainer: string;
    onPrimaryDisabled: string;
    onSecondary: string;
    onSecondaryDisabled: string;
    disabled: string;
  }
}
