// import React, { useState, useRef, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, Button, ScrollView } from 'react-native';
// import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
// import { AntDesign } from '@expo/vector-icons';
//  import * as fileSystem from 'expo-file-system';

// type Place = {
//   id: number;
//   name: string;
//   state: string;
//   description: string;
//   built: string;
//   significance: string;
//   architecture: string;
//   visitTime: string;
//   facts: string[];
// };

// type Result = {
//   name: string;
//   note: string;
//   confidence?: number;
//   details?: {
//     built: string;
//     significance: string;
//     architecture: string;
//     visitTime: string;
//     facts: string[];
//   };
// } | null;

// const places: Place[] = [
//   {
//     id: 1,
//     name: "Taj Mahal",
//     state: "Uttar Pradesh",
//     description: "An ivory-white marble mausoleum and UNESCO World Heritage Site",
//     built: "1632-1653 CE",
//     significance: "Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal",
//     architecture: "Indo-Islamic architecture with Mughal garden style",
//     visitTime: "Best visited during sunrise or sunset for optimal lighting",
//     facts: [
//       "Took 22 years to complete with 20,000 artisans",
//       "Changes color from pinkish hue at dawn to golden at sunset",
//       "The central dome is 35 meters high",
//       "Made from white marble inlaid with semi-precious stones"
//     ]
//   },
//   {
//     id: 2,
//     name: "Hampi",
//     state: "Karnataka",
//     description: "Ancient ruins of the Vijayanagara Empire and UNESCO World Heritage Site",
//     built: "14th-16th century CE",
//     significance: "Former capital of the powerful Vijayanagara Empire",
//     architecture: "Dravidian architecture with intricate stone carvings",
//     visitTime: "October to March for pleasant weather",
//     facts: [
//       "Covers an area of 26 square kilometers",
//       "Contains over 1,600 surviving remains",
//       "Was one of the richest cities in the world during its peak",
//       "Features the famous Stone Chariot at Vittala Temple"
//     ]
//   },
//   {
//     id: 3,
//     name: "Konark Sun Temple",
//     state: "Odisha",
//     description: "13th-century Sun Temple designed as a giant stone chariot",
//     built: "1250 CE",
//     significance: "Dedicated to the Hindu Sun God Surya",
//     architecture: "Kalinga architecture with exquisite stone carvings",
//     visitTime: "Early morning to catch the sunrise alignment",
//     facts: [
//       "Designed as a 12-wheeled chariot pulled by seven horses",
//       "The wheels function as sundials showing accurate time",
//       "Features erotic sculptures similar to Khajuraho",
//       "Made from khondalite rocks and iron beams"
//     ]
//   },
//   {
//     id: 4,
//     name: "Red Fort",
//     state: "Delhi",
//     description: "Historic fortified palace and symbol of India's independence",
//     built: "1639-1648 CE",
//     significance: "Main residence of Mughal emperors for 200 years",
//     architecture: "Mughal architecture with red sandstone walls",
//     visitTime: "Early morning or late afternoon to avoid crowds",
//     facts: [
//       "Covers an area of 254 acres",
//       "Features the famous Lahori Gate entrance",
//       "Prime Minister gives Independence Day speech here",
//       "Contains the Diwan-i-Am (Hall of Public Audience)"
//     ]
//   },
//   {
//     id: 5,
//     name: "Gateway of India",
//     state: "Maharashtra",
//     description: "Iconic arch monument overlooking the Arabian Sea",
//     built: "1911-1924 CE",
//     significance: "Built to commemorate King George V's visit to India",
//     architecture: "Indo-Islamic architecture with basalt stone",
//     visitTime: "Evening for beautiful sunset views over the harbor",
//     facts: [
//       "26 meters high triumphal arch",
//       "Last British troops left India through this gateway",
//       "Made from yellow basalt and reinforced concrete",
//       "Features intricate latticework and Muslim architectural elements"
//     ]
//   }
// ];


// export default function CameraTab() {
//   const [permission, requestPermission] = useCameraPermissions();
//   const [isActive, setIsActive] = useState(false);
//   const [capturedImage, setCapturedImage] = useState<string | null>(null);
//   const [result, setResult] = useState<Result>(null);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [debugInfo, setDebugInfo] = useState<string>('');
//   const cameraRef = useRef<CameraView | null>(null);
//   const [facing, setFacing] = useState<CameraType>('back');
 

//   // Debug logging function

//   // Enhanced mock identification with detailed information
//   const mockIdentify = (): Result => {
//     const randomPlace = places[Math.floor(Math.random() * places.length)];
    
//     return {
//       name: randomPlace.name,
//       note: `${randomPlace.description}`,
//       confidence: Math.random() * 0.3 + 0.7, // 70-100% confidence
//       details: {
//         built: randomPlace.built,
//         significance: randomPlace.significance,
//         architecture: randomPlace.architecture,
//         visitTime: randomPlace.visitTime,
//         facts: randomPlace.facts
//       }
//     };
//   };
// const identifyWithAPI = async (imageUri: string): Promise<Result> => {
//   try {
//     setIsProcessing(true);
//     setResult({
//       name: "Scanning...",
//       note: "Please wait while we analyze the image.",
//       confidence: 0
//     });

