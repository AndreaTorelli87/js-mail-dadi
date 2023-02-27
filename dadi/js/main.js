let numeroUtente = Math.floor(Math.random() * 6) + 1;
console.log(numeroUtente);
let numeroComputer = Math.floor(Math.random() * 6) + 1;
console.log(numeroComputer);


if (numeroUtente > numeroComputer) {
   console.log("Hai Vinto!!!");
} else if (numeroUtente < numeroComputer) {
   console.log("Hai Perso...");
} else if (numeroUtente == numeroComputer) {
   console.log("Parità");
}