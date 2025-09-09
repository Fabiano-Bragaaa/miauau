import { type AuthUser } from './auth-user';

export type AuthSignUpParams = {
  fullname: string;
  email: string;
  password: string;
};

export type AuthSignInParams = {
  email: string;
  password: string;
};

export interface AuthRepo {
  signIn(params: AuthSignInParams): Promise<AuthUser>;
  signUp(params: AuthSignUpParams): Promise<AuthUser>;
  signOut(): Promise<void>;
}