//     const base64String = await fileSystem.readAsStringAsync(imageUri, {
//       encoding: fileSystem.EncodingType.Base64,
//     });

//     const imageFormat = imageUri.toLowerCase().includes('.png') ? 'png' : 'jpeg';
//     const dataUrl = `data:image/${imageFormat};base64,${base64String}`;

//     const apiResponse = await fetch('http://172.20.10.2:5000/detect-landmark-base64', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         imageBase64: dataUrl
//       }),
//     });

//     if (!apiResponse.ok) {
//       const errorText = await apiResponse.text();
//       throw new Error(`API Error: ${apiResponse.status} - ${errorText}`);
//     }

//     const apiData = await apiResponse.json();

//     if (apiData.success && apiData.landmark) {
//       const { name, confidence } = apiData.landmark;
      
//       const matchedPlace = places.find(place => 
//         place.name.toLowerCase().includes(name.toLowerCase()) ||
//         name.toLowerCase().includes(place.name.toLowerCase())
//       );

//       if (matchedPlace) {
//         return {
//           name: matchedPlace.name,
//           note: `${matchedPlace.description} (${confidence}% confidence)`,
//           confidence: confidence / 100,
//           details: {
//             built: matchedPlace.built,
//             significance: matchedPlace.significance,
//             architecture: matchedPlace.architecture,
//             visitTime: matchedPlace.visitTime,
//             facts: matchedPlace.facts
//           }
//         };
//       } else {
//         return {
//           name: name,
//           note: `Landmark detected with ${confidence}% confidence`,
//           confidence: confidence / 100
//         };
//       }
//     } else {
//       return {
//         name: "No Data Found",
//         note: apiData.message || "Could not identify this landmark",
//         confidence: 0
//       };
//     }
    
//   } catch (error: any) {
//     return {
//       name: "No Data Found",
//       note: `API connection failed: ${error.message}`,
//       confidence: 0
//     };
//   } finally {
//     setIsProcessing(false);
//   }
// };


// // Also fix the captureImage function for better quality:
// const captureImage = async () => {
//   if (cameraRef.current) {
//     try {
//       const photo = await cameraRef.current.takePictureAsync({
//         quality: 1,        
//         base64: false,
//       });
      
//       setCapturedImage(photo.uri);
//       setIsActive(false);

//       const guess = await identifyWithAPI(photo.uri);
//       setResult(guess);
//     } catch (error: any) {
//       Alert.alert('Error', 'Failed to capture image');
//     }
//   }
// };

// const startCamera = async () => {
//   if (permission?.granted) {
//     setIsActive(true);
//     setCapturedImage(null);
//     setResult(null);
//   } else {
//     const result = await requestPermission();
//     if (result.granted) {
//       setIsActive(true);
//       setCapturedImage(null);
//       setResult(null);
//     } else {
//       Alert.alert('Permission Required', 'Camera permission is required to use this feature.');
//     }
//   }
// };

// const stopCamera = () => {
//   setIsActive(false);
// };



//   function toggleCameraFacing() {
//     setFacing(current => (current === 'back' ? 'front' : 'back'));
//   }

//   if (!permission) {
//     return <View />;
//   }

//   if (!permission.granted) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.message}>We need your permission to show the camera</Text>
//         <Button onPress={requestPermission} title="Grant Permission" />
//       </View>
//     );
//   }

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Text style={styles.title}>Scan a Monument</Text>
//           <Text style={styles.subtitle}>
//             Capture an image to identify cultural monuments with detailed information.
//           </Text>
//         </View>


//         <View style={styles.scannerContainer}>
//           <View style={styles.cameraPanel}>
//             <View style={styles.panelHeader}>
//               <View style={styles.tag}>
//                 <Text style={styles.tagText}>
//                   Camera {isActive ? '🟢' : '⚪'}
//                 </Text>
//               </View>
//               <View style={styles.buttonGroup}>
//                 {!isActive && (
//                   <TouchableOpacity
//                     style={[styles.btn, styles.btnActive]}
//                     onPress={startCamera}
//                   >
//                     <Text style={[styles.btnText, {color: 'white'}]}>Start</Text>
//                   </TouchableOpacity>
//                 )}

//                 {isActive && (
//                   <>
//                     <TouchableOpacity
//                       style={[styles.btn, styles.btnActive]}
//                       onPress={captureImage}
//                       disabled={isProcessing}
//                     >
//                       <Text style={[styles.btnText, {color: 'white'}]}>
//                         {isProcessing ? 'Processing...' : 'Capture'}
//                       </Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                       style={[styles.btn, styles.btnActive]}
//                       onPress={stopCamera}
//                     >
//                       <Text style={[styles.btnText, {color: 'white'}]}>Stop</Text>
//                     </TouchableOpacity>
//                   </>
//                 )}
//               </View>
//             </View>

