/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("___________________Esercizio A");
const sum = 10 + 20;
console.log("sum", sum);

/* ESERCIZIO B
Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("___________________Esercizio B");
const random = Math.floor(Math.random() * 21);
console.log("random:", random);

/* ESERCIZIO C
Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("___________________Esercizio C");
const me = {
  name: "Luigi",
  surname: "Ventriglia",
  age: 28,
};
console.log("Me:", me);

/* ESERCIZIO D
Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("___________________Esercizio D");
delete me.age;
console.log("Me:", me);

/* ESERCIZIO E
Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("___________________Esercizio E");
me.skills = ["Java", "JavaScript", "Dart"];
console.log("Me:", me);

/* ESERCIZIO F
Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("___________________Esercizio F");
me.skills.push("Non conosco altri linguaggi di programmazione");
console.log("Me:", me);
/* ESERCIZIO G
Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("___________________Esercizio G");
me.skills.pop();
console.log("Me:", me);

// Funzioni

/* ESERCIZIO 1
Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("___________________Esercizio 1");
const dice = () => {
  return Math.floor(Math.random() * 6) + 1;
};
console.log("Random funzione:", dice());

/* ESERCIZIO 2
Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("___________________Esercizio 2");
const whoIsBigger = (num1, num2) => {
  if (num1 > num2) {
    console.log(num1, " è maggiore di ", num2);
    return num1;
  } else if (num1 < num2) {
    console.log(num2, " è maggiore di ", num1);
    return num2;
  } else {
    console.log("I due numeri sono uguali", num1, num2);
    return [num1, num2];
  }
};

console.log("il numero estratto:", whoIsBigger(6, 6));

/* ESERCIZIO 3
Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("___________________Esercizio 3");
const splitMe = (str) => {
  const arrSplit = str.split(" ");
  for (let i = 0; i < arrSplit.length; i++) {
    arrSplit[i] = arrSplit[i].charAt(0).toUpperCase() + arrSplit[i].substring(1);
  }
  return arrSplit;
};

console.log("Array splittato:", splitMe("Ciao devi splittare questa stringa"));

/* ESERCIZIO 4
Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("___________________Esercizio 4");
const deleteOne = (str, booleano) => {
  if (booleano) {
    return str.substring(1);
  } else return str.substring(0, str.length - 1);
};
console.log("Booleano true con stringa Ciao deve ritornare iao: ", deleteOne("Ciao", true));
console.log("Booleano false con stringa Ciao deve ritornare Cia: ", deleteOne("Ciao", false));

/* ESERCIZIO 5
Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("___________________Esercizio 5");
const onlyLetters = (str) => {
  const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const spliStr = str.split(" ");
  console.log(spliStr);
  for (let i = 0; i < spliStr.length; i++) {
    const element = spliStr[i];
    for (let x = 0; x < number.length; x++) {
      if (element === number[x]) {
        spliStr.splice(i, 1);
      }
    }
  }
  return spliStr.join(" ");
};
console.log("eliminare i numeri da una stringa- striga originale I have 4 dogs: ", onlyLetters("I have 4 dogs"));

/* ESERCIZIO 6
Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("___________________Esercizio 6");
const isThisAnEmail = (email) => {
  if (
    email.length > 0 &&
    (email.includes("@hotmail") || email.includes("@outlook") || email.includes("@gmail")) &&
    (email.includes(".com") || email.includes(".it") || email.includes(".live"))
  )
    return true;
  else return false;
};
const email = "ef.@hotmail.live";
console.log(email, "è un indirizzo email valido:", isThisAnEmail(email));

/* ESERCIZIO 7
Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("___________________Esercizio 7");
const whatDayIsIt = () => {
  const giorni = ["Domenica", "Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "Sabato"];
  const today = new Date();
  return giorni[today.getDay()];
};

console.log("Che giorno è oggi?", whatDayIsIt());

/* ESERCIZIO 8
Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

Example:
rollTheDices(3) => ritorna {
  sum: 10
  values: [3, 3, 4]
  }
  */
console.log("___________________Esercizio 8");
const rollTheDices = (num) => {
  const toReturn = {
    sum: 0,
    values: [],
  };
  for (let i = 0; i < num; i++) {
    const element = dice();
    console.log("Estratto il numero:", element);
    toReturn.sum += element;
    toReturn.values.push(element);
  }
  return toReturn;
};
const numeroGiri = 4;
console.log("Il dado dovrà essere tirato per:", numeroGiri, "\nrisultato:", rollTheDices(numeroGiri));

