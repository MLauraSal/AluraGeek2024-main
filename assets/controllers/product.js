import { productServices } from "../../services/product-service.js";


const obtenerDatos = async()=>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    /* obtenemos los elementos de nuestra card mediante querySelector */
    const img = document.querySelector("[data-img]");
    const name = document.querySelector("[data-name]");
    const price = document.querySelector("[data-price]");
    const description = document.querySelector("[data-description]");
    /* Inyectamos el contenido mediante DOM */    
    const productos = await productServices.productId(id)
        img.src = productos.img;
        name.textContent =productos.name;
        price.textContent = productos.price;
        description.textContent = productos.description
}
obtenerDatos();

/* productos relacionados */




const productosRelacionados = document.querySelector('[data-section="relacionados"]');

const crearNuevoProducto = (img, name, price, description, category, id) => {
	const tarjeta = document.createElement("div");
    tarjeta.classList.add("list");
	const contenido = `
            <div class="item">
                <div class="product-img">
                    <img src="${img}"alt="imagen producto" >
                </div>
                <div>
                    <h2  class="product-title">${name}</h2>
                    <span class="product-price">${price}</span>
                </div>
            
                <a href="/pages/product.html?category=${category}&id=${id}" class="btn_product">Ver producto</a>

            </div>
    `;
	tarjeta.innerHTML = contenido;
	return tarjeta;
};


productServices.relacionados().then((data) => {
	data.forEach(({img, name, price, description, category, id}) => {
		const nuevaTarjeta = crearNuevoProducto(img, name, price, description, category, id);
		productosRelacionados.appendChild(nuevaTarjeta);
	});
}).catch((err)=> console.log('ocurrió un error'));