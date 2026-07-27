function abrirCarta() {
    const tapa = document.querySelector(".tapa");
    const contenido = document.querySelector(".contenido");

    tapa.style.transform = "scale(0)";

    setTimeout(() => {
        tapa.style.display = "none";
        contenido.style.display = "block";
    }, 800);
}
