// Desafio Classificador de nível de Herói
// O que deve ser utilizado
// variáveis
// operadores
// estruturas de repetição
// estruturas de decisão
// Obbjetivo
// Criar uma variável para armazenar o nome e a quantidade de (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma mensagem abaixo:
// Se XP for menor que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000 = Imortal
// Se XP for maior ou igual 10.001 = Radiante

let herois = [
  {
    name: "Capitão América",
    xp: 1800,
    sexo: "masculino",
  },
  {
    name: "Iron Man",
    xp: 900,
    sexo: "masculino",
  },
  {
    name: "Hulk",
    xp: 5000,
    sexo: "masculino",
  },
  {
    name: "Thor",
    xp: 4000,
    sexo: "masculino",
  },
  {
    name: "Loki",
    xp: 6000,
    sexo: "masculino",
  },
  {
    name: "Homem Aranha",
    xp: 7900,
    sexo: "masculino",
  },
  {
    name: "Mulher Maravilha",
    xp: 7000,
    sexo: "feminino",
  },
  {
    name: "Captã Marvel",
    xp: 8500,
    sexo: "feminino",
  },
  {
    name: "Viuva Negra",
    xp: 10000,
    sexo: "feminino",
  },

  {
    name: "Doutor Estranho",
    xp: 9000,
    sexo: "masculino",
  },
];

for (let i = 0; i < herois.length; i++) {
  let xp = herois[i].xp;
  let sexo = herois[i].sexo;
  let name = herois[i].name;

  let artigo = sexo === "feminino" ? "A heroína" : "O herói";

  let Ferro = xp <= 1000;
  let Bronze = xp > 1000 && xp <= 2000;
  let Prata = xp > 2000 && xp <= 5000;
  let Ouro = xp > 5000 && xp <= 7000;
  let Platina = xp > 7000 && xp <= 8000;
  let Ascendente = xp > 8000 && xp <= 9000;
  let Imortal = xp > 9000 && xp <= 10000;
  let Radiante = xp > 10000;

  let level = "";

  if (Ferro) {
    level = "Ferro";
  } else if (Bronze) {
    level = "Bronze";
  } else if (Prata) {
    level = "Prata";
  } else if (Ouro) {
    level = "Ouro";
  } else if (Platina) {
    level = "Platina";
  } else if (Ascendente) {
    level = "Ascendente";
  } else if (Imortal) {
    level = "Imortal";
  } else if (Radiante) {
    level = "Radiante";
  }

  console.log(`${artigo} ${name} está no nível ${level}`);
}
