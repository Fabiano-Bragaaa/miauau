import { createContext, useContext } from 'react';

import { type Repositories } from '@/src/domain/repositories';

export const RepositoryContext = createContext<Repositories>(
  {} as Repositories
);

export const RepositoryProvider = RepositoryContext.Provider;

export function useRepository() {
  const context = useContext(RepositoryContext);

  if (!context) {
    throw new Error('useRepository must be used within a RepositoryProvider');
  }

  return context;
}
