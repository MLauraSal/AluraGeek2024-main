import { productServices } from "../../services/product-service.js";


const seccionStarwars = document.querySelector('[data-section="starwars"]');
const seccionConsolas = document.querySelector('[data-section="consolas"]');
const seccionAccesorios = document.querySelector('[data-section="accesorios"]');

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

function mostrarProductosEnSeccion(seccion, fetchData) {
  productServices[fetchData]().then((data) => {
    data.forEach(({ img, name, price, description, category, id }) => {
      const nuevaTarjeta = crearNuevoProducto(img, name, price, description, category, id);
      seccion.appendChild(nuevaTarjeta);
    });
  }).catch((err) => alert('Ocurrió un error'));
}

mostrarProductosEnSeccion(seccionStarwars, "starwars");
mostrarProductosEnSeccion(seccionConsolas, "consolas");
mostrarProductosEnSeccion(seccionAccesorios, "accesorios");