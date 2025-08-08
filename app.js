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

    //inverte o estado da variavel animacaoOn
    animacaoOn = !animacaoOn

    if (animacaoOn) {
        // Se for para rodar, define a propriedade 'animation' diretamente no elemento
        imagemContainer.style.animation = 'slider-automatico 27s infinite linear';
        botaoAutomatico.textContent = 'Parar Modo Automático';
    } else {
        // Se for para parar, limpa a propriedade 'animation'
        imagemContainer.style.animation = 'none';
        botaoAutomatico.textContent = 'Iniciar Modo Automático';
    }
}


botaoAutomatico.addEventListener('click', modoAutomatico);
