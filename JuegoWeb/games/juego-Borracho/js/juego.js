const canvas1 = document.getElementById("canvas1game");
const ctx = canvas1.getContext("2d");
canvas1.width = 800;
canvas1.height = 800;

var primeraTirada = false;

const keys = [];

const player ={
    x: 0,//200
    y: 0,//300,
    casillaOrigen: 1,
    casilla: 1,
    fila: 1,
    columna: 1,
    width: 32.25,
    height: 48,
    frameX: 0,
    frameY: 0,
    speed: 5,//Vector de movimiento normalizado (velocidad 9)6.363
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
    player.frameY = 0;
});
//ESTO SE PUEDE BORRAR (INVESTIGAR)
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
    if(keys["ArrowDown"] && player.y < canvas1.height - player.height /* || abajo */){
        player.y+=player.speed;
        player.frameY = 0;
        player.moving = true;
    }
    if(keys["ArrowRight"] && player.x < canvas1.width - player.width /* || derecha */){
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
        ctx.clearRect(0,0,canvas1.width,canvas1.height);
       // ctx.clearImage(player.x, player.y,player.width, player.height);
       // ctx.drawImage(background, 0,0,canvas1.width,canvas1.height);
       // drawSprite(enemieSprite, enemie.width * enemie.frameX, enemie.height * enemie.frameY, enemie.width, enemie.height, enemie.x, enemie.y, enemie.width, enemie.height);
        drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
        /* console.log(enemie); */
        //colision();
        //moveEnemie();
        //handleEnemieFrame();
        movimientoPorCasillas()
        
        /* console.log(player); */
        movePlayer();
        handlePlayerFrame();
        /* colision(player.x, player.y, enemie.x, enemie.y); */
        requestAnimationFrame(animate);
    }
}
starAnimating(30);
//PARA ESTE METODO POSIBLEMENTE SE ELIMINE TODO
var key = "ArrowRight"
var primerMovimiento = true;
var fila = 1
var columna = 1
function tirarDados_() {
    var numeroAleatorio =Math.floor(Math.random() * 6) + 1;
    Swal.fire('Sacaste un: '+numeroAleatorio)
    console.log(numeroAleatorio);
    moverRepeticiones(numeroAleatorio);
}
function moverRepeticiones(numeroAleatorio) {
   // document.getElementById("dado").innerHTML = numeroAleatorio
   // Obtén una referencia al botón que deseas hacer clic
    var boton = document.getElementById('miBoton');

    // Establece la cantidad de veces que deseas repetir el clic
    var repeticiones = numeroAleatorio;

    // Inicia el intervalo para hacer clic cada segundo
    var intervalo = setInterval(function() {
    // Verifica si se han realizado suficientes clics
    if (repeticiones <= 0) {
        // Si se han completado todas las repeticiones, detén el intervalo
        console.log("Se termina el movimiento")
        clearInterval(intervalo);
        funcionCasilla();
    } else {
        // Haz clic en el botón
        boton.click();
        
        // Reduce el número de repeticiones restantes
        repeticiones--;
    }
    }, 900); // Intervalo de 1000 ms = 1 segundo
}
function movimientoPorCasillas(){
    
   // player.fila = player.casilla.toString().length > 2 ? player.casilla.toString().split("")[0]+1 : 1;
   //console.log(player)
   // console.log(player.fila);
    if(key == "ArrowRight" && (player.x < (player.columna*80)+player.width && player.x > ((player.columna-1)*80)+player.width )){
        //  //CAMBIAMOS LA DIRECCION
        //  if(player.x>720){
        //     key = "ArrowLeft"
        // }else{
        //     key = "ArrowRight"
        // }
        
        window.dispatchEvent(new KeyboardEvent('keyup', { key }))
    }else if(key == "ArrowLeft" && (player.x < (player.columna*80)-player.width && player.x > ((player.columna-1)*80)-player.width )){// || player.y < player.casilla*80 && player.y > (player.casilla-1)*80)){
        //console.log("STOP")
        window.dispatchEvent(new KeyboardEvent('keyup', { key }))
    }else if(key == "ArrowDown" && player.y < player.fila*80 && player.y > (player.fila-1)*80){//(player.x > 720 && player.x < 800 || player.x > 0 && player.x < 80)){
        console.log("limite")
        
        window.dispatchEvent(new KeyboardEvent('keyup', { key }))
       // console.log(key)
    }    
   
}
function tirarDados(){
    primeraTirada = true;
    var numeroAleatorio = 1//Math.floor(Math.random() * 6) + 1;
    //console.log(numeroAleatorio);
    for (let i = 0; i < numeroAleatorio; i++) {
        
        player.casillaOrigen = player.casilla;
        player.casilla = player.casilla + 1;
        calculoDireccion();
        if(player.fila % 2 === 0){
            
            if(player.casilla.toString().endsWith("1")){
                console.log("reinicio")
                player.columna = 10
            }else{
                player.columna = player.columna - 1
            }
            if(player.columna == 0){
                player.columna = 1
            }
            //player.fila = player.fila+1
        }else{
            if(player.casilla.toString().endsWith("1")){
                console.log("reinicio")
                player.columna = 1
            }else{
                player.columna = player.columna + 1
            }
            if(player.columna > 10){
                player.columna = 10
            }
            //player.columna = player.columna + 1
        }
        console.log("Casilla"+player.casilla);
        
        moverCasilla();
    }
    
}
function calculoColumna(){
    arrayPrimeraColumna = []    
}
function comprobarNumero(numero, array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === numero) {
        return true;
      }
    }
    return false;
}
function calculoDireccion(){
    if(player.casillaOrigen % 10 === 0 && player.casilla % 10 === 1){
        player.fila++;
        key = "ArrowDown"
        
    }else if(player.fila % 2 === 0){
        console.log("Cambio a izq")
        key = "ArrowLeft"
    }else{
        key = "ArrowRight"
    }
}
function moverCasilla(){
    window.dispatchEvent(new KeyboardEvent('keydown', { key }))
    // if(player.x < casilla*80 && player.x > (casilla-1)*80){
    //     window.dispatchEvent(new KeyboardEvent('keyup', { key }))
    // }
}

