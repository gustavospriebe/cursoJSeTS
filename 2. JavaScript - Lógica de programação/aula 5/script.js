const dados = [123, 'Gustavo', 'Priebe', 'gustavospriebe', 54321];

// A Atribuição via desestruturação permite criar e  
// atribuir diversas variáveis em uma só linha.
const [id, nome, sobrenome, login, senha] = dados;
console.log(id, nome, sobrenome, login, senha);
// 123 Gustavo Priebe gustavospriebe 54321
