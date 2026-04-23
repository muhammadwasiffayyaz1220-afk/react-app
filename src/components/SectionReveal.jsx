import { motion as M, useReducedMotion } from 'framer-motion'
import { EASE, VIEWPORT_IN } from '../motion/presets'

/**
 * Scroll-triggered fade/slide for page sections (Home and similar).
 */
export default function SectionReveal({ children, className, delay = 0 }) {
  const reduce = useReducedMotion()
  return (
    <M.section
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_IN}
      transition={{ duration: reduce ? 0 : 0.52, ease: EASE, delay: reduce ? 0 : delay }}
    >
      {children}
    </M.section>
  )
}
