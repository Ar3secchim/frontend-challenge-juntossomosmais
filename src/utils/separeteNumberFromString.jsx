export function SepareteNumberFromString(str) {
  const matches = str.match(/\d+/);

  if (matches) {
    const number = matches[0];
    const indexNumber = str.indexOf(number);

    const partString = str.slice(0, indexNumber);
    const partNumber = str.slice(indexNumber + number.length);

    const newStr = partString.concat(partNumber, ", ", number);
    return newStr;
  }

  return str;
}