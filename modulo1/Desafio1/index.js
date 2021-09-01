// Input do cliente
const nome = window.prompt("Digite o seu nome comppleto:");

// Quantidade de letras
let semEspaco = nome.replace(/ /g, "");
let numLetras = semEspaco.length;

let indice1 = semEspaco + 1;

// Segunda letra
const segundaLetra = indice1.slice(1,2);

// Primeiro índice da letra A
const firstA = nome.indexOf("a");

// Úlitmo índice da letra A
const lastA = nome.lastIndexOf("a");

// 3 últimas letras
const lastThree = semEspaco.slice(-3);

// Nome em array
const nameArray = nome.split(" ");

// Nome maiúscula
const nameUp = nome.toUpperCase();

// Nome minúsculas
const nameLower = nome.toLowerCase();


document.body.innerHTML = `Seu nome é: ${nome} <br/>`;
document.body.innerHTML += `Seu nome tem ${numLetras} letras <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetra} <br/>`;
document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? ${firstA}  <br/>`;
document.body.innerHTML += `Qual o último índice da letra a no seu nome? ${lastA}  <br/>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${lastThree} <br/>`;
document.body.innerHTML += `As palavras do seu nome são: ${nameArray} <br/>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nameUp} <br/>`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nameLower} <br/>`;
