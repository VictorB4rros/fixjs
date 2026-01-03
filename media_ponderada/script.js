const elemento = document.getElementById("dados");

const conteudo = elemento.innerHTML;

const result = conteudo.split('\n');

const numeros = result.map(x => Number(x));

const peso1 = 2;
const peso2 = 3;
const peso3 = 5;

const mediaPonderada = (numeros[0] * peso1 + numeros[1] * peso2 + numeros[2] * peso3) / (peso1 + peso2 + peso3);

console.log(`Media = ${mediaPonderada.toFixed(1)}`);

