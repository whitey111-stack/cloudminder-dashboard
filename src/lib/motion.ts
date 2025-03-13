
/**
 * Motion utilities for animations and transitions
 */

export type Direction = 'up' | 'down' | 'left' | 'right';
export type TransitionType = 'spring' | 'tween' | 'inertia';

export interface AnimationProps {
  hidden: Record<string, unknown>;
  visible: Record<string, unknown>;
  transition?: {
    type?: TransitionType;
    delay?: number;
    duration?: number;
    staggerChildren?: number;
    delayChildren?: number;
  };
}

/**
 * Fade animation variant
 */
export const fadeAnimation = (
  delay: number = 0,
  duration: number = 0.3
): AnimationProps => ({
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
    }
  },
});

/**
 * Slide animation variant
 */
export const slideAnimation = (
  direction: Direction = 'up',
  delay: number = 0,
  duration: number = 0.5
): AnimationProps => {
  const directionMap = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  };

  return {
    hidden: { opacity: 0, ...directionMap[direction] },
    visible: {
      opacity: 1,
      ...(direction === 'up' || direction === 'down' ? { y: 0 } : { x: 0 }),
      transition: {
        type: 'spring',
        delay,
        duration,
        stiffness: 100,
        damping: 20,
      },
    },
  };
};

/**
 * Scale animation variant
 */
export const scaleAnimation = (
  initialScale: number = 0.95,
  delay: number = 0,
  duration: number = 0.3
): AnimationProps => ({
  hidden: { opacity: 0, scale: initialScale },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      delay,
      duration,
      stiffness: 200,
      damping: 20,
    },
  },
});

/**
 * Stagger children animation variant
 */
export const staggerContainer = (
  staggerChildren: number = 0.05, 
  delayChildren: number = 0
): AnimationProps => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/**
 * CSS animation classes for transitions
 */
export const getAnimationClass = (
  type: 'fade' | 'slide-up' | 'slide-down' | 'scale',
  delay: number = 0
): string => {
  const delayClass = delay ? ` animate-delay-${delay}` : '';
  
  switch (type) {
    case 'fade':
      return `animate-fade-in animate-once${delayClass}`;
    case 'slide-up':
      return `animate-slide-up animate-once${delayClass}`;
    case 'slide-down':
      return `animate-slide-down animate-once${delayClass}`;
    case 'scale':
      return `animate-scale-in animate-once${delayClass}`;
    default:
      return '';
  }
};
