import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Platform, TouchableOpacity } from 'react-native';

export default function ProfileTab() {
  const [interests] = useState(["History", "Architecture", "Poetry", "Photography", "Art"]);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>My Profile</Text>
        <Text style={styles.subtitle}>Explore your cultural journey</Text>
      </View>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <Image
          source={{ uri: "https://i.pinimg.com/736x/48/cd/0d/48cd0dbc2886201f63cca87d2e6297e2.jpg" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Mohd Owais</Text>
        <Text style={styles.location}>Lucknow, India</Text>
        <Text style={styles.bio}>
          Enthusiastic traveler and culture explorer. Passionate about history,
          art, and discovering hidden gems across India.
        </Text>
      </View>

      {/* Interests */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Interests</Text>
        <View style={styles.tagsContainer}>
          {interests.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.logoutButton]}>
          <Text style={[styles.buttonText, styles.logoutText]}>Log Out</Text>
        </TouchableOpacity>
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
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    borderRadius: 18,
    padding: 20,
    alignItems: 'center',
    ...(Platform.OS === 'ios' || Platform.OS === 'android'
      ? {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.05,
          shadowRadius: 22,
          elevation: 5,
        }
      : {}),
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 999,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2E2E2E',
  },
  location: {
    fontSize: 14,
    color: '#8A7C6E',
    marginBottom: 12,
  },
  bio: {
    fontSize: 14,
    color: '#2E2E2E',
    textAlign: 'center',
    lineHeight: 20,
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2E2E2E',
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#F5E6D3',
    borderWidth: 1,
    borderColor: '#D9C6A1',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 12,
    color: '#2E2E2E',
  },
  button: {
    backgroundColor: '#6B2D2D',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#6B2D2D',
  },
  logoutText: {
    color: '#6B2D2D',
  },
});