//             <View>
//               {isActive ? (
//                 <View style={styles.cameraContainer}>
//                   <CameraView
//                     ref={cameraRef}
//                     style={styles.camera}
//                     facing={facing}
//                   />
//                   <View style={styles.buttonContainer}>
//                     <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
//                       <AntDesign name="retweet" size={36} color="white" />
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.button} onPress={captureImage}>
//                       <AntDesign name="camera" size={36} color="white" />
//                     </TouchableOpacity>
//                   </View>
//                 </View>
//               ) : (
//                 <View style={[styles.cameraPlaceholder, styles.OffCameraContainer]}>
//                   <Text style={styles.placeholderText}>Camera Off</Text>
//                   <Text style={styles.placeholderSubtext}>Tap 'Start' to begin</Text>
//                 </View>
//               )}
//             </View>
//           </View>

//           <View style={styles.resultPanel}>
//             <Text style={styles.resultTitle}>Result</Text>

//             <View style={styles.snapshotContainer}>
//               {capturedImage ? (
//                 <Image source={{ uri: capturedImage }} style={styles.snapshot} />
//               ) : (
//                 <View style={styles.snapshotPlaceholder}>
//                   <Text style={styles.placeholderText}>No image captured</Text>
//                 </View>
//               )}
//             </View>

//             {result && (
//               <View style={styles.resultContent}>
//                 <View style={styles.tag}>
//                   <Text style={styles.tagText}>
//                     {result.confidence ? `${Math.round(result.confidence * 100)}% Match` : 'Result'}
//                   </Text>
//                 </View>
                
//                 <Text style={styles.resultName}>{result.name}</Text>
//                 <Text style={styles.resultNote}>{result.note}</Text>

//                 {/* Enhanced Details Section */}
//                 {result.details && (
//                   <View style={styles.detailsContainer}>
//                     <View style={styles.detailRow}>
//                       <Text style={styles.detailLabel}>Built:</Text>
//                       <Text style={styles.detailValue}>{result.details.built}</Text>
//                     </View>
                    
//                     <View style={styles.detailRow}>
//                       <Text style={styles.detailLabel}>Significance:</Text>
//                       <Text style={styles.detailValue}>{result.details.significance}</Text>
//                     </View>
                    
//                     <View style={styles.detailRow}>
//                       <Text style={styles.detailLabel}>Architecture:</Text>
//                       <Text style={styles.detailValue}>{result.details.architecture}</Text>
//                     </View>
                    
//                     <View style={styles.detailRow}>
//                       <Text style={styles.detailLabel}>Best Time to Visit:</Text>
//                       <Text style={styles.detailValue}>{result.details.visitTime}</Text>
//                     </View>

