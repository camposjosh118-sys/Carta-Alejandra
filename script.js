function comprobarClave() {

    const clave = document.getElementById("clave").value;
    const mensaje = document.getElementById("mensaje");

    if (clave.toLowerCase() === "flan🍮") {

        document.getElementById("inicio").style.display = "none";

        document.getElementById("carta").style.display = "block";

    } else {

        mensaje.innerHTML = "Ese no es el apodo que me dices de cariño 🍮❤️";

    }

}


function abrirMusica() {

    window.open(
        "https://www.youtube.com/results?search_query=Santa+Fe+Klan+Maldita+Mujer",
        "_blank"
    );

}
