// https://usehooks.com/useLocalStorage/

import { useState } from 'react';

export function getStorageItem(key: string, initialValue?: string) {
  try {
    // Get from local storage by key
    const item = window.localStorage.getItem(key);
    // Parse stored json or if none return initialValue
    return item ? JSON.parse(item) : initialValue;
  } catch (error) {
    // If error also return initialValue
    console.log(error);
    return initialValue;
  }
}

export function setStorageItem(key: string, value: string) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
}

export default function useLocalStorage(key: string, initialValue: string) {
  const [storedValue, setStoredValue] = useState(() => {
    return getStorageItem(key, initialValue);
  });

  const setValue = (value: (arg0: any) => any) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    setStorageItem(key, valueToStore);
  };

  return [storedValue, setValue];
}
