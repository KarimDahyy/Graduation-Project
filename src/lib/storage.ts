export const storage = {
  get: <T>(key: string, list: T): T => {
    if (typeof window === "undefined") return list;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : list;
    } catch (error) {
      console.error(error);
      return list;
    }
  },
  set: <T>(key: string, value: T): void => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  },
};
