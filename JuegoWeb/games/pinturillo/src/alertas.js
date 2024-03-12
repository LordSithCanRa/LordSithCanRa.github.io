
function alertaPintar(){
    Swal.fire({
        title: "LEER ANTES DE ENTAR!!",
        html: `
          Tienes <b>60 segundos</b> para pintar la palabra
          que aparecerá arriba del marco de pintar.<br>
          <b>¿Seguro que quieres entrar?</b>
        `,
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Entrar",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'pintando.html';
        }
      });
}
function alertaEscribir(){
    Swal.fire({
        title: "LEER ANTES DE ENTAR!!",
        html: `
          Tienes <b>20 segundos</b> para escribir 
          lo que ha dibujado tu colega.<br>
          <b>¿Seguro que quieres entrar?</b>
        `,
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Entrar",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'adivinar.html';
        }
      });
}
