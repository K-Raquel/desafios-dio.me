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

function classificarNivel(xp) {
  if (xp < 1000) return "Ferro";
  if (xp <= 2000) return "Bronze";
  if (xp <= 5000) return "Prata";
  if (xp <= 7000) return "Ouro";
  if (xp <= 8000) return "Platina";
  if (xp <= 9000) return "Ascendente";
  if (xp <= 10000) return "Imortal";
  return "Radiante";
}

for (const heroi of herois) {
  const artigo = heroi.sexo === "feminino" ? "A heroína" : "O herói";
  const level = classificarNivel(heroi.xp);
  console.log(
    `${artigo} ${heroi.name} está no nível ${level}`,
  );
}
