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
You can use <b>bold text</b>,
<a href="#">links</a>,
and other HTML tags
`;

var yoNunca = `
You can use <b>bold text</b>,
<a href="#">links</a>,
and other HTML tags
`;

var masProbable = `
You can use <b>bold text</b>,
<a href="#">links</a>,
and other HTML tags
`;

var dueloMiradas = `
You can use <b>bold text</b>,
<a href="#">links</a>,
and other HTML tags
`;


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
            html = dueloMiradas
            break;
    }
    return html;
}

function alertaNormas(string){
    Swal.fire({
        title: "<strong>NORMAS</strong>",
        icon: "fa-solid fa-book-skull",
        html: obtenerNormas(string),
        showCloseButton: false,
        showCancelButton: true,
        showConfirmButton: false,
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: `
            Acepto  <i class="fa-solid fa-book-skull"></i>
        `,
        cancelButtonAriaLabel: "Thumbs down"
        });
}
