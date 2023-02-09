class MobileNumber {
  static getNumber(number: string | number): string {
    return `0${this.getShortNumber(number)}`;
  }

  static getShortNumber(number: string | number): number {
    number = `${number}`;

    return Number(number.slice(-10));
  }

  static getLongNumber(number: string | number): number {
    return Number(`880${this.getShortNumber(number)}`);
  }
}

export { MobileNumber };
