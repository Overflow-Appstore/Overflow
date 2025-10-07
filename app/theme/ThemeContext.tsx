import React, { createContext, useContext, useMemo, useState } from 'react';
import { Appearance } from 'react-native';
import { darkTheme, lightTheme, AppTheme } from './theme';

type ThemeContextValue = {
  theme: AppTheme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemScheme = Appearance.getColorScheme();
  const [isDark, setIsDark] = useState(systemScheme === 'dark');

  const value = useMemo(() => ({
    theme: isDark ? darkTheme : lightTheme,
    toggleTheme: () => setIsDark((prev) => !prev),
  }), [isDark]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
