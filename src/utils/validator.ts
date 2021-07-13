export const validateByRegExp = (value: any, regExp: RegExp) => {
  const result = regExp.exec(value);

  return result === null ? false : true;
}

export const validateByLength = (value: any, length: number, direction: "lowerOrEqual" | "higherOrEqual") => {
  return direction === "higherOrEqual"
    ? value.length >= length
    : direction === "lowerOrEqual"
    && value.length <= length
}