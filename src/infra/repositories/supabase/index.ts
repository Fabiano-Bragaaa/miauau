import { type Repositories } from '@/src/domain/repositories';

import { SupabaseAuthRepo } from './supabase-auth-repo';

export const supabaseRepository: Repositories = {
  auth: new SupabaseAuthRepo(),
};
