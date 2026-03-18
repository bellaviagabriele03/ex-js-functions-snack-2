

/////// SNACK 1 

// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

somma(100, 200);

function somma(n1, n2) {
    const sum = n1 + n2;
    console.log(`funzione dichiarativa, somma di ${n1} + ${n2} = ${sum}`);
}




const sumAnonima = function (n1, n2) {
    const sum = n1 + n2;
    console.log(`funzione anonima, somma di ${n1} + ${n2} = ${sum}`);

}

sumAnonima(400, 300)

const sumArrow = (n1, n2) => {
    const sum = n1 + n2; console.log(`funzione con sintassi arrow function, somma di ${n1} + ${n2} = ${sum}`);
}

sumArrow(40, 40)



/////// SNACK 2

// Crea una arrow function che calcola il quadrato di un numero.
// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const quadrato = (n) => {
    console.log(`arrow function, il quadrato del numero ${n} = ${n * 2} `);

}

quadrato(2)


//////// SNACK 3

// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri:
// due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

function somma(n1, n2) {
    const result = n1 + n2;
    return result;
}

function sottrai(n1, n2) {
    const result = n1 - n2;
    return result;

}

function moltiplica(n1, n2) {
    const result = n1 * n2;
    return result;

}

function dividi(n1, n2) {
    const result = n1 / n2;
    return result;
}

const eseguiOperazione = function (n1, n2, operazione) {
    const resultOperation = operazione(n1, n2)
    console.log(resultOperation);

}


eseguiOperazione(5, 4, somma)
eseguiOperazione(4,2, dividi)

