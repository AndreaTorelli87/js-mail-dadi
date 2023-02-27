let utentiAutorizzati = ["pippo","pluto","paperino","paperoga","topolino"];

const verifica = document.querySelector('#verifica');

const esito = document.getElementById("esito");

verifica.addEventListener('click',
   function () {

      const utentePrompt = document.getElementById('utentePrompt').value;

      
      for (i = 0; i < utentiAutorizzati.length; i++){

         let utente = utentiAutorizzati[i];

         if (utentePrompt == utente) {
            document.getElementById("esito").innerHTML = "Benvenuto!!!";
         }
      }

      esito.className =  "";
   }
)

const formReset = document.querySelector('#annulla');

formReset.addEventListener('click', 
   function() {
      
      const utentePrompt = document.getElementById('utentePrompt');
      utentePrompt.value = "";
      esito.className += " d-none";
   }
);