import 'styled-components';

declare module 'styled-components' {
  export interface IFontSizes {
    small: string;
    base: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
    titleSize: string;
  }
  export interface IPaddings {
    small: string;
    base: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
  }
  export interface IColors {
    black: string;
    white: string;
    white_1: string;
    gray_1: string;
    gray_2: string;
    green_1: string;
  }
  export interface IDeviceSizes {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    tabletL: string;
  }
  export interface IDevice {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    tabletL: string;
  }
  export interface IMargins {
    small: string;
    base: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
  }
  export interface IInterval {
    base: string;
    lg: string;
    xl: string;
    xxl: string;
  }
  export interface IVerticalInterval {
    base: string;
  }
  export interface DefaultTheme {
    fontSizes: IFontSizes;
    paddings: IPaddings;
    colors: IColors;
    deviceSizes: IDeviceSizes;
    device: IDevice;
    margins: IMargins;
    interval: IInterval;
    verticalInterval: IVerticalInterval;
  }
}
