// Obtenemos el elemento <p> donde queremos mostrar el contador
var tiempoElement = document.getElementById("tiempo");

// Definimos la duración del contador en segundos
var duracion = 20;
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
        
        // Obtener el valor del campo de texto con el id "palabra"
        var palabra = document.getElementById("palabra").value;

        // Mostrar una alerta con la palabra
        Swal.fire({
            title: "",
            html: `<div style="font-size:4rem; width: 90%; word-wrap: break-word;">${palabra}</div>`, // Utilizamos HTML para ajustar el ancho del texto
            confirmButtonText: "Cerrar",
            didClose: () => { // Redirigir al usuario a inicio.html cuando se cierre la alerta
                window.location.href = 'index.html';
            }
        });

       
    }
    
}
function getImageDataURL() {
    // Obtener el valor del campo de texto con el id "palabra"
    var palabra = document.getElementById("palabra").value;
    
    // Crear un elemento <img> en el DOM
    var img = document.createElement("img");
    
    // Asignar el valor del campo de texto al atributo src del elemento <img>
    img.src = palabra;
    
    // Crear un canvas temporal para dibujar la imagen
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    
    // Establecer el tamaño del canvas
    canvas.width = img.width;
    canvas.height = img.height;
    
    // Dibujar la imagen en el canvas
    ctx.drawImage(img, 0, 0);
    
    // Obtener la URL de datos de la imagen dibujada en el canvas
    var dataURL = canvas.toDataURL();
    
    // Devolver la URL de datos
    return dataURL;
}