var pinturillo = `
<ul>
    <br>
        <ul>
            <li><b style="font-size:1.5rem;">El que pinta:</b>
            <br><br>
                <ul>
                    <li><b>~ A PINTAR BORRACHO! ~</b></li>
                    <br>
                    <li><b>- 60 segundos</b> para pintar</li>
                    <br>
                    <li><b>- 20 segundos</b> para mostrar la obra de arte</li>
                    <br>
                    <li>- Si hay más de un 50% de personas que coinciden, se bebera <b>un trago por cada jugador</b>, que forme parte de la mayoria.</li>
                </ul>
            </li>
            <br><br><br>
            <li><b style="font-size:1.5rem;">El que escribe:</b>
            <br><br>
                <ul>
                    <li><b>~ DISFRUTA Y BEBE ~</b></li>
                    <br>
                    <li><b>- Aciertas</b>: Pasa 2</li>
                    <br>
                    <li><b>- Fallas</b>: Bebes 2</li>
                </ul>
            </li>
        </ul>
</ul>
`;

var quePrefieres = `
<ul>
    <br>
        <ul>
            <li><b style="font-size:1.5rem;">~ LA MAYORIA BEBE ~</b></li>
        </ul>
</ul>
`;

var yoNunca = `
<ul>
    <br>
        <ul>
            <li><b style="font-size:1.5rem;">~ BEBE EL QUE LO HA HECHO ~</b></li>
        </ul>
</ul>
`;

var masProbable = `
<ul>
    <br>
        <ul>
            <li><b style="font-size:1.5rem;">~ EL QUE ES MAS PROBABLE BEBE ~</b></li>
        </ul>
</ul>
`;

var dueloMiradas = `
<ul>
    <br>
        <ul>
            <li><b style="font-size:1.5rem;">~ BEBEN 2 LOS QUE SE MIREN CADA (CADA RONDA +2) ~</b></li>
        </ul>
</ul>
`;
var carrerita = `
<ul>
    <br>
        <ul>
            <li><b style="font-size:1.5rem;">~ APUESTAS ~</b>
            <br><br>
                <ul>
                    <li>Apuestas tragos, hasta un <b>máximo de 5</b>, si ganas podrás repartir <b>el doble</b> de los tragos apostados.<br>(<b>Hay que pagar antes de empezar</b>) </li>
                </ul>
            </li>
        </ul>
</ul>
`;
var verdaderoVSfalso = `<ul>
<br>
    <ul>
    Este juego esta hecho para ejecutarse en un unico dispositivo, <b>el que tenga más bateria</b> tendrá que poner el movil para jugar.
    </ul>
    <br><br>
    <ul>
        Tendréis que <b>agregar palabras</b> antes de jugar a este juego luego con esa palabra
        cada jugador ira en su turno y vera una palabra, nombre o frase de lo que tendra que contar, tirará un dado si sale <b>PAR</b> tendra que contar una historia de <b>verdad</b>
        si sale <b>IMPAR</b> tendra que contar una historia de <b>mentira</b>
    </ul>
    <br><br>
    <ul>
        El que haya contado la historia bebera <b>un trago por cada voto acertado</b>, mientras los que no acertaron si la historia es verdad o mentiran beberan <b>2 tragos</b>
    </ul>
</ul>`;
var mayorOmenor = `<ul>
<br>
    <ul>
        Este juego esta hecho para ejecutarse en un unico dispositivo, <b>el que tenga más bateria</b> tendrá que poner el movil para jugar.
    </ul>
    <ul>
        En sentido de las agujas del reloj, se pondra una primera carta y el siguiente dice si es mayor o menor, si no acierta bebe un trago hasta que acierte
    </ul>
</ul>`;
function obtenerNormas(string){
    let html;
    switch (string) {
        case "pinturillo":
            html = pinturillo;
            break;
    
        case "quePrefieres":
            html = quePrefieres
            break;

        case "yoNunca":
            html = yoNunca;
            break;

        case "masProbable":
            html = masProbable;
            break;

        case "dueloMiradas":
            html = dueloMiradas;
            break;
        case "carrerita":
            html = carrerita;
            break;
        case "verdaderoVSfalso":
            html = verdaderoVSfalso;
            break;
        case "mayorOmenor":
            html = mayorOmenor;
            break;
    }
    return html;
}

function alertaNormas(string){
    Swal.fire({
        title: `<i class="fa-solid fa-book-skull"></i><strong>  NORMAS  </strong><i class="fa-solid fa-book-skull"></i>`,
        icon: "fa-solid fa-book-skull",
        html: obtenerNormas(string),
        showCloseButton: false,
        showCancelButton: true,
        showConfirmButton: false,
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: `
            Acepto
        `,
        cancelButtonAriaLabel: "Thumbs down"
        });
}
