// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Platform,
//   AppState,
//   AppStateStatus,
//   TouchableOpacity,
//   ScrollView,
//   Dimensions,
//   Image,
//   ActivityIndicator,
// } from 'react-native';
// import MapView, { Marker, Region, UrlTile } from 'react-native-maps';
// import * as Location from 'expo-location';

// const { width, height } = Dimensions.get('window');

// // Types
// type MarkerType = 'monuments' | 'food' | 'religious';

// type Place = {
//   id: number;
//   name: string;
//   state: string;
//   city: string;
//   lat: number;
//   lng: number;
//   tags: string[];
//   desc: string;
//   type: MarkerType;
//   rating?: number;
//   openHours?: string;
//   price?: string;
// };

// type CityInfo = {
//   name: string;
//   state: string;
//   population: string;
//   founded: string;
//   famousFor: string[];
//   description: string;
//   climate: string;
//   languages: string[];
//   music: string[];
//   food: string[];
//   clothes: string[];
//   historicPlaces: string[];
//   history: string;
//   culture: string[];
// };

// type Festival = {
//   id: number;
//   name: string;
//   month: string;
//   description: string;
//   imageUrl: string;
// };

// // Sample data for Lucknow and nearby places
// const places: Place[] = [
//   {
//     id: 1,
//     name: 'Bara Imambara',
//     state: 'Uttar Pradesh',
//     city: 'Lucknow',
//     lat: 26.8693,
//     lng: 80.9115,
//     tags: ['Nawabi', 'Architecture', 'Historical'],
//     desc: 'An imposing monument built by Asaf-ud-Daula in 1784, famous for its central hall and the Bhool Bhulaiya maze.',
//     type: 'monuments',
//     rating: 4.5,
//     openHours: '6:00 AM - 5:00 PM',
//   },
//   {
//     id: 2,
//     name: 'Chota Imambara',
//     state: 'Uttar Pradesh',
//     city: 'Lucknow',
//     lat: 26.8615,
//     lng: 80.9103,
//     tags: ['Nawabi', 'Tomb', 'Architecture'],
//     desc: 'Also known as Hussainabad Imambara, built by Muhammad Ali Shah in 1838 with beautiful chandeliers.',
//     type: 'monuments',
//     rating: 4.3,
//     openHours: '6:00 AM - 5:00 PM',
//   },
//   {
//     id: 3,
//     name: 'Rumi Darwaza',
//     state: 'Uttar Pradesh',
//     city: 'Lucknow',
//     lat: 26.8676,
//     lng: 80.9115,
//     tags: ['Gateway', 'Nawabi', 'Architecture'],
//     desc: 'An imposing gateway built in 1784, standing 60 feet tall, exemplifying Awadhi architecture.',
//     type: 'monuments',
//     rating: 4.2,
//     openHours: 'Always open',
//   },
//   {
//     id: 4,
//     name: 'Tunday Kababi',
//     state: 'Uttar Pradesh',
//     city: 'Lucknow',
//     lat: 26.8467,
//     lng: 80.9462,
//     tags: ['Kebab', 'Traditional', 'Famous'],
//     desc: 'Legendary kebab shop famous for its galouti kebabs, established in 1905 in Chowk area.',
//     type: 'food',
//     rating: 4.7,
//     openHours: '12:00 PM - 11:00 PM',
//     price: '₹₹',
//   },
//   {
//     id: 5,
//     name: 'Idris Biryani',
//     state: 'Uttar Pradesh',
//     city: 'Lucknow',
//     lat: 26.8526,
//     lng: 80.9450,
//     tags: ['Biryani', 'Traditional', 'Authentic'],
//     desc: 'Famous for authentic Lucknowi biryani with aromatic spices and tender meat.',
//     type: 'food',
//     rating: 4.6,
//     openHours: '11:00 AM - 11:00 PM',
//     price: '₹₹',
//   },
//   {
//     id: 6,
//     name: 'Ram Asrey Sweets',
//     state: 'Uttar Pradesh',
//     city: 'Lucknow',
//     lat: 26.8467,
//     lng: 80.9420,
//     tags: ['Sweets', 'Traditional', 'Kulfi'],
//     desc: 'Historic sweet shop known for traditional Indian sweets and famous malai kulfi.',
//     type: 'food',
//     rating: 4.4,
//     openHours: '8:00 AM - 11:00 PM',
//     price: '₹',
//   },
//   {
//     id: 7,
//     name: 'Hanuman Setu Mandir',
//     state: 'Uttar Pradesh',
//     city: 'Lucknow',
//     lat: 26.8206,
//     lng: 80.9479,
//     tags: ['Hindu', 'Temple', 'Hanuman'],
//     desc: 'Ancient Hanuman temple located on the banks of River Gomti, popular among devotees.',
//     type: 'religious',
//     rating: 4.5,
//     openHours: '5:00 AM - 10:00 PM',
//   },
//   {
//     id: 8,
//     name: 'Teele Wali Masjid',
//     state: 'Uttar Pradesh',
//     city: 'Lucknow',
//     lat: 26.8584,
//     lng: 80.9216,
//     tags: ['Mosque', 'Islamic', 'Architecture'],
//     desc: 'Beautiful mosque with three golden domes, representing Islamic architectural excellence.',
//     type: 'religious',
//     rating: 4.3,
//     openHours: '5:00 AM - 10:00 PM',
//   },
//   {
//     id: 9,
//     name: 'Chandrika Devi Temple',
//     state: 'Uttar Pradesh',
//     city: 'Lucknow',
//     lat: 26.7850,
//     lng: 80.8500,
//     tags: ['Hindu', 'Temple', 'Goddess'],
//     desc: 'Ancient temple dedicated to Goddess Chandrika, situated in a peaceful location.',
//     type: 'religious',
//     rating: 4.2,
//     openHours: '6:00 AM - 8:00 PM',
//   },
// ];

