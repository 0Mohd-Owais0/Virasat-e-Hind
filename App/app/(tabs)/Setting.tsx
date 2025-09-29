import { useRouter } from 'expo-router';
import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
  useWindowDimensions,
  StatusBar,
} from 'react-native';
import { MainColors } from '@/constants/Colors';


// 🎨 Theme palettes
const THEME_COLORS = {
  Classic: {
    background: '#fffaf0',
    cardBackground: '#ffffff',
    primary: '#8b4513',
    secondary: '#f5deb3',
    accent: '#d4c4a8',
    text: '#333',
    textLight: '#666',
    activeText: '#fff',
    border: '#e8e8e8',
  },
  Dark: {
    background: '#121212',
    cardBackground: '#1e1e1e',
    primary: '#bb86fc',
    secondary: '#333',
    accent: '#444',
    text: '#e0e0e0',
    textLight: '#aaa',
    activeText: '#000',
    border: '#333',
  },
  Heritage: {
    background: '#f4f1ea',
    cardBackground: '#ffffff',
    primary: '#5a3e2b',
    secondary: '#d4c4a8',
    accent: '#c4b49b',
    text: '#2c2c2c',
    textLight: '#666',
    activeText: '#fff',
    border: '#d4c4a8',
  },
  Modern: {
    background: '#f8f9fa',
    cardBackground: '#ffffff',
    primary: '#007AFF',
    secondary: '#e3f2fd',
    accent: '#bbdefb',
    text: '#212529',
    textLight: '#6c757d',
    activeText: '#fff',
    border: '#e9ecef',
  },
};

