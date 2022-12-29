export const isNumber = (n: unknown) => {
  return typeof n === 'number';
};

export const checkNumberOrThrowError = (
  value: unknown,
  errorMsg?: string,
): void | never => {
  if (isNumber(value)) {
    return;
  }
  throw new Error(errorMsg ?? `Provided value ${value} isn't proper number`);
};
