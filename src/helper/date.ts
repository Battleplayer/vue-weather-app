const getDate = (date: number) => {
  return new Date(date * 1000).toLocaleString().split(',')[0];
};

const getDay = (date: number) => {
  return new Date(date * 1000).toLocaleString('default', { day: 'numeric' });
};
const getMonth = (date: number): string => {
  return new Date(date * 1000).toLocaleString('default', { month: 'short' });
};
const getDayOfWeek = (date: number): string => {
  return new Date(date * 1000).toLocaleDateString('default', { weekday: 'short' });
};

const getTime = (time: number) => {
  return new Date(time * 1000).toLocaleString().split(',')[1];
};

export { getDate, getTime, getDay, getMonth, getDayOfWeek };
