// import React, { useState, useRef, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, Button, ScrollView } from 'react-native';
// import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
// import { AntDesign } from '@expo/vector-icons';

// type Place = {
//   id: number;
//   name: string;
//   state: string;
// };

// type Result = {
//   name: string;
//   note: string;
//     confidence?: number;
// } | null;

// const places: Place[] = [
//   { id: 1, name: "Taj Mahal", state: "Uttar Pradesh" },
//   { id: 2, name: "Hampi", state: "Karnataka" },
//   { id: 3, name: "Konark Sun Temple", state: "Odisha" }
// ];

// const VISION_API_KEY = 'AIzaSyBDfzP2i_XAj6lwc0Nn2BPxSSstyvBqfGw';

// export default function CameraTab() {
//   const [permission, requestPermission] = useCameraPermissions();
//   const [isActive, setIsActive] = useState(false);
//   const [capturedImage, setCapturedImage] = useState<string | null>(null);
//   const [result, setResult] = useState<Result>(null);
//   const cameraRef = useRef<CameraView | null>(null);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [facing, setFacing] = useState<CameraType>('back');

// // Attempt to actually make the API calling nd photo recognition work

//   const identifyWithVisionAPI = async (imageUri: string) => {
//     try {
//       setIsProcessing(true);
      
//       // Convert image to base64
//       const response = await fetch(imageUri);
//       const blob = await response.blob();
//       const base64 = await new Promise((resolve) => {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//           const base64String = reader.result as string;
//           // Remove data:image/jpeg;base64, prefix
//           resolve(base64String.split(',')[1]);
//         };
//         reader.readAsDataURL(blob);
//       });

//       // Call Google Cloud Vision API
//       const visionResponse = await fetch(
//         `https://vision.googleapis.com/v1/images:annotate?key=${VISION_API_KEY}`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             requests: [
//               {
//                 image: {
//                   content: base64,
//                 },
//                 features: [
//                   {
//                     type: 'LANDMARK_DETECTION',
//                     maxResults: 5,
//                   },
//                   {
//                     type: 'WEB_DETECTION',
//                     maxResults: 5,
//                   }
//                 ],
//               },
//             ],
//           }),
//         }
//       );

//       const visionData = await visionResponse.json();
//       console.log('Vision API Response:', visionData);

//       if (visionData.responses && visionData.responses[0]) {
//         const response = visionData.responses[0];
        
//         // Check for landmark detection first
//         if (response.landmarkAnnotations && response.landmarkAnnotations.length > 0) {
//           const landmark = response.landmarkAnnotations[0];
//           return {
//             name: landmark.description,
//             note: `Detected landmark with ${Math.round(landmark.score * 100)}% confidence`,
//             confidence: landmark.score
//           };
//         }
        
//         // Check web detection for similar images
//         if (response.webDetection && response.webDetection.webEntities) {
//           const webEntities = response.webDetection.webEntities;
//           const relevantEntity = webEntities.find((entity: any) =>
//             entity.description && entity.score > 0.5
//           );
          
//           if (relevantEntity) {
//             return {
//               name: relevantEntity.description,
//               note: `Found similar images online with ${Math.round(relevantEntity.score * 100)}% confidence`,
//               confidence: relevantEntity.score
//             };
//           }
//         }
        
//         // If no landmarks found, return a message
//         return {
//           name: "Unknown Location",
//           note: "Could not identify this as a known monument or landmark",
//           confidence: 0
//         };
//       }
      
//       throw new Error('No response from Vision API');
//     } catch (error) {
//       console.error('Vision API Error:', error);
//       Alert.alert('API Error', 'Failed to analyze image. Using mock data instead.');
//       return mockIdentify(); // Fallback to mock data
//     } finally {
//       setIsProcessing(false);
//     }
//   };





//   const mockIdentify = () => {
//     const randomPlace = places[Math.floor(Math.random() * places.length)];
//     return {
//       name: randomPlace.name,
//       note: `Located in ${randomPlace.state}`,
//     };
//   };

//   const startCamera = () => {
//     if (permission) {
//       setIsActive(true);
//       setCapturedImage(null);
//       setResult(null);
//     } else {
//       Alert.alert('Permission Required', 'Camera permission is required to use this feature.');
//     }
//   };

//   const stopCamera = () => {
//     setIsActive(false);
//   };

