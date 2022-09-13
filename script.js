let nome = document.getElementById('nome')
let sobrenome = document.getElementById('sobrenome')
let idade = document.getElementById('idade')
let buttons = document.getElementById('buttons')
let buttonBack = document.getElementById('button_back')

document.getElementById('button_limpar').addEventListener('click', limpar)

function limpar(){
    nome.value = ''
    sobrenome.value = ''
    idade.value = ''
}

let continuar = document.getElementById('continuar')
let form = document.getElementById('form')
let afterMsg = document.querySelector('.after_msg')

document.getElementById('button_enviar').addEventListener('click', enviar)

function enviar(){
    if(nome.value.length == 0 || sobrenome.value.length == 0 || idade.value.length == 0){
        window.alert('Por favor, para continuar navegando no site, preencha o formulário !')
    } else {
        form.classList.add('hide')
        continuar.classList.remove('hide')
        afterMsg.classList.remove('hide')
        buttons.classList.add('hide')
        buttonBack.classList.remove('hide')
        afterMsg.innerHTML = `Seja bem-vindo ${nome.value} ${sobrenome.value} ! Vamos continuar !`
    }
}

buttonBack.addEventListener('click', voltar)

function voltar(){
    form.classList.remove('hide')
    continuar.classList.add('hide')
    afterMsg.classList.add('hide')
    buttons.classList.remove('hide')
    buttonBack.classList.add('hide')
    
}