// // Enhanced city information
// const lucknowInfo: CityInfo = {
//   name: 'Lucknow',
//   state: 'Uttar Pradesh',
//   population: '3.2 million',
//   founded: '1350 AD',
//   famousFor: ['Nawabi Culture', 'Kebabs', 'Chikankari', 'Adab & Tehzeeb'],
//   description: 'The capital city of Uttar Pradesh, known as the City of Nawabs. Famous for its rich cultural heritage, exquisite cuisine, beautiful gardens, and courteous people.',
//   climate: 'Subtropical with hot summers and cool winters',
//   languages: ['Hindi', 'Urdu', 'English', 'Awadhi'],
//   music: ['Thumri', 'Ghazal', 'Dadra', 'Kathak Dance', 'Classical Hindustani', 'Qawwali'],
//   food: ['Galouti Kebab', 'Lucknowi Biryani', 'Sheermal', 'Kulfi Faluda', 'Nihari', 'Korma', 'Roomali Roti', 'Makhan Malai'],
//   clothes: ['Chikankari', 'Lucknowi Kurta', 'Angarkha', 'Sharara', 'Gharara', 'Zardozi Work', 'Kamdani'],
//   historicPlaces: ['Residency', 'Chattar Manzil', 'Dilkusha Kothi', 'British Residency', 'Kaiserbagh Palace', 'La Martiniere College'],
//   history: 'Founded in 1350 by Sufi saint Hazrat Shah Rukn-e-Alam, Lucknow rose to prominence under the Nawabs of Awadh (1722-1856). The city became a center of art, culture, and cuisine. It played a crucial role in the 1857 Indian Rebellion and later became an important administrative center under British rule.',
//   culture: ['Poetry & Literature', 'Mughal Gardens', 'Courtly Etiquette (Adab)', 'Handicrafts', 'Classical Music', 'Traditional Festivals']
// };

// const festivals: Festival[] = [
//   {
//     id: 1,
//     name: 'Lucknow Mahotsav',
//     month: 'December',
//     description: 'A vibrant cultural festival showcasing music, dance, handicrafts, and food of Lucknow.',
//     imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
//   },
//   {
//     id: 2,
//     name: 'Teele Wali Music Fair',
//     month: 'March',
//     description: 'Traditional musical performances featuring instruments like tabla, sitar, and harmonium.',
//     imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
//   },
//   {
//     id: 3,
//     name: 'Chikankari Festival',
//     month: 'February',
//     description: 'Celebrating the traditional embroidery art of Lucknow with exhibitions and workshops.',
//     imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&h=400&fit=crop',
//   },
// ];

// const RemoteImage = ({ uri, style }: { uri: string; style: any }) => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   return (
//     <View style={style}>
//       {loading && <ActivityIndicator style={{ position: 'absolute', top: '45%', left: '45%' }} />}
//       <Image
//         source={error ? { uri: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop' } : { uri }}
//         style={style}
//         onLoadEnd={() => setLoading(false)}
//         onError={() => setError(true)}
//       />
//     </View>
//   );
// };

// export default function Map() {
//   const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
//   const [locationPermission, setLocationPermission] = useState(false);
//   const [appState, setAppState] = useState<AppStateStatus>(AppState.currentState);
//   const [visibleMarkers, setVisibleMarkers] = useState<Set<MarkerType>>(
//     new Set(['monuments', 'food', 'religious'])
//   );
//   const [mapReady, setMapReady] = useState(false);

//   // Center map on Lucknow
//   const [region, setRegion] = useState<Region>({
//     latitude: 26.8467,
//     longitude: 80.9462,
//     latitudeDelta: 0.1,
//     longitudeDelta: 0.1,
//   });

//   useEffect(() => {
//     const checkPermissions = async () => {
//       try {
//         if (Platform.OS !== 'web') {
//           const { status } = await Location.getForegroundPermissionsAsync();
//           if (status !== 'granted') {
//             const { status: reqStatus } = await Location.requestForegroundPermissionsAsync();
//             setLocationPermission(reqStatus === 'granted');
//           } else {
//             setLocationPermission(true);
//           }
//         } else {
//           if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//               () => setLocationPermission(true),
//               () => setLocationPermission(false)
//             );
//           }
//         }
//       } catch (error) {
//         console.log('Permission error:', error);
//         setLocationPermission(false);
//       }
//     };

//     const handleAppStateChange = (nextAppState: AppStateStatus) => {
//       if (appState.match(/inactive|background/) && nextAppState === 'active') {
//         checkPermissions();
//       }
//       setAppState(nextAppState);
//     };

//     if (Platform.OS !== 'web') {
//       const subscription = AppState.addEventListener('change', handleAppStateChange);
//       checkPermissions();
//       return () => subscription.remove();
//     } else {
//       checkPermissions();
//     }
//   }, [appState]);

//   const handleMarkerPress = (place: Place) => {
//     setSelectedPlace(place);
//   };

//   const toggleMarkerType = (type: MarkerType) => {
//     const newVisible = new Set(visibleMarkers);
//     if (newVisible.has(type)) {
//       newVisible.delete(type);
//     } else {
//       newVisible.add(type);
//     }
//     setVisibleMarkers(newVisible);
//   };

//   const getMarkerColor = (type: MarkerType): string => {
//     switch (type) {
//       case 'monuments': return '#E63946';
//       case 'food': return '#F77F00';
//       case 'religious': return '#6A994E';
//       default: return '#457B9D';
//     }
//   };

//   const getMarkerIcon = (type: MarkerType): string => {
//     switch (type) {
//       case 'monuments': return '🏛️';
//       case 'food': return '🍽️';
//       case 'religious': return '🕉️';
//       default: return '📍';
//     }
//   };

//   const filteredPlaces = places.filter(place => visibleMarkers.has(place.type));

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.title}>Cultural Places of Lucknow</Text>
//         <Text style={styles.subtitle}>Explore the City of Nawabs</Text>
//       </View>

//       {/* Map Container with Overlay Filters */}
//       <View style={styles.mapContainer}>
//         <MapView
//           style={styles.map}
//           region={region}
//           onRegionChangeComplete={(reg) => setRegion(reg)}
//           showsUserLocation={locationPermission}
//           showsMyLocationButton={true}
//           showsBuildings={false}
//           showsTraffic={false}
//           mapType="none"
//           onMapReady={() => {
//             console.log('✅ Map ready');
//             setMapReady(true);
//           }}
//           onError={(error: any) => console.log('❌ Map error:', error)}
//         >
//           <UrlTile
//             urlTemplate="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png"
//             maximumZ={19}
//             flipY={false}
//             shouldReplaceMapContent={true}
//           />
          
//           {/* Place Markers */}
//           {mapReady && filteredPlaces.map((place) => (
//             <Marker
//               key={place.id}
//               coordinate={{ latitude: place.lat, longitude: place.lng }}
//               title={place.name}
//               description={place.desc.substring(0, 50) + '...'}
//               onPress={() => handleMarkerPress(place)}
//             >
//               <View style={[styles.customMarker, { backgroundColor: getMarkerColor(place.type) }]}>
//                 <Text style={styles.markerText}>{getMarkerIcon(place.type)}</Text>
//               </View>
//             </Marker>
//           ))}
//         </MapView>

