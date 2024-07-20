let listaNumSorteados = [];
let numLimite = 10;
let numAleatorio = gerarNumAleatorio();
let tentativas = 1;


function exibeTextonaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibeMensagemInicial(){
    exibeTextonaTela('h1','Jogo do número secreto');
    exibeTextonaTela('p','Escolha um número entre 1 e 10');
}

exibeMensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numAleatorio){
        exibeTextonaTela('h1','Você acertou!');

        let palavraTentaivas = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentaivas = `Você descobriu o número secreto com ${tentativas} ${palavraTentaivas}`;
        exibeTextonaTela('p', mensagemTentaivas);
        document.getElementById('reiniciar').removeAttribute('disabled');



    } else {
        if (chute > numAleatorio){
            exibeTextonaTela('p', 'O número secreto é menor');
        } else {
            exibeTextonaTela('p', 'O número secreto é maior');
        }

    
    tentativas++;
    limpaCampo()
    }

}

function limpaCampo(){
    chute = document.querySelector('input');
    chute = '';
}

function gerarNumAleatorio(){

    let numSorteado = parseInt(Math.random()*numLimite + 1); //Essa linha irá gerar um número aleatório entre 0 e 10
    let quantidadeDeNumSorteados = listaNumSorteados.length;
    
    if (quantidadeDeNumSorteados == numLimite) {
        listaNumSorteados = []; //Caso todos os numeros já tenham sido sorteados, a lista de numeros sorteados irá zerar
    }

    if (listaNumSorteados.includes(numSorteado)){
        return gerarNumAleatorio(); //Caso o numero aleatório já tenha sido sorteado, a função gerarNumAleatorio retorna
    } else {
        listaNumSorteados.push(numSorteado) //O metodo push irá adicionar os numeros sorteados aleatoriamente no array listaNumSorteados
        return numSorteado;
        
    }



}

function reiniciarJogo() {
    numAleatorio = gerarNumAleatorio();
    limpaCampo();
    tentativas = 1;
    exibeMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}


