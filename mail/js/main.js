let utentiAutorizzati = ["pippo","pluto","paperino","paperoga","topolino"];

const utentePrompt = prompt("Come ti chiami?");

for (i = 0; i < utentiAutorizzati.length; i++){

   let utente = utentiAutorizzati[i];

   if (utentePrompt == utente) {
      console.log("benvenuto");
   // } else if (utentePrompt !== utente) {
   //    console.log("Non sei autorizzat* ad accedere"); //opzionale, se si vuole dare errore negli altri casi
   }
}