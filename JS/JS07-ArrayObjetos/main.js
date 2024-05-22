let pessoa = {
    nome: "Felippe",
    sobrenome: "Pires",
    corDosOlhos: "Castanho",
    altura: 1.80,
    corCabelo: "Preto",
    hobbie: ["Futebol", "Sinuca", "Pebolim"],
// cria outro objeto
    endereço: {
        rua: "Av. Miguel Ignácio Curi",
        numero: 111,
        bairro: "Vila Carmosina",
        cidade: "Itaquera",
        estado: "SP"
    }
};

console.log (pessoa.hobbie[0]);
console.log (pessoa.endereço.cidade);

let tarefa = [
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

console.log (tarefa[1].nomeTarefa);

let jailson = JSON.stringify(pessoa);
console.log(jailson);
let jailsonDvolta = JSON.parse(jailson);
console.log (jailsonDvolta);
console.log (pessoa);