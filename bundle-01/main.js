/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

// 1- Vorrebbe stampare in console dei numeri;
// 2- Non presenta errori di sintassi;
// 3- Si, perchè 'i' non può essere contemporaneamente '= 0' e '> 5';


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}

// 1- Dato un numero, se questo è paro restituisce il numero + 5, altrimenti restituisce il numero presumibilmente disparo;
// 2- Si, '=' non va bene, usare '==' o '===';
// 3- Non presenta errori logici;


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

// 1- Vorrebbe stampare in console dei numeri fino a 5;
// 2- Si, ',' non va bene, usare ';';
// 3- Si, perchè per essere un 'loopToFive' 'i' dovrebbe essere '<= 5';


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// 1- Dato un array di numeri vole restiruire solo quelli pari;
// 2- Si, r52 'i++' non 'i++;' | r53 '===' non '=';
// 3- Si, r52 'numbers.length - 1' non include ultimo elemento;
//        r53 'if (numbers[i] % 2 === 0)';
//        r54 'push(numbers[i])' non 'push(i)';
//        r56 'return evenNumbers' posizionata fuori dal ciclo for;