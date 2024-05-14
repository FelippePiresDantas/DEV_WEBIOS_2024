var string1 = "Os alunos estão";
var string2 = "reprovados";
var string3 = "ou aprovados?";
console.log (string1,string2,string3);

// template string
var n1 = 2;
var n2 = 7;
var OlhaAi = "Os reprovados";
console.log (`${string1 + string2 + string3 + (n1 + n2) + OlhaAi}`);
console.log (string1,string2,string3 ,(n1+n2) ,OlhaAi); //tambem funciona
console.clear ();

// first letter
var totvs = "IOS fez uma excursão na TOTVS com três alunos";
console.log (totvs.charAt(24));
console.log (totvs[24]); // esse é sem precisar do charAt
console.clear ();

// conta a quantidade de caracteres
var min = "MINÚSCULO";
var mai = "maiúsculo";
console.log (min.length);
console.log (mai.length);
console.clear ();

// maiusculo e minusculo
console.log (min , "->" , min.toLocaleLowerCase());
console.log (mai , "->" , mai.toLocaleUpperCase());
console.clear ();

// substring
var str = "Mozilla";
console.log (str.substring(1,5));
console.log (str.substring(2));
console.clear ();

// replace
var mensagem = "Venha para a Microsoft!";
console.log (mensagem);
var novaMensagem = mensagem.replace ("Microsoft" , "IOS");
console.log (novaMensagem);
console.clear ();

// trim (remover espaços no inicio e no final)
var text = "                 Olá Alunos do IOS!                 ";
console.log (text.trim());