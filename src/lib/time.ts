function pad2(number: number): string {
  return number.toString().padStart(2, '0');
}

export function formatMilliseconds(milliseconds: number): string {
  return `${pad2(Number((milliseconds / 1000 / 60).toFixed(0)))}:${pad2(Number((milliseconds / 1000 % 60).toFixed(0)))}`;
}
