/*Funcion para el modal */
const cerrar = document.querySelectorAll(".close")[0];
const abrir = document.querySelectorAll("#cta")[0];
const modal= document.querySelectorAll(".modal")[0];
const modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function(e) {
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function() {
    modal.classList.toggle("modal-close");
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
    setTimeout(function(){

    }, 1000)
})