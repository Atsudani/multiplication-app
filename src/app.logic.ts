import fs from 'fs'
import { yarg } from './config/plugins/yargs.plugin';
console.log(yarg);

const { b:base, l:limit, s:showTable } = yarg
let salida:string = '';
const mensajeCabecera:string = `
=====================================
            Tabla del ${base}
=====================================
`;

// console.log(mensajeCabecera);

for (let numero = 1; numero <= limit; numero++) {
    salida += `${base} x ${numero} = ${base*numero}\n`;    
}

salida = mensajeCabecera + salida;

if (showTable) console.log(salida);

const outputPath = 'outputs';

fs.mkdirSync(outputPath,{recursive:true});
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, salida);

console.log('File created!');