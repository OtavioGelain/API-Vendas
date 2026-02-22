import { Request, Response, NextFunction } from "express";

//middlewares especificos para tratamento de erro costumam receber 4 parametros
export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): Response{
    //Verifica se o erro/err pertence a classe nativa do Javascript 'Error' 
    if(err instanceof Error){
        return res.status(400).json({error: err.message})
    }
    return res.status(500).json({status: 'error', message: "Internal server error"})
}