class Taka {
  static readonly CONVERT_UNIT = 10000;

  static realAmount(value: number): number {
    return Number((value / Taka.CONVERT_UNIT).toFixed(2));
  }

  static robiAmount(value: number): number {
    return value * Taka.CONVERT_UNIT;
  }
}

export { Taka };
