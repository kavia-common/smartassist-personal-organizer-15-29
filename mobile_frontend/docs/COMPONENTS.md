# Component Library

Comprehensive guide to all reusable components in the app.

## Core Components

### Button

A versatile button component with multiple variants and states.

**Props:**
- `title` (string, required): Button text
- `onPress` (function, required): Press handler
- `variant` ('primary' | 'secondary' | 'outline'): Visual style
- `size` ('small' | 'medium' | 'large'): Button size
- `loading` (boolean): Show loading spinner
- `disabled` (boolean): Disable interaction
- `accessibilityLabel` (string): Custom accessibility label

**Example:**
```tsx
<Button
  title="Save"
  onPress={handleSave}
  variant="primary"
  size="medium"
  loading={isSaving}
/>
```

---

### Card

Container component with consistent shadow and padding.

**Props:**
- `children` (ReactNode, required): Card content
- `style` (ViewStyle): Additional styles

**Example:**
```tsx
<Card>
  <Text>Card content</Text>
</Card>
```

---

### TaskItem

Displays a task with checkbox, priority, and due date.

**Props:**
- `task` (Task, required): Task object
- `onToggle` (function, required): Toggle completion handler
- `onPress` (function, required): Press handler for details

**Example:**
```tsx
<TaskItem
  task={task}
  onToggle={(id) => handleToggle(id)}
  onPress={(task) => navigateToDetails(task)}
/>
```

---

### EventCard

Displays a calendar event with time and location.

**Props:**
- `event` (CalendarEvent, required): Event object
- `onPress` (function, required): Press handler

**Example:**
```tsx
<EventCard
  event={event}
  onPress={(evt) => showDetails(evt)}
/>
```

---

### ChatBubble

Message bubble for chat interface.

**Props:**
- `message` (ChatMessage, required): Message object

**Example:**
```tsx
<ChatBubble message={message} />
```

---

### Loading

Loading indicator with optional text.

**Props:**
- `text` (string, optional): Loading message
- `size` ('small' | 'large'): Spinner size

**Example:**
```tsx
<Loading text="Loading tasks..." size="large" />
```

---

### EmptyState

Empty state display with icon and message.

**Props:**
- `icon` (string, optional): Ionicon name
- `title` (string, required): Main message
- `description` (string, optional): Additional details

**Example:**
```tsx
<EmptyState
  icon="file-tray-outline"
  title="No tasks yet"
  description="Create your first task to get started"
/>
```

---

## Screen Components

### DashboardScreen

Main overview screen with stats and quick access.

**Features:**
- Task completion stats
- Upcoming events count
- Active reminders
- Recent tasks list
- Upcoming events list
- Fade-in animation

---

### ChatScreen

AI assistant chat interface.

**Features:**
- Message history
- User/AI message bubbles
- Text input with send button
- Auto-scroll to latest message
- Context-aware AI responses
- Keyboard avoiding view

---

### CalendarScreen

Calendar with monthly view and events.

**Features:**
- Month navigation
- Calendar grid with dates
- Event indicators
- Today highlighting
- Event list
- Color-coded events

---

### TasksScreen

Task management with filtering.

**Features:**
- Search functionality
- Filter tabs (All, Active, Completed)
- Task list
- Task completion toggle
- Priority indicators
- Empty states

---

### ProfileScreen

User profile and settings.

**Features:**
- User information display
- Notification toggle
- Language settings
- Theme selection
- About section
- Version display

---

## Component Patterns

### Accessible Components

All components include accessibility support:

```tsx
<TouchableOpacity
  accessibilityRole="button"
  accessibilityLabel="Delete task"
  accessibilityHint="Double tap to delete this task"
  accessibilityState={{ disabled: isDeleting }}
>
  <Icon name="trash" />
</TouchableOpacity>
```

### Styled Components

Use theme for consistent styling:

```tsx
import { theme } from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
  },
  text: {
    ...theme.typography.body,
    color: theme.colors.text,
  },
});
```

### Loading States

Handle loading states gracefully:

```tsx
const [loading, setLoading] = useState(true);

if (loading) {
  return <Loading text="Loading..." />;
}

return <Content data={data} />;
```

### Empty States

Show meaningful empty states:

```tsx
{items.length === 0 ? (
  <EmptyState
    icon="calendar-outline"
    title="No events"
    description="Add your first event to get started"
  />
) : (
  <EventList items={items} />
)}
```

---

## Customization

### Extending Components

Create custom variants by extending base components:

```tsx
export const PrimaryButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} variant="primary" />;
};
```

### Custom Styles

Override default styles:

```tsx
<Card style={{ backgroundColor: 'lightblue' }}>
  <Text>Custom colored card</Text>
</Card>
```

### Composition

Combine components for complex UI:

```tsx
<Card>
  <TaskItem task={task} onToggle={handleToggle} onPress={handlePress} />
  <Button title="Edit" onPress={handleEdit} variant="outline" />
</Card>
```

---

## Best Practices

### Performance
- Use `React.memo` for components that render frequently
- Implement `keyExtractor` for lists
- Avoid inline functions in render

### Accessibility
- Always include `accessibilityLabel`
- Use appropriate `accessibilityRole`
- Test with screen readers

### Type Safety
- Define proper prop types
- Use TypeScript interfaces
- Avoid `any` type

### Reusability
- Keep components focused and single-purpose
- Accept necessary props only
- Support customization via props and styles

---

## Component Checklist

When creating new components:

- [ ] TypeScript types defined
- [ ] Accessibility props included
- [ ] Theme values used
- [ ] Documentation added
- [ ] Props validated
- [ ] Responsive design considered
- [ ] Loading states handled
- [ ] Error states handled
- [ ] Exported in index.ts
