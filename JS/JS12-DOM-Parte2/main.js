var corinthians12 = document.getElementById("liberta");

corinthians12.style.color = "gold"

var corinthians17 = document.getElementById("brasileiro");

corinthians17.style.color = "white"

var messi = document.createElement("h1")
messi.innerHTML = "MESSI - 10"
document.body.appendChild(messi)
messi.style.color = "lightblue"

function test() {
    corinthians12.innerText = "olha o gol do Romarinhoooooo"
};

let pegaClasse = document.getElementsByClassName("erro");

// for (i = 0; i < pegaClasse.length; i++) {
//     pegaClasse[i].style.color = "gold"
// }

let byName = document.getElementsByName ("mae");

byName.forEach(funcao);

function funcao (cont, indice) {
    return byName[indice].style.color = "pink"
}
// nao deu certo isso nem por cristo vou conseguir essa mizera

// let meuDeus = document.getElementsByTagName("h1")

// meuDeus.forEach (idolos)

// function idolos(c, ind) {
//     return meuDeus[ind].style.color = "gray"
// };

// console.log (meuDeus)

// HELOISA

//getElementsByTagName
let byTagName = document.getElementsByTagName("h1");

// for (c = 0; c < byTagName.length; c++) {

//     byTagName[c].style.color = 'lightblue';
//     byTagName[c].style.fontSize = '30px';
//     byTagName[c].style.boxShadow = '5px 2px #000000';
//     if (c % 2 == 0) {byTagName[c].style.backgroundColor = 'purple';
//     }else {
//         byTagName[c].style.backgroundColor = '#fff';
//     }
// }
//     console.log(byTagName);

let removendo = document.getElementById('remove1');
removendo.remove('remove1')

console.log(byTagName);

let recebeLista = document.getElementById('paiLista')

recebeLista.style.listStyle = 'none'