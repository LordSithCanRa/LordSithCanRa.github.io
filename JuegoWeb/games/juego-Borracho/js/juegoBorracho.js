const canvas1 = document.getElementById("canvas1game");
const ctx = canvas1.getContext("2d");
canvas1.width = 900;
canvas1.height = 900;
const anchoCasilla = 90;

const tematicas = [
    "Animales",
    "Frutas",
    "Colores",
    "Países",
    "Deportes",
    "Profesiones",
    "Instrumentos Musicales",
    "Historia",
    "Cine",
    "Libros",
    "Comida",
    "Tecnología"
  ];
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
playerSprite.src = "src/tuskenraider.png";
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
    Swal.fire({
        title: 'Resultado de la tirada: '+numeroAleatorio,
        text: "Coño has sacado un "+numeroAleatorio+" bien o mal esta noche acabamos con un morao mortal.",
        html:'',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Mueve ese culo!',
        cancelButtonText: 'Solo querias tirar los dados?'
    }).then((result) => {
        if (result.isConfirmed) {
        // Swal.fire(
        //     'Moviendo el culo olgazan!!',
        //     'Has sacado un '+numeroAleatorio,
        //     'success'
        // )
        moverRepeticiones(numeroAleatorio);
        }
    })
   // Swal.fire('Sacaste un: '+numeroAleatorio)

    console.log(numeroAleatorio);
    
    
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
        sessionStorage.setItem('casilla', player.casilla)
        console.log("CASILLA SESION:"+sessionStorage.getItem('casilla'))
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
    if(key == "ArrowRight" && (player.x < (player.columna*anchoCasilla)+player.width && player.x > ((player.columna-1)*anchoCasilla)+player.width )){
        //  //CAMBIAMOS LA DIRECCION
        //  if(player.x>720){
        //     key = "ArrowLeft"
        // }else{
        //     key = "ArrowRight"
        // }
        
        window.dispatchEvent(new KeyboardEvent('keyup', { key }))
    }else if(key == "ArrowLeft" && (player.x < (player.columna*anchoCasilla)-player.width && player.x > ((player.columna-1)*anchoCasilla)-player.width )){// || player.y < player.casilla*anchoCasilla && player.y > (player.casilla-1)*anchoCasilla)){
        //console.log("STOP")
        window.dispatchEvent(new KeyboardEvent('keyup', { key }))
    }else if(key == "ArrowDown" && player.y < player.fila*anchoCasilla && player.y > (player.fila-1)*anchoCasilla){//(player.x > 720 && player.x < 900 || player.x > 0 && player.x < 80)){
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
function calculoColumna(fila, casilla){
    var casillaArr = casilla.toString().split("");
    console.log(casillaArr)
    if(esPar(fila)){
        //Par
        switch (casillaArr["1"]) {
            case "0":
                return 1;
            case "1":
                return 10;
            case "2":
                return 9;
            case "3":
                return 8;
            case "4":
                return 7;
            case "5":
                return 6;
            case "6":
                return 5;
            case "7":
                return 4;
            case "8":
                return 3;
            case "9":
                return 2;
        }
    }else{
        //Impar
        if(casillaArr.length >= 2){
            return casilla - (fila*10-10)
        }else{
            return casilla
        }
        
    }
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
    if (count >= 100) {
        //GANAMOS
        document.getElementById("dados").disabled = true
        document.getElementById("cambiarCasilla").disabled = true
        Swal.fire({
            icon: 'info',
            title: 'GANASTE!',
            text: 'Felicidades, aqui tienes el vale para que te jodan bien el culo',
            footer: '<img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/08/simpson-duffman-2043959.jpg?tf=3840x" style="max-width: 100%;" />',
            
          })
        window.dispatchEvent(new KeyboardEvent('keyup', { key }))
    } else if (count === 2 || count === 10  || count === 36  || count === 41  || count === 67  || count === 89){
        Swal.fire({
            icon: 'info',
            title: 'PASA DOS TRAGOS',
            text: 'Pasa dos tragos al cabron que quieras',
          })
    }else if (count === 18 || count === 35 || count === 49 || count === 73 || count === 95){
        Swal.fire({
            icon: 'info',
            title: 'PIEDRA PAPEL... Y ME LA COMES ENTERA',
            text: 'Reta a una persona a un piedra papel tijera, solo una oportunidad, quien pierda bebe 5 tragos',
          })
    }else if (count === 13 || count === 27 || count === 45 || count === 55 || count === 64 || count === 82 || count === 91){
        Swal.fire({
            icon: 'info',
            title: 'RETO PARA CAMBIAR LA CASILLA!',
            text: 'Reta a una persona, una vez retada debeis enseñar la posicion donde os encontrais cada uno, una vez sepais vuestras posiciones en el tablero, quien se beba primero una lata elige cambiar la posicion',
          })
    }else if (count === 16 || count === 21 || count === 29 || count === 37 || count === 34 || count === 56 || count === 69 ||  count === 76 ||count === 97){
        Swal.fire({
            icon: 'info',
            title: 'CAMBIO',
            text: 'Elige una persona para cambiar las casillas, pero sin que la persona te diga en que posicion esta hasta que la elijas',
          })
    }else if (count === 28 || count === 30 || count === 43 || count === 74){
        Swal.fire({
            icon: 'info',
            title: 'PASA TRES TRAGOS',
            text: 'Pasa tres tragos al cabron que quieras',
          })
    } else if(count === 42 || count === 57 || count === 72){
        Swal.fire({
            icon: 'info',
            title: 'BEBE TRES TRAGOS',
            text: 'Tres traguitos pa tu culo',
          })
    }else if(count === 22 || count === 58 || count === 66 || count === 79  || count === 96){
        Swal.fire({
            icon: 'info',
            title: 'BEBE DOS TRAGOS',
            text: 'Que mierda solo dos?',
          })
    }else if(count === 24 || count === 46 || count === 75 || count === 52 || count === 87 || count ===7){
        Swal.fire({
            icon: 'info',
            title: 'TIRAD UNA MONEDA',
            text: 'Si sale cruz bebes 2 tragos, pero si sale cara bebes 5 (por el culo te la hinco) oju socio como te va a pone',
          })
    }else if(count === 39 || count === 71 ){
        Swal.fire({
            icon: 'info',
            title: 'AMBULANCIA!',
            text: 'Ya sabeis lo que toca... Fumahh fumahh internachionali',
          })
    }else if(count === 5 || count === 12 || count === 32 || count === 62 || count === 85){
        Swal.fire({
            icon: 'info',
            title: 'MAYORDOMO!',
            text: 'Ea illo ta tocao, tienes que rellenarle las copas a tus colegas durante un turno, la proxima vez que te toque se te desactiva el rol de mayordomo',
          })
    }else if(count === 4 || count === 11 || count === 33 || count === 84 || count === 93){
        //DADO IGUAL A TRAGO, VIRTUALIZAR DADO
        Swal.fire({
            icon: 'info',
            title: 'DADO = TRAGO',
            text: 'Tirad un dado, lo que salga son los tragos que tendras que beber, joder beber!',
          })
    }else if(count === 15 || count === 54 || count === 99){
        Swal.fire({
            icon: 'info',
            title: 'CASCADAA!',
            text: 'Bebed todos y cuando termine de beber el de tu izquierda podras parar, joe illo que morao llevo ya',
          })
    }else if(count === 23 || count === 53){
        Swal.fire({
            icon: 'info',
            title: 'CUPIDO!',
            text: 'Enlazate a esa persona y compartid los tragos, pero no junteis las pollas, eso no',
          })
    }else if(count === 19 || count === 65){
        Swal.fire({
            icon: 'info',
            title: 'EL DARK CUPIDO!',
            text: 'El cupido renegado, envenena a una persona, esta bebera cuando tu tengas que beber, pero tu no tienes que beber su mierda, mmm me encanta la mierda',
          })
    }else if(count ===17 || count ===47 || count == 60 || count ==86){
        Swal.fire({
            icon: 'info',
            title: 'EL ULTIMO QUE LEVANTE LA MANO SE LA METE EN EL ANO',
            text: 'El ultimo que levante la mano bebe 5 tragos.',
          })
    }else if(count ===78 || count == 25 || count ==68){
        Swal.fire({
            icon: 'info',
            title: 'DUELO DE MIRADAS',
            text: 'Agachad la cabeza y a la cuenta de 3 mirad a una persona que juegue, si coincidis en miradas os eliminais y bebeis en proporción a la rona en la que os eliminen, si te eliminan el primero (eres malisimo joder) beberas una cantidad mas grande que los demas',
          })
    }else if(count ===8 || count == 50 || count ==77 || count ==44 || count == 38){
        Swal.fire({
            icon: 'info',
            title: 'MINIJUEGO',
            html: 'Dale al boton del minijuego(<i class="fa fa-gamepad"></i>) y trinca mis huevoss',
          })
    }else{
        
    }
}
function seleccionarTematicaAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * tematicas.length);
    return tematicas[indiceAleatorio];
}
function sacarCarta() {
    const indiceAleatorio = Math.floor(Math.random() * 48);
    Swal.fire({
        title: 'Esta es tu carta',
        width: '80%', // Set the width of the dialog
        padding: '2rem', // Set the padding of the dialog
        // height: 800,
        html: '<img src="cartas/cartasSplit/imageonline/'+indiceAleatorio+'.png" style="max-width: 190%;">', // Replace with your image URL
        showConfirmButton: false,
        showCloseButton: true,
        allowOutsideClick: false, // Prevent closing when clicking outside the modal
        allowEscapeKey: false, // Prevent closing with the Escape key
    });
    
    //   Swal.fire({
    //     title: 'Sweet!',
    //     text: 'Modal with a custom image.',
    //     imageUrl: 'url(cartas/cartasSplit/imageonline/'+indiceAleatorio+'.png)',
    //     imageWidth: 210,
    //     imageHeight: 320,
    //     imageAlt: 'Custom image',
    //   })
      /*Swal.fire({
        title: 'Custom width, padding, color, background.',
        width: 210,
        height: 320,
        color: '#716add',
        background: '#fff url(cartas/cartasSplit/imageonline/'+indiceAleatorio+'.png)',
      }) */
      
    console.log(indiceAleatorio)
}

