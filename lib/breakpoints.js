const mobile = 320;
const tablet = 768;
const computer = 992;
const largeMonitor = 1200;
const widescreen = 1920;

export const breakpoints = {
  mobile,
  tablet,
  computer,
  largeMonitor,
  widescreen,
  largestMobile: tablet-1,
  largestTablet: computer-1,
  largestComputer: largeMonitor-1,
  largestLargeMonitor: widescreen-1,
};
