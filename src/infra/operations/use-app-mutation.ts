import { useState } from 'react';
import { unknown } from 'zod';

type UseAppMutationReturn<TData, TVariables> = {
  mutate: (data: TVariables) => Promise<TData | void>;
  isLoading: boolean;
  error?: unknown;
};

export type UseAppMutationOptions<TData> = {
  onSuccess?: (data: TData) => void;
  onError?: (error: Error) => void;
};

type UseMutationParam<TData, TVariables> = {
  mutateFn: (variables: TVariables) => Promise<TData>;
} & UseAppMutationOptions<TData>;

export function useAppMutation<TData, TVariables>({
  mutateFn,
  onSuccess,
  onError,
}: UseMutationParam<TData, TVariables>): UseAppMutationReturn<
  TData,
  TVariables
> {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(unknown);

  async function mutate(variables: TVariables) {
    try {
      setIsLoading(true);
      setError(null);
      const data = await mutateFn(variables);
      onSuccess?.(data);
      return data;
    } catch (error) {
      setError(error as Error);
      onError?.(error as Error);
    } finally {
      setIsLoading(false);
    }
  }

  return { mutate, isLoading, error };
}
