// Array di caratteri per ogni tipo
const lettereMaiuscole = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const lettereMinuscole = "abcdefghijklmnopqrstuvwxyz".split('');
const numeri = "0123456789".split('');
const simboli = "!@#$%^&*()_+-=[]{}|;':\",./<>?".split('');

function generaPassword() {
    let lunghezza = parseInt(document.getElementById('lunghezza').value);
    let usaMaiuscole = document.getElementById('maiuscole').checked;
    let usaMinuscole = document.getElementById('minuscole').checked;
    let usaNumeri = document.getElementById('numeri').checked;
    let usaSimboli = document.getElementById('simboli').checked;

    // almeno un tipo di carattere sia selezionato
    if (!usaMaiuscole && !usaMinuscole && !usaNumeri && !usaSimboli) {
        alert('Seleziona almeno un tipo di carattere!');
        return;
    }

    // Array caratteri obbligatori
    let caratteriObbligatori = [];

    // Array per tutti i caratteri disponibili
    let caratteriDisponibili = [];

    // Caratteri disponibili e selezioniamo uno per tipo
    if (usaMaiuscole) {
        caratteriDisponibili = caratteriDisponibili.concat(lettereMaiuscole);
        caratteriObbligatori.push(lettereMaiuscole[Math.floor(Math.random() * lettereMaiuscole.length)]);
    }

    if (usaMinuscole) {
        caratteriDisponibili = caratteriDisponibili.concat(lettereMinuscole);
        caratteriObbligatori.push(lettereMinuscole[Math.floor(Math.random() * lettereMinuscole.length)]);
    }

    if (usaNumeri) {
        caratteriDisponibili = caratteriDisponibili.concat(numeri);
        caratteriObbligatori.push(numeri[Math.floor(Math.random() * numeri.length)]);
    }

    if (usaSimboli) {
        caratteriDisponibili = caratteriDisponibili.concat(simboli);
        caratteriObbligatori.push(simboli[Math.floor(Math.random() * simboli.length)]);
    }

    // lunghezza sufficiente
    if (lunghezza < caratteriObbligatori.length) {
        alert('La lunghezza della password è troppo corta per contenere tutti i tipi di caratteri selezionati.');
        return;
    }

    // aratteri restanti da generare
    let caratteriDaGenerare = lunghezza - caratteriObbligatori.length;

    // Array password
    let passwordArray = [];

    // caratteri obbligatori password
    passwordArray = passwordArray.concat(caratteriObbligatori);

    for (let i = 0; i < caratteriDaGenerare; i++) {
        let indiceCasuale = Math.floor(Math.random() * caratteriDisponibili.length);
        passwordArray.push(caratteriDisponibili[indiceCasuale]);
    }

    // Mescoliamo l'array della password
    passwordArray = shuffleArray(passwordArray);

    let password = passwordArray.join('');

    document.getElementById('passwordGenerata').textContent = password;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
