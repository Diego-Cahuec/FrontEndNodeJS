// Importa los modulos de conversion 
const centigradosToFahrenheit= require('./modules/conversorCaF');
const convertirKilometrosAMillas = require('./modules/conversorKaM');
const pulgadasACentimetros = require('./modules/conversorPaC');
const convertirPiesAPulgadas = require('./modules/conversorPaP');
// Usar la función para convertir lo requerido 
const gradosCentigrados = 25;
const gradosFahrenheit = centigradosToFahrenheit(gradosCentigrados);
const kilometros = 10;
const millas = convertirKilometrosAMillas(kilometros);
const pulgadas = 5;
const centimetros = pulgadasACentimetros(pulgadas);
const pies = 5;
const pulgadas1 = convertirPiesAPulgadas(pies);
// Imprime el resultado
console.log(`Prueba función: ConversorCaF \nGrados en centigrados: ${gradosCentigrados} \nGrados Farenheit: ${gradosFahrenheit}\n ----------` );
console.log(`Prueba función: ConversorKaM \n KILOMETROS:${kilometros} \n MILLAS: ${millas}\n ----------`);
console.log(`Prueba función: ConversorPaC \n Pulgadas: ${pulgadas} \n Centimetros: ${centimetros}\n ----------`);
console.log(`Prueba función: ConversorPaP \n Pies:${pies} \n Pulgadas: ${pulgadas1} \n ----------`);