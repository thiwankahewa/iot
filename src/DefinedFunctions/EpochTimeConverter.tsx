const EpochTimeConverter = (epoch: string) => {
  const epochNumber = parseFloat(epoch);
  const date = new Date(epochNumber * 1000);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  return formattedTime;
};

export default EpochTimeConverter;
