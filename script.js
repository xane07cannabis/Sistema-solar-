
function buscar() {
    const query = document.getElementById("search").value.toLowerCase();
    const secciones = document.querySelectorAll("section");
    let encontrado = false;
    secciones.forEach(seccion => {
        if (seccion.innerText.toLowerCase().includes(query)) {
            seccion.scrollIntoView({ behavior: "smooth" });
            encontrado = true;
        }
    });
    if (!encontrado) {
        alert("No se encontró ningún resultado.");
    }
}
