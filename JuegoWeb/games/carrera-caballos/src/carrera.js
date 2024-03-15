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
            this.img.src = 'src/cartasSplit/imageonline/1.png'; // Ruta de la imagen que quieres agregar
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
            this.img.src = 'src/cartasSplit/imageonline/3.png'; // Ruta de la imagen que quieres agregar
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
            this.img.src = 'src/cartasSplit/imageonline/2.png'; // Ruta de la imagen que quieres agregar
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
            this.img.src = 'src/cartasSplit/imageonline/4.png'; // Ruta de la imagen que quieres agregar
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

            let num = generarNumeroAleatorio()+""
            switch (num) {
                case "5":
                case "9":
                case "13":
                case "17":
                case "22":
                case "26":
                case "30":
                case "34":
                case "38":
                case "41":
                case "45":
                    objetoAleatorio = oro
                    oro.img.src = "src/cartasSplit/imageonline/"+num+".png"
                    break;
                case "6":
                case "10":
                case "16":
                case "21":
                case "25":
                case "29":
                case "33":
                case "37":
                case "40":
                case "44":
                case "48":
                    objetoAleatorio = bastos
                    bastos.img.src = "src/cartasSplit/imageonline/"+num+".png"
                    break;
                case "7":
                case "11":
                case "14":
                case "18":
                case "19":
                case "23":
                case "27":
                case "31":
                case "35":
                case "42":
                case "46":
                    objetoAleatorio = copas
                    copas.img.src = "src/cartasSplit/imageonline/"+num+".png"
                    break;
                case "8":
                case "12":
                case "15":
                case "20":
                case "24":
                case "28":
                case "32":
                case "36":
                case "39":
                case "43":
                case "47":
                    objetoAleatorio = espadas
                    espadas.img.src = "src/cartasSplit/imageonline/"+num+".png"
                    break;
            }
            objetoAleatorio.mover(velocidad - 11, 0);
            objetoAleatorio.numRep++;
            //console.log(document.getElementById(objetoAleatorio.constructor.name))
            //console.log(document.getElementById(objetoAleatorio.constructor.name).textContent)
            if (objetoAleatorio.numRep === 9) {
                objetoAleatorio.mover(velocidad-11,0)
                clearInterval(intervalo); // Detenemos el intervalo si un objeto alcanza 9 repeticiones
                let bebedores = "Nadie";
                let imgUrl;
                switch (objetoAleatorio.constructor.name) {
                    case "Bastos":
                        bebedores = obtenerBebedoresJSON("Bastos")
                        imgUrl = "src/cartasSplit/imageonline/2.png"
                        break;
                
                    case "Oro":
                        bebedores = obtenerBebedoresJSON("Oros")
                        imgUrl = "src/cartasSplit/imageonline/1.png"
                        break;
                    case "Copas":
                        bebedores = obtenerBebedoresJSON("Copas")
                        imgUrl = "src/cartasSplit/imageonline/3.png"
                        break;
                    case "Espadas":
                        bebedores = obtenerBebedoresJSON("Espadas")
                        imgUrl = "src/cartasSplit/imageonline/4.png"
                        break;
                }
                console.log(bebedores)//[["aa","33"],["aa","33"]]
                htmlString = ""
                bebedores.forEach(function(bebedor) {
                    htmlString += "<b>" + bebedor[0] + "</b> reparte " + parseInt(bebedor[1])*2 + " tragos<br>";
                });
                Swal.fire({
                    title: "<strong>REPARTEN TRAGOS "+objetoAleatorio.constructor.name.toUpperCase()+"</strong>",
                    imageUrl: imgUrl,
                    imageHeight: 400,
                    imageAlt: "A tall image",
                    html: htmlString,
                    showCloseButton: false,
                    showCancelButton: true,
                    showConfirmButton: false,
                    cancelButtonText: `
                        Repartidos  <i class="fa-solid fa-book-skull"></i>
                    `
                });
                //TODO MONTAR ALERTA
                //alert("¡" + objetoAleatorio.constructor.name + " ha llegado a 9 repeticiones!" + "Reparten" + bebedores);
                
                
                contexto.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
                dibujarBotonEmpezar()
            }
        }

        // Configuramos el intervalo para mover aleatoriamente los objetos cada segundo
        var intervalo = setInterval(moverAleatoriamente, 1000);
        
    }
    // Variable para almacenar los números generados
    var numerosGenerados = [];

    // Función para generar un número aleatorio único dentro del rango especificado
    function generarNumeroAleatorio() {
        var min = 5;
        var max = 48;
        var rango = max - min + 1;

        // Verificar si se han generado todos los números posibles
        if (numerosGenerados.length === rango) {
            alert("Se han agotado todos los números posibles.");
            return null; // Retorna null cuando se han agotado los números
        }

        var numeroAleatorio;
        do {
            numeroAleatorio = Math.floor(Math.random() * rango) + min;
        } while (numerosGenerados.includes(numeroAleatorio));

        // Agregar el número generado al arreglo de números generados
        numerosGenerados.push(numeroAleatorio);

        return numeroAleatorio;
    }
    function obtenerBebedoresJSON(palo){
        // Obtenemos el elemento <td> por su ID
        var tdElement = document.getElementById(palo);

        // Obtenemos el contenido del elemento <td>
        var contenido = tdElement.innerHTML;

        // Separamos el contenido por la etiqueta de salto de línea (<br>)
        var lineas = contenido.split("<br>");
        
        // Creamos un objeto JSON para almacenar los valores
        var valores = [];

        // Iteramos sobre las líneas y obtenemos el nombre y el número
        lineas.forEach(function(linea) {
        var partes = linea.split("-");
        valores.push(partes);
        });

        // Imprimimos el objeto JSON resultante
        return valores;
    }
});


