import * as Notifications from 'expo-notifications';

export async function registerForPushNotificationsAsync() {
  const settings = await Notifications.getPermissionsAsync();
  if (!settings.granted) {
    const permission = await Notifications.requestPermissionsAsync();
    if (!permission.granted) {
      return null;
    }
  }
  const token = await Notifications.getExpoPushTokenAsync();
  // TODO: send token to backend with org/cause topic preferences.
  return token;
}

export async function subscribeToTopic(topicKey: string) {
  // TODO: Implement topic subscription via Cloud Functions.
  console.log('Subscribe to topic', topicKey);
}
