import { z } from 'zod';

export const signInSchema = z.object({
  name: z.string().min(3, { message: 'Nome é obrigatório' }),
  email: z.string().email({ message: 'E-mail inválido' }),
  phone: z.string().min(15, { message: 'Telefone inválido.' })
});

export type SignInType = {
  name: string;
  email: string;
  phone: string;
};