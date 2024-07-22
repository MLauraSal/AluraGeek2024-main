import { productServices } from "../../services/product-service.js";


const form = document.querySelector("[data-form]")

const obtenerInfo = async() => {
	const urlProduct = new URL(window.location);
	const id = urlProduct.searchParams.get("id");

	
    const img = document.querySelector("[data-url]");
	const category = document.querySelector("[data-category]");
	const name = document.querySelector("[data-name]");
	const price = document.querySelector("[data-price]");
	const description = document.querySelector("[data-description]");

    const producto = await productServices.detalleProducto(id);
		img.value = producto.img
		category.value = producto.category
		name.value = producto.name
		price.value = producto.price
		description.value = producto.description
};
obtenerInfo();
	



form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const urlProduct = new URL(window.location);
	const id = urlProduct.searchParams.get("id");

    const img = document.querySelector("[data-url]").value;
	const category = document.querySelector("[data-category]").value;
	const name = document.querySelector("[data-name]").value;
	const price = document.querySelector("[data-price]").value;
	const description = document.querySelector("[data-description]").value;
    productServices.actualizarProducto(img, category, name, price, description,id)
    .then(()=>{
        window.location.href = "../pages/exito.html"
    });

})