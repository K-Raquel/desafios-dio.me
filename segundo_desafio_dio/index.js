//  Calculadora de partidas Rankeadas
// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

//  Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"


let vitorias = 55;
let derrotas = 17;
let saldoVitorias = vitorias - derrotas;

console.log(`O herói tem de saldo de ${saldoVitorias} vitórias e está no nível de ${classificarNivel(vitorias)}`);

function classificarNivel(quantidadeVitorias) {
    let nivel = "";
    if (quantidadeVitorias <= 10) {
        nivel = "Ferro";
    } else if (quantidadeVitorias > 10 && quantidadeVitorias <= 20) {
        nivel = "Bronze";
    } else if (quantidadeVitorias > 20 && quantidadeVitorias <= 50) {
        nivel = "Prata";
    } else if (quantidadeVitorias > 50 && quantidadeVitorias <= 80) {
        nivel = "Ouro";
    } else if (quantidadeVitorias > 80 && quantidadeVitorias <= 90) {
        nivel = "Diamante";
    } else if (quantidadeVitorias > 90 && quantidadeVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    return nivel;

}