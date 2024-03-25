//GENERACION DEL MAPA
const canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    const squareSize = 90;
    const innerSquareSize = 60;
    const numSquares = 10;
    const numeroCasillas = 100;

    var count = 1;

    const fondoBorde = "#000000"
    const fondoCasillas = "#98DE3B"
    const fondoCasilla2 = "#98DE3B"
    const colorLetras = "black"
    //IMAGENES 32x32

    //VALDOSAS
    const valdosa2tragos = document.getElementById("2tragos");
    const valdosa3tragos = document.getElementById("3tragos");
    const valdosabasica = document.getElementById("basica");
    const valdosacambio = document.getElementById("cambio");
    const valdosacaracru = document.getElementById("caracru");
    const valdosacascada = document.getElementById("cascada");
    const valdosadadotrago = document.getElementById("dadoIgualTrago");
    const valdosamayordomo = document.getElementById("mayordomo");
    const valdosamas5 = document.getElementById("mas5");
    const valdosapasa2 = document.getElementById("pasa2");
    const valdosapasa3 = document.getElementById("pasa3");
    const valdosacambioReto = document.getElementById("cambioReto")
    const valdosatirolina = document.getElementById("pasa3");
    const valdosapiedraPapelTijera = document.getElementById("piedraPapelTijera");
    const valdosaambulancia = document.getElementById("ambulancia");
    const valdosaganador = document.getElementById("borrachoGanador");
    const valdosaCupido = document.getElementById("cupido");
    const valdosaDarkCupido = document.getElementById("darkCupido");
    const valdosaLevantaMano = document.getElementById("levantarMano");
    const valdosaDueloMiradas = document.getElementById("dueloMiradas");
    const valdosaMinijuego = document.getElementById("minijuego");
    // const valdosabolaCancelada = document.getElementById("bolaCancelada");

    //const valdosamuro = document.getElementById("muro");

    // const valdosamuroCancelada = document.getElementById("muroCancelada");

    // const valdosatirolina = document.getElementById("tirolina");
    dibujarMapa()
    

    
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

                context.font = "12px Arial 1rem";
                context.fillStyle = colorLetras;
                context.fillText(count, x + 5, y + 15);

                context.strokeStyle = fondoBorde;
                context.lineWidth = 0;
                context.strokeRect(x, y, squareSize, squareSize);

                var innerSquareX = x + (squareSize - innerSquareSize) / 2;
                var innerSquareY = y + (squareSize - innerSquareSize) / 2;
                elegirCasilla(count, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
                count++;
                if (count > numeroCasillas) {
                    break;
                }
            }
        } else {
            for (var i = numSquares - 1; i >= 0; i--) {
                var x = i * squareSize;
                var y = j * squareSize;

                context.fillStyle = fondoCasillas;
                context.fillRect(x, y, squareSize, squareSize);

                context.font = "12px Arial 1rem";
                context.fillStyle = colorLetras;
               context.fillText(count, x + 5, y + 15);

                context.strokeStyle = fondoBorde;
                context.lineWidth = 0;
                context.strokeRect(x, y, squareSize, squareSize);

                var innerSquareX = x + (squareSize - innerSquareSize) / 2;
                var innerSquareY = y + (squareSize - innerSquareSize) / 2;
                elegirCasilla(count, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
                count++;
                if (count > numeroCasillas) {
                    break;
                }
            }
        }

        if (count > numeroCasillas) {
            break;
        }
        
    }
}
function elegirCasilla(count, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize){
    if (count === 100) {
        context.drawImage(valdosaganador, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize);
    } else if (count === 2 || count === 10  || count === 36  || count === 41  || count === 67  || count === 89){
        context.drawImage(valdosapasa2, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
    }else if (count === 18 || count === 35 || count === 49 || count === 73 || count === 95){
        context.drawImage(valdosapiedraPapelTijera, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
    }else if (count === 13 || count === 27 || count === 45 || count === 55 || count === 64 || count === 82 || count === 91){
        context.drawImage(valdosacambioReto, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
    }else if (count === 16 || count === 21 || count === 29 || count === 37 || count === 34 || count === 56 || count === 69 ||  count === 76 ||count === 97){
        context.drawImage(valdosacambio, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
    }else if (count === 28 || count === 30 || count === 43 || count === 74){
        context.drawImage(valdosapasa3, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
    } else if(count === 42 || count === 57 || count === 72){
        context.drawImage(valdosa3tragos, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
    }else if(count === 22 || count === 58 || count === 66 || count === 79  || count === 96){
        context.drawImage(valdosa2tragos, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize)
    }else if(count === 24 || count === 46 || count === 75 || count === 52 || count === 87 || count ===7){
        context.drawImage(valdosacaracru, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize);
    }else if(count === 39 || count === 71 ){
        context.drawImage(valdosaambulancia, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize);
    }else if(count === 5 || count === 12 || count === 32 || count === 62 || count === 85){
        context.drawImage(valdosamayordomo, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize);
    }else if(count === 4 || count === 11 || count === 33 || count === 84 || count === 93){
        context.drawImage(valdosadadotrago, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize);
    }else if(count === 15  || count === 54 || count === 99){
        context.drawImage(valdosacascada, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize);
    }else if(count === 23 || count === 53){
        context.drawImage(valdosaCupido, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize);
    }else if(count === 19 || count === 65){
        context.drawImage(valdosaDarkCupido, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize);
    }else if(count ===17 || count ===47 || count == 60 || count ==86){
        context.drawImage(valdosaLevantaMano, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize);
    }else if(count ===78 || count == 25 || count ==68){
        context.drawImage(valdosaDueloMiradas, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize);
    }else if(count ===8 || count == 50 || count ==77 || count ==44 || count == 38){
        context.drawImage(valdosaMinijuego, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize);
    }else{
        context.drawImage(valdosabasica, innerSquareX, innerSquareY, innerSquareSize, innerSquareSize);
    }
}