//         {/* Overlay Filter Controls */}
//         <View style={styles.filterOverlay}>
//           <TouchableOpacity
//             style={[styles.filterChip, visibleMarkers.has('monuments') && styles.activeChip]}
//             onPress={() => toggleMarkerType('monuments')}
//           >
//             <Text style={styles.chipIcon}>🏛️</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.filterChip, visibleMarkers.has('food') && styles.activeChip]}
//             onPress={() => toggleMarkerType('food')}
//           >
//             <Text style={styles.chipIcon}>🍽️</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.filterChip, visibleMarkers.has('religious') && styles.activeChip]}
//             onPress={() => toggleMarkerType('religious')}
//           >
//             <Text style={styles.chipIcon}>🕉️</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Information Section - Full Width */}
//       <ScrollView style={styles.infoSection} showsVerticalScrollIndicator={false}>
//         {/* City Information - Always Visible */}
//         <View style={styles.cityInfoSection}>
//           <Text style={styles.cityTitle}>
//             🕌 {lucknowInfo.name}, {lucknowInfo.state}
//           </Text>
          
//           <View style={styles.cityHeaderRow}>
//             <Image 
//               source={{ uri: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop' }}
//               style={styles.cityImage} 
//             />
//             <View style={styles.cityTextContainer}>
//               <Text style={styles.cityDescription}>{lucknowInfo.description}</Text>
//             </View>
//           </View>

//           {/* Basic Info Grid */}
//           <View style={styles.infoGrid}>
//             <View style={styles.infoItem}>
//               <Text style={styles.infoLabel}>Population</Text>
//               <Text style={styles.infoValue}>{lucknowInfo.population}</Text>
//             </View>
//             <View style={styles.infoItem}>
//               <Text style={styles.infoLabel}>Founded</Text>
//               <Text style={styles.infoValue}>{lucknowInfo.founded}</Text>
//             </View>
//             <View style={styles.infoItem}>
//               <Text style={styles.infoLabel}>Climate</Text>
//               <Text style={styles.infoValue}>{lucknowInfo.climate}</Text>
//             </View>
//           </View>

//           {/* History Section */}
//           <View style={styles.detailSection}>
//             <Text style={styles.sectionTitle}>📜 History</Text>
//             <Text style={styles.detailText}>{lucknowInfo.history}</Text>
//           </View>

//           {/* Music Section */}
//           <View style={styles.detailSection}>
//             <Text style={styles.sectionTitle}>🎵 Music & Arts</Text>
//             <View style={styles.tagsContainer}>
//               {lucknowInfo.music.map((item, index) => (
//                 <View key={index} style={[styles.tag, styles.musicTag]}>
//                   <Text style={styles.tagText}>{item}</Text>
//                 </View>
//               ))}
//             </View>
//           </View>

//           {/* Food Section */}
//           <View style={styles.detailSection}>
//             <Text style={styles.sectionTitle}>🍽️ Famous Cuisine</Text>
//             <View style={styles.tagsContainer}>
//               {lucknowInfo.food.map((item, index) => (
//                 <View key={index} style={[styles.tag, styles.foodTag]}>
//                   <Text style={styles.tagText}>{item}</Text>
//                 </View>
//               ))}
//             </View>
//           </View>

//           {/* Clothing Section */}
//           <View style={styles.detailSection}>
//             <Text style={styles.sectionTitle}>👘 Traditional Attire</Text>
//             <View style={styles.tagsContainer}>
//               {lucknowInfo.clothes.map((item, index) => (
//                 <View key={index} style={[styles.tag, styles.clothesTag]}>
//                   <Text style={styles.tagText}>{item}</Text>
//                 </View>
//               ))}
//             </View>
//           </View>

//           {/* Historic Places */}
//           <View style={styles.detailSection}>
//             <Text style={styles.sectionTitle}>🏰 Historic Places</Text>
//             <View style={styles.tagsContainer}>
//               {lucknowInfo.historicPlaces.map((item, index) => (
//                 <View key={index} style={[styles.tag, styles.historicTag]}>
//                   <Text style={styles.tagText}>{item}</Text>
//                 </View>
//               ))}
//             </View>
//           </View>

//           {/* Cultural Aspects */}
//           <View style={styles.detailSection}>
//             <Text style={styles.sectionTitle}>🎭 Cultural Heritage</Text>
//             <View style={styles.tagsContainer}>
//               {lucknowInfo.culture.map((item, index) => (
//                 <View key={index} style={[styles.tag, styles.cultureTag]}>
//                   <Text style={styles.tagText}>{item}</Text>
//                 </View>
//               ))}
//             </View>
//           </View>

//           {/* Events Section */}
//           <Text style={styles.sectionTitle}>🎉 What's Happening in Lucknow</Text>
//           {festivals.map((fest, index) => (
//             <View key={fest.id} style={[styles.festivalCard, { flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }]}>
//               <RemoteImage uri={fest.imageUrl} style={styles.festivalImage} />
//               <View style={styles.festivalTextContainer}>
//                 <Text style={styles.festivalTitle}>{fest.name}</Text>
//                 <Text style={styles.festivalMonth}>{fest.month}</Text>
//                 <Text style={styles.festivalDesc}>{fest.description}</Text>
//               </View>
//             </View>
//           ))}

//           {/* Languages */}
//           <View style={styles.detailSection}>
//             <Text style={styles.sectionTitle}>🗣️ Languages Spoken</Text>
//             <Text style={styles.languageText}>{lucknowInfo.languages.join(', ')}</Text>
//           </View>
//         </View>

//         {/* Selected Place Information */}
//         {selectedPlace && (
//           <View style={styles.selectedPlaceSection}>
//             <View style={styles.divider} />
//             <Text style={styles.selectedPlaceTitle}>Selected Place</Text>

//             <View style={styles.placeHeader}>
//               <Text style={styles.placeName}>
//                 {getMarkerIcon(selectedPlace.type)} {selectedPlace.name}
//               </Text>
//               <View style={[styles.typeChip, { backgroundColor: getMarkerColor(selectedPlace.type) + '20' }]}>
//                 <Text style={[styles.typeText, { color: getMarkerColor(selectedPlace.type) }]}>
//                   {selectedPlace.type.charAt(0).toUpperCase() + selectedPlace.type.slice(1)}
//                 </Text>
//               </View>
//             </View>

//             <Text style={styles.locationText}>
//               📍 {selectedPlace.city}, {selectedPlace.state}
//             </Text>

