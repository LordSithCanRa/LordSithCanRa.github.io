// Variable para almacenar los números generados
var numerosGenerados = [];
function sacarcarta() {
    
    var numeroCarta = generarNumeroAleatorio();
    console.log(numeroCarta)
    mensaje = ""
    var urlCarta = "../../src/cartasImage/"+numeroCarta+".png"
    switch (numeroCarta+"") {
        case "1":
        case "2":
        case "3":
        case "4":
            mensaje = "CASCADA! (Hasta que el de tu izquierda no pare de beber no podras parar)"
            break;
        case "5":
        case "6":
        case "7":
        case "8":
            mensaje = "BEBE EL QUE PULSO EL BOTON!"
            break;
        case "9":
        case "10":
        case "11":
        case "12":
            mensaje = "Beben las chicos";
            break;
        case "13":
        case "14":
        case "15":
        case "16":
            mensaje = "Beben las chicas";
            break;
        case "17":
        case "18":
        case "20":
        case "21":
            mensaje = "Envia 2 tragos";
            break;
        case "22":
        case "23":
        case "24":
        case "25":
            mensaje = "Mayordomo (Si a algun jugador le falta bebida tu se la tendras que rellenar durante una vuelta)"
            break;
        case "26":
        case "27":
        case "28":
        case "29":
            mensaje = "El ultimo que levante la mano bebe 2 tragos"
            break;
        case "30":
        case "31":
        case "32":
        case "33":
            mensaje = "Tematica (Se dice una tematica y quien falle o repita palabra bebe 2)"
            break;
        case "34":
        case "35":
        case "36":
        case "37":
            mensaje = "Un misisipi (Bebes hasta que tus compañeros terminen de decir la frase 'Un misisipi')"
            break;

        case "19":
        case "38":
        case "39":
        case "40":
            mensaje = "Duelo de miradas (Todos con las cabezas agachadas, a la cuenta de 3 mirais a alguien, si coincidis y os mirais bebeis tantos tragos como en la ronda que os vayais)"
            break;

        case "41":
        case "42":
        case "43":
        case "44":
            mensaje = "Todos beben"
            break;
        case "45":
        case "46":
        case "47":
        case "48":
            mensaje = "Regla (Alguien pondra una regla, esta se tiene que cumplir durante todo el juego, si no lo cumples bebes )"
            break;
    }
    Swal.fire({
        title: "<strong>"+mensaje+"</strong>",
        imageUrl: urlCarta,
        imageHeight: 400,
        imageAlt: "A tall image",
        showCloseButton: false,
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonText: `HECHO`
    });
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