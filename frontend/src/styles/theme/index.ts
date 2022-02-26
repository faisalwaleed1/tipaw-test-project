import { spacing } from './units';

const white = '#fff';
const black = '#111';

const palette = {
  common: {
    black,
    white,
  },
  primary: {
    main: '#0070F3',
    light: '#146DD6',
    contrastText: white,
  },
  error: {
    main: '#A51C30',
    light: '#A7333F',
    contrastText: white,
  },
  grey: {
    100: '#EAEAEA',
    200: '#C9C5C5',
    300: '#888',
    400: '#666',
  },
};

const widths = {
  largePageWidth: 1600,
  regularPageWidth: 1100,
  textPageWitdh: 800,
};

const color = {
  text: '#FFFF',
  textSecondary: '#D3D3D3	',
  tranparent: 'transparent',
  light: {
    default: 'white',
    tint: '#f8f8f8',
    tintDarker: '#f2f5f7',
    shadeLighter: '#f0f0f0',
    shade: '#d7dae0',
  },
  medium: {
    default: '#8c96a3',
    tint: '#c5ccd6',
    shade: '#616b77',
  },
  dark: {
    default: '#707070',
    tint: '',
    shade: '#4d4d4d',
  },
  purple: {
    default: '#7358a7',
  },
  red: {
    default: '#ff453e',
    glass: 'rgba(255, 69, 62, .2)',
  },
  green: {
    default: '#03c9a9',
  },
  yellow: { default: '#ffcc01', tint: '#FFEECC' },
  blue: {
    default: '#5acee8',
    tint: '#8fdced',
    glass: 'rgba(90,206,232,.2)',
    glassShade: 'rgba(90,206,232,.1)',
  },
};

const font = {
  default: `'Open Sans', 'Helvetica', sans-serif`,
  alternate: `'zenon', 'serif'`,
}

const shadows = {
  0: 'none',
  1: '0px 5px 10px rgba(0, 0, 0, 0.12)',
  2: '0px 8px 30px rgba(0, 0, 0, 0.24)',
};

const typography = {
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
};

const shape = {
  borderRadius: spacing['xxsmall'],
};

const unit = 8;

const breakpoints = [480, 768, 992, 1200];

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const theme = {
  palette,
  shadows,
  typography,
  shape,
  color,
  font,
  widths,
  unit
};
