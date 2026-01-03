const dados = document.getElementById("dados").innerHTML;

const n = Number(dados);

for (let i = 0; i < 11; i++) {
    console.log(`${n} x ${i} = ${4 * i}`);
}