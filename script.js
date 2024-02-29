
let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}
function isValidForm() {
    return true;
}
function enviarCorreo() {
    const to = 'rcaneloarevalo@gmail.com';
    const subject = 'Asunto del correo';
    const text = 'Cuerpo del correo';

    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ to, subject, text })
    })
    .then(response => {
        if (response.ok) {
            console.log('Correo electrónico enviado correctamente');
        } else {
            console.error('Error al enviar el correo electrónico');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
/*document.getElementById("enviarEmail").addEventListener("click", function(){

    if(isValidForm()){
        enviarCorreo()
        Swal.fire(
            {
            icon: "success",
            title: "Email enviado correctamente.",
            text: "Espere a recibir su respuesta, gracias por contactar conmigo."
            }
        );
    }else{
        Swal.fire({
            icon: "error",
            title: "Error al enviar el email.",
            text: "Vuelva a intentarlo de nuevo."
          });
    }

})*/

document.getElementById("descargarCV").addEventListener("click", function() {
    // Crear un enlace temporal
    var enlace = document.createElement('a');
    enlace.href = 'CV-RamónCaneloArévalo.pdf';
    enlace.download = 'nombre_del_archivo.pdf';
    enlace.target = "_blank";
    document.body.appendChild(enlace);

    // Simular clic en el enlace
    enlace.click();

    // Eliminar el enlace temporal
    document.body.removeChild(enlace);
});
var modoNoche = false
document.getElementById("seleccionModo").addEventListener("click", function(){
    let icono = document.getElementById("modoIlu");
    console.log(icono)
    if(!modoNoche){
        console.log("modo noche activo")
        
        icono.classList.remove("fa-solid", "fa-moon")
        icono.classList.add("fa-solid", "fa-sun")

        /*document.documentElement.style.setProperty('--color-items', '#634b5c');
        document.documentElement.style.setProperty('--color-fondo-oscuro', '#807147');
        document.documentElement.style.setProperty('--color-fondo-light', '#A6974E');*/
        document.documentElement.style.setProperty('--color-items', '#c3acdd');
        document.documentElement.style.setProperty('--color-fondo-oscuro', '#596cc7');
        document.documentElement.style.setProperty('--color-fondo-light', '#6678cc');
        document.documentElement.style.setProperty('--color-letras', '#000000');


        modoNoche = true
    }else{
        icono.classList.remove("fa-solid", "fa-sun")
        icono.classList.add("fa-solid", "fa-moon")

        document.documentElement.style.setProperty('--color-items', '#875abb');
        document.documentElement.style.setProperty('--color-fondo-oscuro', '#111733');
        document.documentElement.style.setProperty('--color-fondo-light', '#1a234e');
        document.documentElement.style.setProperty('--color-letras', '#fff');

        modoNoche = false
    }
    
});


function simulacionEnlace(url){
    // Crear un enlace temporal
    var enlace = document.createElement('a');
    enlace.href = url;
    enlace.target = "_blank";
    document.body.appendChild(enlace);

    // Simular clic en el enlace
    enlace.click();

    // Eliminar el enlace temporal
    document.body.removeChild(enlace);
}
