export interface AppTheme {
  isDark: boolean;
  colors: {
    background: string;
    surface: string;
    border: string;
    textPrimary: string;
    textSecondary: string;
    accent: string;
    accentSoft: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
  } & Record<string, string>;
}

export const lightTheme: AppTheme = {
  isDark: false,
  colors: {
    background: '#F2F5F7',
    surface: '#FFFFFF',
    border: '#C9D1D8',
    textPrimary: '#06282F',
    textSecondary: '#4E5D68',
    accent: '#FF6F5B',
    accentSoft: '#FF6F5B22',
    primary: '#06282F',
    secondary: '#4E5D68',
    success: '#3CB371',
    warning: '#FFB347',
    error: '#D64541',
  },
};

export const darkTheme: AppTheme = {
  isDark: true,
  colors: {
    background: '#031417',
    surface: '#0D1F24',
    border: '#12323B',
    textPrimary: '#F2F5F7',
    textSecondary: '#C9D1D8',
    accent: '#FF6F5B',
    accentSoft: '#FF6F5B22',
    primary: '#F2F5F7',
    secondary: '#C9D1D8',
    success: '#3CB371',
    warning: '#FFB347',
    error: '#D64541',
  },
};
