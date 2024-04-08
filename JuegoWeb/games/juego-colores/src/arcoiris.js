var numJugadores = 0;
function elegirColor() {
    if(numJugadores == 0){
        Swal.fire({
            title: "NUMERO JUGADORES",
            input: "text",
            inputPlaceholder: "Un numero de jugadores antes de empezar",
            showConfirmButton: true,
            confirmButtonText: "AÑADIR",
            inputValidator: (value) => {
                if (!value) {
                    return "Ya vas to cocio? Ingresa un algo!";
                }
            }
          }).then((result) => {
            if (result.isConfirmed) {
              numJugadores = parseInt(result.value)
            }
          });
    }else{
        coloresAleatorios = generarColoresAleatorios(numJugadores)
        var botones = {};

        for (var i = 0; i < coloresAleatorios.length; i++) {
            botones[coloresAleatorios[i]] = coloresAleatorios[i];
        }

        Swal.fire({
            title: 'Selecciona un color:',
            input: 'select',
            inputOptions: botones,
            inputPlaceholder: 'Selecciona un color',
            showCancelButton: false,
            cancelButtonText: 'Cerrar',
            showCloseButton: true,
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value !== '') {
                        resolve();
                    } else {
                        resolve('Debes seleccionar un color');
                    }
                });
            },
            didOpen: () => {
                const selectElement = Swal.getInput();
                selectElement.addEventListener('change', () => {
                    const selectedColor = selectElement.value;
                    selectElement.style.backgroundColor = selectedColor;
                });
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const selectedColor = result.value;
                const colorBox = document.createElement('div');
                colorBox.style.backgroundColor = selectedColor;
                colorBox.style.width = '80vw';
                colorBox.style.height = '80vw';
                colorBox.style.margin = '0 auto';
                Swal.fire({
                    title: 'Has seleccionado el color:',
                    html: 'El color seleccionado es: <br>' + colorBox.outerHTML
                });
            }
        });
    }
}

function generarColoresAleatorios(numero) {
    var colores = [];
    switch (numero+"") {
        case "2":
            colores = ['#FF0000', '#0000FF']
            break;
    
        case "3":
            colores = ['#FF0000', '#0000FF', '#00FF00']
            break;

        case "4":
            colores = ['#FF0000', '#0000FF', '#00FF00', '#FFFF00']
            break;

        case "5":
            colores = ['#FF0000', '#0000FF', '#00FF00', '#FFFF00', '#FF00FF']
            break;

        case "6":
            colores = ['#FF0000', '#0000FF', '#00FF00', '#FFFF00', '#FF00FF', '#FFA500']
            break;
        case "7":
            colores = ['#FF0000', '#0000FF', '#00FF00', '#FFFF00', '#FF00FF', '#FFA500', '#008000']
            break;
        case "8":
            colores = ['#FF0000', '#0000FF', '#00FF00', '#FFFF00', '#FF00FF', '#FFA500', '#008000', '#800080']
            break;
            
        case "9":
            colores = ['#FF0000', '#0000FF', '#00FF00', '#FFFF00', '#FF00FF', '#FFA500', '#008000', '#800080', '#ADD8E6']
            break;

        case "10":
            colores = ['#FF0000', '#0000FF', '#00FF00', '#FFFF00', '#FF00FF', '#FFA500', '#008000', '#800080', '#ADD8E6', '#FFC0CB']
            break;

        case "11":
            colores = ['#FF0000', '#0000FF', '#00FF00', '#FFFF00', '#FF00FF', '#FFA500', '#008000', '#800080', '#ADD8E6', '#FFC0CB', '#000000']
            break;
        case "12":
            colores = ['#FF0000', '#0000FF', '#00FF00', '#FFFF00', '#FF00FF', '#FFA500', '#008000', '#800080', '#ADD8E6', '#FFC0CB', '#000000', '#FFFFFF']
            break;
    }
    /*for (var i = 0; i < numero; i++) {
        var color = generarColorAleatorio();
        while (colores.includes(color)) {
            color = generarColorAleatorio();
        }
        colores.push(color);
    }*/
    return colores;
}

// Función para generar un número aleatorio único dentro del rango especificado
function generarColorAleatorio() {
    var letras = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
   
}