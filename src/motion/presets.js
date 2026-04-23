/** Shared Framer Motion easing (matches About page feel). */
export const EASE = [0.22, 1, 0.36, 1]

export const VIEWPORT_IN = { once: true, amount: 0.18, margin: '0px 0px -64px 0px' }

export function pageTransitionProps(reduce) {
  if (reduce) {
    return {
      initial: { opacity: 1, y: 0 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 1, y: 0 },
      transition: { duration: 0 },
    }
  }
  return {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.32, ease: EASE },
  }
}
