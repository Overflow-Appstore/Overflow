import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { ScreenContainer } from '@/components/ScreenContainer';
import { Text } from '@/components/Text';
import { PostCard } from '@/components/PostCard';
import { useHighlights } from '@/hooks/useHighlights';
import { useLowBandwidth } from '@/hooks/useLowBandwidth';
import { fetchHomeFeed } from '@/services/feed';

const HomeScreen = () => {
  const { t } = useTranslation();
  const { data: posts } = useQuery(['homeFeed'], fetchHomeFeed);
  const highlight = useHighlights();
  const lowBandwidth = useLowBandwidth();

  return (
    <ScreenContainer title={t('home.title')}>
      {highlight && (
        <View style={styles.highlightCard} accessible accessibilityRole="button" accessibilityLabel={t('home.highlightAccessLabel', { name: highlight.name })}>
          <Text variant="overline" color="accent">{t('home.dailyHighlight')}</Text>
          <Text variant="titleMedium">{highlight.name}</Text>
          <Text variant="body">{highlight.summary}</Text>
        </View>
      )}
      <FlatList
        data={posts ?? []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostCard post={item} lowBandwidth={lowBandwidth} />
        )}
        ListEmptyComponent={<Text>{t('home.empty')}</Text>}
        showsVerticalScrollIndicator={false}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  highlightCard: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#06282F10',
    marginBottom: 16,
  },
});

export default HomeScreen;
