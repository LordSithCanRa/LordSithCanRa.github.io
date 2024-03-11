const Palabras = {
    "palabrasParaPintar" : [
        "Manzana",
        "Plátano",
        "Naranja",
        "Pera",
        "Uva",
        "Fresa",
        "Melón",
        "Sandía",
        "Piña",
        "Cereza",
        "Mango",
        "Kiwi",
        "Papaya",
        "Limón",
        "Coco",
        "Granada",
        "Higo",
        "Melocotón",
        "Mandarina",
        "Lechuga",
        "Tomate",
        "Zanahoria",
        "Pepino",
        "Espinaca",
        "Cebolla",
        "Pimiento",
        "Brócoli",
        "Coliflor",
        "Calabacín",
        "Champiñón",
        "Berenjena",
        "Apio",
        "Calabaza",
        "Judía verde",
        "Acelga",
        "Puerro",
        "Rábano",
        "Alcachofa",
        "Remolacha",
        "Perro",
        "Gato",
        "Pájaro",
        "Elefante",
        "León",
        "Tigre",
        "Oso",
        "Jirafa",
        "Cebra",
        "Vaca",
        "Caballo",
        "Conejo",
        "Mono",
        "Ratón",
        "Hipopótamo",
        "Delfín",
        "Ballena",
        "Tiburón",
        "Canguro",
        "Pez"
    ]
};

function elegirPalabraAleatoria() {
    const palabras = Palabras.palabrasParaPintar;
    const indiceAleatorio = Math.floor(Math.random() * palabras.length);
    return palabras[indiceAleatorio];
  }
  
  const palabraAleatoria = elegirPalabraAleatoria();
  console.log("La palabra elegida es:", palabraAleatoria);
  document.getElementById("palabraParaPintar").innerHTML = palabraAleatoria