export default function ProfileScreen({ navigation }: { navigation: any }) {
  const Router = useRouter();
  const [theme, setTheme] = useState('Classic');
  const [interests] = useState(['History', 'Indus Valley Civilization', 'Kathak', 'Ghazal', 'Art', 'Lucknow']);
  const { width } = useWindowDimensions();

  const COLORS = useMemo(() => THEME_COLORS[theme as keyof typeof THEME_COLORS], [theme]);
  const themes = ['Classic', 'Dark', 'Heritage', 'Modern'];

  const menuItems = [
    { title: 'Festival Calendar', icon: '📅', screen: 'FestivalCalendar', color: '#FF6B6B' },
    { title: 'Achievements', icon: '🏆', screen: 'Achievements', color: '#4ECDC4' },
    { title: 'About', icon: 'ℹ️', screen: 'About', color: '#45B7D1' },
    { title: 'Settings', icon: '⚙️', screen: 'Settings', color: '#96CEB4' },
    { title: 'Interests', icon: '❤️', screen: 'Interests', color: '#FFEAA7' },
    { title: 'Help & Support', icon: '💬', screen: 'Help', color: '#DDA0DD' },
  ];

  const stats = [
    { label: 'Places Visited', value: '23', icon: '📍' },
    { label: 'Photos Taken', value: '156', icon: '📷' },
    { label: 'Reviews Written', value: '12', icon: '⭐' },
  ];

  const isWideScreen = width > 600;

  return (
    <View style={[styles.container, { backgroundColor: COLORS.background }]}>
      <StatusBar
        barStyle={theme === 'Dark' ? 'light-content' : 'dark-content'}
        backgroundColor={COLORS.background}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.title, { color: COLORS.primary }]}>My Profile</Text>
          <Text style={[styles.subtitle, { color: COLORS.textLight }]}>
            Explore your cultural journey
          </Text>
        </View>

        {/* Profile Card */}
        <View style={[styles.profileCard, { backgroundColor: COLORS.cardBackground, borderColor: COLORS.border }]}>
          <View style={styles.profileHeader}>
            <Image
              source={{ uri: 'https://i.pinimg.com/736x/48/cd/0d/48cd0dbc2886201f63cca87d2e6297e2.jpg' }}
              style={[styles.avatar, { borderColor: COLORS.primary }]}
            />
            <View style={styles.profileInfo}>
              <Text style={[styles.name, { color: COLORS.text }]}>Mohd Owais</Text>
              <Text style={[styles.location, { color: COLORS.textLight }]}>📍 Lucknow, India</Text>
              <View style={[styles.statusBadge, { backgroundColor: COLORS.primary }]}>
                <Text style={[styles.statusText, { color: COLORS.activeText }]}>Explorer</Text>
              </View>
            </View>
          </View>

          <Text style={[styles.bio, { color: COLORS.text }]}>
            Enthusiastic traveler and culture explorer. Passionate about history,
            art, and discovering hidden gems across India.
          </Text>

          {/* Stats */}
          <View style={styles.statsContainer}>
            {stats.map((stat, index) => (
              <View key={index} style={[styles.statItem, { backgroundColor: COLORS.secondary }]}>
                <Text style={styles.statIcon}>{stat.icon}</Text>
                <Text style={[styles.statValue, { color: COLORS.primary }]}>{stat.value}</Text>
                <Text style={[styles.statLabel, { color: COLORS.textLight }]}>{stat.label}</Text>
              </View>
            ))}
          </View>
          <View style={{ marginTop: 16 }}>
            <View>
              <Text style={[styles.sectionTitle, { color: COLORS.text }]}> Interests</Text>
            </View>
            <View style={styles.tagsContainer}>
              {interests.map((tag, index) => (
                <View key={index} style={[styles.tag, { backgroundColor: COLORS.accent, borderColor: COLORS.border }]}>
                  <Text style={[styles.tagText, { color: COLORS.text }]}>{tag}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Theme Selector */}
        <View style={[styles.section, { backgroundColor: COLORS.cardBackground, borderColor: COLORS.border }]}>
          <Text style={[styles.sectionTitle, { color: COLORS.text }]}> Choose Theme</Text>
          <View style={styles.themeOptions}>
            {themes.map((t) => (
              <TouchableOpacity
                key={t}
                style={[
                  styles.themeButton,
                  { backgroundColor: COLORS.secondary },
                  theme === t && { backgroundColor: COLORS.primary },
                ]}
                onPress={() => setTheme(t)}
              >
                <Text
                  style={[
                    styles.themeText,
                    { color: COLORS.text },
                    theme === t && { color: COLORS.activeText },
                  ]}
                >
                  {t}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Menu Items */}
        <View style={[styles.section, { backgroundColor: COLORS.cardBackground, borderColor: COLORS.border }]}>
          <Text style={[styles.sectionTitle, { color: COLORS.text }]}>🧭 Quick Access</Text>
          <View style={[styles.menuGrid, isWideScreen && styles.menuGridWide]}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.menuItem,
                  { backgroundColor: COLORS.secondary, borderColor: COLORS.border },
                  isWideScreen && styles.menuItemWide,
                ]}
                onPress={() => navigation?.navigate?.(item.screen)}
                activeOpacity={0.7}
              >
                <View style={[styles.menuIcon, { backgroundColor: item.color + '20' }]}>
                  <Text style={styles.menuIconText}>{item.icon}</Text>
                </View>
                <Text style={[styles.menuText, { color: COLORS.text }]}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.section}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: COLORS.primary }]}
            activeOpacity={0.8}
          >
            <Text style={[styles.buttonText, { color: COLORS.activeText }]}>✏️ Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.logoutButton, {
              backgroundColor: COLORS.cardBackground,
              borderColor: COLORS.primary
            }]}
            
              onPress={() => Router.push("../login")}
            activeOpacity={0.8}
          >
            <Text style={[styles.buttonText, { color: COLORS.primary }]}>🚪 Log Out</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: COLORS.textLight }]}>
            Virasat - Cultural Heritage Explorer
          </Text>
          <Text style={[styles.version, { color: COLORS.textLight }]}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  profileCard: {
    margin: 20,
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  bio: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
  },
  statIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 11,
    textAlign: 'center',
    fontWeight: '500',
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
      },
      android: {
        elevation: 0,
      },
    }),
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  themeOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  themeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  themeText: {
    fontSize: 14,
    fontWeight: '600',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '500',
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  menuGridWide: {
    justifyContent: 'space-between',
  },
  menuItem: {
    flex: 1,
    minWidth: '45%',
    maxWidth: '48%',
    aspectRatio: 1.2,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  menuItemWide: {
    minWidth: '30%',
    maxWidth: '31%',
  },
  menuIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  menuIconText: {
    fontSize: 24,
  },
  menuText: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  button: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  logoutButton: {
    borderWidth: 2,
  },
  footer: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 40,
  },
  footerText: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  version: {
    fontSize: 12,
  },
});


