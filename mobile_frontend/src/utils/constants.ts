// PUBLIC_INTERFACE
/**
 * App-wide constants
 */

export const APP_NAME = 'Personal AI Assistant';
export const APP_VERSION = '1.0.0';

// Task priorities
export const TASK_PRIORITIES = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
} as const;

// Task categories
export const TASK_CATEGORIES = [
  'Work',
  'Personal',
  'Health',
  'Shopping',
  'Finance',
  'Other',
];

// Event colors
export const EVENT_COLORS = [
  '#3b82f6', // Blue
  '#06b6d4', // Cyan
  '#10b981', // Green
  '#f59e0b', // Amber
  '#8b5cf6', // Purple
  '#ef4444', // Red
  '#ec4899', // Pink
];

// Chat message types
export const MESSAGE_TYPES = {
  TEXT: 'text',
  SUGGESTION: 'suggestion',
  ACTION: 'action',
} as const;

// Storage keys
export const STORAGE_KEYS = {
  USER_PROFILE: '@user_profile',
  TASKS: '@tasks',
  CALENDAR_EVENTS: '@calendar_events',
  CHAT_MESSAGES: '@chat_messages',
  REMINDERS: '@reminders',
  ONBOARDING_COMPLETED: '@onboarding_completed',
} as const;

// Animation durations (ms)
export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
};

// API endpoints (for future backend integration)
export const API_ENDPOINTS = {
  TASKS: '/api/tasks',
  EVENTS: '/api/events',
  CHAT: '/api/chat',
  PROFILE: '/api/profile',
  REMINDERS: '/api/reminders',
};

// Validation rules
export const VALIDATION = {
  MAX_TASK_TITLE_LENGTH: 100,
  MAX_TASK_DESCRIPTION_LENGTH: 500,
  MAX_EVENT_TITLE_LENGTH: 100,
  MAX_CHAT_MESSAGE_LENGTH: 500,
};
