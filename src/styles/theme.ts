import { AppTheme } from '@/types/theme-types'

export const theme: AppTheme = {
  colors: {
    light: {
      primary: 'rgb(59, 130, 246)',
      secondary: 'rgb(16, 185, 129)',
      accent: 'rgb(245, 158, 11)',
      background: 'rgb(249, 250, 251)',
      text: 'rgb(17, 24, 39)',
      border: 'rgb(209, 213, 219)'
    },
    dark: {
      primary: 'rgb(59, 130, 246)',
      secondary: 'rgb(16, 185, 129)',
      accent: 'rgb(245, 158, 11)',
      background: 'rgb(17, 24, 39)',
      text: 'rgb(249, 250, 251)',
      border: 'rgb(55, 65, 81)'
    }
  },
  spacing: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem'
  }
}

// Tailwind CSS configuration reference
export const tailwindTheme = {
  extend: {
    colors: {
      primary: {
        50: 'rgb(239, 246, 255)',
        500: 'rgb(59, 130, 246)',
        600: 'rgb(37, 99, 235)'
      },
      dark: {
        800: 'rgb(31, 41, 55)',
        900: 'rgb(17, 24, 39)'
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    }
  }
}