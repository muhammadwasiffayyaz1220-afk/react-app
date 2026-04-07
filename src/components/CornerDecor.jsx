/** Subtle corners — only in dark mode so light theme stays clean white */
export default function CornerDecor() {
  return (
    <>
      <div
        className="pointer-events-none fixed bottom-0 left-0 z-0 hidden h-[min(45vh,420px)] w-[min(55vw,520px)] -translate-x-1/4 translate-y-1/4 rotate-12 bg-[#2e231f]/90 opacity-80 dark:block"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 0 0)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed bottom-0 right-0 z-0 hidden h-[min(45vh,420px)] w-[min(55vw,520px)] translate-x-1/4 translate-y-1/4 -rotate-12 bg-[#2e231f]/90 opacity-80 dark:block"
        style={{ clipPath: 'polygon(100% 100%, 100% 0, 0 100%)' }}
        aria-hidden
      />
    </>
  )
}
