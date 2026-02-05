import { UserProfile, Task, CalendarEvent, ChatMessage, Reminder } from '../types';

// PUBLIC_INTERFACE
/**
 * Mock data service for providing sample data during development
 */
export class MockDataService {
  static getUserProfile(): UserProfile {
    return {
      id: '1',
      name: 'Alex Johnson',
      email: 'alex.johnson@example.com',
      preferences: {
        notificationsEnabled: true,
        theme: 'light',
        language: 'en',
      },
    };
  }

  static getTasks(): Task[] {
    return [
      {
        id: '1',
        title: 'Review project proposal',
        description: 'Go through the Q1 project proposal and provide feedback',
        completed: false,
        priority: 'high',
        dueDate: new Date(Date.now() + 86400000).toISOString(),
        category: 'Work',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: '2',
        title: 'Grocery shopping',
        description: 'Buy vegetables, fruits, and dairy products',
        completed: false,
        priority: 'medium',
        dueDate: new Date(Date.now() + 172800000).toISOString(),
        category: 'Personal',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: '3',
        title: 'Schedule dentist appointment',
        completed: true,
        priority: 'low',
        category: 'Health',
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: '4',
        title: 'Prepare presentation slides',
        description: 'Create slides for the upcoming team meeting',
        completed: false,
        priority: 'high',
        dueDate: new Date(Date.now() + 259200000).toISOString(),
        category: 'Work',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];
  }

  static getCalendarEvents(): CalendarEvent[] {
    const today = new Date();
    const tomorrow = new Date(today.getTime() + 86400000);
    const nextWeek = new Date(today.getTime() + 604800000);

    return [
      {
        id: '1',
        title: 'Team Stand-up',
        description: 'Daily sync with the team',
        startDate: new Date(today.setHours(9, 0, 0, 0)).toISOString(),
        endDate: new Date(today.setHours(9, 30, 0, 0)).toISOString(),
        color: '#3b82f6',
        allDay: false,
      },
      {
        id: '2',
        title: 'Client Meeting',
        description: 'Discuss Q1 objectives with client',
        startDate: new Date(tomorrow.setHours(14, 0, 0, 0)).toISOString(),
        endDate: new Date(tomorrow.setHours(15, 30, 0, 0)).toISOString(),
        location: 'Conference Room A',
        color: '#06b6d4',
        allDay: false,
      },
      {
        id: '3',
        title: 'Yoga Class',
        startDate: new Date(today.setHours(18, 0, 0, 0)).toISOString(),
        endDate: new Date(today.setHours(19, 0, 0, 0)).toISOString(),
        location: 'Wellness Center',
        color: '#10b981',
        allDay: false,
      },
      {
        id: '4',
        title: 'Conference Day',
        description: 'Annual tech conference',
        startDate: new Date(nextWeek.setHours(0, 0, 0, 0)).toISOString(),
        endDate: new Date(nextWeek.setHours(23, 59, 59, 999)).toISOString(),
        color: '#8b5cf6',
        allDay: true,
      },
    ];
  }

  static getChatMessages(): ChatMessage[] {
    return [
      {
        id: '1',
        text: 'Hello! I\'m your AI assistant. How can I help you today?',
        sender: 'ai',
        timestamp: new Date(Date.now() - 3600000).toISOString(),
      },
      {
        id: '2',
        text: 'Show me my tasks for today',
        sender: 'user',
        timestamp: new Date(Date.now() - 3500000).toISOString(),
      },
      {
        id: '3',
        text: 'You have 2 tasks due today: "Review project proposal" and "Grocery shopping". Would you like me to provide more details?',
        sender: 'ai',
        timestamp: new Date(Date.now() - 3400000).toISOString(),
      },
    ];
  }

  static getReminders(): Reminder[] {
    return [
      {
        id: '1',
        title: 'Team meeting in 30 minutes',
        dueDate: new Date(Date.now() + 1800000).toISOString(),
        completed: false,
        priority: 'high',
      },
      {
        id: '2',
        title: 'Submit timesheet',
        description: 'Weekly timesheet submission',
        dueDate: new Date(Date.now() + 86400000).toISOString(),
        completed: false,
        priority: 'medium',
      },
      {
        id: '3',
        title: 'Call mom',
        dueDate: new Date(Date.now() + 172800000).toISOString(),
        completed: false,
        priority: 'low',
      },
    ];
  }
}
