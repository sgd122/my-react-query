import {
  DefaultTheme,
  IColors,
  IDevice,
  IDeviceSizes,
  IFontSizes,
  IInterval,
  IMargins,
  IPaddings,
  IVerticalInterval,
} from 'styled-components';

const calcRem = (size: number) => `${size / 16}rem`;

const fontSizes: IFontSizes = {
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  titleSize: calcRem(50),
};

const paddings: IPaddings = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const margins: IMargins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const interval: IInterval = {
  base: calcRem(50),
  lg: calcRem(100),
  xl: calcRem(150),
  xxl: calcRem(200),
};

const verticalInterval: IVerticalInterval = {
  base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
};

const deviceSizes: IDeviceSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '450px',
  tablet: '768px',
  tabletL: '1024px',
};

const colors: IColors = {
  black: '#000000',
  white: '#FFFFFF',
  white_1: '#E5E5E5',
  gray_1: '#222222',
  gray_2: '#767676',
  green_1: '#3cb46e',
};

const device: IDevice = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};

const theme: DefaultTheme = {
  fontSizes,
  colors,
  deviceSizes,
  device,
  paddings,
  margins,
  interval,
  verticalInterval,
};

export { theme };
