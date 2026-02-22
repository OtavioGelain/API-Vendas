//Estou herdando da classe nativa Error
export class AppError extends Error{
    public readonly statusCode: number

    constructor(message: string, statusCode: number){
        //o 'super' chama o contructor da classe Error
        super(message)
        this.statusCode = statusCode

        //Garante quie nao vai dar erro/bug na herança
        Object.setPrototypeOf(this, AppError.prototype);
    }
}