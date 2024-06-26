
import { productServices } from "../../services/product-service.js";





const crearNuevoProducto = (img, name, price, Description, category, id) => {
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
    

const seccionAll = document.querySelector('[data-productos]');
productServices.allProducts().then((data) => {
	data.forEach(({img, name, price, Description, category, id}) => {
		const nuevoTarjeta = crearNuevoProducto(
            img,
            name,
			price,
            Description,
			category,
			id
		);
		seccionAll.appendChild(nuevoTarjeta);
	});
}).catch((err)=> alert('ocurrió un error'));