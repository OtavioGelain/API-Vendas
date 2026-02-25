import { AppError } from "@/common/domain/errors/app-error";
import { Request, Response, NextFunction } from "express";

//middlewares especificos para tratamento de erro costumam receber 4 parametros
//Esse middleware vai tratar especialmente os meus erros do AppError
export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): Response{
    //Verifica se o erro/err pertence a classe do AppError 
    if(err instanceof AppError){
        return res.status(err.statusCode).json({stats: 'error',message: err.message})
    }

    console.log(err)

    return res.status(500).json({status: 'error', message: "Internal server error"})
}