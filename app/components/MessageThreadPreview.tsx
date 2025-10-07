import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Text } from './Text';
import { MessageThread } from '@/types/models';

interface Props {
  thread: MessageThread;
}

export const MessageThreadPreview: React.FC<Props> = ({ thread }) => (
  <TouchableOpacity
    style={styles.container}
    accessibilityRole="button"
    accessibilityLabel={`Open conversation with ${thread.members.join(', ')}`}
  >
    <View>
      <Text variant="titleMedium">{thread.members.join(', ')}</Text>
      <Text variant="bodySmall">{thread.lastMessage?.content ?? 'Start the conversation'}</Text>
    </View>
    {Object.values(thread.unreadCountByUser).some((count) => count > 0) && (
      <View style={styles.badge}>
        <Text variant="caption" color="primary">
          {Object.values(thread.unreadCountByUser).reduce((sum, count) => sum + count, 0)}
        </Text>
      </View>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#F2F5F7',
    marginBottom: 12,
  },
  badge: {
    minWidth: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FF6F5B33',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
});
