const pessoa = {
	nome: 'Gustavo',
	sobrenome: 'Priebe',
	idade: 25,

	fala () {
		console.log(`${this.nome} ${this.sobrenome} que tem ${this.idade} está falando oi...`)
    }, // Vai imprimir a frase. O this serve para indicar os valores dentro do objeto
	
	aumentarIdade () {
		this.idade++;
	}
};

pessoa.fala();
pessoa.aumentarIdade();
pessoa.fala();
// Gustavo Priebe que tem 25 está falando oi...
// Gustavo Priebe que tem 26 está falando oi...


// const criaPessoa = (nome, sobrenome, idade) => {return {nome, sobrenome, idade}};

// const pessoa1 = criaPessoa('João', 'Priebe', 20)
// const pessoa2 = criaPessoa('Gustavo', 'Siqueira', 24)

// console.log(pessoa2)