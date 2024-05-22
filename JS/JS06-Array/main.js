// ARRAY / VETOR
// POSIÇÕES     0    1    2    3    4    5
var numbers = [-2,  40,  16,  111,  33,  64];
var n1 = 3;

console.log (numbers[n1]);
console.clear ();

// exercicio
var p = ["THAYNÁ", "DUDA", "MADU", "TALITA", "LARISSA", "GEOVANNA"
, "ISABELLA", "VITÓRIA"];

console.log (p[3],p[7]);
console.clear ();

// Array Bidimencional (varias linhas)
var bid = [
    ['Banana', 'Maçã', 'Pêra'],
    ['Laranja', true, 1],
    [null, 'Uva', -350]
];

console.log (bid[0][0]);
console.clear ();

// exercicio 2
var mercado = [
    ["PIPOCA", "ARROZ", "FEIJÃO", "BATATA"],
    ["MOLHO DE TOMATE", "ALFACE", "LEITE EM PÓ", "DETERGENTE"],
    ["LEITE DE CÔCO", "CÂNDIDA", "MAÇÃ", "VINAGRE"],
    ["BOLACHA", "AZEITE", "LIMÃO", "SHAMPOO"]
];

console.log (mercado[0][2], mercado[1][3], mercado[2][2], mercado[3][3]);
console.clear ();

// mudar valor
var moedas = ["Real", "Euro", "Coroa", "Dolar"];
console.log (moedas);

moedas[2] = "Guarani";
console.log(moedas);
console.clear ();

// TO STRING    Array em String
var numArray = [2,4,6,8,10];
console.log (numArray.toString());
console.clear ();

// join    Array em String escolhendo como separa
console.log (numArray.join(" - "));
console.clear ();

// length (tamanho)
console.log (numArray.length);
console.clear ();

// POP (remove o último elemento do Array)
console.log (moedas);
console.log (moedas.pop());
console.log (moedas);
console.clear ();

// PUSH (adiciona elementos no final do array ,também mostra o novo tamanho)
console.log (moedas);
console.log (moedas.push("Dolar"));
console.log (moedas);
console.clear ();

// SHIFT (igual o pop ,só que remove o primeiro)
console.log (moedas);
console.log (moedas.shift());
console.log (moedas);
console.clear ();

// UNSHIFT (igual o push ,só que insere no primeiro)
console.log (moedas);
console.log (moedas.unshift("Real"));
console.log (moedas);
console.clear ();

// DELETE (apagando elemento na posição específica)
console.log (moedas);
delete moedas[2];
console.log (moedas);
console.clear ();