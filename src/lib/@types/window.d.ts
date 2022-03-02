export declare global {
  type CustomWindow = typeof window & {
    Caver: {
      utils: {
        hexToNumberString: (c: string) => string;
        convertFromPeb: (x: number | string, y: string) => string;
      };
    };
  };
}