//                     <View style={styles.factsSection}>
//                       <Text style={styles.factsTitle}>Interesting Facts:</Text>
//                       {result.details.facts.map((fact, index) => (
//                         <View key={index} style={styles.factRow}>
//                           <Text style={styles.factBullet}>•</Text>
//                           <Text style={styles.factText}>{fact}</Text>
//                         </View>
//                       ))}
//                     </View>
//                   </View>
//                 )}
//               </View>
//             )}
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5E6D3',
//   },
//   header: {
//     padding: 20,
//     paddingBottom: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#6B2D2D',
//     marginBottom: 5,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#514a44',
//     lineHeight: 22,
//   },
//   message: {
//     flex: 1,
//     textAlign: 'center',
//     textAlignVertical: 'center',
//     fontSize: 16,
//     color: '#514a44',
//   },
//   debugContainer: {
//     margin: 20,
//     marginTop: 0,
//     backgroundColor: '#f8f9fa',
//     borderRadius: 8,
//     padding: 12,
//     borderLeftWidth: 4,
//     borderLeftColor: '#6B2D2D',
//   },
//   debugTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 8,
//   },
//   debugScroll: {
//     maxHeight: 100,
//     backgroundColor: 'white',
//     borderRadius: 4,
//     padding: 8,
//   },
//   debugText: {
//     fontSize: 10,
//     fontFamily: 'monospace',
//     color: '#555',
//   },
//   clearButton: {
//     backgroundColor: '#6B2D2D',
//     borderRadius: 4,
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     alignSelf: 'flex-end',
//     marginTop: 8,
//   },
//   clearButtonText: {
//     color: 'white',
//     fontSize: 12,
//   },
//   scannerContainer: {
//     flex: 1,
//     margin: 20,
//     marginTop: 0,
//     gap: 16,
//   },
//   cameraPanel: {
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#D9C6A1',
//     borderRadius: 18,
//     padding: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 8 },
//     shadowOpacity: 0.05,
//     shadowRadius: 22,
//     elevation: 5,
//   },
//   panelHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   tag: {
//     backgroundColor: '#F5E6D3',
//     borderWidth: 1,
//     borderColor: '#D9C6A1',
//     borderRadius: 999,
//     paddingHorizontal: 10,
//     paddingVertical: 6,
//   },
//   tagText: {
//     fontSize: 12,
//     color: '#2E2E2E',
//   },
//   buttonGroup: {
//     flexDirection: 'row',
//     gap: 8,
//   },
//   btn: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 14,
//     borderWidth: 1,
//     borderColor: '#D9C6A1',
//     backgroundColor: '#FFFFFF',
//   },
//   btnActive: {
//     backgroundColor: '#6B2D2D',
//   },
//   btnText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#2E2E2E',
//   },
//   cameraContainer: {
//     aspectRatio: 3 / 4,
//     borderRadius: 14,
//     overflow: 'hidden',
//     backgroundColor: '#111111',
//     position: 'relative',
//   },
//   OffCameraContainer: {
//     height: 250,
//     borderRadius: 14,
//     overflow: 'hidden',
//     backgroundColor: '#111111',
//   },
//   camera: {
//     flex: 1,
//   },
//   cameraPlaceholder: {
//     flex: 1,
//     backgroundColor: '#111111',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   placeholderText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//   },
//   placeholderSubtext: {
//     color: '#CCCCCC',
//     fontSize: 12,
//     marginTop: 4,
//   },
//   resultPanel: {
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#D9C6A1',
//     borderRadius: 18,
//     padding: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 8 },
//     shadowOpacity: 0.05,
//     shadowRadius: 22,
//     elevation: 5,
//   },
//   resultTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#2E2E2E',
//     marginBottom: 12,
//   },
//   snapshotContainer: {
//     height: 200,
//     borderRadius: 14,
//     overflow: 'hidden',
//     marginBottom: 12,
//   },
//   snapshot: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   snapshotPlaceholder: {
//     flex: 1,
//     backgroundColor: '#111111',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   resultContent: {
//     gap: 8,
//   },
//   resultName: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#2E2E2E',
//   },
//   resultNote: {
//     fontSize: 14,
//     color: '#8A7C6E',
//     marginBottom: 12,
//   },
//   buttonContainer: {
//     position: 'absolute',
//     bottom: 20,
//     left: 0,
//     right: 0,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   button: {
//     padding: 12,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     borderRadius: 50,
//   },
//   // Enhanced details styling
//   detailsContainer: {
//     marginTop: 8,
//     gap: 12,
//   },
//   detailRow: {
//     gap: 4,
//   },
//   detailLabel: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#6B2D2D',
//     textTransform: 'uppercase',
//   },
//   detailValue: {
//     fontSize: 14,
//     color: '#2E2E2E',
//     lineHeight: 20,
//   },
//   factsSection: {
//     marginTop: 8,
//   },
//   factsTitle: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#6B2D2D',
//     marginBottom: 8,
//   },
//   factRow: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginBottom: 6,
//   },
//   factBullet: {
//     color: '#6B2D2D',
//     fontSize: 16,
//     marginRight: 8,
//     marginTop: 2,
//   },
//   factText: {
//     flex: 1,
//     fontSize: 13,
//     color: '#514a44',
//     lineHeight: 18,
//   },
// });



















// const identifyWithAPI = async (imageUri: string): Promise<Result> => {
//   try {
//     setIsProcessing(true);
//     logDebug('🔄 Starting API analysis...');
    
//     // Use Expo FileSystem to read the image as base64 directly
//     logDebug('📷 Converting image to base64...');
    
//     const base64String = await fileSystem.readAsStringAsync(imageUri, {
//       encoding: fileSystem.EncodingType.Base64,
//     });
    
//     // Determine the image format from the file extension or default to jpeg
//     const imageFormat = imageUri.toLowerCase().includes('.png') ? 'png' : 'jpeg';
//     const dataUrl = `data:image/${imageFormat};base64,${base64String}`;
    
//     logDebug(`🔍 Base64 starts with: ${dataUrl.substring(0, 50)}`);
//     logDebug(`🔍 Has data URL prefix: ${dataUrl.startsWith('data:image/')}`);
//     logDebug(`📏 Full Base64 length: ${dataUrl.length}`);
//     logDebug(`📷 Image format detected: ${imageFormat}`);

//     logDebug('🌐 Calling backend API...');
    
//     // Call your Node.js backend
//     const apiResponse = await fetch('http://172.20.10.2:5000/detect-landmark-base64', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         imageBase64: dataUrl
//       }),
//     });

//     logDebug(`📡 API Response: ${apiResponse.status}`);
    
//     if (!apiResponse.ok) {
//       const errorText = await apiResponse.text();
//       logDebug(`❌ API Error (${apiResponse.status}): ${errorText}`);
//       throw new Error(`API Error: ${apiResponse.status} - ${errorText}`);
//     }

