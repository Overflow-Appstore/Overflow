import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { Text } from './Text';
import { useTheme } from '@/theme/ThemeContext';

type Props = {
  label: string;
  selected?: boolean;
  onPress?: () => void;
};

export const Chip: React.FC<Props> = ({ label, selected = false, onPress }) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      style={[
        styles.chip,
        {
          backgroundColor: selected ? theme.colors.accentSoft : theme.colors.surface,
          borderColor: selected ? theme.colors.accent : theme.colors.border,
        },
      ]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected }}
      accessibilityLabel={label}
    >
      <Text variant="bodySmall" color={selected ? 'accent' : 'secondary'}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    marginRight: 8,
    marginBottom: 8,
  },
});
