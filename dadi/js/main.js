const gioca = document.querySelector('#gioca');


gioca.addEventListener("click",
   function () {

      const risultatiDOM = document.getElementById("risultati");
      risultatiDOM.className = `row p-3 d-flex`;

      const esitoDOM = document.getElementById("esito");

      let numeroUtente = Math.floor(Math.random() * 6) + 1;
      const numeroUtenteDOM = document.getElementById("numeroUtente");
      numeroUtenteDOM.className = `dado${numeroUtente}`;

      let numeroComputer = Math.floor(Math.random() * 6) + 1;
      const numeroComputerDOM = document.getElementById("numeroComputer");
      numeroComputerDOM.className = `dado${numeroComputer}`;

      if (numeroUtente > numeroComputer) {
         document.getElementById("esito").innerHTML = "Hai Vinto!!!";
         esitoDOM.className = `p-5 fw-bold vittoria`;
      } else if (numeroUtente < numeroComputer) {
         document.getElementById("esito").innerHTML = "Hai Perso...";
         esitoDOM.className = `p-5 fw-bold sconfitta`;
      } else if (numeroUtente == numeroComputer) {
         document.getElementById("esito").innerHTML = "Parità";
         esitoDOM.className = `p-5 fw-bold text-white3`;
      }

      document.getElementById("gioca").innerHTML = "RI-GIOCA";
   }
)


