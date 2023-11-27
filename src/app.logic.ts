import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';

// console.log(yarg);

const { b: base, l: limit, s: show } = yarg;
let outputMessage = '';
const headerMessage = `======================================
              Tabla del ${base}
======================================\n
`;

for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i} \n`;
}

outputMessage = headerMessage + outputMessage;

const outputPath = `outputs`;
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`outputs/tabla-${base}.txt`, outputMessage);

show && console.log(outputMessage);
console.log('File created!');
