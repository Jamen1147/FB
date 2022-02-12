export type ScreenSize = 'lg' | 'md' | 'sm' | 'xs';

export const breakpoints: Record<ScreenSize, number> = {
  xs: 400,
  sm: 690,
  md: 960,
  lg: 1080,
};

export default breakpoints;
