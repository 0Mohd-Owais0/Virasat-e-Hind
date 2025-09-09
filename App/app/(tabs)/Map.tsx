import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

type Place = {
  id: number;
  name: string;
  state: string;
  lat: number;
  lng: number;
  tags: string[];
  desc: string;
};

const places: Place[] = [
  { id: 1, name: "Taj Mahal", state: "Uttar Pradesh", lat: 27.1751, lng: 78.0421, tags: ["Mughal", "UNESCO"], desc: "17th‑century ivory‑white marble mausoleum on the south bank of the Yamuna river in Agra." },
  { id: 2, name: "Hampi", state: "Karnataka", lat: 15.3350, lng: 76.4600, tags: ["Vijayanagara", "UNESCO"], desc: "Ruins of the Vijayanagara Empire famed for stone temples and boulder‑strewn landscape." },
  { id: 3, name: "Konark Sun Temple", state: "Odisha", lat: 19.8876, lng: 86.0945, tags: ["Kalinga", "UNESCO"], desc: "13th‑century Sun temple designed as a colossal chariot with intricately carved wheels." }
];

export default function Map() {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  const initialRegion = {
    latitude: 22.3511148,
    longitude: 78.6677428,
    latitudeDelta: 15,
    longitudeDelta: 15,
  };

  const handleMarkerPress = (place: Place) => {
    setSelectedPlace(place);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Interactive Map of Cultural Places</Text>
        <Text style={styles.subtitle}>Click a marker to see details</Text>
      </View>
      
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={initialRegion}
          showsUserLocation={true}
        >
          {places.map((place) => (
            <Marker
              key={place.id}
              coordinate={{ latitude: place.lat, longitude: place.lng }}
              title={place.name}
              description={place.state}
              onPress={() => handleMarkerPress(place)}
            />
          ))}
        </MapView>
        
        <View style={styles.placeCard}>
          <Text style={styles.cardTitle}>
            {selectedPlace ? `${selectedPlace.name} — ${selectedPlace.state}` : 'Selected Place'}
          </Text>
          {selectedPlace ? (
            <>
              <Text style={styles.cardDesc}>{selectedPlace.desc}</Text>
              <View style={styles.tagsContainer}>
                {selectedPlace.tags.map((tag, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
            </>
          ) : (
            <Text style={styles.cardSubtitle}>Click a marker to view details.</Text>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5E6D3',
  },
  header: {
    padding: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#6B2D2D',
    fontFamily: 'System',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#514a44',
  },
  mapContainer: {
    flex: 1,
    margin: 20,
    marginTop: 0,
  },
  map: {
    flex: 1,
    borderRadius: 18,
    marginBottom: 16,
    overflow: 'hidden',
  },
  mapPlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  placeholderText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 8,
  },
  placeholderSubtext: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
  placeCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9C6A1',
    borderRadius: 18,
    padding: 16,
    ...(Platform.OS === 'ios' || Platform.OS === 'android' ? {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.05,
      shadowRadius: 22,
      elevation: 5,
    } : {
      // @ts-ignore
      boxShadow: '0 8px 22px rgba(0,0,0,0.05)',
    }),
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2E2E2E',
    marginBottom: 8,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#8A7C6E',
  },
  cardDesc: {
    fontSize: 14,
    color: '#2E2E2E',
    lineHeight: 20,
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  tag: {
    backgroundColor: '#F5E6D3',
    borderWidth: 1,
    borderColor: '#D9C6A1',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagText: {
    fontSize: 12,
    color: '#2E2E2E',
  },
  placesList: {
    maxHeight: 80,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  placeItem: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9C6A1',
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    minWidth: 120,
    alignItems: 'center',
  },
  placeItemSelected: {
    backgroundColor: '#6B2D2D',
    borderColor: '#6B2D2D',
  },
  placeItemName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2E2E2E',
    textAlign: 'center',
  },
  placeItemState: {
    fontSize: 12,
    color: '#8A7C6E',
    textAlign: 'center',
    marginTop: 2,
  },
});
