/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};


// Color Palettes for InfoTab Component

// Heritage Theme (Current)
export const HERITAGE_COLORS = {
  primary: '#6B2D2D',
  primaryLight: '#8B4A4A',
  primaryDark: '#4A1F1F',
  
  secondary: '#C59D5F',
  secondaryLight: '#D4B077',
  secondaryDark: '#A67D45',
  
  background: '#F5E6D3',
  surface: '#FFFFFF',
  surfaceVariant: '#F5E6D3',
  
  text: '#2E2E2E',
  textSecondary: '#514a44',
  textTertiary: '#8A7C6E',
  
  border: '#D9C6A1',
  borderLight: '#E5D2B3',
  
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  
  shadow: '#000000',
};

// Modern Theme
export const MODERN_COLORS = {
  primary: '#2563EB',
  primaryLight: '#3B82F6',
  primaryDark: '#1D4ED8',
  
  secondary: '#7C3AED',
  secondaryLight: '#8B5CF6',
  secondaryDark: '#6D28D9',
  
  background: '#F8FAFC',
  surface: '#FFFFFF',
  surfaceVariant: '#F1F5F9',
  
  text: '#0F172A',
  textSecondary: '#475569',
  textTertiary: '#64748B',
  
  border: '#E2E8F0',
  borderLight: '#F1F5F9',
  
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  
  shadow: '#000000',
};

// Nature Theme
export const NATURE_COLORS = {
  primary: '#059669',
  primaryLight: '#10B981',
  primaryDark: '#047857',
  
  secondary: '#D97706',
  secondaryLight: '#F59E0B',
  secondaryDark: '#B45309',
  
  background: '#F0FDF4',
  surface: '#FFFFFF',
  surfaceVariant: '#ECFDF5',
  
  text: '#064E3B',
  textSecondary: '#374151',
  textTertiary: '#6B7280',
  
  border: '#BBF7D0',
  borderLight: '#D1FAE5',
  
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  
  shadow: '#000000',
};

// Dark Theme
export const DARK_COLORS = {
  primary: '#F59E0B',
  primaryLight: '#FCD34D',
  primaryDark: '#D97706',
  
  secondary: '#8B5CF6',
  secondaryLight: '#A78BFA',
  secondaryDark: '#7C3AED',
  
  background: '#0F172A',
  surface: '#1E293B',
  surfaceVariant: '#334155',
  
  text: '#F8FAFC',
  textSecondary: '#CBD5E1',
  textTertiary: '#94A3B8',
  
  border: '#475569',
  borderLight: '#64748B',
  
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  
  shadow: '#000000',
};

// Sunset Theme
export const SUNSET_COLORS = {
  primary: '#DC2626',
  primaryLight: '#EF4444',
  primaryDark: '#B91C1C',
  
  secondary: '#EA580C',
  secondaryLight: '#F97316',
  secondaryDark: '#C2410C',
  
  background: '#FEF2F2',
  surface: '#FFFFFF',
  surfaceVariant: '#FEFEFE',
  
  text: '#7F1D1D',
  textSecondary: '#991B1B',
  textTertiary: '#DC2626',
  
  border: '#FECACA',
  borderLight: '#FED7D7',
  
  success: '#059669',
  warning: '#D97706',
  error: '#DC2626',
  
  shadow: '#000000',
};

// Export default theme
export default HERITAGE_COLORS;