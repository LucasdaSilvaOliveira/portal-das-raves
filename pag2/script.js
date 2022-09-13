let nome = document.getElementById('nome')
let msg = document.getElementById('msg')
let limpar = document.getElementById('limpar')
let enviar = document.getElementById('enviar')

enviar.addEventListener('click', enviarMsg)

function enviarMsg(){
    if(nome.value.length == 0 || msg.value.length == 0){
        window.alert('Preencha os espaços em branco para enviar alguma mensagem !')
    } else {
        window.alert('Mensagem enviada com sucesso. (Isso é só uma simulação de envio de mensagem !)')
        nome.value = ''
        msg.value = ''
    }
}

limpar.addEventListener('click', limparMsg)

function limparMsg(){
    nome.value = ''
    msg.value = ''
}