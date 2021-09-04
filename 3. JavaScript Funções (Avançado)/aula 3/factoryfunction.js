// Função que recebe dados de uma pessoa e calcula o seu IMC e ano de nascimento.
function criaPessoa(nome, sobrenome, idade, altura, peso) {
    return {
        nome,
        sobrenome,
        
        // get faz com que a funçao "finja" ser um atributo e pode ser chamado sem invocar a função - ().
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        
        idade,
        altura,
        peso,
        
        get anoNasc() {
            const hoje = new Date();
            const ano = hoje.getFullYear();
            const anoNasci = ano - this.idade;
            return anoNasci;
        },

        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Gustavo', 'Priebe', 24, 1.72, 72);

console.log(p1);

