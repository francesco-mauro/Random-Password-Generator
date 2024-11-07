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

    // Controllo almeno un tipo di carattere selezionato
    if (!usaMaiuscole && !usaMinuscole && !usaNumeri && !usaSimboli) {
        alert('Seleziona almeno un tipo di carattere!');
        return;
    }

    // Creazioneo di array con tutti i caratteri disponibili
    let caratteriDisponibili = [];

    if (usaMaiuscole) {
        caratteriDisponibili = caratteriDisponibili.concat(lettereMaiuscole);
    }

    if (usaMinuscole) {
        caratteriDisponibili = caratteriDisponibili.concat(lettereMinuscole);
    }

    if (usaNumeri) {
        caratteriDisponibili = caratteriDisponibili.concat(numeri);
    }

    if (usaSimboli) {
        caratteriDisponibili = caratteriDisponibili.concat(simboli);
    }

    // password
    let password = '';

    for (let i = 0; i < lunghezza; i++) {
        let indiceCasuale = Math.floor(Math.random() * caratteriDisponibili.length);
        password += caratteriDisponibili[indiceCasuale];
    }

    // password generata
    document.getElementById('passwordGenerata').textContent = password;
}
