// Condições: If, Else , Else If , Ninho/aninhamento de Ifs, If Ternário, 

/* var jogador01 = 0;
var jogador02 = 0;
var placar;

if (jogador01 != -1) { 
    if (jogador01 > 0) { 
        console.log('Jogador 01 marcou ponto!');
    }   else if (jogador02 > 0) {
         console.log('jogador02 marcou ponto!');
    }   else {
          console.log('Ninguém Marcou Ponto');
    }
} */

/* //If Ternario
var jogador01 = 0;
var jogador02 = 0;
var placar;

//If Ternario
jogador01 != -1 && jogador02 != -1 ? console.log('Os jogadores são válidos') : 
console.log('Jogadores Inválidos');

// Usando if
if (jogador01 != -1) { 
    if (jogador01 > 0 && jogador02 == 0) { 
        console.log('Jogador 01 marcou ponto!');
        placar = jogador01 > jogador02;
}
 //Usando Else If      
   else if (jogador02 > 0 && jogador01 == 0) {
         console.log('jogador02 marcou ponto!');
         placar = jogador02 > jogador01;
}       
 //Usando Else        
     else {
          console.log('Ninguém Marcou Ponto');
    }
} 
//Switch/case - funciona como uma estruta condicional também
switch (placar) {
    case placar = jogador01 > jogador02:
        console.log('O jogador 01 ganhou !');
     break;
        case placar = jogador02 > jogador01:
        console.log('O jogador 02 ganhou!');
     break;
    default:
        console.log('Ninguém Ganhou o Jogo!!!'); 
}   */

let array = ['valor01', 'valor02', 'valor03' , 'valor04',];
let object = { propriedade01: 'valor01',propriedade02: 'valor02',propriedade03: 'valor03',}

/*//For - Executa uma ação até que ela seja falsa
for (let indice = 0; indice < array.length; indice++) {
    console.log(indice); 
} */

//For In - Executa uma repetição a partir de uma propriedade
//com array
/* for (let i in array) {
    console.log(i); 
} */

//com objecte
/* for (i in object) {
    console.log(i);
} */
   
// For Of - Executa Repetição do valor 
/* for ( i of  array) {
    console.log(i);
} */

//Com Object
 for ( i of object.propriedade01) {
    console.log(i);
} 

 var a = 0;
while (a < 10) {
    a++;
    console.log(a);       
} 

 do {
    a++;
    console.log(a)
}   while (a < 10)      