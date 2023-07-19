const turnOn = document.getElementById('turn')
const turnOff = document.getElementById('off')
const lamp = document.getElementById('lamp')

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1 
    /* utilizamos o indexOf para verificar se dentro do src tem outra string(qubrada)
    // quando ele encontra(true) traz numero maior que -1, quando não encontra ele mostra
    numero -1 por isso declaramos que o quebrada precisa ser maior que -1 
    Isso deve acontecer antes de ligar ou desligar ela para verificar se está quebrada */
}

function lampOn() {
    if(!isLampBroken()) {  // se a lampada não estiver quebrada, troca para ligada
    lamp.src = './img/ligada.jpg'
}
}

turnOn.addEventListener('click', lampOn)

function lampOff() {
    if(!isLampBroken()) { // se a lampada não estiver quebrada, troca para desligada
    lamp.src = './img/desligada.jpg'
}
}

turnOff.addEventListener('click', lampOff)

function broken() {
    lamp.src = './img/quebrada.jpg'
}

lamp.addEventListener('dblclick', broken) // dblclick é duplo clique
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseout', lampOff)