function simularPresionarTecla(key, milis) {
    window.dispatchEvent(new KeyboardEvent('keydown', { key }))
        setTimeout(function() {
            // Tu código aquí
            window.dispatchEvent(new KeyboardEvent('keyup', { key }))
        }, milis); // 1000 milisegundos = 1 segundo
}
function esPar(numero) {
    if (numero % 2 === 0) {
      return true; // El número es par
    } else {
      return false; // El número es impar
    }
}    
function funcionCasilla() {
    let count = player.casilla
    // if(player.casilla == 7){
    //     console.log("tirolina!")
    // }else if(player.casilla == 2 || player.casilla == 10){

    // }else if(player.casilla == ){
        
    // }else if(player.casilla == ){
        
    // }else if(player.casilla == ){
        
    // }else if(player.casilla == ){
        
    // }
    if (count === 100) {
        console.log("ganaste")
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    } else if (count === 2 || count === 10  || count === 36  || count === 41  || count === 67  || count === 89){
        console.log("+5")
        moverRepeticiones(5)
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }else if (count === 18 || count === 35 || count === 49 || count === 73 || count === 95){
        console.log("1v1")
    }else if (count === 13 || count === 27 || count === 45 || count === 55 || count === 64 || count === 82 || count === 91){
        console.log("1v3")
    }else if (count === 16 || count === 21 || count === 29 || count === 37 || count === 34 || count === 56 || count === 69 ||  count === 76 ||count === 97){
        console.log("cambio de sitio")
    }else if (count === 28 || count === 30 || count === 43 || count === 74){
        console.log("+10")
        moverRepeticiones(10)
    } else if(count === 42 || count === 57 || count === 72){
        console.log("-10")
    }else if(count === 22 || count === 58 || count === 66 || count === 79  || count === 96){
        console.log("-5")
    }else if(count ===7){
        console.log("TIROLINA")
        moverRepeticiones(3)
    }else if(count === 24 || count === 46 || count === 75){
        console.log("MURO")
    }else if(count === 52 || count === 87){
        console.log("BOLA")
    }else{
        console.log("BASIC")
    }
}

