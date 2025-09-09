import {
  type AuthRepo,
  type AuthSignInParams,
  type AuthSignUpParams,
} from '@/src/domain/auth/auth-repo';
import { type AuthUser } from '@/src/domain/auth/auth-user';

import { supabase } from './supabase';
import { supabaseAdapter } from './supabase-adapter';

export class SupabaseAuthRepo implements AuthRepo {
  async signIn(params: AuthSignInParams): Promise<AuthUser> {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: params.email,
      password: params.password,
    });

    if (error) {
      throw new Error(error.message);
    }

    return supabaseAdapter.toAuthUser(data.user);
  }
  async signUp(params: AuthSignUpParams): Promise<AuthUser> {
    const { data, error } = await supabase.auth.signUp({
      email: params.email,
      password: params.password,
      options: {
        data: {
          fullname: params.fullname,
        },
      },
    });

    if (error) {
      throw new Error(error.message);
    }

    if (!data.user) {
      throw new Error('User not returned in signup.');
    }

    return supabaseAdapter.toAuthUser(data.user);
  }
  async signOut(): Promise<void> {
    await supabase.auth.signOut();
  }
}
