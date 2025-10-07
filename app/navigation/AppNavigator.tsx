import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '@/screens/HomeScreen';
import DiscoverScreen from '@/screens/DiscoverScreen';
import CreateScreen from '@/screens/CreateScreen';
import MessagesScreen from '@/screens/MessagesScreen';
import ProfileScreen from '@/screens/ProfileScreen';
import { AppTheme } from '@/theme/theme';

const Tab = createBottomTabNavigator();

interface Props {
  appTheme: AppTheme;
}

export function AppNavigator({ appTheme }: Props) {
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: appTheme.colors.accent,
        tabBarInactiveTintColor: appTheme.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: appTheme.colors.surface,
        },
        tabBarIcon: ({ color, size }) => {
          const iconName: Record<string, keyof typeof Ionicons.glyphMap> = {
            Home: 'home',
            Discover: 'earth',
            Create: 'add-circle',
            Messages: 'chatbubbles',
            Profile: 'person',
          };
          const key = route.name;
          return <Ionicons name={iconName[key] ?? 'ellipse'} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: t('tabs.home') }} />
      <Tab.Screen name="Discover" component={DiscoverScreen} options={{ title: t('tabs.discover') }} />
      <Tab.Screen name="Create" component={CreateScreen} options={{ title: t('tabs.create') }} />
      <Tab.Screen name="Messages" component={MessagesScreen} options={{ title: t('tabs.messages') }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: t('tabs.profile') }} />
    </Tab.Navigator>
  );
}