function tirarDados_1() {
   document.getElementById("myCanvas").hidden(true);
   document.getElementById("canvas1game").hidden(true);
}
function cambiarCasilla(){
// Mostrar la alerta con SweetAlert
Swal.fire({
    title: 'Ingresa la casila cabronaso',
    html:
      '<input type="number" id="numero1" placeholder="Casilla" class="swal2-input" min="1" max="100" step="1" value="'+sessionStorage.getItem('casilla')+'">',
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar',
    showLoaderOnConfirm: true,
    preConfirm: () => {
      // Obtén los valores de los campos de entrada
      const numero1 = Swal.getPopup().querySelector('#numero1').value;
      //CALCULAMOS LA COLUMNA Y LA FILA
      let fila = new Number(numero1.split("").length >= 2 ? numero1.toString().split("")[0] : 0);
      fila = fila+1
      console.log(numero1.toString().length)
      let columna = new Number(calculoColumna(fila, numero1))
      //Ponemos al player en la posicion adecuada
      console.log('Número 1:', numero1);
      player.casilla = new Number(numero1)
      player.casillaOrigen = new Number(numero1-1)
      player.columna = columna
      player.fila = fila
      console.log("COLUMNA"+columna)
      console.log("FILA"+fila)
      player.x = (columna-1)*anchoCasilla + player.width
      player.y = (fila-1)*anchoCasilla + player.width
      console.log(player)
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    // Si se cancela, se muestra un mensaje en la consola
    if (result.dismiss === Swal.DismissReason.cancel) {
      console.log('Operación cancelada');
    }
  });
  
  
}
const juegos = [
    {
        titulo:"¿Quién la tiene mas larga?",
        descripcion:"El que tenga la carta mayor y hacia la derecha"
    },
    {
        titulo:"¿Quién la tiene mas larga?",
        descripcion:"El que tenga la carta mayor y hacia la izquierda"
    },
    {
        titulo:"¿Quién tiene pene pequeñito?",
        descripcion:"El que tenga la carta menor y hacia la izquierda"
    },
    {
        titulo:"¿Quién tiene pene pequeñito?",
        descripcion:"El que tenga la carta menor y hacia la derecha"
    },
    {
        titulo:"El tusi",
        descripcion:"Si no sabeis jugar al tusi que os lo explique el experto, sino que os den por culo"
    },
    {
        titulo:"Cartas en al aeropuerto de tu frente",
        descripcion:"Todos ponen su carta en la frente y gana la carta mas alta, el 1 es el mayor, hay que decir si cada uno gana o pierde tienen que haber dos que ganen, si ganas cuando no tienes que ganar o pierdes cuando tienes que ganar, bebe 4 tragos"
    }
]
function elegirMinijuego() {
    var numeroAleatorio =Math.floor(Math.random() * 5) + 1;
    console.log(juegos[numeroAleatorio])
    Swal.fire({
        icon: 'info',
        title: juegos[numeroAleatorio].titulo.toString(),
        text: juegos[numeroAleatorio].descripcion.toString(),
      })
}