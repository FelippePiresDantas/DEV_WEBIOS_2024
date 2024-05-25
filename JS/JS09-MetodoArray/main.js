// fez a mesma coisa que o forEach
var frutas = ["Goiaba", "Pera", "Jaca", "Caqui", "Carambola", "Pitaya"];
console.log (frutas);
for(var i = 0; i < frutas.length; i++);{
    console.log ("Índice:" , i);
    console.log ("Fruta:" , frutas[i]);
};
console.clear ();

// Método forEach() 
// percorre todo o comando , no exemplo ele percorre todas as posições
frutas.forEach (retornaInfo);
function retornaInfo(nomeFruta, indice) {
    console.log ("Fruta:" , nomeFruta , "/ Número:" , indice);
};

console.clear ();

// Arrow Function
frutas.forEach (teste = (nomeFruta, indice) => {
    console.log ("Fruta:" , nomeFruta , "/ Número:" , indice);
});

console.clear ();

let tarefas = [
    {
        id: 1,
        isPronta: true,
        nomeTarefa: "Pular"
    },
    {
        id: 2,
        isPronta: false,
        nomeTarefa: "Ir pra Casa"
    },
    {
        id: 3,
        isPronta: false,
        nomeTarefa: "Dormir"
    }
];

// ARROW FUNCTION MENOR
tarefas.forEach ((tarefa) => console.log(tarefa.id , tarefa.nomeTarefa));
console.clear ();

// Método Map
// altera o array mas nao altera o original
let numeros = [2000, 2011, 2012, 2015, 2017];

let novoArray = numeros.map (Math.sqrt);

console.log ("Antigo:");
for (var cont = 0; cont < numeros.length; cont++) {
    console.log (cont+1 , "---" , numeros[cont]);
};

console.log ("Novo:");
for (var cont = 0; cont < novoArray.length; cont++) {
    console.log (cont+1 , "---" , novoArray[cont]);
};
console.clear ();

// Método Filter
// filtra oq vc quiser
let numeros2 = [3, 13, 24, 36, 47, 50, 60, 78, 89];

let resultado = numeros2.filter (retornaFiltro);

function retornaFiltro(num) {
    return num > 30 && num < 70;
};

console.log (resultado);

let tarefaFiltro = tarefas.filter ((resultadoFiltro) => {
    return resultadoFiltro.isPronta === false
});

console.log (tarefaFiltro);

console.clear ();

// Método Find
// conta quantos são falsos e quantos verdadeiros
let sapatos = [
    {marca: "Nike", quantidade: 3},
    {marca: "Adidas", quantidade: 5},
    {marca: "Puma", quantidade: 7}
];

sapatos.find ((retornaFind) => {
    console.log (retornaFind.marca == "Puma");
});

console.log (sapatos);