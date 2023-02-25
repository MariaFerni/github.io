const miBoton = document.getElementById("redessociales");
const miInformacion = document.getElementById("redeslista");

miBoton.addEventListener("click", function() {
if (miInformacion.style.display === "none") {
miInformacion.style.display = "block";
 } else {
    miInformacion.style.display = "none";
}
this.classList.add("clicked");
    });
 