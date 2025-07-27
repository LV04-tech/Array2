// Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media:  

// Esempio:
//     Input: a = [3, 5, 10, 2, 8]
//     Output: media = 5.6, valori minori = [3, 5, 2]

// Variante:
//   Stampa anche quanti sono i valori minori della media e quanti quelli maggiori.

let numbers = [3, 5, 10, 2, 8]

let somma = numbers.reduce( (acc, number)=> acc + number);
console.log(somma);

let media = somma / numbers.length
console.log(media);

let ValoriM = numbers.filter((number) => number < media)
console.log(ValoriM);





