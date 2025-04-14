let contador = 0;
let acumulador = 0;

while (contador <= 7) {
    contador += 1;
    acumulador += contador;
}

const resultadoAcumulador = acumulador > 45 ? 
    `Acumulador é alto: ${acumulador}` : 
        `Acumulador é baixo: ${acumulador}`;

const resultadoContador = contador > 7 ?
    `Contador passou de 7: ${contador}` :
        `Contador dentro dp limite: ${contador}`;

console.log(`Resultado Acumulador ${resultadoAcumulador}`);
console.log(`Resultado Contador ${resultadoContador}`);