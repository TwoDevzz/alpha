type BreakpointsProp = string[] & {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
};

const breakpoints: BreakpointsProp = ['480px', '768px', '992px', '1200px'];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export default breakpoints;
