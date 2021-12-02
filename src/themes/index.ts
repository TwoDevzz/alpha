import breakpoints from '@themes/breakpoints';
import colors from '@themes/colors';

export default {
  name: 'default',
  colors,
  fonts: {
    body: 'Noto Sans',
    headline: 'Montserrat',
  },
  fontSizes: {
    xs: 14,
    s: 16,
    sm: 18,
    m: 20,
    ml: 24,
    l: 28,
    xl: 32,
    h2: 40,
    h1: 72,
  },
  fontWeights: {
    regular: 400,
    bold: 700,
  },
  lineHeights: {
    s: 1,
    m: 1.1,
    xxl: 1.4,
  },
  space: [0, 2, 4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112], // For margins and paddings
  radii: [0, 2, 4, 8, 12, 16, 24, 32, 40, 48], // Border-radius
  breakpoints,
  mediaQueries: {
    sm: `@media screen and (min-width: ${breakpoints[0]})`,
    md: `@media screen and (min-width: ${breakpoints[1]})`,
    lg: `@media screen and (min-width: ${breakpoints[2]})`,
    xl: `@media screen and (min-width: ${breakpoints[3]})`,
  },
};
