import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from '../components/Card';
import { TaskItem } from '../components/TaskItem';
import { EventCard } from '../components/EventCard';
import { StorageService } from '../services/storage';
import { MockDataService } from '../services/mockData';
import { Task, CalendarEvent, DashboardStats } from '../types';
import { theme } from '../theme';

// PUBLIC_INTERFACE
/**
 * Dashboard screen showing overview of tasks, events, and quick stats
 */
export const DashboardScreen: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [stats, setStats] = useState<DashboardStats>({
    tasksCompleted: 0,
    tasksTotal: 0,
    upcomingEvents: 0,
    activeReminders: 0,
  });
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    loadData();
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  const loadData = async () => {
    // Load from storage or use mock data
    let loadedTasks = await StorageService.getTasks();
    let loadedEvents = await StorageService.getCalendarEvents();

    if (loadedTasks.length === 0) {
      loadedTasks = MockDataService.getTasks();
      await StorageService.saveTasks(loadedTasks);
    }

    if (loadedEvents.length === 0) {
      loadedEvents = MockDataService.getCalendarEvents();
      await StorageService.saveCalendarEvents(loadedEvents);
    }

    setTasks(loadedTasks.slice(0, 3)); // Show only first 3
    setEvents(loadedEvents.slice(0, 2)); // Show only first 2

    // Calculate stats
    const completedTasks = loadedTasks.filter((t) => t.completed).length;
    const upcomingEvents = loadedEvents.filter(
      (e) => new Date(e.startDate) > new Date()
    ).length;

    setStats({
      tasksCompleted: completedTasks,
      tasksTotal: loadedTasks.length,
      upcomingEvents,
      activeReminders: 3, // From mock data
    });
  };

  const handleToggleTask = async (taskId: string) => {
    const allTasks = await StorageService.getTasks();
    const updatedTasks = allTasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    await StorageService.saveTasks(updatedTasks);
    loadData();
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Animated.View style={{ opacity: fadeAnim }}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Good day!</Text>
          <Text style={styles.subtitle}>Here&apos;s your overview</Text>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <Card style={styles.statCard}>
            <View style={[styles.statIcon, { backgroundColor: theme.colors.primary + '20' }]}>
              <Ionicons name="checkmark-done" size={24} color={theme.colors.primary} />
            </View>
            <Text style={styles.statValue}>
              {stats.tasksCompleted}/{stats.tasksTotal}
            </Text>
            <Text style={styles.statLabel}>Tasks Done</Text>
          </Card>

          <Card style={styles.statCard}>
            <View style={[styles.statIcon, { backgroundColor: theme.colors.success + '20' }]}>
              <Ionicons name="calendar" size={24} color={theme.colors.success} />
            </View>
            <Text style={styles.statValue}>{stats.upcomingEvents}</Text>
            <Text style={styles.statLabel}>Events</Text>
          </Card>

          <Card style={styles.statCard}>
            <View style={[styles.statIcon, { backgroundColor: theme.colors.warning + '20' }]}>
              <Ionicons name="notifications" size={24} color={theme.colors.warning} />
            </View>
            <Text style={styles.statValue}>{stats.activeReminders}</Text>
            <Text style={styles.statLabel}>Reminders</Text>
          </Card>
        </View>

        {/* Recent Tasks */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Tasks</Text>
            <TouchableOpacity accessibilityRole="button" accessibilityLabel="View all tasks">
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={handleToggleTask}
              onPress={() => {}}
            />
          ))}
        </View>

        {/* Upcoming Events */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Events</Text>
            <TouchableOpacity accessibilityRole="button" accessibilityLabel="View all events">
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          {events.map((event) => (
            <EventCard key={event.id} event={event} onPress={() => {}} />
          ))}
        </View>
      </Animated.View>
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
  header: {
    marginBottom: theme.spacing.lg,
  },
  greeting: {
    ...theme.typography.h1,
    color: theme.colors.text,
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.lg,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    padding: theme.spacing.md,
  },
  statIcon: {
    width: 48,
    height: 48,
    borderRadius: theme.borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.sm,
  },
  statValue: {
    ...theme.typography.h2,
    color: theme.colors.text,
  },
  statLabel: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  section: {
    marginBottom: theme.spacing.lg,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    ...theme.typography.h3,
    color: theme.colors.text,
  },
  seeAll: {
    ...theme.typography.body,
    color: theme.colors.primary,
  },
});
