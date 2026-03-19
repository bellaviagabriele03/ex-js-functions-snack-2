

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
eseguiOperazione(4, 2, dividi)


///// SNACK 4 

// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e 
// restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(ms) {
    return setTimeout(() => {
        console.log("Tempo scaduto !");

    }, ms)
}

creaTimer(1000)


//////// SNACK 5

// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

function stampaOgniSecondo(ms) {
    const interval = setInterval(() => {
        console.log("ogni secondo faccio qualcosa !");

    }, ms)
    setInterval(() => {
        clearInterval(interval)
    }, 7000)
}


stampaOgniSecondo(1000)


//////// SNACK 6

// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e
// restituisce una funzione che avvia un setInterval,
// incrementando un contatore e stampandolo.


function creaContatoreAutomatico(ms) {
    let contatore = 0;
    const interval = setInterval(() => {
        contatore++;
        console.log(contatore);
        if (contatore === 6) {
            clearInterval(interval)
        }
    }, ms)


}


creaContatoreAutomatico(1000)



////// SNACK 7

// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio,
// un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari,
// ma si deve fermare dopo il tempo di stop.



function eseguiEferma(message, start, end) {
    const interval = setInterval(() => {
        console.log(message);

    }, start)
    setInterval(() => {
        clearInterval(interval)
    }, end)
}


eseguiEferma("ciao", 1000, 5000);