//   const captureImage = async () => {
//     if (cameraRef.current) {
//       try {
//         const photo = await cameraRef.current.takePictureAsync({
//           quality: 1,
//           base64: true,
//           exif: false
//         });
//         setCapturedImage(photo.uri);
//         setIsActive(false);

//         // Mock identification
//         let guess;
//         if (VISION_API_KEY !== 'AIzaSyBDfzP2i_XAj6lwc0Nn2BPxSSstyvBqfGw') {
//           guess = await identifyWithVisionAPI(photo.uri);
//         } else {
//           guess = mockIdentify();
//         }
        
//       } catch (error) {
//         Alert.alert('Error', 'Failed to capture image');
//       }
//     }
//   };

//   function toggleCameraFacing() {
//     setFacing(current => (current === 'back' ? 'front' : 'back'));
//   }

//   if (!permission) {
//     // Camera permissions are still loading.
//     return <View />;
//   }

//   if (!permission.granted) {
//     // Camera permissions are not granted yet.
//     return (
//       <View style={styles.container}>
//         <Text style={styles.message}>We need your permission to show the camera</Text>
//         <Button onPress={requestPermission} title="grant permission" />
//       </View>
//     );
//   }

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Text style={styles.title}>Scan a Monument</Text>
//           <Text style={styles.subtitle}>
//             Capture an image to identify cultural monuments.
//           </Text>
//         </View>

//         <View style={styles.scannerContainer}>
//           <View style={styles.cameraPanel}>
//             <View style={styles.panelHeader}>
//               <View style={styles.tag}>
//                 <Text style={styles.tagText}>Camera </Text>
//               </View>
//               <View style={styles.buttonGroup}>
//                 {!isActive && <TouchableOpacity
//                   style={[styles.btn, !isActive && styles.btnActive]}
//                   onPress={startCamera}
//                   disabled={isActive}
//                 >
//                   <Text style={styles.btnText}>Start</Text>
//                 </TouchableOpacity>}

//                 {isActive && <TouchableOpacity
//                   style={[styles.btn, isActive && styles.btnActive]}
//                   onPress={captureImage}
//                   disabled={!isActive}
//                 >
//                   <Text style={styles.btnText}>Capture</Text>
//                 </TouchableOpacity>}

//                 {isActive && <TouchableOpacity
//                   style={[styles.btn, isActive && styles.btnActive]}
//                   onPress={stopCamera}
//                   disabled={!isActive}
//                 >
//                   <Text style={styles.btnText}>Stop</Text>
//                 </TouchableOpacity>}
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
//                       <AntDesign name='retweet' size={36} color='white' />
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.button} onPress={captureImage}>
//                       <AntDesign name='camera' size={36} color='white' />
//                     </TouchableOpacity>
//                   </View>
//                 </View>

//               ) : (
//                 <View style={[styles.cameraPlaceholder, styles.OffCameraContainer]}>
//                   <Text style={styles.placeholderText}>Camera Off</Text>
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
//                   <Text style={styles.tagText}>Guess</Text>
//                 </View>
//                 <Text style={styles.resultName}>{result.name}</Text>
//                 <Text style={styles.resultNote}>{result.note}</Text>
//               </View>
//             )}
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

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
//     aspectRatio: 3 / 4,   // portrait ratio (width : height)
//     borderRadius: 14,
//     overflow: 'hidden',
//     backgroundColor: '#111111',
//     position: 'relative', // allow overlay
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
//   webCameraPlaceholder: {
//     backgroundColor: '#6B2D2D',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   webCameraText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     marginBottom: 4,
//   },
//   webCameraSubtext: {
//     color: '#C59D5F',
//     fontSize: 14,
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
//     gap: 4,
//   },
//   resultName: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#2E2E2E',
//     marginTop: 4,
//   },
//   resultNote: {
//     fontSize: 14,
//     color: '#8A7C6E',
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
// });
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, Button, ScrollView } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { AntDesign } from '@expo/vector-icons';

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

// Replace with your actual API key
const VISION_API_KEY = 'AIzaSyBDfzP2i_XAj6lwc0Nn2BPxSSstyvBqfGw';

