import { type AuthUser as SupabaseAuthUser } from '@supabase/supabase-js';

import { type AuthUser } from '@/src/domain/auth/auth-user';

function toAuthUser(supabaseUser: SupabaseAuthUser): AuthUser {
  if (!supabaseUser.email) {
    throw new Error('email not found');
  }

  return {
    id: supabaseUser.id,
    email: supabaseUser.email,
    fullname: supabaseUser.user_metadata.fullname,
  };
}

export const supabaseAdapter = {
  toAuthUser,
};
