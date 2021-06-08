//TODO Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.



// input
var pariDispari = prompt('Pari o Dispari?');

var numero = parseInt(prompt('Scegli un numero da 1 a 5'));

var generatorePc = numeroR(1,5);

var somma = sommaNumeri(numero, generatorePc);
console.log(somma);



// function
function numeroR(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function sommaNumeri(num1, num2){
    return somma = num1 + num2;
}
// console.log(sommaNumeri(numero, generatorePc));



// output

function isPari(sum){
    if(sum % 2 == 0){
        return 'pari';
    } else{
        return 'dispari';
    }    
}
// console.log(isPari(somma));

var risultato = isPari(somma);
console.log('risultato della funzione' + risultato);

console.log('utente:' + pariDispari);



if (risultato == pariDispari){
    document.getElementById('pari-dispari').innerHTML = 'L\'utente ha vinto';
} else {
    document.getElementById('pari-dispari').innerHTML = 'L\'utente ha perso';
}


















// input
// var pariDispari = prompt('pari o dispari?');
// var numero = prompt('scegli un numero da 1 a 5');

// var generatorePc = numRandom(1,5);
// console.log('Il pc ha fatto' + ' ' + generatorePc);


// var somma = (numero, generatorePc);



// function
// function numRandom(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function somma(a, b){
//     return a + b;
// }



// output
// if(somma % 2 == 0 && pariDispari == "pari"){
//     document.getElementById("pari-dispari").innerHTML = "Hai vinto!!!"
// }else if(somma % 2 != 0 && pariDispari == "dispari"){
//     document.getElementById("pari-dispari").innerHTML = "Hai vinto!!!"
// }else{
//     document.getElementById("pari-dispari").innerHTML = "Mi dispiace, ha vinto il computer!!!"
// }
// console.log('La somma tra i due numeri è' + ' ' + somma);




// Alert
// if (numero < 1 || numero > 5)
// {
//     alert('attenzione, inserire il numero corretto');    
// }




//TODO Palidroma Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma



var parola = prompt('inserire una parola');

var parolaInversa = invertiParola(parola);

if(parola == parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
  
function invertiParola(x){
  var xInversa = x.split('').reverse().join('');  
  return xInversa;
}





