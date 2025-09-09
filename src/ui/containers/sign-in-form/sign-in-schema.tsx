import { z } from 'zod';

export const signInSchema = z.object({
  email: z.email('email inválido'),
  password: z.string('campo obrigatório').min(6, 'no minimo 6 caracteres'),
});

export type SignInSchema = z.infer<typeof signInSchema>;
