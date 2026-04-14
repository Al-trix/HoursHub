import { z } from 'zod';

export const registerBaseSchema = z.object({
  typeUser: z.enum(['user', 'admin'], { message: 'Type user is required' }),
  name: z.string('Name must be a string').min(1, 'Name is required'),
  lastName: z
    .string('Last name must be a string')
    .min(1, 'Last name is required'),
  email: z
    .string('Email must be a string')
    .min(1, 'Email is required')
    .email('Email is invalid'),
  password: z
    .string('Password must be a string')
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(
      /[^A-Za-z0-9]/,
      'Password must contain at least one special character'
    ),
  confirmPassword: z
    .string('Confirm password is required')
    .min(1, 'Confirm password is required'),
});

export const loginSchema = registerBaseSchema.pick({
  email: true,
  password: true,
});

export const registerSchema = registerBaseSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  }
);

export type RegisterSchemaType = z.infer<typeof registerSchema>;
export type LoginSchemaType = z.infer<typeof loginSchema>;
