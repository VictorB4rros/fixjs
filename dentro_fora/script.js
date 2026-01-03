const dados = document.getElementById('dados').innerHTML.split('\n').map(x => Number(x));

let dentro = 0;
let fora = 0;

dados.forEach(element => {
    if (element >= 10 && element <= 20) {
        dentro++;
    } else {
        fora++;
    }
});

console.log(`${dentro} DENTRO`);
console.log(`${fora} FORA`);