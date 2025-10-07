import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from './Text';
import { UserProfile } from '@/types/models';

interface Props {
  stats: UserProfile['stats'];
}

export const StatsRow: React.FC<Props> = ({ stats }) => (
  <View style={styles.row} accessibilityRole="summary">
    <View style={styles.item}>
      <Text variant="titleMedium">{stats.followers}</Text>
      <Text variant="caption">Followers</Text>
    </View>
    <View style={styles.item}>
      <Text variant="titleMedium">{stats.follows}</Text>
      <Text variant="caption">Following</Text>
    </View>
    <View style={styles.item}>
      <Text variant="titleMedium">{stats.posts}</Text>
      <Text variant="caption">Posts</Text>
    </View>
    <View style={styles.item}>
      <Text variant="titleMedium">{stats.donations}</Text>
      <Text variant="caption">Donations</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  item: {
    alignItems: 'center',
  },
});