export default function CameraTab() {
  const [permission, requestPermission] = useCameraPermissions();
  const [isActive, setIsActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [result, setResult] = useState<Result>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [debugInfo, setDebugInfo] = useState<string>('');
  const cameraRef = useRef<CameraView | null>(null);
  const [facing, setFacing] = useState<CameraType>('back');

  // Debug logging function
  const logDebug = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    setDebugInfo(prev => prev + '\n' + logMessage);
  };

  // Enhanced mock identification with detailed information
  const mockIdentify = (): Result => {
    const randomPlace = places[Math.floor(Math.random() * places.length)];
    logDebug(`🎭 Using mock data for: ${randomPlace.name}`);
    
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

  // Fixed Vision API implementation
  const identifyWithVisionAPI = async (imageUri: string): Promise<Result> => {
    try {
      setIsProcessing(true);
      logDebug('🔄 Starting Vision API analysis...');
      
      // Convert image to base64
      logDebug('📷 Converting image to base64...');
      const response = await fetch(imageUri);
      const blob = await response.blob();
      
      const base64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result as string;
          resolve(base64String.split(',')[1]);
        };
        reader.readAsDataURL(blob);
      });

      logDebug('🌐 Calling Vision API...');
      
      // Call Google Cloud Vision API
      const visionResponse = await fetch(
        `https://vision.googleapis.com/v1/images:annotate?key=${VISION_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            requests: [
              {
                image: {
                  content: base64,
                },
                features: [
                  {
                    type: 'LANDMARK_DETECTION',
                    maxResults: 5,
                  },
                  {
                    type: 'WEB_DETECTION',
                    maxResults: 10,
                  },
                  {
                    type: 'LABEL_DETECTION',
                    maxResults: 10,
                  }
                ],
              },
            ],
          }),
        }
      );

      logDebug(`📡 API Response: ${visionResponse.status}`);
      
      if (!visionResponse.ok) {
        const errorText = await visionResponse.text();
        logDebug(`❌ API Error: ${errorText}`);
        throw new Error(`API Error: ${visionResponse.status}`);
      }

      const visionData = await visionResponse.json();
      logDebug(`📋 API Data: ${JSON.stringify(visionData, null, 2)}`);

      if (visionData.responses && visionData.responses[0]) {
        const apiResponse = visionData.responses[0];
        
        // Check for landmark detection first
        if (apiResponse.landmarkAnnotations && apiResponse.landmarkAnnotations.length > 0) {
          const landmark = apiResponse.landmarkAnnotations[0];
          logDebug(`🏛️ Landmark found: ${landmark.description}`);
          
          // Try to match with our detailed data
          const matchedPlace = places.find(place => 
            place.name.toLowerCase().includes(landmark.description.toLowerCase()) ||
            landmark.description.toLowerCase().includes(place.name.toLowerCase())
          );

          if (matchedPlace) {
            return {
              name: matchedPlace.name,
              note: `${matchedPlace.description} (Vision API Detection)`,
              confidence: landmark.score,
              details: {
                built: matchedPlace.built,
                significance: matchedPlace.significance,
                architecture: matchedPlace.architecture,
                visitTime: matchedPlace.visitTime,
                facts: matchedPlace.facts
              }
            };
          } else {
            return {
              name: landmark.description,
              note: `Landmark detected with ${Math.round(landmark.score * 100)}% confidence`,
              confidence: landmark.score
            };
          }
        }
        
        // Check web detection
        if (apiResponse.webDetection && apiResponse.webDetection.webEntities) {
          const webEntities = apiResponse.webDetection.webEntities;
          const relevantEntity = webEntities.find((entity: any) =>
            entity.description && entity.score > 0.3
          );
          
          if (relevantEntity) {
            logDebug(`🌐 Web entity found: ${relevantEntity.description}`);
            return {
              name: relevantEntity.description,
              note: `Found similar content online with ${Math.round(relevantEntity.score * 100)}% confidence`,
              confidence: relevantEntity.score
            };
          }
        }

        // Check labels as fallback
        if (apiResponse.labelAnnotations && apiResponse.labelAnnotations.length > 0) {
          const topLabels = apiResponse.labelAnnotations.slice(0, 3).map((label: any) => label.description).join(', ');
          logDebug(`🏷️ Labels detected: ${topLabels}`);
          return {
            name: "Unidentified Location",
            note: `Detected features: ${topLabels}`,
            confidence: 0.3
          };
        }
      }
      
      logDebug('❓ No useful results from API');
      return {
        name: "Unknown Location",
        note: "Could not identify this location",
        confidence: 0
      };
      
    } catch (error: any) {
      logDebug(`❌ Vision API Error: ${error.message}`);
      console.error('Vision API Error:', error);
      Alert.alert('API Error', `Failed to analyze image: ${error.message}\n\nUsing mock data instead.`);
      return mockIdentify();
    } finally {
      setIsProcessing(false);
    }
  };

  const startCamera = async () => {
    if (permission?.granted) {
      logDebug('📷 Starting camera...');
      setIsActive(true);
      setCapturedImage(null);
      setResult(null);
    } else {
      logDebug('⚠️ Requesting camera permission...');
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
    logDebug('⏹️ Stopping camera...');
    setIsActive(false);
  };

  const captureImage = async () => {
    if (cameraRef.current) {
      try {
        logDebug('📸 Capturing image...');
        const photo = await cameraRef.current.takePictureAsync({
          quality: 0.8,
          base64: false,
        });
        
        logDebug(`✅ Image captured: ${photo.uri}`);
        setCapturedImage(photo.uri);
        setIsActive(false);

        // FIXED: Now we actually use the result!
        let guess: Result;
        if (VISION_API_KEY && VISION_API_KEY !== 'AIzaSyBDfzP2i_XAj6lwc0Nn2BPxSSstyvBqfGw') {
          logDebug('🤖 Using Vision API...');
          guess = await identifyWithVisionAPI(photo.uri);
        } else {
          logDebug('🎭 Using mock data...');
          guess = mockIdentify();
        }
        
        setResult(guess);
        logDebug(`🎯 Analysis complete: ${guess?.name}`);
      } catch (error: any) {
        logDebug(`❌ Capture error: ${error.message}`);
        Alert.alert('Error', 'Failed to capture image');
      }
    }
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
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Scan a Monument</Text>
          <Text style={styles.subtitle}>
            Capture an image to identify cultural monuments with detailed information.
          </Text>
        </View>

        {/* Debug Section */}
        {debugInfo && (
          <View style={styles.debugContainer}>
            <Text style={styles.debugTitle}>Debug Info:</Text>
            <ScrollView style={styles.debugScroll} nestedScrollEnabled>
              <Text style={styles.debugText}>{debugInfo}</Text>
            </ScrollView>
            <TouchableOpacity onPress={() => setDebugInfo('')} style={styles.clearButton}>
              <Text style={styles.clearButtonText}>Clear</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.scannerContainer}>
          <View style={styles.cameraPanel}>
            <View style={styles.panelHeader}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>
                  Camera {isActive ? '🟢' : '⚪'}
                </Text>
              </View>
              <View style={styles.buttonGroup}>
                {!isActive && (
                  <TouchableOpacity
                    style={[styles.btn, styles.btnActive]}
                    onPress={startCamera}
                  >
                    <Text style={[styles.btnText, {color: 'white'}]}>Start</Text>
                  </TouchableOpacity>
                )}

                {isActive && (
                  <>
                    <TouchableOpacity
                      style={[styles.btn, styles.btnActive]}
                      onPress={captureImage}
                      disabled={isProcessing}
                    >
                      <Text style={[styles.btnText, {color: 'white'}]}>
                        {isProcessing ? 'Processing...' : 'Capture'}
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[styles.btn, styles.btnActive]}
                      onPress={stopCamera}
                    >
                      <Text style={[styles.btnText, {color: 'white'}]}>Stop</Text>
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
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                      <AntDesign name="retweet" size={36} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={captureImage}>
                      <AntDesign name="camera" size={36} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View style={[styles.cameraPlaceholder, styles.OffCameraContainer]}>
                  <Text style={styles.placeholderText}>Camera Off</Text>
                  <Text style={styles.placeholderSubtext}>Tap 'Start' to begin</Text>
                </View>
              )}
            </View>
          </View>

          <View style={styles.resultPanel}>
            <Text style={styles.resultTitle}>Result</Text>

            <View style={styles.snapshotContainer}>
              {capturedImage ? (
                <Image source={{ uri: capturedImage }} style={styles.snapshot} />
              ) : (
                <View style={styles.snapshotPlaceholder}>
                  <Text style={styles.placeholderText}>No image captured</Text>
                </View>
              )}
            </View>

            {result && (
              <View style={styles.resultContent}>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>
                    {result.confidence ? `${Math.round(result.confidence * 100)}% Match` : 'Result'}
                  </Text>
                </View>
                
                <Text style={styles.resultName}>{result.name}</Text>
                <Text style={styles.resultNote}>{result.note}</Text>

                {/* Enhanced Details Section */}
                {result.details && (
                  <View style={styles.detailsContainer}>
                    <View style={styles.detailRow}>
                      <Text style={styles.detailLabel}>Built:</Text>
                      <Text style={styles.detailValue}>{result.details.built}</Text>
                    </View>
                    
                    <View style={styles.detailRow}>
                      <Text style={styles.detailLabel}>Significance:</Text>
                      <Text style={styles.detailValue}>{result.details.significance}</Text>
                    </View>
                    
                    <View style={styles.detailRow}>
                      <Text style={styles.detailLabel}>Architecture:</Text>
                      <Text style={styles.detailValue}>{result.details.architecture}</Text>
                    </View>
                    
                    <View style={styles.detailRow}>
                      <Text style={styles.detailLabel}>Best Time to Visit:</Text>
                      <Text style={styles.detailValue}>{result.details.visitTime}</Text>
                    </View>

                    <View style={styles.factsSection}>
                      <Text style={styles.factsTitle}>Interesting Facts:</Text>
                      {result.details.facts.map((fact, index) => (
                        <View key={index} style={styles.factRow}>
                          <Text style={styles.factBullet}>•</Text>
                          <Text style={styles.factText}>{fact}</Text>
                        </View>
                      ))}
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
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#514a44',
    lineHeight: 22,
  },
  message: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    color: '#514a44',
  },
  debugContainer: {
    margin: 20,
    marginTop: 0,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#6B2D2D',
  },
  debugTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  debugScroll: {
    maxHeight: 100,
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 8,
  },
  debugText: {
    fontSize: 10,
    fontFamily: 'monospace',
    color: '#555',
  },
  clearButton: {
    backgroundColor: '#6B2D2D',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  clearButtonText: {
    color: 'white',
    fontSize: 12,
  },
  scannerContainer: {
    flex: 1,
    margin: 20,
    marginTop: 0,
    gap: 16,
  },
  cameraPanel: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9C6A1',
    borderRadius: 18,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 22,
    elevation: 5,
  },
  panelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
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
  buttonGroup: {
    flexDirection: 'row',
    gap: 8,
  },
  btn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D9C6A1',
    backgroundColor: '#FFFFFF',
  },
  btnActive: {
    backgroundColor: '#6B2D2D',
  },
  btnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2E2E2E',
  },
  cameraContainer: {
    aspectRatio: 3 / 4,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#111111',
    position: 'relative',
  },
  OffCameraContainer: {
    height: 250,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#111111',
  },
  camera: {
    flex: 1,
  },
  cameraPlaceholder: {
    flex: 1,
    backgroundColor: '#111111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  placeholderSubtext: {
    color: '#CCCCCC',
    fontSize: 12,
    marginTop: 4,
  },
  resultPanel: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9C6A1',
    borderRadius: 18,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 22,
    elevation: 5,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2E2E2E',
    marginBottom: 12,
  },
  snapshotContainer: {
    height: 200,
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 12,
  },
  snapshot: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  snapshotPlaceholder: {
    flex: 1,
    backgroundColor: '#111111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultContent: {
    gap: 8,
  },
  resultName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2E2E2E',
  },
  resultNote: {
    fontSize: 14,
    color: '#8A7C6E',
    marginBottom: 12,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 50,
  },
  // Enhanced details styling
  detailsContainer: {
    marginTop: 8,
    gap: 12,
  },
  detailRow: {
    gap: 4,
  },
  detailLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B2D2D',
    textTransform: 'uppercase',
  },
  detailValue: {
    fontSize: 14,
    color: '#2E2E2E',
    lineHeight: 20,
  },
  factsSection: {
    marginTop: 8,
  },
  factsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B2D2D',
    marginBottom: 8,
  },
  factRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  factBullet: {
    color: '#6B2D2D',
    fontSize: 16,
    marginRight: 8,
    marginTop: 2,
  },
  factText: {
    flex: 1,
    fontSize: 13,
    color: '#514a44',
    lineHeight: 18,
  },
});