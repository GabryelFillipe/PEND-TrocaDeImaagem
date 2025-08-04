'use strict'

const botaoTrocarImagem = document.getElementById('trocar-imagem')

function trocarImagem(){
    const image = document.getElementById('image').value
    const bgImage = '\"./img/'+ image + '.jpeg\"'
    document.documentElement.style.setProperty('--bg-image', bgImage)
} 

botaoTrocarImagem.addEventListener('click' , trocarImagem)