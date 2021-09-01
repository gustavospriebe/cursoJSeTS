window.alert ("Esse programa foi criado para somar 2 números digitados pelo cliente.")
const num1 = window.prompt("Digite um número:")
const num2 = window.prompt("Digite outro número:")

num1 = Number(num1)
num2 = Number(num2)

const resultado = num1 + num2

window.alert(`O resultado da soma é ${resultado}`)