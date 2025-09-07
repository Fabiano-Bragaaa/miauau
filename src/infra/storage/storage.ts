import { asyncStorage } from './repositories/async-storage';

export interface Storage {
  getItem: <T = unknown>(key: string) => Promise<T | null>;
  setItem: <T = unknown>(key: string, value: T) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

export let storage: Storage = asyncStorage;
