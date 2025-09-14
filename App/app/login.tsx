import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';

export default function App() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSignup = () => {
    if (validateForm()) {
      router.replace("./(tabs)");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ImageBackground
          source={{
            uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAK79kI5s0qDiPEVNST6Z3vzKsFcHNfvt0FuaToUxVPteQz5cTtUJ_fMTvj8erW30irZJlPtsq5qGlrwuWbiPsIFZliLuWmUKGyzdVHt0ZriBSBxPA6cEYmLOieJ9N4nRL1MYCik39f1I2nlcVnp0SVaauJRrXcYy4qaI9RhNpSOczrfHC6lFF3dOkV8cOpp-k_e_eOfNHSI0ixr9TazD0Or8FyqqkyxA4xVjmqnRSVO9tQjz6Wzb2_iebytEGwKxpratXBPnACVg",
          }}
          style={styles.hero}
        >
          <View style={styles.gradientOverlay} />

          <View style={{ height: "60%", justifyContent: "center" }}>
            <View style={styles.textSection}>
              <Text style={styles.heading}>Sign Up</Text>
              <Text style={styles.paragraph}>
                Create your account to continue
              </Text>
            </View>

            {/* Email */}
            <View style={styles.inputGroup}>
              <TextInput
                style={[styles.input, errors.email && styles.inputError]}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={formData.email}
                onChangeText={(text) =>
                  setFormData({ ...formData, email: text })
                }
              />
              {errors.email ? (
                <Text style={styles.errorText}>{errors.email}</Text>
              ) : null}
            </View>

            {/* Password */}
            <View style={styles.inputGroup}>
              <TextInput
                style={[styles.input, errors.password && styles.inputError]}
                placeholder="Password"
                secureTextEntry
                value={formData.password}
                onChangeText={(text) =>
                  setFormData({ ...formData, password: text })
                }
              />
              {errors.password ? (
                <Text style={styles.errorText}>{errors.password}</Text>
              ) : null}
            </View>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.signInButton}
                onPress={handleSignup}
              >
                <Text style={styles.signInText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.guestButton}
                onPress={() => router.replace("./(tabs)/Home")}
              >
                <Text style={styles.guestText}>Explore as Guest</Text>
              </TouchableOpacity>
            </View>

            {/* Footer */}
            <Text style={styles.footerText}>
              By continuing, you agree to our Terms of Service and Privacy
              Policy.
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fcfaf8", height: "100%" },
  scrollContent: { flexGrow: 1, justifyContent: "space-between" },
  hero: { height: "100%", justifyContent: "flex-end" },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(252, 250, 248, 0.8)",
  },
  textSection: { paddingHorizontal: 24, alignItems: "center" },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1b130d",
    marginBottom: 12,
    fontFamily: "serif",
  },
  paragraph: {
    fontSize: 16,
    color: "#634832",
    textAlign: "center",
    lineHeight: 24,
  },inputGroup: {
  marginBottom: 16,
  paddingHorizontal: 24,
},
input: {
  height: 50,
  borderWidth: 1,
  borderColor: '#d9c3b5', 
  borderRadius: 12,
  paddingHorizontal: 16,
  backgroundColor: '#fff',
  fontSize: 16,
  color: '#1b130d',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 1,
},
inputError: {
  borderColor: '#ec6d13',  
},
errorText: {
  color: '#ec6d13',
  fontSize: 12,
  marginTop: 4,
  marginLeft: 8,
},

  buttonContainer: { paddingHorizontal: 24, marginTop: 20, gap: 12 },
  signInButton: {
    height: 56,
    backgroundColor: "#ec6d13",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  signInText: { color: "white", fontSize: 18, fontWeight: "600" },
  guestButton: {
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ec6d13",
    justifyContent: "center",
    alignItems: "center",
  },
  guestText: { color: "#ec6d13", fontSize: 18, fontWeight: "600" },
  footerText: {
    fontSize: 12,
    color: "#9a6c4c",
    textAlign: "center",
    paddingTop: 24,
    paddingHorizontal: 16,
  },
});
