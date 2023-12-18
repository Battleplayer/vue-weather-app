export default (scale: string, temp: number) => {
  if (scale === 'F') return (((temp - 273.15) * 9) / 5 + 32).toFixed(0);
  return (temp - 273.15).toFixed(0);
};
