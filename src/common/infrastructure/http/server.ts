import { env } from "../env";
import { dataSources } from "../typeorm";
import { app } from "./app";

dataSources 
    .initialize()
    .then(() => {
        app.listen(env.PORT, () => {
            console.log(`Servidor rodando na porta ${env.PORT}`)
        })
    }).catch((error) => {
        console.log("Error initializing data source:", error)
    })

