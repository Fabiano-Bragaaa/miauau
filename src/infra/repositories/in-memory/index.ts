import { type Repositories } from '@/src/domain/repositories';

import { InMemoryAuthRepo } from './in-memory-auth-repo';

export const InMemoryRepository: Repositories = {
  auth: new InMemoryAuthRepo(),
};
