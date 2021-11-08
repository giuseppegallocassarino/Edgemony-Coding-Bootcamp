/*  
  ESERCIZI SULLO SCOPE
  ATTENZIONE: provare a prima dare prima la risposta e solo dopo testare il codice!!
  Giustificatene il motivo con un commento, subito accanto a 'RISPOSTA:'.
*/

// Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual'è il risultato dei console.log?
/* RISPOSTA: Nel seguente programmino abbiamo dichiarato una costante PI in cui abbiamo assegnato
il valore 3.14 e subito dopo la stampa della seguente COSTANTE. 
Subito dopo nell'istruzione di selezione successiva abbiamo una condizione in cui se PI >= di 3 stamperà 
come in questo caso il valore della costante assegnata (PI) quindi 3.14. 
In output avremo 3.14 nel primo caso e nel secondo 3.14. */


const PI = 3.14;

console.log(PI);

if (PI >= 3) {
  console.log(PI);
}

// Es. 2: Dato il seguente, qual'è il risultato dei console.log?
/* RISPOSTA:  Prima Abbiamo assegnato 2 variabili successivamente nella struttura di selezione dichiariamo
una condizione booleana true in cui se il colore assegnato favcolor corrisponde a violet stamperà 
il mio colore preferito è violet se fosse stata falsa non avrebbe stampato nulla.
Nel caso successivo grazie alla variabile che abbiamo assegnato monthsInAYears stamperà 
il seguente messaggio: Ci sono 12 mesi in un anno.
Quindi in output troveremo entrambe le affermazioni:
- Il mio colore preferito è viola
- CI Sono 12 mesi in un anno. */

var favColour = "violet";
let monthsInAYear = 12;

if (true) {
  var favColour = "violet";
  console.log("Il mio colore preferito è:", favColour);
}

console.log("Ci sono", monthsInAYear, "mesi in un anno."); 

// Es. 3: Dato il seguente, qual'è il risultato dei console.log?
/* // RISPOSTA: In output stamperà il seguende messaggio: Sugo di pomodoro freschissimo, rucola
prosciutto crudo e scaglie di grana. (il parametro moreIngredients richiama i valori assegnati in
    makePizza)
Nella seconda istruzione nel secondo console.log darà errore e non lo stamperà perchè la variabile 
the second è stata assegnata all'interno dello (scope local) della funzione makePizza.
*/



function makePizza(moreIngredients) {
    let theSecond = "Sugo di pomodoro freschissimo";
  // { ... }
  console.log(theSecond + ", " + moreIngredients);
  return true; // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!)
}

if (true) {
  makePizza("rucola, prosciutto crudo e scaglie di grana.");
  console.log("Il secondo ingrediente necessario: ", theSecond);
}

