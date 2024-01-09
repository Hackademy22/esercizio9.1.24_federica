// Traccia 1

// Realizzare un script che permetta all’utente di inserire un array di numeri interi, che sia almeno formato da 4 elementi: ricordate il funzionamento del metodo split()
// E successivamente di ordinarlo in modo crescente.
// Provate anche a ordinarlo in modo decrescente.
// Esempio: 
// Input: array = [3, 7, 8, 1, 2, 5, 6] 
// Output: [1, 2, 3, 5, 6, 7, 8] 




let numeri_utente = prompt("inserisci quattro numeri separati da ,");

let arr_num = numeri_utente.split(',');
arr_num = arr_num.map(( elemento ) =>parseInt(elemento))
//  crescente
arr_num.sort((a, b) => a - b);
console.log(arr_num);
//  decrescente
arr_num.sort((a, b) => b - a);
console.log(arr_num);



// Traccia 2
// Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media: 
// Esempio: 
// Input: a = [3, 5, 10, 2, 8]
// Output: media = 5.6, valori minori = [3, 5, 2] 
// Variante:
// Stampa anche quanti sono i valori minori della media e quanti quelli maggiori. 


let input = prompt("Inserisci i numeri  divisi da una ,")

let arr = input.split(',')

let somma = 0
let ele
arr.forEach((element) => {
    ele = parseFloat(element)
    somma += ele
}
);
let media = somma / arr.length
console.log(`La media dei numeri presenti è ${media}.`)
console.log(`I numeri minori della media presenti sono:`)

arr.forEach( (a) =>{
    if( a < media ){
        console.log(a)
    }
}
);






// Traccia 3
// Dato il seguente array:

// let arr = [23, 56, 77, 89, 1231, 245, 12, 61, 67, 99]

// creare un nuovo array che contenga SOLAMENTE i numeri dispari dell’array indicato.
// Utilizzare opportunamente il metodo forEach() per eseguire l’esercizio.

// Variante: eseguire l’esercizio con il metodo .map()


let inp = prompt("Inserisci i numeri separati da una virgola ")

let array = inp.split(',')
let disp = []
let elem
arr.forEach((element) => {
    elem=parseFloat(element)
    if(elem % 2){
        disp.push(elem)
    }
});
console.log(disp)

// Metodo  map()

 let disp2 = arr.filter( e =>{
     elee=parseFloat(e)
     return elee %2 == 1
 })
 console.log(disp2)








// Traccia 4
// Dato il seguente array:

// let parole = [‘Io ’, ‘ne ’, ‘ho ’, ‘viste ’, ‘cose ’, ‘che ’, ‘voi ’, ‘umani ’, ‘non ’, ‘potreste ’, ‘immaginarvi’]

// concatenare gli elementi dell’array, per ottenere una variabile stringa che contenga l’intera frase. Utilizzate il metodo reduce(). -->

let parole = [ ' Io ', ' ne ', ' ho ', ' viste ', 'cose ', ' che ', ' voi ', ' umani ',    ' non' , ' potreste ', ' immaginarvi ']

let frase = 0;

for (let i = 0; i < parole.length; i++) {

    frase = frase + parole[i];
    
}

console.log(frase);