/* ESERCIZIO 9
Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("___________________Esercizio 9");
const howManyDays = (date) => {
  const today = new Date();
  if (today - date > 0) {
    return Math.floor((today - date) / (1000 * 60 * 60 * 24));
  } else {
    console.log("Non hai inserito una data valida oppure la data inserita non è ancora avvenuta.");
    return Math.floor((today - date) / (1000 * 60 * 60 * 24));
  }
};
const dataDainserire = new Date("2025-8-7");
console.log("Quanti giorni sono passati dal", dataDainserire.toDateString(), "ad oggi?", howManyDays(dataDainserire));

/* ESERCIZIO 10
Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("___________________Esercizio 10");
const isTodayMyBirthday = () => {
  const myBirthday = new Date("2025-12-30");
  const today = new Date();
  const diffGiorni = Math.floor((today - myBirthday) / (1000 * 60 * 60 * 24));
  if (diffGiorni === 0) return true;
  else return false;
};

console.log("Oggi è il tuo compleanno?", isTodayMyBirthday());

// Arrays & Oggetti
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    // Year: "2019",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

console.log("___________________Esercizio 11");
const deleteProp = (oggetto, str) => {
  delete oggetto[str];
  return oggetto;
};

const oggettoProva = {
  prop1: "prova",
  prop2: "prova",
  prop3: "prova",
};
console.log(deleteProp(oggettoProva, "prop2"));

/* ESERCIZIO 12
Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("___________________Esercizio 12");
const newestMovie = (movies) => {
  const recente = [];
  recente.push(movies[0]);
  for (let i = 1; i < movies.length; i++) {
    const element = movies[i];
    if (element.Year > recente[0].Year) {
      for (let x = 0; x < recente.length; x++) {
        recente.splice(x, recente.length);
      }
      recente.push(element);
    } else if (element.Year === recente[0].Year) recente.push(element);
  }
  console.log("Il film più recente è:", recente);
};
newestMovie(movies);

/* ESERCIZIO 13
Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("___________________Esercizio 13");
const countMovies = (movies) => {
  return movies.length;
};
console.log("Quanti film ci sono nell'array movies?", countMovies(movies));

/* ESERCIZIO 14
Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("___________________Esercizio 14");
const onlyTheYears = (movies) => {
  const anniuscita = [];
  movies.forEach((element) => {
    anniuscita.push(element.Year);
  });
  return anniuscita;
};
console.log("array con solamente gli anni di uscita:", onlyTheYears(movies));
/* ESERCIZIO 15
Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("___________________Esercizio 15");
const onlyInLastMillennium = (movies) => {
  const milleniumPast = [];
  movies.forEach((element) => {
    if (element.Year < 2000) {
      milleniumPast.push(element);
    }
  });
  return milleniumPast;
};

console.log("Tutti i film prodotti nel millenio scorso:", onlyInLastMillennium(movies));

/* ESERCIZIO 16
Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("___________________Esercizio 16");
const sumAllTheYears = (movies) => {
  let sum = 0;
  movies.forEach((element) => {
    sum += parseInt(element.Year);
  });
  return sum;
};
console.log("La somma di tutti gli anni:", sumAllTheYears(movies));

/* ESERCIZIO 17
Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("___________________Esercizio 17");
const searchByTitle = (movies, str) => {
  const search = [];
  movies.forEach((element) => {
    if (element.Title.toUpperCase().includes(str.toUpperCase())) search.push(element);
  });
  return search;
};
console.log("Ricerca film con la parola avengers", searchByTitle(movies, "avengers"));

/* ESERCIZIO 18
Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
"match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("___________________Esercizio 18");
const searchAndDivide = (movies, str) => {
  const search = {
    match: [],
    unmatch: [],
  };
  movies.forEach((element) => {
    if (element.Title.toUpperCase().includes(str.toUpperCase())) search.match.push(element);
    else search.unmatch.push(element);
  });
  return search;
};
console.log("Ricerca film con la parola avengers e rimanenti", searchAndDivide(movies, "avengers"));

/* ESERCIZIO 19
Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("___________________Esercizio 19");
const removeIndex = (movies, num) => {
  movies.splice(num - 1, 1);
  return movies;
};
const num = 2;
console.log("Elimina il film con indice:", num, movies[num - 1], removeIndex(movies, num));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("___________________Esercizio 20");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
