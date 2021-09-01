// Escreva uma função que recebe 2 números e retorna o maior deles

// Função normal
// function maior(num1, num2) {
//     if (num1 > num2) {
//         return console.log(`${num1} é maior que ${num2}.`)
//     }
//     console.log(`${num2} é maior que ${num1}.`)
// }

//Função anônima com 
// const maior = function (x,y) {
//     return console.log(x > y ? x : y);
// }
// maior(67,33);

//Arrow function com operador ternária
const maior = (x,y) => x > y ? `${x} é maior ${y}` : `${y} é maior ${x}`;
console.log(maior(4,6));

