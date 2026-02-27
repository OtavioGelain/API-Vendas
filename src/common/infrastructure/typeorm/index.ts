import { DataSource } from "typeorm";
import { env } from "../env";

export const dataSources = new DataSource({
    type: env.DB_TYPE,
    host: env.DB_HOST,
    port: env.DB_PORT,
    schema: env.DB_SCHEMA,
    database: env.DB_NAME,
    username: env.DB_USER,
    password: env.DB_PASS,
    //O ** vai procurar entre as pastas até chegar em entities, e depois vai pegar todos os arquivos ts em entitites
    entities: ['**/entities/**/*.ts'],
})