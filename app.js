function convertToPixels(n) {
    if (n > 79) {
        n = 79

    }
    if (n < 0) {
        n = 0
    }
    return n * 8

}


function draw() {
    updateSnakeLocation()
    drawSnake()

    setTimeout(() => {
        window.requestAnimationFrame(draw)
    }, gameSpeed);
}

function drawSnake() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.strokeStyle = 'white'
    context.lineWidth = 1


    snakeCoordinates.forEach(c => {
        context.fillRect(convertToPixels(c[0]), convertToPixels(c[1]), 8, 8)
        context.strokeRect(convertToPixels(c[0]), convertToPixels(c[1]), 8, 8)
    })
}

function updateSnakeLocation() {
    let newX, newY

    switch (direction) {
        case 'up':
            newX = snakeCoordinates[0][0]
            newY = snakeCoordinates[0][1] - 1
            break;
        case 'down':
            newX = snakeCoordinates[0][0]
            newY = snakeCoordinates[0][1] + 1
            break;
        case 'left':
            newX = snakeCoordinates[0][0] - 1
            newY = snakeCoordinates[0][1]
            break;
        case 'right':
            newX = snakeCoordinates[0][0] + 1
            newY = snakeCoordinates[0][1]
            break;
    }

    snakeCoordinates.unshift([newX, newY])
    if (JSON.stringify([newX, newY] != JSON.stringify(foodCoordinates))) {
        
    }
    snakeCoordinates.pop()

}

function drawFood() {
    context.beginPath
    context.arc(convertToPixels(foodCoordinates[0]), convertToPixels(foodCoordinates[1]), 4, 0, Math.PI * 2, true)
    context.strokeStyle = 'red'
    context.stroke()
}

function updateFoodLocation() {
    let x, y

    do {
        x = Math.floor(Math.random() * 80)
        y = Math.floor(Math.random() * 80)
    } while (snakeCoordinates.includes([x, y]));
    return [x, y]
}

let snakeCoordinates = [
    [40, 40],
    [40, 41],
    [39, 41],
    [38, 41]
]

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
let direction = "right"
let gameSpeed = 50

drawSnake()
window.requestAnimationFrame(draw)

document.addEventListener('keydown', e => {

    switch (e.key) {
        case "ArrowUp":
            if (direction == 'left' || direction == 'right') {
                direction = "up"
            } else if (direction == 'up') {
                isGameOver = true
            }
            break;
        case "ArrowDown":
            if (direction == 'left' || direction == 'right') {
                direction = "down"
            } else if (direction == 'down') {
                isGameOver = true
            }
            break;
        case "ArrowLeft":
            if (direction == 'down' || direction == 'up') {
                direction = "left"
            } else if (direction == 'left') {
                isGameOver = true
            }
            break;
        case "ArrowRight":
            if (direction == 'left' || direction == 'down') {
                direction = "right"
            } else if (direction == 'right') {
                isGameOver = true
            }
            direction = "right"
            break;

    }

})
