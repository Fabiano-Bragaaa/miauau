import { SupabaseAuthRepo } from './supabase-auth-repo';

export const supabaseRepository = {
  auth: new SupabaseAuthRepo(),
};
