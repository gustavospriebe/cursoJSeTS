// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número
// Use a função com números de 0 a 100

// function logica(num) {
//     if (typeof num !== "number") {
//         console.log("Digite um número");
//     } else {
//         if (num < 0 || num > 100) {
//             console.log("Digite um número de 0 a 100");
//         } else {
//             if (num % 3 === 0 && num % 5 === 0) {
//                 console.log("FizzBuzz");
//             } else if (num % 5 === 0) {
//                 console.log("Buzz");
//             } else if (num % 3 === 0) {
//                 console.log("Fizz");
//             } else if (num % 3 !== 0 && num % 5 !== 0) {
//                 console.log(num);
//             }
//         }
//     }
// }



function logica(num) {
    if (typeof num !== 'number') return 'Não é um número';
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num;
}

for (let i = 0; i <= 100; i++){
    console.log(i, logica(i));
}

