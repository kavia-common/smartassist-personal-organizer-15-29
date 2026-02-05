import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProfile, Task, CalendarEvent, ChatMessage, Reminder } from '../types';

// Storage keys
const STORAGE_KEYS = {
  USER_PROFILE: '@user_profile',
  TASKS: '@tasks',
  CALENDAR_EVENTS: '@calendar_events',
  CHAT_MESSAGES: '@chat_messages',
  REMINDERS: '@reminders',
};

// PUBLIC_INTERFACE
/**
 * Storage service for managing local data persistence
 */
export class StorageService {
  // User Profile operations
  static async getUserProfile(): Promise<UserProfile | null> {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.USER_PROFILE);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error getting user profile:', error);
      return null;
    }
  }

  static async saveUserProfile(profile: UserProfile): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
    } catch (error) {
      console.error('Error saving user profile:', error);
    }
  }

  // Tasks operations
  static async getTasks(): Promise<Task[]> {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.TASKS);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error getting tasks:', error);
      return [];
    }
  }

  static async saveTasks(tasks: Task[]): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  }

  // Calendar events operations
  static async getCalendarEvents(): Promise<CalendarEvent[]> {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.CALENDAR_EVENTS);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error getting calendar events:', error);
      return [];
    }
  }

  static async saveCalendarEvents(events: CalendarEvent[]): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.CALENDAR_EVENTS, JSON.stringify(events));
    } catch (error) {
      console.error('Error saving calendar events:', error);
    }
  }

  // Chat messages operations
  static async getChatMessages(): Promise<ChatMessage[]> {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.CHAT_MESSAGES);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error getting chat messages:', error);
      return [];
    }
  }

  static async saveChatMessages(messages: ChatMessage[]): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.CHAT_MESSAGES, JSON.stringify(messages));
    } catch (error) {
      console.error('Error saving chat messages:', error);
    }
  }

  // Reminders operations
  static async getReminders(): Promise<Reminder[]> {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.REMINDERS);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error getting reminders:', error);
      return [];
    }
  }

  static async saveReminders(reminders: Reminder[]): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.REMINDERS, JSON.stringify(reminders));
    } catch (error) {
      console.error('Error saving reminders:', error);
    }
  }

  // Clear all data
  static async clearAll(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  }
}
