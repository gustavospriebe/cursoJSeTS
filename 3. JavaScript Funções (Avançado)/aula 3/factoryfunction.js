// Função que recebe dados de uma pessoa e calcula o seu IMC e ano de nascimento.
function criaPessoa(nome, sobrenome, idade, altura, peso) {
    return {
        nome,
        sobrenome,
        idade,
        altura,
        peso,
        anoNasc(idade) {
            const hoje = new Date();
            const ano = hoje.getFullYear();
            return ano - idade;
        },
        imc(altura, peso) {
            const indice = 
        }
    }
}

