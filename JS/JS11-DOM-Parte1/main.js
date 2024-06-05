document.body.style.backgroundColor = "black"

// window.alert ("SÓ TEM CORINTHIANS NA TERÇA");

// window.confirm ("RODRIGO GARRO THE BEST");

// window.prompt ("Digite Corinthians:");

// window.open ()

// heloisa

// DOM
// Link com o arquivo HTML
// Acessar o DOM
document.title = "Times"

// se for 1 > São Paulo(cor de fundo vermelho) senão 0 Corinthians(cor de fundo preto)

var time = prompt("Qual o nome do time?")

if(time == "Sao Paulo" || time == "São Paulo"){
    alert("O time é São Paulo")
    document.body.style.backgroundColor = "red"
    // createElement > serve para criar uma tag no HTML
    let nomeTime = document.createElement('h1')
    nomeTime.innerHTML = "São Paulo - Rogério Ceni"
    document.body.appendChild(nomeTime)
    // innerHTML > Inserir uma informação no html

}else if(time == "Corinthians"){
    alert("O time é o Corinthians")
    document.body.style.backgroundColor = "black"
    let nomeTime = document.createElement('h1')
    nomeTime.innerHTML = "Corinthians - Cássio"
    nomeTime.style.color = "white"
    document.body.appendChild(nomeTime)

}else if(time == "Palmeiras"){

    alert("O time é o Palmeiras")
    document.body.style.backgroundColor = "green"
    let nomeTime = document.createElement('h1')
    nomeTime.innerHTML = "Palmeiras - Marcos"
    document.body.appendChild(nomeTime)
}else{
    alert("Não sei qual é esse time")
}