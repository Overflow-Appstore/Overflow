import React from 'react';
import { Text as RNText, TextProps, StyleSheet } from 'react-native';
import { useTheme } from '@/theme/ThemeContext';

type Variant =
  | 'display'
  | 'titleLarge'
  | 'titleMedium'
  | 'body'
  | 'bodySmall'
  | 'caption'
  | 'overline';

type ColorToken = 'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'warning';

interface Props extends TextProps {
  variant?: Variant;
  color?: ColorToken;
  children: React.ReactNode;
}

export const Text: React.FC<Props> = ({ variant = 'body', color = 'primary', style, children, ...rest }) => {
  const { theme } = useTheme();
  const variantStyle = styles[variant];
  const colorValue = theme.colors[color] ?? theme.colors.textPrimary;

  return (
    <RNText
      accessibilityRole="text"
      style={[{ color: colorValue }, variantStyle, style]}
      {...rest}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  display: {
    fontSize: 32,
    lineHeight: 38,
    fontWeight: '600',
  },
  titleLarge: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '600',
  },
  titleMedium: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '600',
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
  bodySmall: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
  },
  overline: {
    fontSize: 12,
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
});
