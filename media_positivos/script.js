const numeros = document.getElementById("dados").innerHTML.split('\n').map(x => Number(x));

const numerosPositivos = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
        numerosPositivos.push(numeros[i]);
    }
}

if (numerosPositivos.length === 0) {
    console.log('IMPOSSIVEL CALCULAR');
} else {
    let soma = 0;

    numerosPositivos.forEach(element => {
        soma += element;
    });

    const mediaPositivos = soma / numerosPositivos.length;

    console.log(`MEDIA = ${mediaPositivos.toFixed(2)}`);
}
