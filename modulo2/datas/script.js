const data = new Date();


//Funções para formatação de data atual
const zeroAEsquerda = (num) => (num >= 10 ? num : `0${num}`);
const formatData = function (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    const miliseg = zeroAEsquerda(data.getMilliseconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg} ${miliseg}`;
};
// console.log(formatData(data));


// Função para colocar nome dos dias da semana
function diaSemana() {
    if (data.getDay() === 0) {
        console.log("Domingo");
    } else if (data.getDay() === 1) {
        console.log("Segunda-feira");
    } else if (data.getDay() === 2) {
        console.log("Terça-feira");
    } else if (data.getDay() === 3) {
        console.log("Quarta-feira");
    } else if (data.getDay() === 4) {
        console.log("Quinta-feira");
    } else if (data.getDay() === 5) {
        console.log("Sexta-feira");
    } else if (data.getDay() === 6) {
        console.log("Sábado");
    }
}
// diaSemana(data.getDay());


// Função para converter horário que está em milésimos de segundos
const milliseconds = Date.now();
function millisecondsToDate() {
    const msConverted = new Date(milliseconds);
    return msConverted;
}
console.log(millisecondsToDate());


// Função para converter horário que está em string para formato reconhecido pelo JS
const dataString = new Date("2019-04-29 20:20:47");
function dataConverted(data) {
    const data1 = data.toString();
    console.log(data1);
}
dataConverted(dataString);
