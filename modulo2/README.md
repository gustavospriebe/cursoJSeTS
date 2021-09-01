# Operadores de Comparação

- > maior
- ≥= maior ou igual
- < menor
- ≤= menor ou igual
- === igualdade estrita
- !=== diferente estrito

# Operadores Lógicos

- && → AND → E → Todas as expressões precisam ser verdadeiras para retornar true.
- | | → OR → OU → Pelo menos uma expressão precisa ser verdadeira para retornara true.
- ! → NOT → NÃO → Inverte/Negando a expressão.

É possível a utilização dos operadores lógicos na definição de propriedades, para que caso a primeira não funcione, ele percorre o trecho de código até achar uma que tenha o resultado de true.

 

```jsx
const corUsuario = null; //Usuário não definiu uma cor.
const corPadrao = corUsuario || 'black';

console.log(corPadrao) //Irá ser impresso o black, pois
// o usuário não definiu uma cor, logo sua propriedade 
// fica false.
```

# If, else if e else

- if → cria uma condição → se (condição) {código}
- else if → condição extra → senão (condição) {código}
- else → se as condições anteriores não forem atendidas, essa é executada → se não atender os anteriores {código}

```jsx
const hora = 20;

if (hora >= 0 && hora <= 12) {
    console.log("Bom dia!");
} else if (hora > 12 && hora <= 18) {
    console.log("Boa tarde!");
} else if (hora > 18 && hora < 24) {
    console.log("Boa noite!");
} else {
    console.log("Erro!");
}
```

Pode ser usado if dentro de if.

```jsx
const media = 7.5;

if (media <= 10 && media >=7){
    console.log('Aprovado!')
    if (media > 9) {
        console.log('Você foi um dos melhores da turma.')
    } else {
        console.log('Parabéns.')
    }
} else if (media < 7 && media >= 5){
    console.log('Recuperação!')
} else {
    console.log('Reprovado!')
}
```

## Desafio 1

Escopo do projeto:

Fazer um formulário utilizável, onde o usuário digita o seu peso e altura para calcular o IMC.

- [x]  HTML
- [x]  IMCs com seus resultados
- [x]  Fórmula do IMC
- [x]  Cálculo de IMC no JS com ifs
- [x]  Resultado aparecendo embaixo do botão (innerHTML no JS)
- [x]  Peso e altura só podendo digitar números, caso contrário, mensagem de erro

# Operador ternário

Quando temos uma condicional de apenas 2 valores de resultado, utilizar o ternário diminui o código que seria utilizado com o if.

**condição ? 'Valor para verdadeiro' : 'Valor para falso';**

```jsx
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário normal";
//                       (condição)                (true)           (false)

fconsole.log(nivelUsuario);
// Usuário VIP
```

# Objeto Date

A função date é uma função construtora. Por isso é utilizado o objeto **new** Date( );

- Quando for adicionar valores, colocar 2 pra cima para não contar como milissegundos. Ex: Date(2019) = 2019 milissegundos;
- Quando nenhum valor é adicionado, ele retorna a data atual;
- Os valores seguem a seguinte sequência:

```jsx
const data = new Date(1996, 9, 17, 6, 47, 20, 688);
// (ano, mês+1, dia, hora , minuto, segundo, milisegundo);
console.log(data);
// 1996-10-17T08:47:20.688Z
```

É possível enviar uma data em String no seguinte modelo e ele irá reconhecer:

```jsx
const data = new Date('2019-04-29 20:20:47');
console.log(data.toString()); // Converte para string.
//Thu Aug 12 2021 18:46:10 GMT-0300 (Horário Padrão de Brasília)
```

Podemos conseguir os valores de cada valor individualmente:

```jsx
const data = new Date('2019-04-29 20:20:47');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('MiliSeg', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); //0 - Domingo, 6 - Sábado
```

Várias bases de dados entregam os horário em milésimos de segundos, para converter temos que ter a seguinte função:

```jsx
const milliseconds = Date.now();
function millisecondsToDate() {
    const msConverted = new Date(milliseconds);
    return msConverted;
}
console.log(millisecondsToDate());
```

# Switch / Case

Outra forma de se utilizar condicionais.

```jsx
const data = new Date('1987-04-21 00:00:00');
let diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
	case 0:
		diaSemanaTexto = 'Domingo';
		break;
	case 1:
		diaSemanaTexto = 'Segunda';
		break;
	case 2:
		diaSemanaTexto = 'Terça';
		break;
	case 3:
		diaSemanaTexto = 'Quarta';
		break;
	case 4:
		diaSemanaTexto = 'Quinta';
		break;
	case 5:
		diaSemanaTexto = 'Sexta';
		break;
	case 6:
		diaSemanaTexto = 'Sábado';
		break;
}

console.log(diaSemana, diaSemanaTexto);
// 1, 'Segunda'
```

# Atribuição via desestruturação

Arrays:

```jsx
const dados = [123, 'Gustavo', 'Priebe', 'gustavospriebe', 54321];

// A Atribuição via desestruturação permite criar e  
// atribuir diversas variáveis em uma só linha.
const [id, nome, sobrenome, login, senha] = dados;
console.log(id, nome, sobrenome, login, senha);
// 123 Gustavo Priebe gustavospriebe 54321
```

```jsx
                     0          1          2
                  0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros;

console.log(lista2[1]);
// 5
```

