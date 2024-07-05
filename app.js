//============================QUESTÁO 1======================================//
/*
let listaGenerica = [];
*/
//============================QUESTÁO 2======================================//
/*let linguagensDeProgramacao = ['javaScript', 'c', 'c++', 'kotlin', 'python'];
*/

//============================QUESTÁO 3======================================//
/*let linguagensDeProgramacao = ['javaScript', 'c', 'c++', 'kotlin', 'python'];
console.log(`${linguagensDeProgramacao.length}`);

linguagensDeProgramacao.push('Java');
linguagensDeProgramacao.push('Ruby');
linguagensDeProgramacao.push('GoLand');

console.log(`${linguagensDeProgramacao.length}`);
*/
//============================QUESTÁO 4======================================//
/*let listaDeNomes = ["Marcos", "Thaina", "Artur"];
console.log (`${listaDeNomes[0]}`);
*/
//============================QUESTÁO 5======================================//
/*let listaDeNomes = ["Marcos", "Thaina", "Artur"];
console.log (`${listaDeNomes[1]}`);
*/

//============================QUESTÁO 6======================================//
/*let listaDeNomes = ["Marcos", "Thaina", "Artur"];
console.log (`${listaDeNomes[2]}`);
*/


//=====================QUESTÃO 1=============================//
/*function indiceDeMassaCorporal(altura, peso){
    let imc = peso / (math.pow(altura, 2));
    return imc;
}
*/
//=====================QUESTÃO 2=============================//

//=====================QUESTÃO 3=============================//
 /*function calcularDolar(valor1){
    let conversaoReal = valor1 * 4.8;
    return conversaoReal;
 }
*/

//=====================QUESTÃO 4=============================//
/*function calcularPerimetro(altura, largura){
    let resultadoArea = altura * largura;
    let resultadoPerimetro = (altura * 2) + (largura * 2);
    return resultadoArea;
    return resultadoPerimetro;
}

let altura = 15;
let largura = 10;
*/

//=====================QUESTÃO 5=============================//
/*function circuloMedidas(raio){
    let resultadoperimetro = math.PI * raio * 2
    let resultadoArea = math.PI * Math.pow(raio, 2);
}
let raio = 10;
circuloMedidas(raio);
*/

//=====================QUESTÃO 6=============================//
/*function exibirTabuadaSoma(numeroTabuada){
    for (let i = 1; i <= 10; i++) {
        let resultadoSoma =  i + numeroTabuada;
        console.log(`${i} + ${numeroTabuada} = ${resultadoSoma}`);
    }
}

function exibirTabuadaSub(numeroTabuada){
    for (let i = 1; i <= 10; i++) {
        let resultadoSub =  i - numeroTabuada;
        console.log(`${i} - ${numeroTabuada} = ${resultadoSub}`);
    }
}
function exibirTabuadaMulti(numeroTabuada){
    for (let i = 1; i <= 10; i++) {
        let resultadoMulti =  i * numeroTabuada;
        console.log(`${i} x ${numeroTabuada} = ${resultadoMulti}`);
    }
}

function exibirTabuadaDiv(numeroTabuada){
    for (let i = 1; i <= 10; i++) {
        let resultadoDiv =  i / numeroTabuada;
        console.log(`${i} / ${numeroTabuada} = ${resultadoDiv}`);
    }
}

let numeroTabuada = 2;
exibirTabuadaSoma(numeroTabuada);
exibirTabuadaSub(numeroTabuada);
exibirTabuadaMulti(numeroTabuada);
exibirTabuadaDiv(numeroTabuada);
*/


/*
function calcularMedia(nota1, nota2, nota3, nota4){
    return (nota1 + nota2 + nota3 + nota4) / 4;
}

function verificarAprovacao(resultadoMedia){
    if (resultadoMedia >= 5){
        console.log ('Aprovado!');
    }
    else {
        console.log ('Reprovado!');
    }
}

let resultadoMedia = calcularMedia (2, 6, 3, 5);
verificarAprovacao(resultadoMedia);
console.log (`a Média é: ${resultadoMedia}`);
*/
//=====================QUESTÃO 6==============================//
/*let resultadoFinal;

function multiNumero(valor1){
    return valor1 * valor1;
}
resultadoFinal = multiNumero(10);
console.log (`A multiplicação é ${resultadoFinal}`);
*/

//========================QUESTÃO 5=========================//
/*let resultadoFinal;

function maiorDosNumeros(valor1, valor2){
    if (valor1 > valor2){
        return valor1;
    }
    else {
        return valor2;
    }
}

resultadoFinal = maiorDosNumeros(5,9);
console.log(`O maior dos números é: ${resultadoFinal}`);
*/


//========================QUESTÃO 4=========================//
/*let resultadoFinal;

function mediaDosNumeros(valor1, valor2, valor3){
    return (valor1 + valor2 + valor3) / 3;
}
resultadoFinal = mediaDosNumeros(3, 6, 9);
console.log (`A média dos números é ${resultadoFinal}`);
*/

//========================QUESTÃO 3=========================//
/*let resultadoFinal;

function dobroDoNumero(valor1){
    return valor1 * 2;
}
resultadoFinal = dobroDoNumero(3);
console.log (`O dobro é ${resultadoFinal}`);
*/


//========================QUESTÃO 2=========================//
/*function olaNome(nome){
    console.log(`Olá ${nome}!`);
}
olaNome('marcos');
*/


//========================QUESTÃO 1=========================//
/*olaMundo();

function olaMundo(){
    console.log('Olá Mundo!');
}
*/

//========================PROGRAMA PRINCIPAL=========================//
let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;
let variavelCommit;

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
exibirTextoNaTela ('h1', 'Game do Número Secreto');
exibirTextoNaTela ('p', 'Escolha um número entre 1 e 50:');
}
    exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou Miserável!');
        let palavraTentativa = tentativas > 1? 'Tentativas' : 'Tentativa';
        let mensagemTentativas = `Você escolheu o número certo com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (chute < numeroSecreto){
            exibirTextoNaTela('p', 'O numero que você escolheu é menor que o número secreto.');
        }
        else {
            exibirTextoNaTela('p', ' O numero que você escolheu é maior que o número secreto.');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroSecreto(){
    let numeroEscolhido =  parseInt(Math.random() * 10 +1);
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroSecreto();
    }
    else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
