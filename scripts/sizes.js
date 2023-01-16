export const gridBreakpoints = {
  xs: 500,
  sm: 768,
  md: 1024,
  lg: 1366,
  xl: 1920,
}

export const isMobile = () => window.innerWidth <= gridBreakpoints.sm
export const isTablet = () => window.innerWidth <= gridBreakpoints.md

export default {
  gridBreakpoints,
  isMobile,
  isTablet,
}
