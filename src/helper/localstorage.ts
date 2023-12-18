const setLocalstorage = (name: string, value: unknown) => {
  localStorage.setItem(name, JSON.stringify(value));
};

const getLocalStorage = (name: string): unknown | null => {
  const storedValue = localStorage.getItem(name);
  return storedValue ? JSON.parse(storedValue) : null;
};

export { setLocalstorage, getLocalStorage };
