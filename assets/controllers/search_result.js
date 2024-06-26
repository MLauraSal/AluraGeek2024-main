import { productServices } from "../../services/product-service.js";

const listaResultados = document.querySelector("[data-section]");

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




function mostrarResultados(resultados) {
    listaResultados.innerHTML = ""; // Limpiamos la lista de resultados antes de mostrar los nuevos
  
    if (resultados.length === 0) {
      // Si no hay resultados, mostrar mensaje de "Ningún producto encontrado"
      const divSinResultados = document.createElement("div");
      divSinResultados.classList.add("not-found");
  
      const imagenNingunProducto = document.createElement("img");
      imagenNingunProducto.src = "https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-3328225-2809510.png?f=webp"; 
      imagenNingunProducto.alt = "Ningún producto encontrado";
      divSinResultados.appendChild(imagenNingunProducto);
  
      const mensajeSinResultados = document.createElement("h3");
      mensajeSinResultados.textContent = "Ningún producto encontrado";
      divSinResultados.appendChild(mensajeSinResultados);
  
      listaResultados.appendChild(divSinResultados);
    } else {
      // Si hay resultados, mostrar los productos
      resultados.forEach(({img, name, price, description, category, id}) => {
        const nuevaLinea = crearNuevoProducto(img, name, price, description, category, id);
        listaResultados.appendChild(nuevaLinea);
      });
    }
  }
  
  

function obtenerParametroURL(nombreParametro) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nombreParametro);
}


document.addEventListener("DOMContentLoaded", () => {
  const terminoBusqueda = obtenerParametroURL("query");

  if (terminoBusqueda) {
    productServices.allProducts().then((data) => {
        const resultados = data.filter(
            (producto) => producto.name.toLowerCase().includes(terminoBusqueda.toLowerCase())
          );          
        mostrarResultados(resultados);
      })
      .catch((error) => alert("ocurrió un error al cargar los productos"));
  } else {
    alert("No se proporcionó ningún término de búsqueda.");
  }
});