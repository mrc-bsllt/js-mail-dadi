// Gioco dei dadi, chi fa di più vince.
// Generare un numero random da 1 a 6, sia per il
// giocatore sia per il compute. Stabilire il
// vincitore, in base a chi fa il punteggio più alto.

function myFunction() {

  // genero un numero casuale del computer
  var randonNumberComputer = Math.floor((Math.random() * 6) + 1);
  document.getElementById('pc-number').innerHTML = randonNumberComputer;

  // genero un numero casuale dell' utente
  var randonNumberUser = Math.floor((Math.random() * 6) + 1);
  document.getElementById('user-number').innerHTML = randonNumberUser;

  var messaggio = "";

  if (randonNumberComputer > randonNumberUser) {
    // cosa succede quando il numero del computer è più alto di quello utente
    messaggio = "Hai Perso!";
    document.getElementById('result').innerHTML = messaggio;
  } else if (randonNumberComputer < randonNumberUser) {
    // cosa succede quando il numero del computer è più basso di quello utente
    messaggio = "Hai Vinto!";
    document.getElementById('result').innerHTML = messaggio;
  } else {
    // cosa succede quando il numero del computer è uguale a quello utente
    messaggio = "Pari, ritira il dado!";
    document.getElementById('result').innerHTML = messaggio;

  }

}
