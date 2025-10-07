import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useColorScheme } from 'react-native';
import { I18nextProvider } from 'react-i18next';

import './app/services/firebase';
import { AppNavigator } from './app/navigation/AppNavigator';
import { lightTheme, darkTheme } from './app/theme/theme';
import { ThemeProvider } from './app/theme/ThemeContext';
import { ToastProvider } from './app/components/ToastProvider';
import i18n from './app/services/i18n';

const queryClient = new QueryClient();

export default function App() {
  const scheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <ToastProvider>
              <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
                <AppNavigator
                  appTheme={scheme === 'dark' ? darkTheme : lightTheme}
                />
              </NavigationContainer>
            </ToastProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </I18nextProvider>
    </SafeAreaProvider>
  );
}
