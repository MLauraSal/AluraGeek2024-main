
const focusInput = document.querySelector(".search__link");
const inputSearch = document.querySelector(".search__input");
const searchContainer = document.querySelector(".header__search");
const iconBuscar = document.querySelector(".icon__search");

/* Function to display the search bar */
export default focusInput.addEventListener("click", () => {
	searchContainer.classList.remove("hide");
	inputSearch.focus();
});

/* Function to hide the search bar */
document.addEventListener("click", (e) => {
	if (!inputSearch.contains(e.target) && !focusInput.contains(e.target)) {
		searchContainer.classList.add("hide");
	}
});
window.addEventListener("scroll", (e) => {
	searchContainer.classList.add("hide");
});

/* Search function */
iconBuscar.addEventListener("click", () => {
	let buscar = inputSearch.value
	if (buscar.trim() !== "") {
		window.location.href = `../../pages/search.html?query=${encodeURIComponent(buscar)}`;
	  }
		

});
