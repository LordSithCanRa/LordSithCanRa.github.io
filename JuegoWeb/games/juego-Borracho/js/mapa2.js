//GENERACION DEL MAPA
const canvas = document.getElementById("myCanvas");
    const context = canvas.getContext("2d");
    canvas.width = 800;
canvas.height = 800;

    const squareSize = 80;
    const innerSquareSize = 60;
    const numSquares = 10;
    

    var count = 1;

    const fondoBorde = "#000000"
    const fondoCasillas = "#ceeda5"

    //IMAGENES 32x32

    //VALDOSAS
    const valdosa1vs1 = document.getElementById("1vs1");

    const valdosa1vs3 = document.getElementById("1vs3");

    const valdosabasica = document.getElementById("basica");

    const valdosacambio = document.getElementById("cambio");

    const valdosamas5 = document.getElementById("mas5");

    const valdosamas10 = document.getElementById("mas10");

    const valdosamenos5 = document.getElementById("menos5");
    
    const valdosamenos10 = document.getElementById("menos10");

    const valdosa6gana = document.getElementById("6gana");

    const valdosabola = document.getElementById("bola");

    const valdosabolaCancelada = document.getElementById("bolaCancelada");

    const valdosamuro = document.getElementById("muro");

    const valdosamuroCancelada = document.getElementById("muroCancelada");

    const valdosatirolina = document.getElementById("tirolina");
    const keys = [];

const player ={
    x: 200,//200
    y: 300,//300,
    width: 32.25,
    height: 48,
    frameX: 0,
    frameY: 0,
    speed: 6.363,//Vector de movimiento normalizado (velocidad 9)
    moving: false
};


const playerSprite = new Image();
playerSprite.src = "src/obiwan1.png";
// const background = new Image();
// background.src = "background.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {

    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

window.addEventListener("keydown", function (e) {
    keys[e.key] = true;
    player.moving = true;
});
window.addEventListener("keyup", function (e) {
    delete keys[e.key];
    player.moving = false;
});
function movePlayer(){
    if(keys["ArrowUp"] && player.y>0 /* || arriba */){
        player.y-=player.speed;
        player.frameY = 3;
        player.moving = true;

    }
    if(keys["ArrowLeft"] && player.x>0 /* || izquierda */){
        player.x-=player.speed;
        player.frameY = 1;
        player.moving = true;
    }
    if(keys["ArrowDown"] && player.y < canvas.height - player.height /* || abajo */){
        player.y+=player.speed;
        player.frameY = 0;
        player.moving = true;
    }
    if(keys["ArrowRight"] && player.x < canvas.width - player.width /* || derecha */){
        player.x+=player.speed;
        player.frameY = 2;
        player.moving = true;
    }
}
function handlePlayerFrame() {
    if(player.frameX < 3 && player.moving){
       player.frameX++;
    }else {
        player.frameX = 0;
    }
}
let fps, fpsInterval, starTime, now, then, elapsed;

function starAnimating(fps){
    fpsInterval = 1000/fps;
    then = Date.now();
    starTime = then;
    animate();
}
function animate() {
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if(elapsed > fpsInterval){
        then = now - (elapsed % fpsInterval);
        ctx.clearRect(0,0,canvas.width,canvas.height);
       // ctx.drawImage(background, 0,0,canvas.width,canvas.height);
       // drawSprite(enemieSprite, enemie.width * enemie.frameX, enemie.height * enemie.frameY, enemie.width, enemie.height, enemie.x, enemie.y, enemie.width, enemie.height);
       dibujarMapa()
        drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
        /* console.log(enemie); */
        //colision();
        //moveEnemie();
        //handleEnemieFrame();
        
        
        /* console.log(player); */
        movePlayer();
        handlePlayerFrame();
        
        /* colision(player.x, player.y, enemie.x, enemie.y); */
        requestAnimationFrame(animate);
    }
}
starAnimating(30);
    

    
function elegirImagen(numeroCasilla, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize){
    switch (numeroCasilla) {

        case 100:
        context.drawImage(image2, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize);
            break;
    
        default:
        context.drawImage(image1, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize);
            break;
    }
}

