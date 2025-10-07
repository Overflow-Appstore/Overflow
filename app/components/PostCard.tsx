import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Text } from './Text';
import { useTheme } from '@/theme/ThemeContext';
import { Post } from '@/types/models';

type Props = {
  post: Post;
  lowBandwidth: boolean;
};

export const PostCard: React.FC<Props> = ({ post, lowBandwidth }) => {
  const { theme } = useTheme();
  const media = post.mediaRefs[0];
  return (
    <View
      style={[styles.card, { backgroundColor: theme.colors.surface }]}
      accessible
      accessibilityRole="summary"
      accessibilityLabel={post.caption}
    >
      {media && media.type === 'image' && !lowBandwidth && (
        <Image
          source={{ uri: media.url }}
          style={styles.media}
          accessibilityIgnoresInvertColors
        />
      )}
      <View style={styles.content}>
        <Text variant="body">{post.caption}</Text>
        <View style={styles.meta}>
          <View style={styles.metaItem}>
            <Ionicons name="heart-outline" color={theme.colors.textSecondary} />
            <Text variant="caption">{post.likeCount}</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="chatbubble-ellipses-outline" color={theme.colors.textSecondary} />
            <Text variant="caption">{post.commentCount}</Text>
          </View>
          <TouchableOpacity accessibilityLabel="Save post">
            <Ionicons name="bookmark-outline" color={theme.colors.textSecondary} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  media: {
    width: '100%',
    height: 220,
  },
  content: {
    padding: 16,
  },
  meta: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
});
