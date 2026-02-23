//Estou herdando da classe nativa Error
export class AppError extends Error{
    //o 'readonly' faz com que o statusCode do erro lançado seja imutavel
    public readonly statusCode: number

    constructor(message: string, statusCode: number){
        //o 'super' chama o contructor da classe Error
        super(message)
        this.statusCode = statusCode

        //Garante quie nao vai dar erro/bug na herança
        Object.setPrototypeOf(this, AppError.prototype);
    }
}