export const setItem = (key: string, value: string | object) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getItem = (key: string) => {
  if (typeof window !== 'undefined') {
    const storedValue = localStorage.getItem(key);
    return storedValue || null;
  }
  return null;
};

export const removeItem = (key: string) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
};
