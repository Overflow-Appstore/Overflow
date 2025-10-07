import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { ScreenContainer } from '@/components/ScreenContainer';
import { Text } from '@/components/Text';

const AdminPanelScreen = () => (
  <ScreenContainer title="Staff Tools">
    <View style={styles.card}>
      <Text variant="titleMedium">Moderation Queue</Text>
      <Text variant="body">Review flagged posts and approve or escalate.</Text>
      <Button title="Open Queue" onPress={() => { /* TODO: navigate to moderation queue */ }} />
    </View>
    <View style={styles.card}>
      <Text variant="titleMedium">Verification Requests</Text>
      <Text variant="body">Process pending identity verification submissions.</Text>
      <Button title="View Requests" onPress={() => { /* TODO: open verification list */ }} />
    </View>
    <View style={styles.card}>
      <Text variant="titleMedium">Broadcast Message</Text>
      <Text variant="body">Send updates to organization topic subscribers.</Text>
      <Button title="Compose" onPress={() => { /* TODO: open composer */ }} />
    </View>
  </ScreenContainer>
);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
  },
});

export default AdminPanelScreen;
