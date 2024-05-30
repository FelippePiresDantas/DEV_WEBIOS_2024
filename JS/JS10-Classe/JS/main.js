class carro {
    constructor (nome, ano) {
        this.nome = nome;
        this.ano = ano;
    };
    idade (anoAtual) {
        return anoAtual - this.ano
    };
};

let carro1 = new carro("Fiat Uno", 2012);

console.log (carro1)

console.log (new carro("Jeep Renegade", 2017));

var hoje = new Date();
var recebeHoje = hoje.getFullYear();

console.log (recebeHoje);

console.log (carro1.idade(recebeHoje));