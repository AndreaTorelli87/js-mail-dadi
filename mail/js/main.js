let utentiAutorizzati = ["pippo","pluto","paperino","paperoga","topolino"];
let passValide = [123456, 000000, "password", 112233, "LaMiaPassword"]

const verifica = document.querySelector('#verifica');

const esito = document.getElementById("esito");

verifica.addEventListener('click',
   function () {

      const utentePrompt = document.getElementById('utentePrompt').value;
      const passPrompt = document.getElementById('passPrompt').value;

      
      for (i = 0; i < utentiAutorizzati.length; i++){

         let utente = utentiAutorizzati[i];
         let pass = passValide[i];

         if (utentePrompt == utente && passPrompt == pass) {
            document.getElementById("esito").innerHTML = "Benvenuto!!!";
            location.replace("../dadi/index.html")
         }
      }
      esito.className = "py-3 text-white fw-bold";
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