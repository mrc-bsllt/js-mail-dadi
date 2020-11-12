// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// chiedo la mail all'utente
var personalEmail = prompt("Scrivi la tua Email");

// creo una lista di email valide
var emailList = ["marco.busellato@libero.it", "giuseppe.busellato@libero.it", "pietro.busellato@libero.it", "matteo.busellato@libero.it", "mattia.busellato@libero.it", "piero.busellato@libero.it", "stefano.busellato@libero.it", "simone.busellato@libero.it", "alessandro.busellato@libero.it", "mario.busellato@libero.it",];

// for per la ripetizione delle operazioni
for (var i = 0; i < emailList.length; i++) {
  // controllo se l'email inserita dall'utente è presente tra quelle della lista
  var emailCheked = personalEmail.includes(emailList[i]);
  console.log(emailCheked);
}
