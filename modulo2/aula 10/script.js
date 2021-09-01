// const numeros = [1,2,3,4,5,6,7,8,9];

// for(let numero of numeros) {

//     // Vai pular os números pares com o continue
//     if (numero % 2 === 0) {
//         console.log('Número par')
//         continue;
//     }

//     // Vai parar o programa quando encontrar o número 7
//     if (numero === 7) {
//         console.log('7 encontrado.. Encerrando o programa')
//         break;
//     }

//     console.log(numero);
// }


const numeros = [1,2,3,4,5,6,7,8,9];

let i = 0;

while (i < numeros.length) {

	let numero = numeros[i];

    // Vai pular os números pares com o continue
    if (numero % 2 === 0) {
				i++;
        console.log('Número par');
        continue;
    }

    // Vai parar o programa quando encontrar o número 7
    if (numero === 7) {
        console.log('7 encontrado.. Encerrando o programa');
				i++;
        break;
    }
		
	i++;
    console.log(numero);
}