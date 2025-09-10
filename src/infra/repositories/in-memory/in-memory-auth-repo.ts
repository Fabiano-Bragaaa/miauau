import {
  type AuthRepo,
  type AuthSignInParams,
  type AuthSignUpParams,
} from '@/src/domain/auth/auth-repo';
import { type AuthUser } from '@/src/domain/auth/auth-user';

import { authUser } from './data/auth-user';

let lastId = 0;
export class InMemoryAuthRepo implements AuthRepo {
  async signIn(params: AuthSignInParams): Promise<AuthUser> {
    const user = authUser.find((user) => user.email === params.email);

    if (user) {
      return user;
    }

    throw new Error('User not found');
  }
  async signUp(params: AuthSignUpParams): Promise<AuthUser> {
    const userAlreadyExists = authUser.find(
      (user) => user.email === params.email
    );

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    lastId += 1;
    const newUser = {
      id: lastId.toString(),
      email: params.email,
      fullname: params.fullname,
    };

    return newUser;
  }
  async signOut(): Promise<void> {
    //TODO
  }
}
