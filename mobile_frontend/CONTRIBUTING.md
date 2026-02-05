# Contributing Guidelines

Thank you for your interest in contributing to the Personal AI Assistant mobile app!

## Code Style

### TypeScript
- Use TypeScript for all new files
- Enable strict mode
- Define proper types, avoid `any`
- Use interfaces for object shapes

### React Components
- Use functional components with hooks
- Add accessibility props to all interactive elements
- Include proper TypeScript types for props
- Document public interfaces with JSDoc comments

### Naming Conventions
- Components: PascalCase (e.g., `TaskItem.tsx`)
- Utilities: camelCase (e.g., `formatDate`)
- Constants: UPPER_SNAKE_CASE (e.g., `APP_VERSION`)
- Files: Match component name (e.g., `Button.tsx` for Button component)

### Code Organization
```typescript
// 1. Imports (external, then internal)
import React from 'react';
import { View } from 'react-native';
import { theme } from '../theme';

// 2. Types/Interfaces
interface ComponentProps {
  title: string;
}

// 3. Component with JSDoc
// PUBLIC_INTERFACE
/**
 * Component description
 */
export const Component: React.FC<ComponentProps> = ({ title }) => {
  // 4. Hooks
  const [state, setState] = useState();

  // 5. Functions
  const handlePress = () => {};

  // 6. Render
  return <View />;
};

// 7. Styles
const styles = StyleSheet.create({});
```

## Documentation

### Public Interfaces
All public functions and components must have documentation:

```typescript
// PUBLIC_INTERFACE
/**
 * Saves user tasks to local storage
 * @param tasks - Array of task objects to persist
 * @returns Promise that resolves when save is complete
 */
export const saveTasks = async (tasks: Task[]): Promise<void> => {
  // implementation
};
```

### Comments
- Explain "why", not "what"
- Use inline comments sparingly
- Document complex logic
- Keep comments up to date

## Accessibility

### Required Properties
Every interactive element must include:
- `accessibilityRole`: Semantic role (button, link, etc.)
- `accessibilityLabel`: Descriptive label
- `accessibilityHint`: Usage hint (optional but recommended)
- `accessibilityState`: Current state (for toggles, etc.)

### Example
```typescript
<TouchableOpacity
  accessibilityRole="button"
  accessibilityLabel="Save task"
  accessibilityHint="Double tap to save your changes"
  accessibilityState={{ disabled: isSaving }}
>
  <Text>Save</Text>
</TouchableOpacity>
```

## Theme Usage

Always use theme values instead of hardcoded values:

```typescript
// ✅ Good
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
  },
});

// ❌ Bad
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
  },
});
```

## State Management

### Local State
Use `useState` for component-local state:
```typescript
const [count, setCount] = useState(0);
```

### Persistent State
Use `StorageService` for data that should persist:
```typescript
const tasks = await StorageService.getTasks();
await StorageService.saveTasks(updatedTasks);
```

## Testing Guidelines

### Component Testing
- Test user interactions
- Test accessibility
- Test edge cases
- Mock external dependencies

### Example Test Structure
```typescript
describe('Button', () => {
  it('renders with title', () => {});
  it('calls onPress when pressed', () => {});
  it('shows loading state', () => {});
  it('is disabled when disabled prop is true', () => {});
});
```

## Git Workflow

### Branches
- `main`: Production-ready code
- `develop`: Integration branch
- `feature/xxx`: New features
- `fix/xxx`: Bug fixes

### Commit Messages
Use conventional commits format:
```
feat: add task filtering by category
fix: resolve calendar month navigation bug
docs: update README with installation steps
refactor: simplify date formatting logic
style: format code with prettier
test: add tests for TaskItem component
```

### Pull Requests
1. Create feature branch from `develop`
2. Make changes with clear commits
3. Update documentation if needed
4. Run linter: `npm run lint`
5. Create PR with description
6. Request review

## File Structure

### Adding New Features

1. **Types** (`src/types/index.ts`)
   - Define TypeScript interfaces

2. **Services** (`src/services/`)
   - Add data management logic
   - Update barrel export in `index.ts`

3. **Components** (`src/components/`)
   - Create reusable UI components
   - Add to `index.ts` for easy imports

4. **Screens** (`src/screens/`)
   - Create full screen components
   - Add to navigation if needed

5. **Navigation** (`src/navigation/`)
   - Update navigation configuration

## Dependencies

### Adding New Dependencies
1. Check if package is maintained
2. Review bundle size impact
3. Ensure React Native compatibility
4. Add to `package.json` with specific version
5. Document usage in README

### Updating Dependencies
1. Test thoroughly after updates
2. Update documentation if API changes
3. Check for breaking changes

## Performance

### Best Practices
- Use `React.memo` for expensive components
- Implement `FlatList` for long lists
- Optimize images (compress, use appropriate formats)
- Lazy load when possible
- Avoid inline functions in render
- Use `useCallback` and `useMemo` appropriately

### Example
```typescript
const TaskList = React.memo(({ tasks }) => {
  const handlePress = useCallback((id) => {
    // handle press
  }, []);

  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => <TaskItem task={item} onPress={handlePress} />}
      keyExtractor={(item) => item.id}
    />
  );
});
```

## Questions?

Feel free to:
- Open an issue for bugs
- Start a discussion for features
- Ask questions in pull requests
- Review existing code for examples

Thank you for contributing! 🎉