function dibujarMapa() {
    for (var j = 0; j < numSquares; j++) {
        if (j % 2 === 0) {
            for (var i = 0; i < numSquares; i++) {
                var x = i * squareSize;
                var y = j * squareSize;

                context.fillStyle = fondoCasillas;
                context.fillRect(x, y, squareSize, squareSize);

                context.font = "12px Arial";
                context.fillStyle = "#000000";
                context.fillText(count, x + 5, y + 15);

                context.strokeStyle = fondoBorde;
                context.lineWidth = 0;
                context.strokeRect(x, y, squareSize, squareSize);

                var innerSquareX = x + (squareSize - innerSquareSize) / 2;
                var innerSquareY = y + (squareSize - innerSquareSize) / 2;
                //elegirImagen(numeroCasilla, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize, context);
                if (count === 100) {
                    context.drawImage(valdosa6gana, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize);
                } else if (count === 2 || count === 10  || count === 36  || count === 41  || count === 67  || count === 89){
                    context.drawImage(valdosamas5, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
                }else if (count === 18 || count === 35 || count === 49 || count === 73 || count === 95){
                    context.drawImage(valdosa1vs1, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
                }else if (count === 13 || count === 27 || count === 45 || count === 55 || count === 64 || count === 82 || count === 91){
                    context.drawImage(valdosa1vs3, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
                }else if (count === 16 || count === 21 || count === 24 || count === 29 || count === 37 || count === 34 || count === 56 || count === 69 ||  count === 76 ||count === 97){
                    context.drawImage(valdosacambio, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
                }else if (count === 28 || count === 30 || count === 43 || count === 74){
                    context.drawImage(valdosamas10, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
                } else if(count === 42 || count === 57 || count === 75){
                    context.drawImage(valdosamenos10, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
                }else if(count === 22 || count === 58 || count === 66 || count === 79  || count === 96){
                    context.drawImage(valdosamenos5, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
                }else if(count ===7){
                    context.drawImage(valdosatirolina, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
                }else {
                    context.drawImage(valdosabasica, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize);
                }

                count++;
                if (count > 100) {
                    break;
                }
            }
        } else {
            for (var i = numSquares - 1; i >= 0; i--) {
                var x = i * squareSize;
                var y = j * squareSize;

                context.fillStyle = fondoCasillas;
                context.fillRect(x, y, squareSize, squareSize);

                context.font = "12px Arial";
                context.fillStyle = "#000000";
               context.fillText(count, x + 5, y + 15);

                context.strokeStyle = fondoBorde;
                context.lineWidth = 0;
                context.strokeRect(x, y, squareSize, squareSize);

                var innerSquareX = x + (squareSize - innerSquareSize) / 2;
                var innerSquareY = y + (squareSize - innerSquareSize) / 2;
                if (count === 100) {
                    context.drawImage(valdosa6gana, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize);
                } else if (count === 2 || count === 10  || count === 36  || count === 41  || count === 67  || count === 89){
                    context.drawImage(valdosamas5, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
                }else if (count === 18 || count === 35 || count === 49 || count === 73 || count === 95){
                    context.drawImage(valdosa1vs1, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
                }else if (count === 13 || count === 27 || count === 45 || count === 55 || count === 64 || count === 82 || count === 91){
                    context.drawImage(valdosa1vs3, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
                }else if (count === 16 || count === 21 || count === 24  || count === 29 || count === 37 || count === 34 || count === 56 || count === 69 || count === 76 || count === 97){
                    context.drawImage(valdosacambio, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
                }else if (count === 28 || count === 30 || count === 43 || count === 74){
                    context.drawImage(valdosamas10, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
                }else if(count === 42 || count === 57 || count === 75){
                    context.drawImage(valdosamenos10, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
                }else if(count === 22 || count === 58 || count === 66 || count === 79  || count === 96){
                    context.drawImage(valdosamenos5, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
                }else if(count === 7){
                    context.drawImage(valdosatirolina, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
                }else {
                    context.drawImage(valdosabasica, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize);
                }

                count++;
                if (count > 100) {
                    break;
                }
            }
        }

        if (count > 100) {
            break;
        }
        
    }
}
