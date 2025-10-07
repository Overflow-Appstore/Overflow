import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useTranslation } from 'react-i18next';

import { ScreenContainer } from '@/components/ScreenContainer';
import { Text } from '@/components/Text';
import { Chip } from '@/components/Chip';
import { useDiscover } from '@/hooks/useDiscover';

const DiscoverScreen = () => {
  const { t } = useTranslation();
  const { filters, setFilter, results } = useDiscover();

  return (
    <ScreenContainer title={t('discover.title')}>
      <View style={styles.filterRow} accessible accessibilityLabel={t('discover.filters')}>
        {filters.available.map((filter) => (
          <Chip
            key={filter.id}
            label={filter.label}
            selected={filters.active.includes(filter.id)}
            onPress={() => setFilter(filter.id)}
          />
        ))}
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={StyleSheet.absoluteFill}
          accessibilityLabel={t('discover.mapAccessLabel')}
          initialRegion={{
            latitude: 0,
            longitude: 0,
            latitudeDelta: 80,
            longitudeDelta: 80,
          }}
        >
          {results.map((result) => (
            <Marker
              key={result.id}
              coordinate={{ latitude: result.latitude, longitude: result.longitude }}
              title={result.name}
              description={result.cause}
            />
          ))}
        </MapView>
      </View>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card} accessible accessibilityLabel={t('discover.resultAccessLabel', { name: item.name })}>
            <Text variant="titleMedium">{item.name}</Text>
            <Text variant="body">{item.cause}</Text>
            <Text variant="caption">{item.location}</Text>
          </View>
        )}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  mapContainer: {
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#F2F5F7',
    marginBottom: 12,
  },
});

export default DiscoverScreen;
