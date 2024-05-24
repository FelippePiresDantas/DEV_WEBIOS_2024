// Função
function soma(num1,num2,num3) {
    return (num1 + num2) * num3;
};

console.log (soma(2,2,2));
console.clear ();

function media(n1,n2,n3,n4) {
    return (n1 + n2 + n3 + n4) / 4;
};

console.log (media(5,5,5,5));

console.clear ();

const media2 = (n1,n2,n3,n4) => {
    return (n1 + n2 + n3 + n4) / 4;
};

console.log (media2(6,9,6,9));
console.clear ();

function onloadTela() {
    alert ("YURI ALBERTO");
    console.log ("Angel Romero");
};
console.clear ();

const clique = () => {
    alert ("YURI VAI VIRAR O ARTILHEIRO DA ARENA");
};