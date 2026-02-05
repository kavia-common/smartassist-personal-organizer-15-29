# Quick Start Guide

Get up and running with the Personal AI Assistant mobile app in minutes.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Expo CLI (optional, for mobile testing)
- iOS Simulator (Mac) or Android Emulator

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Run on your platform:**
   - Web: `npm run web` (opens at http://localhost:5173)
   - iOS: `npm run ios` (requires Mac with Xcode)
   - Android: `npm run android` (requires Android Studio)
   - Expo: `npm run start:expo` (scan QR code with Expo Go app)

## Development Workflow

### Project Structure Overview

```
src/
├── components/     # Reusable UI components
├── screens/        # Main app screens (Dashboard, Chat, etc.)
├── navigation/     # Navigation setup
├── services/       # Data management (storage, mock data)
├── theme/          # Colors, spacing, typography
├── types/          # TypeScript definitions
├── utils/          # Helper functions
└── config/         # App configuration
```

### Adding a New Feature

1. **Create types** in `src/types/index.ts`
2. **Add service methods** in `src/services/`
3. **Build components** in `src/components/`
4. **Create screen** in `src/screens/`
5. **Update navigation** if needed in `src/navigation/`

### Working with Data

The app uses AsyncStorage for local persistence:

```typescript
import { StorageService } from './src/services/storage';

// Save data
await StorageService.saveTasks(tasks);

// Load data
const tasks = await StorageService.getTasks();
```

### Styling Components

Use the theme system for consistent styling:

```typescript
import { theme } from './src/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
  },
  text: {
    ...theme.typography.body,
    color: theme.colors.text,
  },
});
```

### Accessibility

Always include accessibility props:

```typescript
<TouchableOpacity
  accessibilityRole="button"
  accessibilityLabel="Save task"
  accessibilityHint="Double tap to save your task"
>
  <Text>Save</Text>
</TouchableOpacity>
```

## Testing

### Linting
```bash
npm run lint
```

### Type Checking
```bash
npx tsc --noEmit
```

## Common Issues

### Port Already in Use
If port 5173 is in use, the Vite server will automatically try the next available port.

### Metro Bundler Issues
Clear the cache:
```bash
npm run clean
npm start -- --reset-cache
```

### Module Not Found
Reinstall dependencies:
```bash
rm -rf node_modules
npm install
```

## Environment Variables

Copy `.env.example` to `.env` and configure:

```env
EXPO_PUBLIC_PORT=3000
EXPO_PUBLIC_LOG_LEVEL=info
```

## Hot Reload

The app supports hot reloading:
- Save any file to see changes instantly
- No need to restart the server
- Works on web, iOS, and Android

## Building for Production

### Web
```bash
npm run web
# Build is ready in dist/
```

### Android APK
```bash
npm run build
# APK will be in android/app/build/outputs/apk/
```

## Next Steps

1. ✅ Explore the Dashboard to see overview stats
2. ✅ Try the AI Chat for interactive conversations
3. ✅ Add tasks in the Tasks screen
4. ✅ View calendar events
5. ✅ Customize profile settings

## Resources

- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Support

For issues or questions:
- Check the README.md for detailed documentation
- Review CHANGELOG.md for recent changes
- Check existing code examples in the src/ directory