//     const apiData = await apiResponse.json();
//     logDebug(`📋 API Data: ${JSON.stringify(apiData, null, 2)}`);

//     if (apiData.success && apiData.landmark) {
//       const { name, confidence } = apiData.landmark;
//       logDebug(`🏛️ Landmark found: ${name}`);
      
//       // Try to match with your detailed data
//       const matchedPlace = places.find(place => 
//         place.name.toLowerCase().includes(name.toLowerCase()) ||
//         name.toLowerCase().includes(place.name.toLowerCase())
//       );

//       if (matchedPlace) {
//         return {
//           name: matchedPlace.name,
//           note: `${matchedPlace.description} (${confidence}% confidence)`,
//           confidence: confidence / 100,
//           details: {
//             built: matchedPlace.built,
//             significance: matchedPlace.significance,
//             architecture: matchedPlace.architecture,
//             visitTime: matchedPlace.visitTime,
//             facts: matchedPlace.facts
//           }
//         };
//       } else {
//         return {
//           name: name,
//           note: `Landmark detected with ${confidence}% confidence`,
//           confidence: confidence / 100
//         };
//       }
//     } else {
//       // No landmark found
//       logDebug('❓ No landmark detected by API');
//       return {
//         name: "No Data Found",
//         note: apiData.message || "Could not identify this landmark",
//         confidence: 0
//       };
//     }
    
//   } catch (error: any) {
//     logDebug(`❌ API Error: ${error.message}`);
//     console.error('Backend API Error:', error);
    
//     return {
//       name: "No Data Found",
//       note: `API connection failed: ${error.message}`,
//       confidence: 0
//     };
//   } finally {
//     setIsProcessing(false);
//   }
// };

// // Also fix the captureImage function for better quality:
// const captureImage = async () => {
//   if (cameraRef.current) {
//     try {
//       logDebug('📸 Capturing image...');
//       const photo = await cameraRef.current.takePictureAsync({
//         quality: 1,        // ✅ Better quality for landmark detection
//         base64: false,
//       });
      
//       logDebug(`✅ Image captured: ${photo.uri}`);
//       setCapturedImage(photo.uri);
//       setIsActive(false);

//       logDebug('🤖 Using Backend API...');
//       const guess = await identifyWithAPI(photo.uri);
      
//       setResult(guess);
//       logDebug(`🎯 Analysis complete: ${guess?.name}`);
//     } catch (error: any) {
//       logDebug(`❌ Capture error: ${error.message}`);
//       Alert.alert('Error', 'Failed to capture image');
//     }
//   }
// };

//   const startCamera = async () => {
//     if (permission?.granted) {
//       logDebug('📷 Starting camera...');
//       setIsActive(true);
//       setCapturedImage(null);
//       setResult(null);
//     } else {
//       logDebug('⚠️ Requesting camera permission...');
//       const result = await requestPermission();
//       if (result.granted) {
//         setIsActive(true);
//         setCapturedImage(null);
//         setResult(null);
//       } else {
//         Alert.alert('Permission Required', 'Camera permission is required to use this feature.');
//       }
//     }
//   };

//   const stopCamera = () => {
//     logDebug('⏹️ Stopping camera...');
//     setIsActive(false);
//   };




import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, Button, ScrollView } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { AntDesign } from '@expo/vector-icons';
import * as fileSystem from 'expo-file-system';
import { MainColors } from '@/constants/Colors';


type Place = {
  id: number;
  name: string;
  state: string;
  description: string;
  built: string;
  significance: string;
  architecture: string;
  visitTime: string;
  facts: string[];
};

type Result = {
  name: string;
  note: string;
  confidence?: number;
  details?: {
    built: string;
    significance: string;
    architecture: string;
    visitTime: string;
    facts: string[];
  };
} | null;

