import { productServices } from "../../services/product-service.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const url = document.querySelector("[data-url]").value;
    const category = document.querySelector("[data-category]").value;
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const description = document.querySelector("[data-description]").value;
    
    productServices.crearNuevoProducto(url, name, price, description, category)
    .then(()=>{
        window.location.href = "../pages/admin.html"
    }).catch(err => console.log(err));
})


