import EpochTimeConverter from "./EpochTimeConverter";

export default function createData(timestamp: string, value: number) {
  const standardTime = EpochTimeConverter(timestamp);
  return { standardTime, value };
}
