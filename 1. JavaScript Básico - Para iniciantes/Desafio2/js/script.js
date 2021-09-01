let numero = Number(prompt("Please enter a number: "));
const numeroTitulo = document.getElementById('numero-digitado');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu número + 2 é ${numero + 2}.</p>`;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** (1/2)}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}`
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}`
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}`