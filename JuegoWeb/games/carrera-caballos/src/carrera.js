document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('lienzo');
    var contexto = canvas.getContext('2d');

    // Obtener el ancho y alto de la ventana del navegador
    var vw = window.innerWidth;
    var vh = window.innerHeight;

    // Establecer el tamaño del canvas en función de vw y vh
    canvas.width = vw * 0.9;
    canvas.height = vh * 0.7;
    
    // Función para dibujar el botón "Empezar"
    function dibujarBotonEmpezar() {
        contexto.fillStyle = "#ffffff";
        contexto.fillRect(canvas.width / 2 - 50, canvas.height / 2 - 25, 100, 50);
        contexto.fillStyle = "#000000";
        contexto.font = "20px Arial";
        contexto.fillText("Empezar", canvas.width / 2 - 40, canvas.height / 2 + 10);
    }

    // Función para cambiar el fondo del canvas a un gradiente de verde
    function cambiarFondo(color1, color2) {
        var gradient = contexto.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);
        contexto.fillStyle = gradient;
        contexto.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Dibujar el botón "Empezar" al cargar la página
    dibujarBotonEmpezar();

    // Agregar evento de clic al canvas
    canvas.addEventListener("click", function (event) {
        // Verificar si se hizo clic en el área del botón "Empezar"
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        if (x >= canvas.width / 2 - 50 && x <= canvas.width / 2 + 50 &&
            y >= canvas.height / 2 - 25 && y <= canvas.height / 2 + 25) {
            cambiarFondo("#0f7f0f", "#005200"); // Cambiar el fondo del canvas si se hace clic en el botón "Empezar"
            comenzarJuego(canvas, contexto); //COMENZMAMOS EL JUEGO
        }
    });
    //CLASES PARA LAS CARTAS
    class Oro {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.width = 75;
            this.height = 100;
            this.numRep=0;
            this.img = new Image();
            this.img.src = '../../games/juego-Borracho/cartas/cartasSplit/imageonline/1.png'; // Ruta de la imagen que quieres agregar
            this.img.onload = () => {
                this.dibujar(contexto);
            };
        }
    
        dibujar(ctx) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height); // Dibuja la imagen con el nuevo tamaño
        }
    
        mover(dx, dy) {
            this.x += dx;
            this.y += dy;
            this.dibujar(contexto);
        }
    }
    class Copas {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.width = 75;
            this.height = 100;
            this.numRep=0;
            this.img = new Image();
            this.img.src = '../../games/juego-Borracho/cartas/cartasSplit/imageonline/3.png'; // Ruta de la imagen que quieres agregar
            this.img.onload = () => {
                this.dibujar(contexto);
            };
        }
    
        dibujar(ctx) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height); // Dibuja la imagen con el nuevo tamaño
        }
    
        mover(dx, dy) {
            this.x += dx;
            this.y += dy;
            this.dibujar(contexto);
        }
    }
    class Bastos {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.width = 75;
            this.height = 100;
            this.numRep=0;
            this.img = new Image();
            this.img.src = '../../games/juego-Borracho/cartas/cartasSplit/imageonline/2.png'; // Ruta de la imagen que quieres agregar
            this.img.onload = () => {
                this.dibujar(contexto);
            };
        }
    
        dibujar(ctx) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height); // Dibuja la imagen con el nuevo tamaño
        }
    
        mover(dx, dy) {
            this.x += dx;
            this.y += dy;
            this.dibujar(contexto);
        }
    }
    class Espadas {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.width = 75;
            this.height = 100;
            this.numRep=0;
            this.img = new Image();
            this.img.src = '../../games/juego-Borracho/cartas/cartasSplit/imageonline/4.png'; // Ruta de la imagen que quieres agregar
            this.img.onload = () => {
                this.dibujar(contexto);
            };
        }
    
        dibujar(ctx) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height); // Dibuja la imagen con el nuevo tamaño
        }
    
        mover(dx, dy) {
            this.x += dx;
            this.y += dy;
            this.dibujar(contexto);
        }
    }
    
    function comenzarJuego(canvas, ctx) {
        var oro = new Oro(canvas.width - (canvas.width - 20), canvas.height - (canvas.height - 50));
        var copas = new Copas(canvas.width - (canvas.width - 20), canvas.height - (canvas.height - 160));
        var bastos = new Bastos(canvas.width - (canvas.width - 20), canvas.height - (canvas.height - 270));
        var espadas = new Espadas(canvas.width - (canvas.width - 20), canvas.height - (canvas.height - 380));

        // Calculamos la velocidad para que se ponga al final después de 9 pasos
        var velocidad = canvas.width / 9;

        // Función para mover los objetos aleatoriamente
        function moverAleatoriamente() {
            var objetos = [oro, copas, bastos, espadas];
            var objetoAleatorio = objetos[Math.floor(Math.random() * objetos.length)];
            objetoAleatorio.mover(velocidad - 11, 0);
            objetoAleatorio.numRep++;

            if (objetoAleatorio.numRep === 9) {
                objetoAleatorio.mover(velocidad-11,0)
                clearInterval(intervalo); // Detenemos el intervalo si un objeto alcanza 9 repeticiones
                alert("¡" + objetoAleatorio.constructor.name + " ha llegado a 9 repeticiones!");
                contexto.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
                dibujarBotonEmpezar()
            }
        }

        // Configuramos el intervalo para mover aleatoriamente los objetos cada segundo
        var intervalo = setInterval(moverAleatoriamente, 1000);
        
    }
});


