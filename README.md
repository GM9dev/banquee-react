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

```typescript
type InfractionType = {
  desc: string;
  date: string;
};

type CarsType = {
  nome: string;
  multas: InfractionType[];
};

type Cliente = {
  nome: string;
  idade: number;
  dados: {
    cargo: string;
    tel: number[];
  };
  emails: string[];
  carros: CarsType[];
};

const cliente1: Cliente = {
  nome: "Gesse",
  idade: 30,
  dados: {
    cargo: "Programador",
    tel: [111111, 22222, 33333],
  },
  emails: ["", ""],
  carros: [
    {
      nome: "Fiat Uno",
      multas: [
        {
          date: "2024-05-01",
          desc: "Colocou em area proibida para estacionar",
        },
        {
          date: "2024-05-06",
          desc: "Colocou em area proibida para estacionar de novo",
        },
      ],
    },
    {
      nome: "Fusca",
      multas: [{ date: "2023-10-14", desc: "Ultrapassou em faixa continua" }],
    },
  ],
};

console.log(cliente1.carros[0].multas.length);
```

### Estruturas de controle e repetição

```typescript
// https://www.typescriptlang.org/play/

// Estrutura de controle
// Estrutura de repetição

// if / else

let value = 7;

if (value > 20) {
  console.log("Valor maior que 20");
} else if (value > 10 && value < 20) {
  console.log("Valor entre 11 e 19");
} else if (value > 5 && value < 11) {
  console.log("Valor entre 6 e 10");
} else {
  console.log("Valor menor que 5");
}

let userName: string;

userName = "Gesse";

switch (userName) {
  case "Gio":
    console.log("User name Gio");
    break;
  case "Gesse":
    console.log("User name Gesse");
    break;
  default:
    console.log("Case default");
    break;
}

let users: string[] = [];

users.push("Gio");
users.push("Gesse");
users.push("Joao");
users.push("Maria");

for (let itemLoop = 0; itemLoop < users.length; itemLoop++) {
  const itemArray = users[itemLoop];
  console.log(itemArray);
}

for (const itemArray in users) {
  console.log("Using IN", itemArray);
}

for (const itemArray of users) {
  console.log("Using OF", itemArray);
}

const updatedUsers = users.map((item, index) => {
  console.log("Foreach: ", item, index);

  return item + " teste ";
});

console.log(updatedUsers);

// Lista de exercicios

type UserType = {
  name: string;
  created_at: string;
};

const users: UserType[] = [
  { name: "Gio", created_at: "2024-10-29 07:58:24" },
  { name: "Gesse", created_at: "2024-07-16 14:18:00" },
];

// 1. Fazer uma lista de frutas e imprimir o nome de cada uma delas
```

```typescript
const userNames: string[] = [ "Maria", "Zil", "Gesse M", "Joao", "Billy Guy"];


userNames.concat;
const result1 = userNames.concat(["Robert", "Joao"])
// console.log(result1);

userNames.every;
const result2 = userNames.every( (item) => {
    return item.length > 2;
} )
// console.log(result2);

userNames.some;
const result3 = userNames.some( (item) => {
    return item.length > 4
} );
// console.log(result3);

userNames.filter;
const result4 = userNames.filter( (item) => {
    return item.length > 4
});
// console.log(result4);

userNames.find;
const result5 = userNames.find( (item) => {
    return item.match("ia")
} );
// console.log(result5);

userNames.findIndex;
const result6 = userNames.findIndex( (item) => {
    return item.length > 9
} )
// console.log(userNames[ result6 ]);

userNames.forEach;
let totalLetras = 0
const result7 = userNames.forEach( (item) => {
    totalLetras = totalLetras + item.length
} )
// console.log(totalLetras)

userNames.includes;
const result8 = userNames.includes("Gio")
// console.log(result8)

userNames.join;
const result9 = userNames.join(", - ");
// console.log(result9);

userNames.length;
// console.log(userNames.length);

userNames.map;
const result10 = userNames.map((item) => {
    return item + "_TESTE";
});
// console.log(result10);

userNames.reduce;
const cart = [
    { id: 6, name: "Ball", price: 8.9 },
    { id: 8, name: "Chocolate", price: 5 },
]
const result11 = cart.reduce( (acc, curr) => {
    return curr.price + acc;
} , 0 )
// console.log(result11)

userNames.slice;
const result12 = userNames.slice(1,3)
// console.log(result12)

//warning: mexe no espaço de memória inicial, fazer copia antes
const copy = [...userNames];
const result13 = copy.splice(2, 1, ...["Novo usuario", "Novo usuario 1"])
// console.log(copy, result13);

userNames.sort;
const copy1 = [
    { name: "Gio" },
    { name: "Andrea" },
];
const result14 = copy1.sort((a, b) => {
    const firstLetterA = a.name[0];
    const firstLetterB = b.name.slice(0, 1);

    return firstLetterA < firstLetterB ? -1 : 1;
});
console.log(result14);

const copy2 = [...userNames];
const result15 = copy2.sort((a, b) => {
    return a.length < b.length ? -1 : 1;
});
// console.log(result15);

// copia de memoria
const value1 = [1, 2, 3];
const copyValue1 = [11, 33, ...value1 ];
// console.log(copyValue1);

const value2 = { name: "Gio" };
const copyValue2 = { id: 1, ...value2 };
// console.log(copyValue2);


// if - else

const comp1 = 10;
const comp2 = 20;

if (comp1 > comp2) {
    console.log("maior")
} else if (comp1 === 10) {
    console.log("igual a 10")
} else {
    console.log("outro resultado")
}

const resultComp = (comp1 > comp2) ? "maior" : "outro resultado"
console.log(resultComp)

```