export const setItem = (key: string, value: string | object) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value)); // Сохраняем как JSON
  }
};

// client/src/utils/storage.ts
export const getItem = (key: string) => {
  if (typeof window !== 'undefined') {
    const storedValue = localStorage.getItem(key);
    return storedValue || null; // Возвращаем строку или null
  }
  return null;
};

export const removeItem = (key: string) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
};
