import EpochTimeConverter from "./EpochTimeConverter";

export default function createData(timestamp: string, value: number[]) {
  const standardTime = EpochTimeConverter(timestamp);
  const date = parseInt(timestamp, 10) * 1000;
  return { standardTime, value, date };
}
