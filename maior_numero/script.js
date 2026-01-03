const elemento = document.getElementById("dados");
// console.log(elemento);

const conteudo = elemento.innerHTML;
// console.log(conteudo);

const result = conteudo.split('\n');
// console.log(result);

const numeros = result.map(x => Number(x));
// console.log(numeros);

let maior = numeros[0];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i+1] > numeros[i]) {
        maior = numeros[i+1];
    }
}

console.log(maior);