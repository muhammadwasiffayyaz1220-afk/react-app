/** Lightweight route transition placeholder — keeps layout stable without heavy spinner. */
export default function PageLoading() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center bg-[#FFFFFF] dark:!bg-[#FFFFFF]"
      aria-busy="true"
      aria-label="Loading page"
    >
      <div className="h-0.5 w-20 animate-pulse rounded-full bg-[#D4AF37]/50" />
    </div>
  )
}
