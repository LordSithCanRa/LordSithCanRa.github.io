
async function alertaPintar(){
  /*const { value: formValues } = await Swal.fire({
    title: "Multiple inputs",
    html: `
      <input id="swal-input1" class="swal2-input">
      <input id="swal-input2" class="swal2-input">
    `,
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("swal-input1").value,
        document.getElementById("swal-input2").value
      ];
    }
  });
  if (formValues) {
    console.log(formValues) //array [0] [1]
    Swal.fire(JSON.stringify(formValues[0]));
    window.location.href = 'pintar.html';
  }*/
  window.location.href = 'carrerita.html';
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
