import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

type Place = {
  id: number;
  name: string;
  state: string;
};

type Result = {
  name: string;
  note: string;
} | null;

const places: Place[] = [
  { id: 1, name: "Taj Mahal", state: "Uttar Pradesh" },
  { id: 2, name: "Hampi", state: "Karnataka" },
  { id: 3, name: "Konark Sun Temple", state: "Odisha" }
];
export default function CameraTab() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [result, setResult] = useState<Result>(null);
  const cameraRef = useRef<Camera | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const mockIdentify = () => {
    const randomPlace = places[Math.floor(Math.random() * places.length)];
    return {
      name: randomPlace.name,
      note: 'Demo match • replace with real ML logic.'
    };
  };

  const startCamera = () => {
    if (hasPermission) {
      setIsActive(true);
      setCapturedImage(null);
      setResult(null);
    } else {
      Alert.alert('Permission Required', 'Camera permission is required to use this feature.');
    }
  };

  const stopCamera = () => {
    setIsActive(false);
  };

  const captureImage = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync({
          quality: 0.8,
          base64: false,
        });
        setCapturedImage(photo.uri);
        setIsActive(false);

        // Mock identification
        const guess = mockIdentify();
        setResult(guess);
      } catch (error) {
        Alert.alert('Error', 'Failed to capture image');
      }
    }
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Requesting camera permission...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Scan a Monument</Text>
        <Text style={styles.subtitle}>
          Capture an image to identify cultural monuments. This demo shows a mock match.
        </Text>
      </View>

      <View style={styles.scannerContainer}>
        <View style={styles.cameraPanel}>
          <View style={styles.panelHeader}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Camera demo</Text>
            </View>
            <View style={styles.buttonGroup}>
              <TouchableOpacity 
                style={[styles.btn, !isActive && styles.btnActive]} 
                onPress={startCamera}
                disabled={isActive}
              >
                <Text style={styles.btnText}>Start</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.btn, isActive && styles.btnActive]} 
                onPress={captureImage}
                disabled={!isActive}
              >
                <Text style={styles.btnText}>Capture</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.btn, isActive && styles.btnActive]} 
                onPress={stopCamera}
                disabled={!isActive}
              >
                <Text style={styles.btnText}>Stop</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.cameraContainer}>
            {isActive ? (
              <Camera
                ref={cameraRef}
                style={styles.camera}
                type={CameraType.back}
                ratio="16:9"
              />
            ) : (
              <View style={styles.cameraPlaceholder}>
                <Text style={styles.placeholderText}>Camera Off</Text>
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
                <Text style={styles.tagText}>Guess</Text>
              </View>
              <Text style={styles.resultName}>{result.name}</Text>
              <Text style={styles.resultNote}>{result.note}</Text>
            </View>
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
  webCameraPlaceholder: {
    backgroundColor: '#6B2D2D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  webCameraText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 4,
  },
  webCameraSubtext: {
    color: '#C59D5F',
    fontSize: 14,
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
    gap: 4,
  },
  resultName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2E2E2E',
    marginTop: 4,
  },
  resultNote: {
    fontSize: 14,
    color: '#8A7C6E',
  },
});