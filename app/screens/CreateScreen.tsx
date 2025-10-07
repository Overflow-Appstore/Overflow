import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useTranslation } from 'react-i18next';

import { ScreenContainer } from '@/components/ScreenContainer';
import { Text } from '@/components/Text';
import { useUploadMedia } from '@/hooks/useUploadMedia';

const CreateScreen = () => {
  const { t } = useTranslation();
  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('');
  const [tags, setTags] = useState('');
  const [mediaUri, setMediaUri] = useState<string | null>(null);
  const uploadMedia = useUploadMedia();

  const onPickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 0.7,
      base64: false,
    });
    if (!result.canceled) {
      setMediaUri(result.assets[0].uri);
    }
  };

  const onSubmit = async () => {
    if (mediaUri) {
      await uploadMedia({ uri: mediaUri, caption, location, tags });
      setCaption('');
      setLocation('');
      setTags('');
      setMediaUri(null);
    }
  };

  return (
    <ScreenContainer title={t('create.title')}>
      <ScrollView contentContainerStyle={styles.container}>
        <Button title={t('create.pickMedia')} onPress={onPickImage} />
        {mediaUri && <Text variant="caption">{t('create.mediaSelected')}</Text>}
        <TextInput
          style={styles.input}
          value={caption}
          onChangeText={setCaption}
          placeholder={t('create.captionPlaceholder')}
          accessibilityLabel={t('create.captionAccessLabel')}
        />
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={setLocation}
          placeholder={t('create.locationPlaceholder')}
          accessibilityLabel={t('create.locationAccessLabel')}
        />
        <TextInput
          style={styles.input}
          value={tags}
          onChangeText={setTags}
          placeholder={t('create.tagsPlaceholder')}
          accessibilityLabel={t('create.tagsAccessLabel')}
        />
        <View style={styles.submitWrapper}>
          <Button title={t('create.submit')} onPress={onSubmit} accessibilityHint={t('create.submitHint')} />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 120,
  },
  input: {
    borderWidth: 1,
    borderColor: '#C9D1D8',
    borderRadius: 8,
    padding: 12,
    marginTop: 12,
  },
  submitWrapper: {
    marginTop: 16,
  },
});

export default CreateScreen;
