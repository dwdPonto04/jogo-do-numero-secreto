let listaNumeroEscolhido = [];
let numeroLimite = 10;
let numeroAleatorio = gerarnumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate : 1.2});
}
function textoIniciar() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

textoIniciar();


function verificarChute() {

    let chute = document.querySelector('input').value;
    if (chute == numeroAleatorio) {

        exibirTextoNaTela('h1', 'Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensageTentativa = `Você acertou o numero secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensageTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');


    } else {
        if (chute > numeroAleatorio) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo(chute);
    }
}

function gerarnumeroAleatorio() {

    let numeroEscolhido = (parseInt(Math.random() * numeroLimite + 1));
    let qtddElemLista = listaNumeroEscolhido.length;
    if (qtddElemLista == numeroEscolhido) {
        listaNumeroEscolhido = [];

    }
    if (listaNumeroEscolhido.includes(numeroEscolhido)) {
        return gerarnumeroAleatorio();
    } else {
        listaNumeroEscolhido.push(numeroEscolhido);
        console.log(listaNumeroEscolhido);
        return numeroEscolhido;
    }

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroAleatorio = gerarnumeroAleatorio();
    limparCampo();
    tentativas = 1;
    textoIniciar();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}