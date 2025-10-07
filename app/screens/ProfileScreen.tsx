import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

import { ScreenContainer } from '@/components/ScreenContainer';
import { Text } from '@/components/Text';
import { useAuth } from '@/hooks/useAuth';
import { useUserProfile } from '@/hooks/useUserProfile';
import { StatsRow } from '@/components/StatsRow';

const ProfileScreen = () => {
  const { t } = useTranslation();
  const { signOut } = useAuth();
  const profile = useUserProfile();

  if (!profile) {
    return (
      <ScreenContainer title={t('profile.title')}>
        <Text>{t('profile.loading')}</Text>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer title={t('profile.title')}>
      <View style={styles.header} accessibilityRole="summary">
        <Text variant="titleLarge">{profile.name}</Text>
        <Text variant="body">{profile.bio || t('profile.noBio')}</Text>
        <Text variant="caption">{profile.location.country}</Text>
        {profile.verified && <Text variant="overline" color="success">{t('profile.verified')}</Text>}
      </View>
      <StatsRow stats={profile.stats} />
      <View style={styles.section}>
        <Text variant="titleMedium">{t('profile.projects')}</Text>
        {/* TODO: display projects list */}
        <Text variant="body">{t('profile.projectsPlaceholder')}</Text>
      </View>
      <View style={styles.section}>
        <Text variant="titleMedium">{t('profile.links')}</Text>
        <Text variant="body">{t('profile.linksPlaceholder')}</Text>
      </View>
      <View style={styles.section}>
        <View style={styles.buttonSpacing}>
          <Button title={t('profile.editProfile')} onPress={() => { /* TODO: navigate to edit */ }} />
        </View>
        <View style={styles.buttonSpacing}>
          <Button title={t('profile.settings')} onPress={() => { /* TODO: navigate to settings */ }} />
        </View>
        <View style={styles.buttonSpacing}>
          <Button title={t('profile.signOut')} onPress={signOut} />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 16,
  },
  section: {
    marginVertical: 12,
  },
  buttonSpacing: {
    marginBottom: 8,
  },
});

export default ProfileScreen;
