import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { ScreenContainer } from '@/components/ScreenContainer';
import { Text } from '@/components/Text';
import { MessageThreadPreview } from '@/components/MessageThreadPreview';
import { useMessageThreads } from '@/hooks/useMessageThreads';

const MessagesScreen = () => {
  const { t } = useTranslation();
  const threads = useMessageThreads();

  return (
    <ScreenContainer title={t('messages.title')}>
      <View style={styles.banner}>
        <Text variant="body">{t('messages.safetyNotice')}</Text>
      </View>
      <FlatList
        data={threads}
        keyExtractor={(item) => item.threadId}
        renderItem={({ item }) => <MessageThreadPreview thread={item} />}
        ListEmptyComponent={<Text>{t('messages.empty')}</Text>}
        accessibilityLabel={t('messages.threadListAccessLabel')}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  banner: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#FFB34733',
    marginBottom: 12,
  },
});

export default MessagesScreen;
