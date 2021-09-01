# Array (básico):

- Lista / coleção de coisas;
- É utilizado com [ ];
- Itens separados por vírgula.

Exemplo:

```jsx
const nomes = ['Gustavo', 'Siqueira', 'Priebe'];
```

### Atributos:

- .push = adiciona um elemento no final da array;
- .unshift = adiciona um elemento no início da array;
- .pop = remove o último elemento da array;
- .shift = remove o primeiro elemento da array;

### Arrays e Objetos permitem o const com valores mutáveis

Quando usamos `const` com tipos primitivos (number, string, boolean, undefined e null), esse valor vira imutável. Já quando usamos `const` com valores mutáveis (arrays e objetos), a variável continua sendo constante, porém os valores no objeto poderão ser alterados. 

Isso acontece porque quando alteramos um valor interno de um objeto, não ocorre a reatribuição da variável com sinal de atribuição **=** (a variável continua apontando para o mesmo local na memória), apenas a alteração de um valor interno do mesmo objeto.

***Isso pode*:**

```jsx
const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array);
// [1024, 2, 3, 4]
```

***Isso não pode:***

```jsx
const array = [1, 2, 3, 4, 5];
array = '6';
// Assignment to constat variable.
```

## Valores primitivos são copiados quando é atribuído o valor de uma variável para outra.

```jsx
let a = 'A'
let b = a

console.log(a, b)
// A A

a = 'Qualquer outra coisa'
console.log(a, b)
// Qualquer outra coisa A
```

## Valores por referência são passados por referência de uma variável para outra.

```jsx
let a = [1, 2, 3, 4, 5]
let b = a

console.log(a, b)
// [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ]

a.pop()
console.log(a, b) 
// [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

b.push(5)
console.log(a,b)
// [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ]
```

# Funções (básico):

- Blocos de códigos executáveis mediante chamada no Script;
- Pode haver um retorno dentro da função ou não;
- Pode receber inputs de dados / parâmetros de fora da função;

```jsx
function soma (x, y) {
	const resultado = x + y;
return resultado;
}

console.log(soma (2,3));
// 6
```

- As variáveis criadas dentro da função estão protegidas pela mesma. Não é possível chamar uma variável que está dentro pelo lado de fora.
- É possível atribuir valores padrões para parâmetros caso os mesmos sejam enviados.

```jsx
function soma (x = 2, y = 5) {
	const resultado = x + y;
return resultado;
}

console.log(soma ());
// 7
```

### Funções anônimas:

É uma função que está atribuída diretamente a uma variável. Serve para simplificar a linguagem.

```jsx
const soma = function (x, y) {
return x + y;
};

console.log(soma(2,2));
// 4
```

### Arrow Function:

Forma de simplificar mais ainda a função removendo os parenteses e chaves. 

```jsx
const soma = (x,y) => x + y;

console.log(soma(2, 3));
// 5
```

# Objetos (básico):

- Objeto relaciona um atributo a um valor de dentro da variável.
- Atributos separados por vírgula;

**Objeto literal:**

```jsx
const pessoa = {
	nome: 'Gustavo',
	sobrenome: 'Priebe',
	idade: 24
};
```

Um objeto deve ser criado através de funções para ser evitado a repetição de código de 5 linhas como mostrado acima e assim ser escalável a forma de utilização.

```jsx
function criaPessoa (nome, sobrenome, idade) {
	nome: nome,
	sobrenome: sobrenome,
	idade: idade
}

const pessoa1 = ('Gustavo', 'Priebe', 24)

console.log(pessoa1)
// { nome: 'Gustavo', sobrenome: 'Priebe', idade: 25}
```

### Funções dentro de Objetos

Existe a possibilidade de criar funções para serem executadas com os valores de dentro do Objeto.

```jsx
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
```