//             {selectedPlace.rating && (
//               <Text style={styles.ratingText}>
//                 ⭐ {selectedPlace.rating}/5
//               </Text>
//             )}

//             <Text style={styles.placeDesc}>{selectedPlace.desc}</Text>

//             {selectedPlace.openHours && (
//               <Text style={styles.detailTextSmall}>
//                 🕐 {selectedPlace.openHours}
//               </Text>
//             )}

//             {selectedPlace.price && (
//               <Text style={styles.detailTextSmall}>
//                 💰 {selectedPlace.price}
//               </Text>
//             )}

//             <View style={styles.tagsContainer}>
//               {selectedPlace.tags.map((tag, index) => (
//                 <View key={index} style={[styles.tag, styles.placeTag]}>
//                   <Text style={styles.tagText}>{tag}</Text>
//                 </View>
//               ))}
//             </View>
//           </View>
//         )}

//         {/* Statistics */}
//         <View style={styles.statsSection}>
//           <View style={styles.divider} />
//           <Text style={styles.statsText}>
//             📊 Showing {filteredPlaces.length} of {places.length} places
//           </Text>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8F9FA',
//   },
//   header: {
//     paddingTop: Platform.OS === 'ios' ? 50 : 30,
//     paddingHorizontal: 20,
//     paddingBottom: 15,
//     backgroundColor: '#FFFFFF',
//     borderBottomWidth: 1,
//     borderBottomColor: '#E9ECEF',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '800',
//     color: '#212529',
//     marginBottom: 5,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#6C757D',
//     fontWeight: '500',
//   },
//   mapContainer: {
//     height: height * 0.5,
//     position: 'relative',
//   },
//   map: {
//     flex: 1,
//   },
//   filterOverlay: {
//     position: 'absolute',
//     top: 15,
//     right: 15,
//     flexDirection: 'column',
//     gap: 8,
//   },
//   filterChip: {
//     width: 50,
//     height: 50,
//     backgroundColor: 'rgba(255, 255, 255, 0.95)',
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   activeChip: {
//     backgroundColor: '#007AFF',
//   },
//   chipIcon: {
//     fontSize: 20,
//   },
//   customMarker: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   markerText: {
//     fontSize: 18,
//     color: '#FFFFFF',
//   },
//   infoSection: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   cityInfoSection: {
//     padding: 20,
//   },
//   cityTitle: {
//     fontSize: 26,
//     fontWeight: '800',
//     color: '#212529',
//     marginBottom: 15,
//   },
//   cityHeaderRow: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginBottom: 20,
//     gap: 15,
//   },
//   cityImage: {
//     width: 120,
//     height: 90,
//     borderRadius: 12,
//   },
//   cityTextContainer: {
//     flex: 1,
//   },
//   cityDescription: {
//     fontSize: 16,
//     color: '#495057',
//     lineHeight: 24,
//   },
//   infoGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginBottom: 25,
//     gap: 15,
//   },
//   infoItem: {
//     flex: 1,
//     minWidth: '30%',
//   },
//   infoLabel: {
//     fontSize: 12,
//     color: '#6C757D',
//     fontWeight: '600',
//     marginBottom: 4,
//     textTransform: 'uppercase',
//     letterSpacing: 0.5,
//   },
//   infoValue: {
//     fontSize: 16,
//     color: '#212529',
//     fontWeight: '600',
//   },
//   detailSection: {
//     marginBottom: 25,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#212529',
//     marginBottom: 12,
//   },
//   detailText: {
//     fontSize: 15,
//     color: '#495057',
//     lineHeight: 22,
//   },
//   tagsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 8,
//   },
//   tag: {
//     backgroundColor: '#E9ECEF',
//     borderRadius: 16,
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//   },
//   musicTag: {
//     backgroundColor: '#FFE4E6',
//   },
//   foodTag: {
//     backgroundColor: '#FFF4E6',
//   },
//   clothesTag: {
//     backgroundColor: '#E6F3FF',
//   },
//   historicTag: {
//     backgroundColor: '#F0E6FF',
//   },
//   cultureTag: {
//     backgroundColor: '#E6FFF0',
//   },
//   placeTag: {
//     backgroundColor: '#DEF7EC',
//   },
//   tagText: {
//     fontSize: 12,
//     color: '#495057',
//     fontWeight: '600',
//   },
//   languageText: {
//     fontSize: 16,
//     color: '#495057',
//     fontWeight: '500',
//   },
//   festivalCard: {
//     marginBottom: 20,
//     backgroundColor: '#FFF',
//     borderRadius: 16,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 4,
//   },
//   festivalImage: {
//     width: 140,
//     height: 120,
//   },
//   festivalTextContainer: {
//     flex: 1,
//     padding: 16,
//     justifyContent: 'center',
//   },
//   festivalTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     marginBottom: 6,
//     color: '#212529',
//   },
//   festivalMonth: {
//     fontSize: 14,
//     color: '#007AFF',
//     marginBottom: 8,
//     fontWeight: '600',
//   },
//   festivalDesc: {
//     fontSize: 14,
//     color: '#495057',
//     lineHeight: 20,
//   },
//   selectedPlaceSection: {
//     padding: 20,
//     paddingTop: 0,
//   },
//   divider: {
//     height: 1,
//     backgroundColor: '#E9ECEF',
//     marginBottom: 20,
//   },
//   selectedPlaceTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#007AFF',
//     marginBottom: 15,
//   },
//   placeHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: 10,
//   },
//   placeName: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#212529',
//     flex: 1,
//     marginRight: 10,
//   },
//   typeChip: {
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   typeText: {
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   locationText: {
//     fontSize: 14,
//     color: '#6C757D',
//     fontWeight: '600',
//     marginBottom: 6,
//   },
//   ratingText: {
//     fontSize: 14,
//     color: '#FFC107',
//     fontWeight: '600',
//     marginBottom: 10,
//   },
//   placeDesc: {
//     fontSize: 15,
//     color: '#495057',
//     lineHeight: 22,
//     marginBottom: 15,
//   },
//   detailTextSmall: {
//     fontSize: 14,
//     color: '#6C757D',
//     marginBottom: 5,
//   },
//   statsSection: {
//     padding: 20,
//     paddingTop: 0,
//     paddingBottom: 40,
//   },
//   statsText: {
//     fontSize: 14,
//     color: '#6C757D',
//     fontWeight: '600',
//     textAlign: 'center',
//   },
// });










// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Platform,
//   AppState,
//   AppStateStatus,
//   TouchableOpacity,
//   ScrollView,
//   Dimensions,
//   Image,
//   ActivityIndicator,
// } from 'react-native';
// import MapView, { Marker, Region, UrlTile, PROVIDER_DEFAULT } from 'react-native-maps';
// import * as Location from 'expo-location';
// import L from "leaflet";


// const { width, height } = Dimensions.get('window');

// // Types
// type MarkerType = 'monuments' | 'food' | 'religious';

// type Place = {
//   id: number;
//   name: string;
//   state: string;
//   city: string;
//   lat: number;
//   lng: number;
//   tags: string[];
//   desc: string;
//   type: MarkerType;
//   rating?: number;
//   openHours?: string;
//   price?: string;
// };

// type CityInfo = {
//   name: string;
//   state: string;
//   population: string;
//   founded: string;
//   famousFor: string[];
//   description: string;
//   climate: string;
//   languages: string[];
//   music: string[];
//   food: string[];
//   clothes: string[];
//   historicPlaces: string[];
//   history: string;
//   culture: string[];
// };

// type Festival = {
//   id: number;
//   name: string;
//   month: string;
//   description: string;
//   imageUrl: string;
// };

// // Sample data for Lucknow and nearby places
// const places: Place[] = [
//   {
//     id: 1,
//     name: 'Bara Imambara',
//     state: 'Uttar Pradesh',
//     city: 'Lucknow',
//     lat: 26.8693,
//     lng: 80.9115,
//     tags: ['Nawabi', 'Architecture', 'Historical'],
//     desc: 'An imposing monument built by Asaf-ud-Daula in 1784, famous for its central hall and the Bhool Bhulaiya maze.',
//     type: 'monuments',
//     rating: 4.5,
//     openHours: '6:00 AM - 5:00 PM',
//   },
//   {
//     id: 2,
//     name: 'Chota Imambara',
//     state: 'Uttar Pradesh',
//     city: 'Lucknow',
//     lat: 26.8615,
//     lng: 80.9103,
//     tags: ['Nawabi', 'Tomb', 'Architecture'],
//     desc: 'Also known as Hussainabad Imambara, built by Muhammad Ali Shah in 1838 with beautiful chandeliers.',
//     type: 'monuments',
//     rating: 4.3,
//     openHours: '6:00 AM - 5:00 PM',
//   },
//   {
//     id: 3,
//     name: 'Rumi Darwaza',
//     state: 'Uttar Pradesh',
//     city: 'Lucknow',
//     lat: 26.8676,
//     lng: 80.9115,
//     tags: ['Gateway', 'Nawabi', 'Architecture'],
//     desc: 'An imposing gateway built in 1784, standing 60 feet tall, exemplifying Awadhi architecture.',
//     type: 'monuments',
//     rating: 4.2,
//     openHours: 'Always open',
//   },
//   {
//     id: 4,
//     name: 'Tunday Kababi',
//     state: 'Uttar Pradesh',
//     city: 'Lucknow',
//     lat: 26.8467,
//     lng: 80.9462,
//     tags: ['Kebab', 'Traditional', 'Famous'],
//     desc: 'Legendary kebab shop famous for its galouti kebabs, established in 1905 in Chowk area.',
//     type: 'food',
//     rating: 4.7,
//     openHours: '12:00 PM - 11:00 PM',
//     price: '₹₹',
//   },
//   {
//     id: 5,
//     name: 'Idris Biryani',
//     state: 'Uttar Pradesh',
//     city: 'Lucknow',
//     lat: 26.8526,
//     lng: 80.9450,
//     tags: ['Biryani', 'Traditional', 'Authentic'],
//     desc: 'Famous for authentic Lucknowi biryani with aromatic spices and tender meat.',
//     type: 'food',
//     rating: 4.6,
//     openHours: '11:00 AM - 11:00 PM',
//     price: '₹₹',
//   },
//   {
//     id: 6,
//     name: 'Ram Asrey Sweets',
//     state: 'Uttar Pradesh',
//     city: 'Lucknow',
//     lat: 26.8467,
//     lng: 80.9420,
//     tags: ['Sweets', 'Traditional', 'Kulfi'],
//     desc: 'Historic sweet shop known for traditional Indian sweets and famous malai kulfi.',
//     type: 'food',
//     rating: 4.4,
//     openHours: '8:00 AM - 11:00 PM',
//     price: '₹',
//   },
//   {
//     id: 7,
//     name: 'Hanuman Setu Mandir',
//     state: 'Uttar Pradesh',
//     city: 'Lucknow',
//     lat: 26.8206,
//     lng: 80.9479,
//     tags: ['Hindu', 'Temple', 'Hanuman'],
//     desc: 'Ancient Hanuman temple located on the banks of River Gomti, popular among devotees.',
//     type: 'religious',
//     rating: 4.5,
//     openHours: '5:00 AM - 10:00 PM',
//   },
//   {
//     id: 8,
//     name: 'Teele Wali Masjid',
//     state: 'Uttar Pradesh',
//     city: 'Lucknow',
//     lat: 26.8584,
//     lng: 80.9216,
//     tags: ['Mosque', 'Islamic', 'Architecture'],
//     desc: 'Beautiful mosque with three golden domes, representing Islamic architectural excellence.',
//     type: 'religious',
//     rating: 4.3,
//     openHours: '5:00 AM - 10:00 PM',
//   },
//   {
//     id: 9,
//     name: 'Chandrika Devi Temple',
//     state: 'Uttar Pradesh',
//     city: 'Lucknow',
//     lat: 26.7850,
//     lng: 80.8500,
//     tags: ['Hindu', 'Temple', 'Goddess'],
//     desc: 'Ancient temple dedicated to Goddess Chandrika, situated in a peaceful location.',
//     type: 'religious',
//     rating: 4.2,
//     openHours: '6:00 AM - 8:00 PM',
//   },
// ];

// // Enhanced city information
// const lucknowInfo: CityInfo = {
//   name: 'Lucknow',
//   state: 'Uttar Pradesh',
//   population: '3.2 million',
//   founded: '1350 AD',
//   famousFor: ['Nawabi Culture', 'Kebabs', 'Chikankari', 'Adab & Tehzeeb'],
//   description: 'The capital city of Uttar Pradesh, known as the City of Nawabs. Famous for its rich cultural heritage, exquisite cuisine, beautiful gardens, and courteous people.',
//   climate: 'Subtropical with hot summers and cool winters',
//   languages: ['Hindi', 'Urdu', 'English', 'Awadhi'],
//   music: ['Thumri', 'Ghazal', 'Dadra', 'Kathak Dance', 'Classical Hindustani', 'Qawwali'],
//   food: ['Galouti Kebab', 'Lucknowi Biryani', 'Sheermal', 'Kulfi Faluda', 'Nihari', 'Korma', 'Roomali Roti', 'Makhan Malai'],
//   clothes: ['Chikankari', 'Lucknowi Kurta', 'Angarkha', 'Sharara', 'Gharara', 'Zardozi Work', 'Kamdani'],
//   historicPlaces: ['Residency', 'Chattar Manzil', 'Dilkusha Kothi', 'British Residency', 'Kaiserbagh Palace', 'La Martiniere College'],
//   history: 'Founded in 1350 by Sufi saint Hazrat Shah Rukn-e-Alam, Lucknow rose to prominence under the Nawabs of Awadh (1722-1856). The city became a center of art, culture, and cuisine. It played a crucial role in the 1857 Indian Rebellion and later became an important administrative center under British rule.',
//   culture: ['Poetry & Literature', 'Mughal Gardens', 'Courtly Etiquette (Adab)', 'Handicrafts', 'Classical Music', 'Traditional Festivals']
// };

// const festivals: Festival[] = [
//   {
//     id: 1,
//     name: 'Lucknow Mahotsav',
//     month: 'December',
//     description: 'A vibrant cultural festival showcasing music, dance, handicrafts, and food of Lucknow.',
//     imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
//   },
//   {
//     id: 2,
//     name: 'Teele Wali Music Fair',
//     month: 'March',
//     description: 'Traditional musical performances featuring instruments like tabla, sitar, and harmonium.',
//     imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
//   },
//   {
//     id: 3,
//     name: 'Chikankari Festival',
//     month: 'February',
//     description: 'Celebrating the traditional embroidery art of Lucknow with exhibitions and workshops.',
//     imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&h=400&fit=crop',
//   },
// ];

// const RemoteImage = ({ uri, style }: { uri: string; style: any }) => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   return (
//     <View style={style}>
//       {loading && <ActivityIndicator style={{ position: 'absolute', top: '45%', left: '45%' }} />}
//       <Image
//         source={error ? { uri: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop' } : { uri }}
//         style={style}
//         onLoadEnd={() => setLoading(false)}
//         onError={() => setError(true)}
//       />
//     </View>
//   );
// };

// export default function Map() {
//   const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
//   const [locationPermission, setLocationPermission] = useState(false);
//   const [appState, setAppState] = useState<AppStateStatus>(AppState.currentState);
//   const [visibleMarkers, setVisibleMarkers] = useState<Set<MarkerType>>(
//     new Set(['monuments', 'food', 'religious'])
//   );
//   const [mapReady, setMapReady] = useState(false);

//   // Center map on Lucknow
//   const [region, setRegion] = useState<Region>({
//     latitude: 26.8467,
//     longitude: 80.9462,
//     latitudeDelta: 0.1,
//     longitudeDelta: 0.1,
//   });

//   useEffect(() => {
//     const checkPermissions = async () => {
//       try {
//         if (Platform.OS !== 'web') {
//           const { status } = await Location.getForegroundPermissionsAsync();
//           if (status !== 'granted') {
//             const { status: reqStatus } = await Location.requestForegroundPermissionsAsync();
//             setLocationPermission(reqStatus === 'granted');
//           } else {
//             setLocationPermission(true);
//           }
//         } else {
//           // Web - use browser geolocation API
//           if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//               () => setLocationPermission(true),
//               () => setLocationPermission(false)
//             );
//           }
//         }
//       } catch (error) {
//         console.log('Permission error:', error);
//         setLocationPermission(false);
//       }
//     };

//     const handleAppStateChange = (nextAppState: AppStateStatus) => {
//       if (appState.match(/inactive|background/) && nextAppState === 'active') {
//         checkPermissions();
//       }
//       setAppState(nextAppState);
//     };

//     if (Platform.OS !== 'web') {
//       const subscription = AppState.addEventListener('change', handleAppStateChange);
//       checkPermissions();
//       return () => subscription.remove();
//     } else {
//       checkPermissions();
//     }
//   }, [appState]);

//   const handleMarkerPress = (place: Place) => {
//     setSelectedPlace(place);
//   };

//   const toggleMarkerType = (type: MarkerType) => {
//     const newVisible = new Set(visibleMarkers);
//     if (newVisible.has(type)) {
//       newVisible.delete(type);
//     } else {
//       newVisible.add(type);
//     }
//     setVisibleMarkers(newVisible);
//   };

//   const getMarkerColor = (type: MarkerType): string => {
//     switch (type) {
//       case 'monuments': return '#E63946';
//       case 'food': return '#F77F00';
//       case 'religious': return '#6A994E';
//       default: return '#457B9D';
//     }
//   };

//   const getMarkerIcon = (type: MarkerType): string => {
//     switch (type) {
//       case 'monuments': return '🏛️';
//       case 'food': return '🍽️';
//       case 'religious': return '🕉️';
//       default: return '📍';
//     }
//   };

//   const filteredPlaces = places.filter(place => visibleMarkers.has(place.type));

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.title}>Cultural Places of Lucknow</Text>
//         <Text style={styles.subtitle}>Explore the City of Nawabs</Text>
//       </View>

//       {/* Map Container with Overlay Filters */}
//       <View style={styles.mapContainer}>
//         <MapView
//           style={styles.map}
//           region={region}
//           onRegionChangeComplete={(reg) => setRegion(reg)}
//           showsUserLocation={locationPermission}
//           showsMyLocationButton={true}
//           showsBuildings={false}
//           showsTraffic={false}
//           provider={Platform.OS === 'web' ? PROVIDER_DEFAULT : undefined}
//           customMapStyle={Platform.OS === 'web' ? [] : undefined}
//           onMapReady={() => {
//             console.log('✅ Map ready');
//             setMapReady(true);
//           }}
//           onError={(error: any) => console.log('❌ Map error:', error)}
//         >
//           {/* For web, use standard map tiles. For mobile, use UrlTile */}
//           {Platform.OS !== 'web' && (
//             <UrlTile
//               urlTemplate="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
//               maximumZ={19}
//               flipY={false}
//               shouldReplaceMapContent={true}
//             />
//           )}
          
//           {/* Place Markers */}
//           {mapReady && filteredPlaces.map((place) => (
//             <Marker
//               key={place.id}
//               coordinate={{ latitude: place.lat, longitude: place.lng }}
//               title={place.name}
//               description={place.desc.substring(0, 50) + '...'}
//               onPress={() => handleMarkerPress(place)}
//             >
//               <View style={[styles.customMarker, { backgroundColor: getMarkerColor(place.type) }]}>
//                 <Text style={styles.markerText}>{getMarkerIcon(place.type)}</Text>
//               </View>
//             </Marker>
//           ))}
//         </MapView>

//         {/* Overlay Filter Controls */}
//         <View style={styles.filterOverlay}>
//           <TouchableOpacity
//             style={[styles.filterChip, visibleMarkers.has('monuments') && styles.activeChip]}
//             onPress={() => toggleMarkerType('monuments')}
//           >
//             <Text style={styles.chipIcon}>🏛️</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.filterChip, visibleMarkers.has('food') && styles.activeChip]}
//             onPress={() => toggleMarkerType('food')}
//           >
//             <Text style={styles.chipIcon}>🍽️</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.filterChip, visibleMarkers.has('religious') && styles.activeChip]}
//             onPress={() => toggleMarkerType('religious')}
//           >
//             <Text style={styles.chipIcon}>🕉️</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Information Section - Full Width */}
//       <ScrollView style={styles.infoSection} showsVerticalScrollIndicator={false}>
//         {/* City Information - Always Visible */}
//         <View style={styles.cityInfoSection}>
//           <Text style={styles.cityTitle}>
//             🕌 {lucknowInfo.name}, {lucknowInfo.state}
//           </Text>
          
//           <View style={styles.cityHeaderRow}>
//             <Image 
//               source={{ uri: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop' }}
//               style={styles.cityImage} 
//             />
//             <View style={styles.cityTextContainer}>
//               <Text style={styles.cityDescription}>{lucknowInfo.description}</Text>
//             </View>
//           </View>

//           {/* Basic Info Grid */}
//           <View style={styles.infoGrid}>
//             <View style={styles.infoItem}>
//               <Text style={styles.infoLabel}>Population</Text>
//               <Text style={styles.infoValue}>{lucknowInfo.population}</Text>
//             </View>
//             <View style={styles.infoItem}>
//               <Text style={styles.infoLabel}>Founded</Text>
//               <Text style={styles.infoValue}>{lucknowInfo.founded}</Text>
//             </View>
//             <View style={styles.infoItem}>
//               <Text style={styles.infoLabel}>Climate</Text>
//               <Text style={styles.infoValue}>{lucknowInfo.climate}</Text>
//             </View>
//           </View>

//           {/* History Section */}
//           <View style={styles.detailSection}>
//             <Text style={styles.sectionTitle}>📜 History</Text>
//             <Text style={styles.detailText}>{lucknowInfo.history}</Text>
//           </View>

//           {/* Music Section */}
//           <View style={styles.detailSection}>
//             <Text style={styles.sectionTitle}>🎵 Music & Arts</Text>
//             <View style={styles.tagsContainer}>
//               {lucknowInfo.music.map((item, index) => (
//                 <View key={index} style={[styles.tag, styles.musicTag]}>
//                   <Text style={styles.tagText}>{item}</Text>
//                 </View>
//               ))}
//             </View>
//           </View>

//           {/* Food Section */}
//           <View style={styles.detailSection}>
//             <Text style={styles.sectionTitle}>🍽️ Famous Cuisine</Text>
//             <View style={styles.tagsContainer}>
//               {lucknowInfo.food.map((item, index) => (
//                 <View key={index} style={[styles.tag, styles.foodTag]}>
//                   <Text style={styles.tagText}>{item}</Text>
//                 </View>
//               ))}
//             </View>
//           </View>

//           {/* Clothing Section */}
//           <View style={styles.detailSection}>
//             <Text style={styles.sectionTitle}>👘 Traditional Attire</Text>
//             <View style={styles.tagsContainer}>
//               {lucknowInfo.clothes.map((item, index) => (
//                 <View key={index} style={[styles.tag, styles.clothesTag]}>
//                   <Text style={styles.tagText}>{item}</Text>
//                 </View>
//               ))}
//             </View>
//           </View>

//           {/* Historic Places */}
//           <View style={styles.detailSection}>
//             <Text style={styles.sectionTitle}>🏰 Historic Places</Text>
//             <View style={styles.tagsContainer}>
//               {lucknowInfo.historicPlaces.map((item, index) => (
//                 <View key={index} style={[styles.tag, styles.historicTag]}>
//                   <Text style={styles.tagText}>{item}</Text>
//                 </View>
//               ))}
//             </View>
//           </View>

//           {/* Cultural Aspects */}
//           <View style={styles.detailSection}>
//             <Text style={styles.sectionTitle}>🎭 Cultural Heritage</Text>
//             <View style={styles.tagsContainer}>
//               {lucknowInfo.culture.map((item, index) => (
//                 <View key={index} style={[styles.tag, styles.cultureTag]}>
//                   <Text style={styles.tagText}>{item}</Text>
//                 </View>
//               ))}
//             </View>
//           </View>

//           {/* Events Section */}
//           <Text style={styles.sectionTitle}>🎉 What's Happening in Lucknow</Text>
//           {festivals.map((fest, index) => (
//             <View key={fest.id} style={[styles.festivalCard, { flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }]}>
//               <RemoteImage uri={fest.imageUrl} style={styles.festivalImage} />
//               <View style={styles.festivalTextContainer}>
//                 <Text style={styles.festivalTitle}>{fest.name}</Text>
//                 <Text style={styles.festivalMonth}>{fest.month}</Text>
//                 <Text style={styles.festivalDesc}>{fest.description}</Text>
//               </View>
//             </View>
//           ))}

//           {/* Languages */}
//           <View style={styles.detailSection}>
//             <Text style={styles.sectionTitle}>🗣️ Languages Spoken</Text>
//             <Text style={styles.languageText}>{lucknowInfo.languages.join(', ')}</Text>
//           </View>
//         </View>

//         {/* Selected Place Information */}
//         {selectedPlace && (
//           <View style={styles.selectedPlaceSection}>
//             <View style={styles.divider} />
//             <Text style={styles.selectedPlaceTitle}>Selected Place</Text>

//             <View style={styles.placeHeader}>
//               <Text style={styles.placeName}>
//                 {getMarkerIcon(selectedPlace.type)} {selectedPlace.name}
//               </Text>
//               <View style={[styles.typeChip, { backgroundColor: getMarkerColor(selectedPlace.type) + '20' }]}>
//                 <Text style={[styles.typeText, { color: getMarkerColor(selectedPlace.type) }]}>
//                   {selectedPlace.type.charAt(0).toUpperCase() + selectedPlace.type.slice(1)}
//                 </Text>
//               </View>
//             </View>

//             <Text style={styles.locationText}>
//               📍 {selectedPlace.city}, {selectedPlace.state}
//             </Text>

//             {selectedPlace.rating && (
//               <Text style={styles.ratingText}>
//                 ⭐ {selectedPlace.rating}/5
//               </Text>
//             )}

//             <Text style={styles.placeDesc}>{selectedPlace.desc}</Text>

//             {selectedPlace.openHours && (
//               <Text style={styles.detailTextSmall}>
//                 🕐 {selectedPlace.openHours}
//               </Text>
//             )}

//             {selectedPlace.price && (
//               <Text style={styles.detailTextSmall}>
//                 💰 {selectedPlace.price}
//               </Text>
//             )}

//             <View style={styles.tagsContainer}>
//               {selectedPlace.tags.map((tag, index) => (
//                 <View key={index} style={[styles.tag, styles.placeTag]}>
//                   <Text style={styles.tagText}>{tag}</Text>
//                 </View>
//               ))}
//             </View>
//           </View>
//         )}

//         {/* Statistics */}
//         <View style={styles.statsSection}>
//           <View style={styles.divider} />
//           <Text style={styles.statsText}>
//             📊 Showing {filteredPlaces.length} of {places.length} places
//           </Text>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8F9FA',
//   },
//   header: {
//     paddingTop: Platform.OS === 'ios' ? 50 : 30,
//     paddingHorizontal: 20,
//     paddingBottom: 15,
//     backgroundColor: '#FFFFFF',
//     borderBottomWidth: 1,
//     borderBottomColor: '#E9ECEF',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '800',
//     color: '#212529',
//     marginBottom: 5,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#6C757D',
//     fontWeight: '500',
//   },
//   mapContainer: {
//     height: height * 0.5,
//     position: 'relative',
//   },
//   map: {
//     flex: 1,
//   },
//   filterOverlay: {
//     position: 'absolute',
//     top: 15,
//     right: 15,
//     flexDirection: 'column',
//     gap: 8,
//   },
//   filterChip: {
//     width: 50,
//     height: 50,
//     backgroundColor: 'rgba(255, 255, 255, 0.95)',
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   activeChip: {
//     backgroundColor: '#007AFF',
//   },
//   chipIcon: {
//     fontSize: 20,
//   },
//   customMarker: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   markerText: {
//     fontSize: 18,
//     color: '#FFFFFF',
//   },
//   infoSection: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   cityInfoSection: {
//     padding: 20,
//   },
//   cityTitle: {
//     fontSize: 26,
//     fontWeight: '800',
//     color: '#212529',
//     marginBottom: 15,
//   },
//   cityHeaderRow: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginBottom: 20,
//     gap: 15,
//   },
//   cityImage: {
//     width: 120,
//     height: 90,
//     borderRadius: 12,
//   },
//   cityTextContainer: {
//     flex: 1,
//   },
//   cityDescription: {
//     fontSize: 16,
//     color: '#495057',
//     lineHeight: 24,
//   },
//   infoGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginBottom: 25,
//     gap: 15,
//   },
//   infoItem: {
//     flex: 1,
//     minWidth: '30%',
//   },
//   infoLabel: {
//     fontSize: 12,
//     color: '#6C757D',
//     fontWeight: '600',
//     marginBottom: 4,
//     textTransform: 'uppercase',
//     letterSpacing: 0.5,
//   },
//   infoValue: {
//     fontSize: 16,
//     color: '#212529',
//     fontWeight: '600',
//   },
//   detailSection: {
//     marginBottom: 25,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#212529',
//     marginBottom: 12,
//   },
//   detailText: {
//     fontSize: 15,
//     color: '#495057',
//     lineHeight: 22,
//   },
//   tagsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 8,
//   },
//   tag: {
//     backgroundColor: '#E9ECEF',
//     borderRadius: 16,
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//   },
//   musicTag: {
//     backgroundColor: '#FFE4E6',
//   },
//   foodTag: {
//     backgroundColor: '#FFF4E6',
//   },
//   clothesTag: {
//     backgroundColor: '#E6F3FF',
//   },
//   historicTag: {
//     backgroundColor: '#F0E6FF',
//   },
//   cultureTag: {
//     backgroundColor: '#E6FFF0',
//   },
//   placeTag: {
//     backgroundColor: '#DEF7EC',
//   },
//   tagText: {
//     fontSize: 12,
//     color: '#495057',
//     fontWeight: '600',
//   },
//   languageText: {
//     fontSize: 16,
//     color: '#495057',
//     fontWeight: '500',
//   },
//   festivalCard: {
//     marginBottom: 20,
//     backgroundColor: '#FFF',
//     borderRadius: 16,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 4,
//   },
//   festivalImage: {
//     width: 140,
//     height: 120,
//   },
//   festivalTextContainer: {
//     flex: 1,
//     padding: 16,
//     justifyContent: 'center',
//   },
//   festivalTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     marginBottom: 6,
//     color: '#212529',
//   },
//   festivalMonth: {
//     fontSize: 14,
//     color: '#007AFF',
//     marginBottom: 8,
//     fontWeight: '600',
//   },
//   festivalDesc: {
//     fontSize: 14,
//     color: '#495057',
//     lineHeight: 20,
//   },
//   selectedPlaceSection: {
//     padding: 20,
//     paddingTop: 0,
//   },
//   divider: {
//     height: 1,
//     backgroundColor: '#E9ECEF',
//     marginBottom: 20,
//   },
//   selectedPlaceTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#007AFF',
//     marginBottom: 15,
//   },
//   placeHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: 10,
//   },
//   placeName: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#212529',
//     flex: 1,
//     marginRight: 10,
//   },
//   typeChip: {
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   typeText: {
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   locationText: {
//     fontSize: 14,
//     color: '#6C757D',
//     fontWeight: '600',
//     marginBottom: 6,
//   },
//   ratingText: {
//     fontSize: 14,
//     color: '#FFC107',
//     fontWeight: '600',
//     marginBottom: 10,
//   },
//   placeDesc: {
//     fontSize: 15,
//     color: '#495057',
//     lineHeight: 22,
//     marginBottom: 15,
//   },
//   detailTextSmall: {
//     fontSize: 14,
//     color: '#6C757D',
//     marginBottom: 5,
//   },
//   statsSection: {
//     padding: 20,
//     paddingTop: 0,
//     paddingBottom: 40,
//   },
//   statsText: {
//     fontSize: 14,
//     color: '#6C757D',
//     fontWeight: '600',
//     textAlign: 'center',
//   },
// });