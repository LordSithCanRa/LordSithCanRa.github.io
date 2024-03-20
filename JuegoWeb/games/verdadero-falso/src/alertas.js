var palabras = [];
var palabrasUsadas = [];
function alertaPalabras(){
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
  // Verifica si todas las palabras ya han sido usadas
  if (palabras.length <= 0) {
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
  
  return palabraAleatoria;
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
    palabraSeleccionada = obtenerPalabraAleatoria()
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
