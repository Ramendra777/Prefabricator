export type ColorScheme = 'light' | 'dark'

export interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  background: string
  text: string
  border: string
}

export interface SizeScale {
  sm: string
  md: string
  lg: string
  xl: string
}

export interface AppTheme {
  colors: {
    light: ThemeColors
    dark: ThemeColors
  }
  spacing: SizeScale
  borderRadius: SizeScale
}