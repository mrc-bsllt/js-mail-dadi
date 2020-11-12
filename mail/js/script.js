// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// creo una lista di email valide
var emailList = ["marco.busellato@libero.it", "giuseppe.busellato@libero.it", "pietro.busellato@libero.it", "matteo.busellato@libero.it", "mattia.busellato@libero.it", "piero.busellato@libero.it", "stefano.busellato@libero.it", "simone.busellato@libero.it", "alessandro.busellato@libero.it", "mario.busellato@libero.it",];

// chiedo la mail all'utente
var personalEmail = prompt("Scrivi la tua Email");

var result = false;

// controllo se nella lista della email c'è una corrispondenza
for (var i = 0; i < emailList.length; i++) {

  if (personalEmail == emailList[i]) {
    result = true;
  }

}

if ( result === true) {
  document.getElementById("result").innerHTML = "ACCESSO CONSENTITO";
} else {
  document.getElementById("result").innerHTML = "ACCESSO NEGATO";
}
