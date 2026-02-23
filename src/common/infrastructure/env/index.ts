import { AppError } from '@/common/domain/errors/app-error'
import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    //A palavra 'coerce' serve para validar independente se for number, string, etc...
    PORT: z.coerce.number().default(3333),
    API_URL: z.string().default('http://localhost:3333')

})

const _env = envSchema.safeParse(process.env)

if(_env.success == false){
    throw new AppError(message: 'Invalid environment variables')
}

export const env = _env.data