const Palabras = {
    "preguntasProbables": [
        "Yo nunca he perdido el trabajo por haber salido de fiesta y bebido mucho la noche anterior.",
        "Yo nunca he trabajado borracho.",
        "Yo nunca he dicho que me gustaba mucho un regalo y luego lo he devuelto.",
        "Yo nunca he vuelto a regalar a alguien un regalo que no me gustaba.",
        "Yo nunca he estado sin ducharme más de una semana.",
        "Yo nunca he tenido una experiencia paranormal.",
        "Yo nunca he estado con un extraño.",
        "Yo nunca he consumido drogas.",
        "Yo nunca he hecho o recibido un baile erótico.",
        "Yo nunca he enviado un mensaje fuerte o descarado a la persona equivocada.",
        "Yo nunca he estado esposado (por cualquier motivo).",
        "Yo nunca he olido mi propia ropa interior para ver si está limpia o sucia.",
        "Yo nunca he robado nada en una tienda.",
        "Yo nunca he sido robado o asaltado.",
        "Yo nunca he jugado a Stranger Things con las luces de casa o las del árbol de Navidad.",
        "Yo nunca he hecho un spoiler de Juego de Tronos, sin querer o a propósito.",
        "Yo nunca he borrado una foto de una red social por no gustarme cómo salgo.",
        "Yo nunca he editado mis fotos para mejorar mi aspecto y subirlas a redes sociales.",
        "Yo nunca he mentido a mis amigos.",
        "Yo nunca he hecho Ghosting.",
        "Yo nunca he entrado a una fiesta sin estar invitado.",
        "Yo nunca he sido echado/a de un club o discoteca.",
        "Yo nunca he recibido una bofetada en público.",
        "Yo nunca he tenido diarrea en casa de otra persona o en un sitio público.",
        "Yo nunca pensé que soy la persona más bella de este grupo.",
        "Yo nunca he escuchado reggaetón en sesión privada en Spotify para que nadie me descubriera.",
        "Yo nunca he tenido una época vegetariana o vegana.",
        "Yo nunca sentí que me atrajera un personaje de dibujos animados o anime.",
        "Yo nunca he tenido dudas sobre mi orientación sexual.",
        "Yo nunca he jugado a la Ouija.",
        "Yo nunca he bebido antes de los 18 años.",
        "Yo nunca he perdido una parte del bikini o bañador en la playa.",
        "Yo nunca he pillado a mis padres o a alguien de mi familia teniendo sexo.",
        "Yo nunca he espiado el móvil de mi pareja.",
        "Yo nunca he besado a alguien famoso.",
        "Yo nunca le he cogido manía a alguien.",
        "Yo nunca he mentido al decir 'te quiero' a alguien.",
        "Yo nunca he mentido a mi jefe.",
        "Yo nunca he mentido a mi jefe y me han echado del trabajo por ello.",
        "Yo nunca he hecho o me han hecho Love bombing.",
        "Yo nunca he infringido la ley sabiéndolo previamente.",
        "Yo nunca he sido detenido por la policía.",
        "Yo nunca he dicho el nombre equivocado durante las relaciones sexuales.",
        "Yo nunca he tenido que esconder un chupetón.",
        "Yo nunca he estado con nadie de mi familia.",
        "Yo nunca he enviado un mensaje caliente a un número equivocado.",
        "Yo nunca he tenido relaciones sexuales con alguien que me doblaba la edad.",
        "Yo nunca pensé que podría tener una ETS.",
        "Yo nunca he usado un objeto común como juguete sexual y lo he devuelto a su sitio.",
        "Yo nunca he hecho un trío.",
        "Yo nunca he tenido una cita a ciegas.",
        "Yo nunca he hecho intercambio de parejas.",
        "Yo nunca he practicado el BDSM.",
        "Yo nunca he hecho sexo tántrico.",
        "Yo nunca he fingido un orgasmo.",
        "Yo nunca he jugado al Strip Poker.",
        "Yo nunca he tenido sexo más de 5 veces en una noche.",
        "Yo nunca quise tener relaciones con una persona del mismo sexo.",
        "Yo nunca me he masturbado al aire libre.",
        "Yo nunca he tenido relaciones sexuales en un coche.",
        "Yo nunca he tenido sexo en la ducha.",
        "Yo nunca he estado en un sex shop.",
        "Yo nunca me he exhibido por webcam.",
        "Yo nunca he sido infiel.",
        "Yo nunca he tenido una relación abierta.",
        "Yo nunca nadé desnudo.",
        "Yo nunca me he liado con el ex de un/a amigo/a.",
        "Yo nunca he vuelto con mi expareja.",
        "Yo nunca me he acostado con mi ex al cabo de un tiempo de terminar.",
        "Yo nunca he tenido relaciones pliamorosas.",
        "Yo nunca he estado con alguien este grupo.",
        "Yo nunca me he disfrazado para cumplir mi fantasía sexual o la de mi pareja.",
        "Yo nunca he probado una de las posturas más difíciles del Kamasutra.",
        "Yo nunca he tenido sexo estando borrachos.",
        "Yo nunca he dominado a alguien durante el sexo.",
        "Yo nunca he hecho la cobra o me la han hecho.",
        "Yo nunca me he imaginado desnudo a alguien de aquí.",
        "Yo nunca me he querido besar con alguien de los aquí presentes.",
        "Yo nunca he tomado afrodisíacos.",
        "Yo nunca me he liado con alguien sin saber su nombre.",
        "Yo nunca he tenido un fetiche extraño.",
        "Yo nunca me he grabado teniendo relaciones.",
        "Yo nunca me he liado con un estudiante de intercambio de mi universidad."
      ]
};
function elegirPalabraAleatoria() {
    const palabras = Palabras.preguntasProbables;
    const indiceAleatorio = Math.floor(Math.random() * palabras.length);
   
    document.getElementById("masProbablePalabra").innerHTML = palabras[indiceAleatorio]
    
       return palabras[indiceAleatorio];
    }
  
  const palabraAleatoria = elegirPalabraAleatoria();
  console.log("La palabra elegida es:", palabraAleatoria);
  document.getElementById("masProbablePalabra").innerHTML = palabraAleatoria

function reproducirSonido(segundoInicio) {
    var audio = document.getElementById("miAudio");
    var tiempoInicioSegundos = convertirAMilisegundos(0, 0, segundoInicio);
    audio.currentTime = tiempoInicioSegundos / 1000;
    audio.play();
}

function convertirAMilisegundos(horas, minutos, segundos) {
    return ((horas * 3600) + (minutos * 60) + segundos) * 1000;
}
