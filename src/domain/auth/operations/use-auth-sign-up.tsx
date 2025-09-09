import { useAppMutation } from '@/src/infra/operations/use-app-mutation';
import { useRepository } from '@/src/infra/repositories/repository-provider';

export function useAuthSignUp() {
  const { auth } = useRepository();

  return useAppMutation({
    mutateFn: auth.signUp,
    onSuccess: (data) => {
      console.log('Sign up successful', data);
    },
    onError: (error) => {
      console.log('Sign up error', error);
    },
  });
}
