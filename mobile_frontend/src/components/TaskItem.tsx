import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Task } from '../types';
import { theme } from '../theme';

interface TaskItemProps {
  task: Task;
  onToggle: (taskId: string) => void;
  onPress: (task: Task) => void;
}

// PUBLIC_INTERFACE
/**
 * Component for displaying individual task items with checkbox and priority indicator
 */
export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onPress }) => {
  const priorityColors = {
    low: theme.colors.success,
    medium: theme.colors.warning,
    high: theme.colors.error,
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(task)}
      accessibilityRole="button"
      accessibilityLabel={`Task: ${task.title}`}
      accessibilityHint="Double tap to view task details"
    >
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => onToggle(task.id)}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: task.completed }}
      >
        <Ionicons
          name={task.completed ? 'checkbox' : 'square-outline'}
          size={24}
          color={task.completed ? theme.colors.success : theme.colors.border}
        />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text
          style={[styles.title, task.completed && styles.completedTitle]}
          numberOfLines={1}
        >
          {task.title}
        </Text>
        {task.description && (
          <Text style={styles.description} numberOfLines={1}>
            {task.description}
          </Text>
        )}
        <View style={styles.footer}>
          <View style={[styles.priorityBadge, { backgroundColor: priorityColors[task.priority] }]}>
            <Text style={styles.priorityText}>{task.priority}</Text>
          </View>
          {task.dueDate && (
            <Text style={styles.dueDate}>
              {new Date(task.dueDate).toLocaleDateString()}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.sm,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  checkbox: {
    marginRight: theme.spacing.md,
  },
  content: {
    flex: 1,
  },
  title: {
    ...theme.typography.body,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  completedTitle: {
    textDecorationLine: 'line-through',
    color: theme.colors.textSecondary,
  },
  description: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing.xs,
  },
  priorityBadge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 2,
    borderRadius: theme.borderRadius.sm,
    marginRight: theme.spacing.sm,
  },
  priorityText: {
    ...theme.typography.small,
    color: theme.colors.surface,
    textTransform: 'capitalize',
  },
  dueDate: {
    ...theme.typography.small,
    color: theme.colors.textTertiary,
  },
});
