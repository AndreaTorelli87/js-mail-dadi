const gioca = document.querySelector('#gioca');


gioca.addEventListener("click",
   function () {

      const risultatiDOM = document.getElementById("risultati");
      risultatiDOM.className = `row p-3 d-flex`;

      let numeroUtente = Math.floor(Math.random() * 6) + 1;
      const numeroUtenteDOM = document.getElementById("numeroUtente");
      numeroUtenteDOM.className = `dado${numeroUtente}`;
      console.log(numeroUtenteDOM);

      let numeroComputer = Math.floor(Math.random() * 6) + 1;
      const numeroComputerDOM = document.getElementById("numeroComputer");
      numeroComputerDOM.className = `dado${numeroComputer}`;
      console.log(numeroComputerDOM);

      if (numeroUtente > numeroComputer) {
         document.getElementById("esito").innerHTML = "Hai Vinto!!!";
      } else if (numeroUtente < numeroComputer) {
         document.getElementById("esito").innerHTML = "Hai Perso...";
      } else if (numeroUtente == numeroComputer) {
         document.getElementById("esito").innerHTML = "Parità";
      }
   }
)