const places: Place[] = [
  {
    id: 1,
    name: "Taj Mahal",
    state: "Uttar Pradesh",
    description: "An ivory-white marble mausoleum and UNESCO World Heritage Site",
    built: "1632-1653 CE",
    significance: "Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal",
    architecture: "Indo-Islamic architecture with Mughal garden style",
    visitTime: "Best visited during sunrise or sunset for optimal lighting",
    facts: [
      "Took 22 years to complete with 20,000 artisans",
      "Changes color from pinkish hue at dawn to golden at sunset",
      "The central dome is 35 meters high",
      "Made from white marble inlaid with semi-precious stones"
    ]
  },
  {
    id: 2,
    name: "Hampi",
    state: "Karnataka",
    description: "Ancient ruins of the Vijayanagara Empire and UNESCO World Heritage Site",
    built: "14th-16th century CE",
    significance: "Former capital of the powerful Vijayanagara Empire",
    architecture: "Dravidian architecture with intricate stone carvings",
    visitTime: "October to March for pleasant weather",
    facts: [
      "Covers an area of 26 square kilometers",
      "Contains over 1,600 surviving remains",
      "Was one of the richest cities in the world during its peak",
      "Features the famous Stone Chariot at Vittala Temple"
    ]
  },
  {
    id: 3,
    name: "Konark Sun Temple",
    state: "Odisha",
    description: "13th-century Sun Temple designed as a giant stone chariot",
    built: "1250 CE",
    significance: "Dedicated to the Hindu Sun God Surya",
    architecture: "Kalinga architecture with exquisite stone carvings",
    visitTime: "Early morning to catch the sunrise alignment",
    facts: [
      "Designed as a 12-wheeled chariot pulled by seven horses",
      "The wheels function as sundials showing accurate time",
      "Features erotic sculptures similar to Khajuraho",
      "Made from khondalite rocks and iron beams"
    ]
  },
  {
    id: 4,
    name: "Red Fort",
    state: "Delhi",
    description: "Historic fortified palace and symbol of India's independence",
    built: "1639-1648 CE",
    significance: "Main residence of Mughal emperors for 200 years",
    architecture: "Mughal architecture with red sandstone walls",
    visitTime: "Early morning or late afternoon to avoid crowds",
    facts: [
      "Covers an area of 254 acres",
      "Features the famous Lahori Gate entrance",
      "Prime Minister gives Independence Day speech here",
      "Contains the Diwan-i-Am (Hall of Public Audience)"
    ]
  },
  {
    id: 5,
    name: "Gateway of India",
    state: "Maharashtra",
    description: "Iconic arch monument overlooking the Arabian Sea",
    built: "1911-1924 CE",
    significance: "Built to commemorate King George V's visit to India",
    architecture: "Indo-Islamic architecture with basalt stone",
    visitTime: "Evening for beautiful sunset views over the harbor",
    facts: [
      "26 meters high triumphal arch",
      "Last British troops left India through this gateway",
      "Made from yellow basalt and reinforced concrete",
      "Features intricate latticework and Muslim architectural elements"
    ]
  }
];

// Demo image URL (Taj Mahal)
const DEMO_IMAGE_URI = "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";

