// Variable para almacenar los números generados
var numerosGenerados = [];
function sacarcarta() {
    
    var numeroCarta = generarNumeroAleatorio();
    if(numeroCarta == null){
        Swal.fire({
            title: "HAS AGOTADO LAS CARTAS",
            text: "Refresca la pagina si quieres volver a jugar o cambia a otro juego",
            icon: "warning"
          });
    }else{
        console.log(numeroCarta)
        mensaje = ""
        var urlCarta = "../../src/cartasImage/"+numeroCarta+".png"
        Swal.fire({
            title: "<strong>Tu carta es mayor o menor que:</strong>",
            imageUrl: urlCarta,
            imageHeight: 400,
            imageAlt: "A tall image",
            showCloseButton: false,
            showCancelButton: true,
            showConfirmButton: false,
            cancelButtonText: `HECHO`
        }).then((result) => {
            if (result.isDismissed) {
                   sacarcarta(); 
            }
        });
    }
    
}
// Función para generar un número aleatorio único dentro del rango especificado
function generarNumeroAleatorio() {
    var min = 1;
    var max = 48;
    var rango = max - min + 1;

    // Verificar si se han generado todos los números posibles
    if (numerosGenerados.length === rango) {
        Swal.fire({
            title: "HAS AGOTADO LAS CARTAS",
            text: "Refresca la pagina si quieres volver a jugar o cambia a otro juego",
            icon: "warning"
          });
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