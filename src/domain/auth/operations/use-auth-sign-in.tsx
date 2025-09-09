import { useAppMutation } from '@/src/infra/operations/use-app-mutation';
import { useRepository } from '@/src/infra/repositories/repository-provider';

export function useAuthSignIn() {
  const { auth } = useRepository();

  return useAppMutation({
    mutateFn: auth.signIn,
    onSuccess: (data) => {
      console.log('Sign in successful', data);
    },
    onError: (error) => {
      console.log('Sign in error', error);
    },
  });
}