### Podemos atribuir valores para algumas variáveis e o restante colocar em uma variável resto:

```jsx
const dados = [123, 'Gustavo', 'Priebe', 'gustavospriebe', 54321];

const [id, nome, sobrenome, ...resto] = dados;
// 123 Gustavo Priebe ['gustavospriebe', 54321]
```

Objetos:

```jsx
const pessoa = { 
	nome: 'Gustavo', 
	sobrenome: 'Priebe', 
	idade: 24, 
	endereco: {
		rua: 'Av. Brasil',
		numero: 2456}
};

const { nome, idade } = pessoa;
console.log(nome, idade);
// Gustavo 24

const { endereco: { rua }} = pessoa;
console.log(rua);
// Av. Brasil

//Reatribuir nome
const { sobrenome : apelido }} = pessoa;
console.log(apelido);
console.log(sobrenome);
// Priebe
// undefined
```

# For Clássico - Estrutura de repetição

Funciona com iteráveis (array ou strings)

```jsx
// A estrutura de repetição for clássita necessita de 3 parâmetros para funcionar dentro da função.
// for (uma variável(i) ; condição ; incremento ou decremento) { código que vai repetir }
for (let i = 0; i <= 5 ; i++) {
	console.log(i);
}
// 0
// 1
// 2
// 3
// 4
// 5
```

# For in - Estrutura de repetição

**Retorna os índices** ou chaves do objeto. Utilizado quando o tamanho da repetição é igual ao tamanho do objeto que está sendo passado.  (string, array ou objetos)

```jsx
const frutas = ['Uva', 'Pera', 'Maçã'];

for (let i in frutas) {
	console.log(frutas[i]);
}
// Uva
// Pera
// Maçã
```

```jsx
const pessoa = {
    nome: 'Gustavo',
    sobrenome: 'Priebe',
    idade: 24
}

for (let key in pessoa) {
	console.log(key, pessoa[key]);
}
// nome Gustavo
// sobrenome Priebe
// idade 24
```

# For of - Estrutura de repetições

Diferente do in que retorna o índice, o **of retorna os valores**. (iteráveis, arrays ou strings)

```jsx
nomes = ['Gustavo', 'Siqueaira', 'Priebe']

for (let valor of nomes) {
	console.log(valor);
}

// Gustavo
// Siqueira
// Priebe
```

## Desafio de troca de cores de um componente usando repetição

Usando of: usamos a variável criada na repetição sozinha, pois o of já pega o valor.

Usando in: usamos a variável que irá repetir com [ ] da repetição, pois o in pega o índice. 

```jsx
const container = document.querySelector('.container');
const paragrafo = container.querySelectorAll('p');

const style = getComputedStyle(document.body);
const background = style.backgroundColor;
const textColor = '#fff'; 

for (let i of paragrafo) {
    i.style.backgroundColor = background;
}

for (let i in paragrafo) {
    paragrafo[i].style.color = textColor;
}
```

# While e Do While - Estrutura de repetição

Utilizado quando não sabemos o tamanho da repetição até o término.

A única diferença entre While e Do While é que o 1º vê a condição para depois executar e o 2º executa para depois ver a condição.

```jsx
function random(min, max) {
    const r = Math.floor(Math.random() * (max - min) + min);
    return r;
}

let min = 1;
let max = 50;
let number = random(min, max);
let count = 0

while (number !== 10) {
    number = random (min, max);
    count++;
    console.log(count, number);
}
```

```jsx
const quantidadeDeVoltas = 5;
let voltaAtual = 6;

do {
  console.log(voltaAtual);

  voltaAtual++;
} while (voltaAtual <= quantidadeDeVoltas);

// Será impresso: 6
// Note que mesmo a voltaAtual sendo maior que a quantidadeDeVoltas, é executado a função primeiro.
```

# Break e Continue

Continue: Quando o JS lê a palavra continue em uma condição, ele pula a próxima ação a ser executada.

Break: Quando o JS lê a palavra break em uma condição, ele encerra a execução da ação que estava sendo executada.

Exemplo com for:

```jsx
const numeros = [1,2,3,4,5,6,7,8,9];

for(let numero of numeros) {

    // Vai pular os números pares com o continue
    if (numero % 2 === 0) {
        console.log('Número par')
        continue;
    }

    // Vai parar o programa quando encontrar o número 7
    if (numero === 7) {
        console.log('7 encontrado.. Encerrando o programa')
        break;
    }

    console.log(numero);
}

// 1
// Número par
// 3
// Número par
// 5
// Número par
// 7 encontrado.. Encerrando o programa
```

Exemplo com while:

```jsx
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

// 1
// Número par
// 3
// Número par
// 5
// Número par
// 7 encontrado.. Encerrando o programa
```

# Tratando e lançando erros (try, catch, throw, finally)

Utilizado para tratar linhas de código que possam ter a possibilidade de gerar um erro.

try = é executado quando não há erros.

catch = é executado quando há erros.

```jsx
function soma(x,y) {
	return x + y;
}

try {
	console.log(soma(1,2));
	console.log(soma(2,d));
} catch (e) {
	console.log('Tem um erro');
}
// 3
// Tem um erro
```

# setInterval e setTimeout

setInterval: configura intervalo de tempo para a função ser executada a cada x tempo;

clearInterval: limpa o intervalo;

setTimeout: configura em quanto tempo a função vai ser executada **uma** vez;

clearTimeout: limpa o timeout.