export default function CameraTab() {
  const [permission, requestPermission] = useCameraPermissions();
  const [isActive, setIsActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [result, setResult] = useState<Result>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [debugInfo, setDebugInfo] = useState<string>('');
  const cameraRef = useRef<CameraView | null>(null);
  const [facing, setFacing] = useState<CameraType>('back');

  // Initialize with demo result
  useEffect(() => {
    // Set demo image and result on component mount
    setCapturedImage(DEMO_IMAGE_URI);
    setResult({
      name: "Taj Mahal",
      note: "An ivory-white marble mausoleum and UNESCO World Heritage Site",
      confidence: 0.95,
      details: {
        built: "1632-1653 CE",
        significance: "Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal",
        architecture: "Indo-Islamic architecture with Mughal garden style",
        visitTime: "Best visited during sunrise or sunset for optimal lighting",
        facts: [
          "Took 22 years to complete with 20,000 artisans",
          "Changes color from pinkish hue at dawn to golden at sunset",
          "The central dome is 35 meters high",
          "Made from white marble inlaid with semi-precious stones"
        ]
      }
    });
  }, []);

  // Enhanced mock identification with detailed information
  const mockIdentify = (): Result => {
    const randomPlace = places[Math.floor(Math.random() * places.length)];
    
    return {
      name: randomPlace.name,
      note: `${randomPlace.description}`,
      confidence: Math.random() * 0.3 + 0.7, // 70-100% confidence
      details: {
        built: randomPlace.built,
        significance: randomPlace.significance,
        architecture: randomPlace.architecture,
        visitTime: randomPlace.visitTime,
        facts: randomPlace.facts
      }
    };
  };

  const identifyWithAPI = async (imageUri: string): Promise<Result> => {
    try {
      setIsProcessing(true);
      setResult({
        name: "Scanning...",
        note: "Please wait while we analyze the image.",
        confidence: 0
      });

      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 2000));

      // For demo purposes, return mock result
      return mockIdentify();
      
    } catch (error: any) {
      return {
        name: "No Data Found",
        note: `API connection failed: ${error.message}`,
        confidence: 0
      };
    } finally {
      setIsProcessing(false);
    }
  };

  const captureImage = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync({
          quality: 1,        
          base64: false,
        });
        
        setCapturedImage(photo.uri);
        setIsActive(false);

        const guess = await identifyWithAPI(photo.uri);
        setResult(guess);
      } catch (error: any) {
        Alert.alert('Error', 'Failed to capture image');
      }
    }
  };

  const startCamera = async () => {
    if (permission?.granted) {
      setIsActive(true);
      setCapturedImage(null);
      setResult(null);
    } else {
      const result = await requestPermission();
      if (result.granted) {
        setIsActive(true);
        setCapturedImage(null);
        setResult(null);
      } else {
        Alert.alert('Permission Required', 'Camera permission is required to use this feature.');
      }
    }
  };

  const stopCamera = () => {
    setIsActive(false);
  };

  const tryDemo = () => {
    setCapturedImage(DEMO_IMAGE_URI);
    setIsActive(false);
    
    // Show processing state
    setIsProcessing(true);
    setResult({
      name: "Scanning...",
      note: "Please wait while we analyze the image.",
      confidence: 0
    });

    // Simulate processing and show Taj Mahal result
    setTimeout(() => {
      setIsProcessing(false);
      setResult({
        name: "Taj Mahal",
        note: "An ivory-white marble mausoleum and UNESCO World Heritage Site",
        confidence: 0.95,
        details: {
          built: "1632-1653 CE",
          significance: "Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal",
          architecture: "Indo-Islamic architecture with Mughal garden style",
          visitTime: "Best visited during sunrise or sunset for optimal lighting",
          facts: [
            "Took 22 years to complete with 20,000 artisans",
            "Changes color from pinkish hue at dawn to golden at sunset",
            "The central dome is 35 meters high",
            "Made from white marble inlaid with semi-precious stones"
          ]
        }
      });
    }, 2000);
  };

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Monument Scanner</Text>
          <Text style={styles.subtitle}>
            Discover India's rich heritage by scanning cultural monuments and getting detailed historical information.
          </Text>
        </View>

        <View style={styles.scannerContainer}>
          <View style={styles.cameraPanel}>
            <View style={styles.panelHeader}>
              <View style={styles.statusTag}>
                <View style={[styles.statusDot, { backgroundColor: isActive ? '#10B981' : '#6B7280' }]} />
                <Text style={styles.statusText}>
                  Camera {isActive ? 'Active' : 'Inactive'}
                </Text>
              </View>
              <View style={styles.buttonGroup}>
                {!isActive && (
                  <>
                    <TouchableOpacity
                      style={[styles.btn, styles.btnPrimary]}
                      onPress={startCamera}
                    >
                      <AntDesign name="camera" size={16} color={MainColors.white} />
                      <Text style={[styles.btnText, {color: MainColors.white}]}>Start</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.btn, styles.btnSecondary]}
                      onPress={tryDemo}
                    >
                      <AntDesign name="eye" size={16} color={MainColors.primary} />
                      <Text style={[styles.btnText, {color: MainColors.primary}]}>Demo</Text>
                    </TouchableOpacity>
                  </>
                )}

                {isActive && (
                  <>
                    <TouchableOpacity
                      style={[styles.btn, styles.btnPrimary]}
                      onPress={captureImage}
                      disabled={isProcessing}
                    >
                      <AntDesign name="camera" size={16} color={MainColors.white} />
                      <Text style={[styles.btnText, {color: MainColors.white}]}>
                        {isProcessing ? 'Processing...' : 'Capture'}
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[styles.btn, styles.btnSecondary]}
                      onPress={stopCamera}
                    >
                      <AntDesign name="close" size={16} color={MainColors.primary} />
                      <Text style={[styles.btnText, {color: MainColors.primary}]}>Stop</Text>
                    </TouchableOpacity>
                  </>
                )}
              </View>
            </View>

            <View>
              {isActive ? (
                <View style={styles.cameraContainer}>
                  <CameraView
                    ref={cameraRef}
                    style={styles.camera}
                    facing={facing}
                  />
                  <View style={styles.cameraOverlay}>
                    <View style={styles.scanFrame} />
                    <View style={styles.buttonContainer}>
                      <TouchableOpacity style={styles.cameraButton} onPress={toggleCameraFacing}>
                        <AntDesign name="retweet" size={24} color={MainColors.white} />
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.cameraButton, styles.captureButton]} onPress={captureImage}>
                        <AntDesign name="camera" size={32} color={MainColors.white} />
                      </TouchableOpacity>
                      <View style={styles.cameraButton} />
                    </View>
                  </View>
                </View>
              ) : (
                <View style={styles.cameraPlaceholder}>
                  <AntDesign name="camera" size={48} color={MainColors.textSecondary} />
                  <Text style={styles.placeholderText}>Camera Ready</Text>
                  <Text style={styles.placeholderSubtext}>Tap 'Start' to begin scanning monuments</Text>
                </View>
              )}
            </View>
          </View>

          <View style={styles.resultPanel}>
            <View style={styles.resultHeader}>
              <Text style={styles.resultTitle}>Scan Result</Text>
              {result?.confidence && (
                <View style={styles.confidenceTag}>
                  <Text style={styles.confidenceText}>
                    {Math.round(result.confidence * 100)}% Match
                  </Text>
                </View>
              )}
            </View>

            <View style={styles.snapshotContainer}>
              {capturedImage ? (
                <Image source={{ uri: capturedImage }} style={styles.snapshot} />
              ) : (
                <View style={styles.snapshotPlaceholder}>
                  <AntDesign name="picture" size={32} color={MainColors.textSecondary} />
                  <Text style={styles.placeholderText}>No image captured</Text>
                </View>
              )}
            </View>

            {result && (
              <View style={styles.resultContent}>
                <Text style={styles.resultName}>{result.name}</Text>
                <Text style={styles.resultNote}>{result.note}</Text>

                {result.details && (
                  <View style={styles.detailsContainer}>
                    <View style={styles.detailSection}>
                      <Text style={styles.detailLabel}>Built</Text>
                      <Text style={styles.detailValue}>{result.details.built}</Text>
                    </View>
                    
                    <View style={styles.detailSection}>
                      <Text style={styles.detailLabel}>Historical Significance</Text>
                      <Text style={styles.detailValue}>{result.details.significance}</Text>
                    </View>
                    
                    <View style={styles.detailSection}>
                      <Text style={styles.detailLabel}>Architecture Style</Text>
                      <Text style={styles.detailValue}>{result.details.architecture}</Text>
                    </View>
                    
                    <View style={styles.detailSection}>
                      <Text style={styles.detailLabel}>Best Time to Visit</Text>
                      <Text style={styles.detailValue}>{result.details.visitTime}</Text>
                    </View>

                    <View style={styles.factsSection}>
                      <Text style={styles.factsTitle}>Fascinating Facts</Text>
                      <View style={styles.factsList}>
                        {result.details.facts.map((fact, index) => (
                          <View key={index} style={styles.factItem}>
                            <View style={styles.factBullet} />
                            <Text style={styles.factText}>{fact}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  </View>
                )}
              </View>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: MainColors.background,
  },
  container: {
    flex: 1,
    backgroundColor: MainColors.background,
  },
  header: {
    padding: 24,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: MainColors.textPrimary,
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: MainColors.textSecondary,
    lineHeight: 24,
    fontWeight: '400',
  },
  message: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    color: MainColors.textSecondary,
  },
  scannerContainer: {
    flex: 1,
    margin: 20,
    marginTop: 0,
    gap: 20,
  },
  cameraPanel: {
    backgroundColor: MainColors.white,
    borderWidth: 1,
    borderColor: MainColors.primary + '20',
    borderRadius: 20,
    padding: 20,
    shadowColor: MainColors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
  panelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  statusTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: MainColors.surface,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 6,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: MainColors.textPrimary,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 8,
  },
  btn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  btnPrimary: {
    backgroundColor: MainColors.primary,
    borderColor: MainColors.primary,
  },
  btnSecondary: {
    backgroundColor: MainColors.white,
    borderColor: MainColors.primary,
  },
  btnText: {
    fontSize: 14,
    fontWeight: '600',
  },
  cameraContainer: {
    aspectRatio: 3 / 4,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#000000',
    position: 'relative',
  },
  camera: {
    flex: 1,
  },
  cameraOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scanFrame: {
    position: 'absolute',
    top: '25%',
    left: '15%',
    right: '15%',
    bottom: '35%',
    borderWidth: 2,
    borderColor: MainColors.primary,
    borderRadius: 12,
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cameraButton: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: MainColors.primary,
  },
  cameraPlaceholder: {
    height: 280,
    backgroundColor: MainColors.surface,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  placeholderText: {
    color: MainColors.textSecondary,
    fontSize: 16,
    fontWeight: '600',
  },
  placeholderSubtext: {
    color: MainColors.textSecondary,
    fontSize: 12,
    opacity: 0.7,
  },
  resultPanel: {
    backgroundColor: MainColors.white,
    borderWidth: 1,
    borderColor: MainColors.primary + '20',
    borderRadius: 20,
    padding: 20,
    shadowColor: MainColors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: MainColors.textPrimary,
  },
  confidenceTag: {
    backgroundColor: MainColors.primary50,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  confidenceText: {
    fontSize: 12,
    fontWeight: '600',
    color: MainColors.primary600,
  },
  snapshotContainer: {
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  snapshot: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  snapshotPlaceholder: {
    flex: 1,
    backgroundColor: MainColors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  resultContent: {
    gap: 12,
  },
  resultName: {
    fontSize: 22,
    fontWeight: '800',
    color: MainColors.textPrimary,
    letterSpacing: -0.5,
  },
  resultNote: {
    fontSize: 14,
    color: MainColors.textSecondary,
    lineHeight: 20,
    marginBottom: 8,
  },
  detailsContainer: {
    gap: 16,
  },
  detailSection: {
    gap: 6,
  },
  detailLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: MainColors.primary600,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  detailValue: {
    fontSize: 14,
    color: MainColors.textPrimary,
    lineHeight: 20,
    fontWeight: '500',
  },
  factsSection: {
    marginTop: 8,
  },
  factsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: MainColors.textPrimary,
    marginBottom: 12,
  },
  factsList: {
    gap: 10,
  },
  factItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  factBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: MainColors.primary,
    marginTop: 6,
  },
  factText: {
    flex: 1,
    fontSize: 13,
    color: MainColors.textSecondary,
    lineHeight: 18,
  },
});