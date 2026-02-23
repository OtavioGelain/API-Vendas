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
    throw new AppError('Invalid environment variables', 400)
}

//Agora eu posso usar as variaveis de ambiente nos outros aquivos so chamando elas através dessa variavel, ficando por exemplo, env.PORT
export const env = _env.data