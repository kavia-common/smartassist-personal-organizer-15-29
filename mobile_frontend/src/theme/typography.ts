import { fontSize } from './spacing';

export const typography = {
  h1: {
    fontSize: fontSize.xxxl,
    fontWeight: '700' as const,
    lineHeight: 40,
  },
  h2: {
    fontSize: fontSize.xxl,
    fontWeight: '600' as const,
    lineHeight: 32,
  },
  h3: {
    fontSize: fontSize.xl,
    fontWeight: '600' as const,
    lineHeight: 28,
  },
  body: {
    fontSize: fontSize.md,
    fontWeight: '400' as const,
    lineHeight: 24,
  },
  bodyLarge: {
    fontSize: fontSize.lg,
    fontWeight: '400' as const,
    lineHeight: 26,
  },
  caption: {
    fontSize: fontSize.sm,
    fontWeight: '400' as const,
    lineHeight: 20,
  },
  small: {
    fontSize: fontSize.xs,
    fontWeight: '400' as const,
    lineHeight: 16,
  },
  button: {
    fontSize: fontSize.md,
    fontWeight: '600' as const,
    lineHeight: 24,
  },
};
