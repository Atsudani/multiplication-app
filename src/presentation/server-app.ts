import { CreateTable, CreateTableUseCase } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file-use-case';

interface RunOptions{
    base            : number,
    limit           : number,
    showTable       : boolean,
    fileName        : string,
    fileDestination : string,
}
export class ServerApp{

    static run( { base, limit, showTable, fileName, fileDestination }: RunOptions ){
        console.log('\nServer running...\n');

        //console.log(`desde ServerApp.run: ${base} ${limit}`);
        
        const table = new CreateTable().execute({ base, limit });

        const wasCreated = new SaveFile().execute({ fileContent: table, 
                                                    destination:fileDestination, 
                                                    fileName:fileName});

        if (showTable) console.log(table);

        (wasCreated)
            ? console.log('File created!')
            : console.error('File not created!');


        
    }

    

}