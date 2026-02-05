# API Documentation

Documentation for the app's internal services and data management.

## Storage Service

The `StorageService` provides methods for persisting data locally using AsyncStorage.

### User Profile

#### `getUserProfile(): Promise<UserProfile | null>`
Retrieves the user profile from storage.

**Returns:** User profile object or null if not found

**Example:**
```typescript
const profile = await StorageService.getUserProfile();
if (profile) {
  console.log(profile.name);
}
```

#### `saveUserProfile(profile: UserProfile): Promise<void>`
Saves the user profile to storage.

**Parameters:**
- `profile`: UserProfile object

**Example:**
```typescript
await StorageService.saveUserProfile({
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  preferences: {
    notificationsEnabled: true,
    theme: 'light',
    language: 'en',
  },
});
```

### Tasks

#### `getTasks(): Promise<Task[]>`
Retrieves all tasks from storage.

**Returns:** Array of task objects

**Example:**
```typescript
const tasks = await StorageService.getTasks();
console.log(`You have ${tasks.length} tasks`);
```

#### `saveTasks(tasks: Task[]): Promise<void>`
Saves tasks to storage.

**Parameters:**
- `tasks`: Array of Task objects

**Example:**
```typescript
const newTask = {
  id: '123',
  title: 'Complete project',
  completed: false,
  priority: 'high',
  category: 'Work',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

const tasks = await StorageService.getTasks();
await StorageService.saveTasks([...tasks, newTask]);
```

### Calendar Events

#### `getCalendarEvents(): Promise<CalendarEvent[]>`
Retrieves all calendar events from storage.

**Returns:** Array of calendar event objects

#### `saveCalendarEvents(events: CalendarEvent[]): Promise<void>`
Saves calendar events to storage.

**Parameters:**
- `events`: Array of CalendarEvent objects

**Example:**
```typescript
const event = {
  id: '456',
  title: 'Team Meeting',
  startDate: new Date().toISOString(),
  endDate: new Date(Date.now() + 3600000).toISOString(),
  color: '#3b82f6',
  allDay: false,
};

const events = await StorageService.getCalendarEvents();
await StorageService.saveCalendarEvents([...events, event]);
```

### Chat Messages

#### `getChatMessages(): Promise<ChatMessage[]>`
Retrieves chat message history from storage.

**Returns:** Array of chat message objects

#### `saveChatMessages(messages: ChatMessage[]): Promise<void>`
Saves chat messages to storage.

**Parameters:**
- `messages`: Array of ChatMessage objects

**Example:**
```typescript
const message = {
  id: Date.now().toString(),
  text: 'Hello AI!',
  sender: 'user',
  timestamp: new Date().toISOString(),
};

const messages = await StorageService.getChatMessages();
await StorageService.saveChatMessages([...messages, message]);
```

### Reminders

#### `getReminders(): Promise<Reminder[]>`
Retrieves all reminders from storage.

**Returns:** Array of reminder objects

#### `saveReminders(reminders: Reminder[]): Promise<void>`
Saves reminders to storage.

**Parameters:**
- `reminders`: Array of Reminder objects

### Utility Methods

#### `clearAll(): Promise<void>`
Clears all data from storage. Use with caution.

**Example:**
```typescript
await StorageService.clearAll();
// All data is now deleted
```

---

## Mock Data Service

The `MockDataService` provides sample data for initial app setup.

### Methods

#### `getUserProfile(): UserProfile`
Returns a mock user profile.

#### `getTasks(): Task[]`
Returns an array of 4 sample tasks with various priorities.

#### `getCalendarEvents(): CalendarEvent[]`
Returns an array of 4 sample calendar events.

#### `getChatMessages(): ChatMessage[]`
Returns initial chat conversation with AI assistant.

#### `getReminders(): Reminder[]`
Returns 3 sample reminders.

**Usage:**
```typescript
import { MockDataService } from './src/services/mockData';

// Initialize app with mock data
const tasks = MockDataService.getTasks();
await StorageService.saveTasks(tasks);
```

---

## Type Definitions

### UserProfile
```typescript
interface UserProfile {
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
```

### Task
```typescript
interface Task {
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
```

### CalendarEvent
```typescript
interface CalendarEvent {
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
```

### ChatMessage
```typescript
interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: string;
  type?: 'text' | 'suggestion' | 'action';
}
```

### Reminder
```typescript
interface Reminder {
  id: string;
  title: string;
  description?: string;
  dueDate: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}
```

---

## Helper Utilities

### Date Formatting

#### `formatDate(dateString: string): string`
Formats a date to readable format (e.g., "Jan 15, 2024")

#### `formatTime(dateString: string): string`
Formats time to readable format (e.g., "02:30 PM")

#### `isToday(dateString: string): boolean`
Checks if a date is today

#### `isPast(dateString: string): boolean`
Checks if a date is in the past

#### `getRelativeTime(dateString: string): string`
Gets relative time (e.g., "2 hours ago", "in 3 days")

### Other Utilities

#### `generateId(): string`
Generates a unique ID for new items

#### `truncateText(text: string, maxLength: number): string`
Truncates text to specified length with ellipsis

#### `capitalize(text: string): string`
Capitalizes the first letter of a string

---

## Constants

Access app-wide constants from `src/utils/constants.ts`:

- `APP_NAME`: Application name
- `APP_VERSION`: Current version
- `TASK_PRIORITIES`: Task priority constants
- `TASK_CATEGORIES`: Available task categories
- `EVENT_COLORS`: Predefined event colors
- `STORAGE_KEYS`: AsyncStorage keys
- `ANIMATION_DURATION`: Animation timing constants

---

## Error Handling

All storage methods include try-catch blocks and log errors to console:

```typescript
try {
  const tasks = await StorageService.getTasks();
} catch (error) {
  console.error('Error loading tasks:', error);
  // Returns empty array on error
}
```

For production apps, consider implementing:
- User-facing error messages
- Error reporting service integration
- Retry logic for failed operations
- Offline queue for data sync
