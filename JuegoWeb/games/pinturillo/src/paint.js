    document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('lienzo');
    var contexto = canvas.getContext('2d');
    var historial = [];
    var indiceHistorial = -1;
    var pintando = false;
    var color = document.getElementById('colorPicker').value;
    var grosor = document.getElementById('grosor').value;
    var borradorActivado = false;
    var cuboActivo = false;
    
    // Obtener el ancho y alto de la ventana del navegador
    var vw = window.innerWidth;
    var vh = window.innerHeight;

    // Establecer el tamaño del canvas en función de vw y vh
    canvas.width = vw * 0.9; // Por ejemplo, el canvas ocupará el 50% del ancho de la ventana
    canvas.height = vh * 0.7; // Por ejemplo, el canvas ocupará el 50% de la altura de la ventana

    pintarFondo()

    function pintarFondo(){
        document.getElementById('colorPicker').value = '#FFFFFF'
        //cuboActivo = true;
        rellenarSuperficie(0,0)
        //cuboActivo = false;
        document.getElementById('colorPicker').value = color
    }

    function iniciarPintado(evento) {
        var coordinates = getCanvasCoordinates(evento);
        if (cuboActivo) {
            rellenarSuperficie(coordinates.x, coordinates.y);
        } else {
            pintando = true;
            pintar(coordinates);
        }
    }

    function detenerPintado() {
        pintando = false;
        contexto.beginPath(); // Comenzar un nuevo trazo
        guardarEstado(); // Guardar el estado después de cada trazo
    }

    function pintar(coordinates) {
        if (!pintando) return;
        contexto.strokeStyle = color;
        contexto.lineWidth = grosor;
        contexto.lineCap = 'round';
        contexto.lineJoin = 'round';

        contexto.lineTo(coordinates.x, coordinates.y);
        contexto.stroke();
        contexto.beginPath(); // Comenzar un nuevo trazo
        contexto.moveTo(coordinates.x, coordinates.y); // Mover al nuevo punto
    }

    function getCanvasCoordinates(event) {
        var rect = canvas.getBoundingClientRect(); // Obtener las dimensiones y la posición del canvas
        var x = event.clientX - rect.left; // Calcular la coordenada x dentro del canvas
        var y = event.clientY - rect.top; // Calcular la coordenada y dentro del canvas
        return { x: x, y: y };
    }

    canvas.addEventListener('mousedown', iniciarPintado);
    canvas.addEventListener('mousemove', function(event) {
        var coordinates = getCanvasCoordinates(event);
        if (!cuboActivo) {
            pintar(coordinates);
        }
    });
    canvas.addEventListener('mouseup', detenerPintado);
    canvas.addEventListener('mouseleave', detenerPintado); // Detener el pintado cuando el cursor sale del canvas

    canvas.addEventListener('touchstart', function (evento) {
        if (cuboActivo) {
            var coordinates = getCanvasCoordinates(evento.touches[0]);
            rellenarSuperficie(coordinates.x, coordinates.y);
        } else {
            iniciarPintado(evento.touches[0]);
        }
    });
    canvas.addEventListener('touchmove', function (evento) {
        if (!cuboActivo) {
            var coordinates = getCanvasCoordinates(evento.touches[0]);
            pintar(coordinates);
            evento.preventDefault();
        }
    });
    canvas.addEventListener('touchend', detenerPintado);

    // Resto del código...

    // Cambiar color
    document.getElementById('colorPicker').addEventListener('input', function () {
        color = this.value;
        if (borradorActivado) {
            document.getElementById('borrador').click(); // Desactivar borrador si se estaba usando
            borradorActivado = false;
        }
    });

    // Cambiar grosor
    document.getElementById('grosor').addEventListener('input', function () {
        grosor = this.value;
    });

    // Botón de Lápiz
    document.getElementById('lapiz').addEventListener('click', function () {
        color = document.getElementById('colorPicker').value;
        borradorActivado = false;
        cuboActivo = false;
        canvas.style.cursor = 'auto';
    });

    // Botón de Borrador
    document.getElementById('borrador').addEventListener('click', function () {
        color = '#FFFFFF'; // Color blanco para borrar
        grosor = 20; // Grosor grande para borrar más fácilmente
        borradorActivado = true;
        cuboActivo = false;
        canvas.style.cursor = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAP0lEQVQ4jWNgGHrg////p/wxMDAwMP8Fgf8uBL6ZTieJoxeBqZgIN8NCDhfwiFAABnA7lo0AIUwAAAABJRU5ErkJggg==), auto'; // Cursor de borrador
        
    });

    // Botón de Cubo para rellenar
    /*document.getElementById('cubo').addEventListener('click', function () {
        color = document.getElementById('colorPicker').value;
        cuboActivo = true;
        canvas.style.cursor = 'crosshair';
    });*/

    // Botón para borrar todo el lienzo
    document.getElementById('borrarTodo').addEventListener('click', function () {
        contexto.clearRect(0, 0, canvas.width, canvas.height);
        pintarFondo();
        guardarEstado(); // Guardar el estado después de borrar todo
    });

    // Botón de retroceder
    document.getElementById('retroceder').addEventListener('click', function () {
        retroceder();
    });

    // Botón de avanzar
    document.getElementById('avanzar').addEventListener('click', function () {
        avanzar();
    });

    // Obtener todos los elementos con la clase .colorPorDefecto
    var botones = document.querySelectorAll('.colorPorDefecto');

    // Agregar un evento de click a cada botón
    botones.forEach(function(boton) {
        boton.addEventListener('click', function() {
            color = boton.getAttribute('data-color');
            console.log(color);
            document.getElementById('colorPicker').value = color;
            borradorActivado = false;
            cuboActivo = false;
            canvas.style.cursor = 'auto';
        });
    });

    function guardarEstado() {
        // Limpiar los estados futuros si hemos retrocedido y hemos realizado nuevas acciones
        if (indiceHistorial < historial.length - 1) {
            historial.splice(indiceHistorial + 1);
        }
        historial.push(canvas.toDataURL()); // Guardar el estado actual del lienzo
        indiceHistorial = historial.length - 1; // Actualizar el índice del historial
    }

    function retroceder() {
        if (indiceHistorial > 0) {
            contexto.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el lienzo
            indiceHistorial--; // Retroceder en el historial
            var img = new Image();
            img.onload = function () {
                contexto.drawImage(img, 0, 0); // Dibujar la imagen del estado anterior en el lienzo
            };
            img.src = historial[indiceHistorial];
        }
    }

    function avanzar() {
        if (indiceHistorial < historial.length - 1) {
            contexto.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el lienzo
            indiceHistorial++; // Avanzar en el historial
            var img = new Image();
            img.onload = function () {
                contexto.drawImage(img, 0, 0); // Dibujar la imagen del estado siguiente en el lienzo
            };
            img.src = historial[indiceHistorial];
        }
    }

    function rellenarSuperficie(x, y) {
        var imageData = contexto.getImageData(0, 0, canvas.width, canvas.height);
        var pixels = imageData.data;
        var targetColor = getColorAtPixel(pixels, canvas.width, canvas.height, x, y);

        var queue = [];
        var processed = new Set();

        queue.push({x: x, y: y});

        while (queue.length > 0) {
            var pixel = queue.shift();
            var color = getColorAtPixel(pixels, canvas.width, canvas.height, pixel.x, pixel.y);

            if (colorMatches(color, targetColor)) {
                setPixelColor(pixels, canvas.width, pixel.x, pixel.y, hexToRgb(colorPicker.value));

                queue.push({x: pixel.x + 1, y: pixel.y});
                queue.push({x: pixel.x - 1, y: pixel.y});
                queue.push({x: pixel.x, y: pixel.y + 1});
                queue.push({x: pixel.x, y: pixel.y - 1});
            }
            processed.add(pixel.x + ',' + pixel.y);
        }

        contexto.putImageData(imageData, 0, 0);
        guardarEstado(); // Guardar el estado después de rellenar la superficie
    }

    function getColorAtPixel(pixels, width, height, x, y) {
        if (x < 0 || y < 0 || x >= width || y >= height) {
            return [-1, -1, -1, -1];  // Impossible color
        }

        var index = (y * width + x) * 4;
        return [
            pixels[index],   // Red
            pixels[index + 1], // Green
            pixels[index + 2], // Blue
            pixels[index + 3]  // Alpha
        ];
    }

    function colorMatches(color1, color2) {
        return color1[0] === color2[0] && color1[1] === color2[1] && color1[2] === color2[2] && color1[3] === color2[3];
    }

    function setPixelColor(pixels, width, x, y, color) {
        var index = (y * width + x) * 4;
        pixels[index] = color[0];
        pixels[index + 1] = color[1];
        pixels[index + 2] = color[2];
        pixels[index + 3] = color[3] || 255;  // Alpha
    }

    function hexToRgb(hex) {
        var bigint = parseInt(hex.substr(1), 16);
        return [
            (bigint >> 16) & 255,
            (bigint >> 8) & 255,
            bigint & 255
        ];
    }
    // Obtenemos el elemento <p> donde queremos mostrar el contador
    var tiempoElement = document.getElementById("tiempo");

    // Definimos la duración del contador en segundos
    var duracion = 60;//60;
    actualizarContador();
    // Función para actualizar el contador
    function actualizarContador() {
        // Mostramos el tiempo restante en el elemento <p>
        tiempoElement.textContent = duracion;

        // Reducimos el tiempo restante en 1 segundo
        duracion--;

        // Si el tiempo restante es mayor que 0, programamos la próxima actualización
        if (duracion >= 0) {
            setTimeout(actualizarContador, 1000); // Llamamos a la función después de 1 segundo
        }else{
            //TODO: EMITIR SONIDO

            //FUNCIONAA
            Swal.fire({
                title: "¿QUE COJONES ES ESTO?",
                imageUrl: canvas.toDataURL(),
                imageAlt: 'Imagen Capturada con error',
                showConfirmButton: false,
                timer: 20000,
                didClose: () => { // Redirigir al usuario a inicio.html cuando se cierre la alerta
                    window.location.href = 'index.html';
                }
            });

           
        }
        
    }
});
