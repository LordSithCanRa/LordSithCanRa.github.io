var palabras = [];
var palabrasUsadas = [];
function alertaPalabras(){
  palabrasUsadas = []
  Swal.fire({
    title: "Palabra",
    input: "text",
    inputPlaceholder: "Palabra, nombre o frase para crear una historia",
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonText: "Seguir añadiendo",
    cancelButtonText: "Terminar",
    inputValidator: (value) => {
        if (!value) {
            return "Ya vas to cocio? Ingresa un algo!";
        }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      palabras.push(result.value)
      alertaPalabras()
    }
  });
}

function obtenerPalabraAleatoria() {
  /*if (palabras.length <= 0) {
    Swal.fire({
      title: "Me quede sin palabras...",
      text: "Agrega nuevas palabras para seguir bebiendo!",
      icon: "warning"
    });
    return null;
      
  }
  var indiceAleatorio = Math.floor(Math.random() * palabras.length);
  var palabraAleatoria = palabras[indiceAleatorio]
  palabrasUsadas.push(palabraAleatoria)
  palabras.splice(indiceAleatorio-1, 1);
  console.log(palabras)
  return palabraAleatoria;*/
}
// Función para obtener y eliminar valores únicos del array
function obtenerYEliminarValorUnico(array) {
  // Si el array está vacío, muestra una alerta y termina la función
  if (array.length === 0) {
    Swal.fire({
      title: "Me quede sin palabras...",
      text: "Agrega nuevas palabras para seguir bebiendo!",
      icon: "warning"
    });
      return null;
  }
  
  // Crea un conjunto Set a partir del array para mantener un registro de valores únicos
  var conjunto = new Set(array);
  
  // Obtiene el primer valor único del conjunto
  var valor = [...conjunto][Math.floor(Math.random() * conjunto.size)];;
  
  // Elimina el valor obtenido del conjunto y del array original
  conjunto.delete(valor);
  array.splice(array.indexOf(valor), 1);
  
  // Devuelve el valor único obtenido
  return valor;
}
function alertaDado(){
    let resultado = Math.floor(Math.random() * 6) + 1;
    let numero;
    switch (resultado) {
      case 1:
        numero = 'one'
        break;
      case 2:
        numero = 'two'
        break;
      case 3:
        numero = 'three'
        break;
      case 4:
        numero = 'four'
        break;
      case 5:
        numero = 'five'
        break;
      case 6:
        numero = 'six'
        break;
    }
    palabraSeleccionada = obtenerYEliminarValorUnico(palabras)
    

    let verdad = false;
    if(resultado % 2 == 0){
      verdad = true;
    }
    let texto;
    if(verdad){
      texto = "<b>VERDAD</b>";
    }else{
      texto = "<b>MENTIRA</b>";
    }
    if(palabraSeleccionada != null){
      Swal.fire({
        title: "SACASTE UN",
        html: `
        <i style="font-size:5rem;" class="fa-solid fa-dice-`+numero+`"></i><br>
          <br><br> Tienes que contar una historia de: <br>`+texto+`<br>sobre la palabra/frase: <br><b>`+palabraSeleccionada+`</b>`,
        icon: "info",
        showCancelButton: false,
        showConfirmButton: false,
        confirmButtonText: "Entrar",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'adivinar.html';
        }
      });
    }
    
}
