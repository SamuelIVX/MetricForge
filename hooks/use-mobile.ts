/**
 * Viewport mobile detector for responsive UI (navbar, sidebar).
 * Uses `matchMedia` via `useSyncExternalStore` so SSR and client stay consistent.
 */
import * as React from "react"

const MOBILE_BREAKPOINT = 768

/**
 * Whether the viewport is below the mobile breakpoint (768px).
 * @returns `true` on narrow viewports; `false` during SSR / wide screens.
 * @example
 * const isMobile = useIsMobile()
 * // true when viewport width < 768px
 */
export function useIsMobile() {
  return React.useSyncExternalStore(
    (onStoreChange) => {
      const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
      const onChange = () => onStoreChange()

      mql.addEventListener("change", onChange)
      return () => mql.removeEventListener("change", onChange)
    },
    () => window.innerWidth < MOBILE_BREAKPOINT,
    () => false
  )
}
