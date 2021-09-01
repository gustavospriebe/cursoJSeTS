function pegarNome() {
    const nomeDigitado = prompt('Digite seu nome')
    document.body.innerHTML = `Bom dia ${nomeDigitado}!`
}