import { z } from 'zod';

const environmentSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

export type Environment = z.infer<typeof environmentSchema>;

function validateEnvironment(env = import.meta.env): Environment {
  try {
    return environmentSchema.parse(env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessage = error.issues
        .map((err) => `${err.path.join('.')}: ${err.message}`)
        .join('\n');
      throw new Error(`Environment validation failed: ${errorMessage}`);
    }
    throw error;
  }
}

export const environment = validateEnvironment();

export function isDevelopment(): boolean {
  return environment.NODE_ENV === 'development';
}

export function isProduction(): boolean {
  return environment.NODE_ENV === 'production';
}

export function isTest(): boolean {
  return environment.NODE_ENV === 'test';
}
