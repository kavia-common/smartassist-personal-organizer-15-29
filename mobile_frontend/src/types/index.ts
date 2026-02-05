// User profile type
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  preferences: {
    notificationsEnabled: boolean;
    theme: 'light' | 'dark';
    language: string;
  };
}

// Task type
export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

// Calendar event type
export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  startDate: string;
  endDate: string;
  location?: string;
  color: string;
  allDay: boolean;
  reminders?: string[];
}

// Chat message type
export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: string;
  type?: 'text' | 'suggestion' | 'action';
}

// Reminder type
export interface Reminder {
  id: string;
  title: string;
  description?: string;
  dueDate: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

// Dashboard stats type
export interface DashboardStats {
  tasksCompleted: number;
  tasksTotal: number;
  upcomingEvents: number;
  activeReminders: number;
}
