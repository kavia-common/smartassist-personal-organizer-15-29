// PUBLIC_INTERFACE
/**
 * Application configuration
 */

export const appConfig = {
  // App metadata
  name: 'Personal AI Assistant',
  version: '1.0.0',
  description: 'A professional-grade personal AI assistant mobile app',

  // Feature flags
  features: {
    aiChat: true,
    taskManagement: true,
    calendar: true,
    reminders: true,
    offlineMode: true,
    pushNotifications: false, // Not yet implemented
  },

  // API configuration (for future backend integration)
  api: {
    baseUrl: process.env.EXPO_PUBLIC_API_URL || '',
    timeout: 30000,
  },

  // Storage configuration
  storage: {
    enableEncryption: false,
    maxCacheSize: 50 * 1024 * 1024, // 50MB
  },

  // UI configuration
  ui: {
    animationEnabled: true,
    hapticFeedbackEnabled: true,
  },

  // Accessibility
  accessibility: {
    minimumTouchTargetSize: 44,
    screenReaderSupport: true,
  },
};
