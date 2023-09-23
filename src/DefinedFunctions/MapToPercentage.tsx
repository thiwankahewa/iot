export default function MapValueToPercentage(
  value: number,
  minValue: number,
  maxValue: number
): number {
  const percentage = ((value - minValue) / (maxValue - minValue)) * 100;

  return percentage;
}
