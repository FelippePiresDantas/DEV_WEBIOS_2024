console.log ("Exercício 1");

var ar = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995,
 "React", 2013, "Java", 1995];

 console.log (ar);
 console.log (ar.length);
 console.log (ar[6]);

 var transf = (ar.toString());
 console.log (typeof(transf));

 console.log (ar.join("/"));

 (ar.unshift("IOS"));
 console.log (ar);

 console.log ("");
 console.log ("Exercício 2");

var bid = [
    ["HTML", 1993, "CSS", 1996],
    ["Bootstrap", 2011, "JS", 1995],
    ["React", 2013, "Java", 1995]
];

console.log (bid);
console.log (bid.length);
console.log (bid[2][1]);

bid[1][2] = "JavaScript";
console.log(bid[1]);

delete bid[2][2];
console.log (bid[2]);

(bid[2].push("Pipoca"));
console.log (bid[2]);