// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

var pariDispari = prompt('pari o dispari?');
var numero = prompt('scegli un numero da 1 a 5');


if (numero < 1 || numero > 5)
{
    alert('attenzione, inserire il numero corretto');
    numero = prompt('scegli un numero da 1 a 5');
}







// Palidroma Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma
