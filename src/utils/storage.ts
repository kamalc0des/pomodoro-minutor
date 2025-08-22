export const storage = {
    getNumber(key: string, fallback: number) {
      const raw = localStorage.getItem(key);
      const n = raw ? parseInt(raw, 10) : NaN;
      return Number.isFinite(n) && n > 0 ? n : fallback;
    },
    getString(key: string, fallback = "") {
      return localStorage.getItem(key) ?? fallback;
    },
    set(key: string, value: string | number) {
      localStorage.setItem(key, String(value));
    },
  };
  