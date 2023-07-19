const img = document.getElementById('turn')
const buttom = document.getElementById('buttons')           // target é para acessar o 'evento' ao clicarmos nos botões e passamos o id para mudar a cor
let colorIndex = 0                                          // da imagem mostrada
let idInterval = null    


const traffic = (event) => {
    stopOver()
    turnOn[event.target.id]()
}

const nextIndex = () => {
    if(colorIndex < 2) {
        colorIndex++
    } else {
        colorIndex = 0
    }
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex()    
}

const stopOver = () => {
    clearInterval(idInterval)
}

const turnOn = {
'red':    () => img.src = './img/vermelho.png',
'yellow': () => img.src = './img/amarelo.png',
'green':  () => img.src = './img/verde.png',
'automatic': () => idInterval = setInterval(changeColor, 1000)
}

buttom.addEventListener('click', traffic)