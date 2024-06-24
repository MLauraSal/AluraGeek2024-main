
/*
 * FUNCTION CART
*/


// Seleccionar elementos del DOM
const cartIcon = document.querySelector('#shop-btn');
const card = document.querySelector('.card');
const closeCart = document.querySelector('.cart-close');
const list = document.querySelector('.list');
const listCard = document.querySelector('.listCard');
const total = document.querySelector('.total');
const quantity = document.querySelector('.quantity');


// Evento para mostrar el carrito al hacer clic en el icono del carrito

cartIcon.addEventListener('click', () => {
    card.classList.add('active');
});

// Evento para cerrar el carrito al hacer clic en el botón de cerrar

closeCart.addEventListener('click', () => {

    card.classList.remove('active');
});    


let listCards  = [];



// Función para inicializar la aplicación

function initApp(){

     // Crear elementos HTML para cada producto y mostrarlos en la lista

    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="../assets/img/productos/${value.image}"  class="product-img">
            <h2 class="product-name">${value.name}</h2>
            <span class="product-price">${value.price.toLocaleString()}</span>
            <button onclick="addToCard(${key})" class="add-cart btn">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}

// Llamar a la función de inicialización al cargar la página
initApp();




// Función para agregar un producto al carrito

function addToCard(key){

    // Verificar si el producto ya está en el carrito y añadirlo si no está
    if(listCards[key] == null){

        // Copiar el producto de la lista al carrito
        listCards[key] = JSON.parse(JSON.stringify(products[key]));

         // Inicializar la cantidad del producto en 1
        listCards[key].quantity = 1;
    }
     // Actualizar la visualización del carrito
    reloadCard();
}


// Función para actualizar la visualización del carrito

function reloadCard(){


    // Limpiar el contenido del carrito
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

     // Iterar sobre los productos en el carrito
    listCards.forEach((value, key)=>{

         // Calcular el precio total y la cantidad de productos en el carrito
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

          // Verificar si el producto no es nulo
        if(value != null){

            // Crear elementos HTML para mostrar el producto en el carrito
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="../assets/img/productos/${value.image}"/></div>
                <div class="product-name">${value.name}</div>
                <div class="product-price">${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;

                // Agregar el nuevo elemento al carrito
                listCard.appendChild(newDiv);
        }
    })
    // Mostrar el precio total y la cantidad de productos en el carrito
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}



// Función para cambiar la cantidad de un producto en el carrito
function changeQuantity(key, quantity){

     // Verificar si la nueva cantidad es 0
    if(quantity == 0){

        // Eliminar el producto del carrito si la cantidad es 0
        delete listCards[key];

    }else{

         // Actualizar la cantidad del producto y recalcular el precio total
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }

     // Actualizar la visualización del carrito
    reloadCard();
}