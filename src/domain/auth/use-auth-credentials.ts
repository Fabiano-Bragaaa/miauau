import { router } from 'expo-router';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { storage } from '../../infra/storage/storage';
import { type AuthUser } from './auth-user';

type AuthCredentialsType = {
  user: AuthUser | null;
  saveCredentials: (user: AuthUser) => Promise<void>;
  removeCredentials: () => Promise<void>;
  isLoading: boolean;
};

const useAuthCredentials = create<AuthCredentialsType>()(
  persist(
    (set) => ({
      user: null,
      saveCredentials: async (user) => {
        set({ user });
        router.replace('/');
        return;
      },
      removeCredentials: async () => {
        set({ user: null });
        return;
      },
      isLoading: true,
    }),
    {
      name: '@Auth',
      storage,
      onRehydrateStorage: () => () => {
        useAuthCredentials.setState({ isLoading: false });
      },
    }
  )
);
