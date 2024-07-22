// Selección de elementos del DOM
const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");
const inputSearch = document.querySelector("#search-box");
const iconBuscar = document.querySelector("#icon__search");

// Función para mostrar/ocultar el formulario de búsqueda
searchBtn.onclick = () => {
    searchForm.classList.toggle("active");
    // Opcional: Si quieres desactivar otros elementos como navbar y loginForm, añádelos aquí.
    // navbar.classList.remove("active");
    // loginForm.classList.remove("active");
}

// Función para ocultar el formulario de búsqueda cuando se hace clic fuera
document.addEventListener("click", (e) => {
    if (!searchForm.contains(e.target) && !searchBtn.contains(e.target)) {
        searchForm.classList.remove("active");
    }
});

// Función para ocultar el formulario de búsqueda al hacer scroll
window.addEventListener("scroll", () => {
    searchForm.classList.remove("active");
});

// Función de búsqueda
iconBuscar.addEventListener("click", () => {
    let buscar = inputSearch.value;
    if (buscar.trim() !== "") {
        window.location.href = `../pages/search.html?query=${encodeURIComponent(buscar)}`;
    }
});


/*
 * FUNCTION LOGIN
*/
const loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    

}

/*
 * FUNCTION NAVBAR
*/
const navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    
}


window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    
}




