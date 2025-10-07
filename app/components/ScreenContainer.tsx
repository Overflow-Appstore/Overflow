import React from 'react';
import { View, StyleSheet, ScrollViewProps, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Text } from './Text';
import { useTheme } from '@/theme/ThemeContext';

interface Props extends ScrollViewProps {
  title: string;
  children: React.ReactNode;
}

export function ScreenContainer({ title, children, ...rest }: Props) {
  const { theme } = useTheme();
  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.content}
      {...rest}
    >
      <StatusBar style={theme.isDark ? 'light' : 'dark'} />
      <View accessible accessibilityRole="header" style={styles.header}>
        <Text variant="titleLarge">{title}</Text>
      </View>
      <View>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 80,
  },
  header: {
    marginBottom: 16,
  },
});
