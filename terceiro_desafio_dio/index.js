class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = ""; 

    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

let heroi1 = new Heroi("Merlin", 150, "mago");
heroi1.atacar();

let heroi2 = new Heroi("Arthur", 30, "guerreiro");
heroi2.atacar();

let heroi3 = new Heroi("Leandro", 25, "monge");
heroi3.atacar();

let heroi4 = new Heroi("Naruto", 20, "ninja");
heroi4.atacar();