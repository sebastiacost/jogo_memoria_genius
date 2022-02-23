let order = [];
let clickedOrder = [];
let score = 0;

// 0 -> verde
// 1 -> vermelho
// 2 -> amarelo
// 3 -> azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// Cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1)
    }
}

// Acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
}

// Checa os botões clicados, se é a mesma ordem.
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Inicializado próximo nível!`);
        nextLevel();
    }
}

// Função para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder();
    }, 250)

}


// Função que retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

// Função para o próximo nível do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// Função game over
let gameOver = () => {
    alert(`Pontuação: ${score}\nGame over!'\nClique em 'OK' para reiniciar o game`);
    order = [];
    clickedOrder = [];

    playGame();
}

// Função início do game
let playGame = () => {
    alert(`Bem vindo ao Gênesis!\nIniciando novo game`)
    score = 0;

    nextLevel();
}

// Eventos de cliques
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//Chamando o início do game
playGame();