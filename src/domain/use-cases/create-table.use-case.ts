
export interface CreateTableUseCase{
    execute: ( options: CreateTableOptions ) => string,
}

 
export interface CreateTableOptions{
    base: number,
    limit?: number,
}
export class CreateTable implements CreateTableUseCase {

    constructor(

    ){}

    execute({ base, limit = 10 }:CreateTableOptions){
        let outputMessage = '';
        for (let numero = 1; numero <= limit; numero++) {
            outputMessage += `${base} x ${numero} = ${base*numero}\n`;    
        }

        return outputMessage;
    }

    
}