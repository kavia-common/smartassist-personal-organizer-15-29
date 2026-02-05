import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from '../components/Card';
import { StorageService } from '../services/storage';
import { MockDataService } from '../services/mockData';
import { UserProfile } from '../types';
import { theme } from '../theme';

// PUBLIC_INTERFACE
/**
 * Profile screen showing user information and app settings
 */
export const ProfileScreen: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    let loadedProfile = await StorageService.getUserProfile();
    if (!loadedProfile) {
      loadedProfile = MockDataService.getUserProfile();
      await StorageService.saveUserProfile(loadedProfile);
    }
    setProfile(loadedProfile);
  };

  const toggleNotifications = async () => {
    if (!profile) return;
    const updatedProfile = {
      ...profile,
      preferences: {
        ...profile.preferences,
        notificationsEnabled: !profile.preferences.notificationsEnabled,
      },
    };
    setProfile(updatedProfile);
    await StorageService.saveUserProfile(updatedProfile);
  };

  if (!profile) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Profile Header */}
      <Card style={styles.profileCard}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={48} color={theme.colors.surface} />
          </View>
        </View>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.email}>{profile.email}</Text>
      </Card>

      {/* Settings Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>

        <Card style={styles.settingCard}>
          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Ionicons name="notifications-outline" size={24} color={theme.colors.text} />
              <View style={styles.settingText}>
                <Text style={styles.settingTitle}>Notifications</Text>
                <Text style={styles.settingDescription}>
                  Enable push notifications for reminders
                </Text>
              </View>
            </View>
            <Switch
              value={profile.preferences.notificationsEnabled}
              onValueChange={toggleNotifications}
              trackColor={{ false: theme.colors.border, true: theme.colors.primary }}
              thumbColor={theme.colors.surface}
              accessibilityLabel="Toggle notifications"
            />
          </View>
        </Card>

        <TouchableOpacity accessibilityRole="button" accessibilityLabel="Language settings">
          <Card style={styles.settingCard}>
            <View style={styles.settingRow}>
              <View style={styles.settingInfo}>
                <Ionicons name="language-outline" size={24} color={theme.colors.text} />
                <View style={styles.settingText}>
                  <Text style={styles.settingTitle}>Language</Text>
                  <Text style={styles.settingDescription}>English</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color={theme.colors.textSecondary} />
            </View>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity accessibilityRole="button" accessibilityLabel="Theme settings">
          <Card style={styles.settingCard}>
            <View style={styles.settingRow}>
              <View style={styles.settingInfo}>
                <Ionicons name="color-palette-outline" size={24} color={theme.colors.text} />
                <View style={styles.settingText}>
                  <Text style={styles.settingTitle}>Theme</Text>
                  <Text style={styles.settingDescription}>Light</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color={theme.colors.textSecondary} />
            </View>
          </Card>
        </TouchableOpacity>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>

        <TouchableOpacity accessibilityRole="button" accessibilityLabel="Privacy policy">
          <Card style={styles.settingCard}>
            <View style={styles.settingRow}>
              <View style={styles.settingInfo}>
                <Ionicons name="shield-checkmark-outline" size={24} color={theme.colors.text} />
                <Text style={styles.settingTitle}>Privacy Policy</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={theme.colors.textSecondary} />
            </View>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity accessibilityRole="button" accessibilityLabel="Terms of service">
          <Card style={styles.settingCard}>
            <View style={styles.settingRow}>
              <View style={styles.settingInfo}>
                <Ionicons name="document-text-outline" size={24} color={theme.colors.text} />
                <Text style={styles.settingTitle}>Terms of Service</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={theme.colors.textSecondary} />
            </View>
          </Card>
        </TouchableOpacity>

        <Card style={styles.versionCard}>
          <Text style={styles.versionText}>Version 1.0.0</Text>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.md,
  },
  profileCard: {
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  avatarContainer: {
    marginBottom: theme.spacing.md,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    ...theme.typography.h2,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  email: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
  },
  section: {
    marginBottom: theme.spacing.lg,
  },
  sectionTitle: {
    ...theme.typography.h3,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  settingCard: {
    marginBottom: theme.spacing.sm,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingText: {
    marginLeft: theme.spacing.md,
    flex: 1,
  },
  settingTitle: {
    ...theme.typography.body,
    color: theme.colors.text,
    fontWeight: '600',
  },
  settingDescription: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
    marginTop: 2,
  },
  versionCard: {
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
  versionText: {
    ...theme.typography.caption,
    color: theme.colors.textTertiary,
  },
});
