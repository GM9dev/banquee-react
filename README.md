# Notas de lembrança

### receita do git

- git status: ver a situação atual dos arquivos
- git add -- <endereço do arquivo> ou git add --all
  - diferença: no primeiro caso voce seleciona
    exclusivamente o arquivo, no segundo (--all)
    todos os arquivos modificados vao ser comitados
- git commit -m "Mensagem do commit"
- git pull origin <nome da branch>
- git push origin <nome da branch>

### pontos de css

- o css serve para selecionar elementos html
- pode ser usado de formar hierarquica tambem
- classes: representadas por "." exemplo:
  - <div class="nome-da-classe"> -> .nome-da-classe {}
- id: representado por "#" exemplo:
  - <div id="id_unique"> -> #id_unique {}
- element: representado pelo nome do elemento exemplo:

  - <div></div> -> div {}

- no css podemos declarar a hierarquia:

  - <div class="first-item menu-area">
      <span class="second-item">
        <label class="third-item">Texto</label>
      </span>
    </div>
  - selecionar o second-item
    - .second-item { ... }
    - span.second-item { ... }
    - .first-item .second-item { ... }
  - selecionar o third-item
    - div span label { ... }
    - .first-item .second-item .third-item { ... }
    - div span .third-item { ... }
  - no css podemos declarar conjunto:
    - .first-item.menu-area { ... }

### pontos de typescript (ts, tsx)

- 0. variaveis ou constantes

  - o javascript/typescript tem duas formas
  - let = quando muda o valor da variavel durante o programa
  - const = quando nao muda o valor durante o programa
  - o js/ts tem 3 tipos de dados primitivos
    - boolean => true ou false
    - number => 0, 1, 3, 45, 89.9
    - string => "New Zealand"

- 1. Objetos (ou dicionarios) sao estrutura de dados:

  - começam e terminam com chaves {}
  - cada propriedade é composta de chave/valor
    - key: value
    - separados por virgula em cada linha
  - {
    name: "Gio",
    age: 35
    }

- 2. Coleções ou Array sao conjutos de dados:

  - sao representados por colchetes []
  - cada indice do array começa a partir de 0
  - fruits = ["Apple", "Banana", "Watermelon"]
  - fruits[0] === "Apple" //fruits na posicao 0 e igual Apple
  - fruits[1] === "Banana" //fruits na posicao 1 e igual Banana
  - as posicoes podem ser descritas tambem por variaveis
    - itemIndex = 2
    - fruits[itemIndex] === "Watermelon" //fruits na posicao itemIndex e igual Watermelon

- 3. O typescript funciona para descrever modelos

  - ou estrutura de dados

- Exemplo de uma estrutura de dados que representa um endereço:

// estrutura de dados para representar um usuario
// o usuario deve ter nome, idade, dados adicionais e dentro dos dados adicionais armazenar varios telefones

```
type InfractionType = {
  desc: string;
  date: string;
}

type CarsType = {
  nome: string;
  multas: InfractionType[];
}

type Cliente = {
  nome: string;
  idade: number;
  dados: {
    cargo: string;
    tel: number[];
  };
  emails: string[];
  carros: CarsType[];
}

const cliente1: Cliente = {
  nome: "Gesse",
  idade: 30,
  dados: {
    cargo: "Programador",
    tel: [111111, 22222, 33333]
  },
  emails: ["", ""],
  carros: [
    {
      nome: "Fiat Uno", multas: [
        {date: "2024-05-01", desc: "Colocou em area proibida para estacionar"},
        {date: "2024-05-06", desc: "Colocou em area proibida para estacionar de novo"},
      ]
    },
    {
      nome: "Fusca", multas: [
        {date: "2023-10-14", desc: "Ultrapassou em faixa continua"}
      ]
    },
  ]
}

console.log(    cliente1.carros[0].multas.length      );

```
