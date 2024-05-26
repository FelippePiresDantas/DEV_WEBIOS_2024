console.log ("Exerecíco 1");
console.log (" ");

var e1 = [17, 43, 8, 4, 97, 56, 29, 69];
e1.forEach (imparPar);

function imparPar (e1) {
    if (e1 % 2 === 0){
        console.log("O número" , e1 , "é par");
    } else{
        console.log("O número" , e1 , "é impar");
    };
};

console.log (" ")
console.log ("Exerecíco 2");
console.log (" ");

var e2 = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61, 69];

let = arrow = e2.filter ((filtro) => {
    if (filtro > 20 && filtro < 80)
        console.log (filtro)
});