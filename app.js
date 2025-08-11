'use strict'

const botaoTrocarImagem = document.getElementById('trocar-imagem')

function trocarImagem(){
    const image = document.getElementById('image').value
    const imagemSelecionada = image.replace(' ','-')


    document.documentElement.style.setProperty( '--bg-image', `var(--${imagemSelecionada})` )
} 

botaoTrocarImagem.addEventListener('click' , trocarImagem)

const imagemContainer = document.querySelector('.imagem');
const botaoAutomatico = document.getElementById('automatico');

let animacaoOn = false

function modoAutomatico(){

    //inverte o estado da variavel animacaoOn para começar desligado
    animacaoOn = !animacaoOn

    imagemContainer.classList.toggle('animacao-ativa');

   
        if (imagemContainer.classList.contains('animacao-ativa')) {
        botaoAutomatico.textContent = 'Parar Modo Automático';
        } else {
        botaoAutomatico.textContent = 'Iniciar Modo Automático';
    }
}


botaoAutomatico.addEventListener('click', modoAutomatico);
