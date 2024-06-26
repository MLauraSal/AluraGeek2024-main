// Define the base API URL
const BASE_API_URL = "http://localhost:5501/products";



// Generic function for making HTTP requests
const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
};

// Object that contains all service functions to interact with the API
export const productServices = {

   // Get products from the "starwars" category
   starwars: () => fetchData(`${BASE_API_URL}?category=starwars`),

   // Get products from the "consolas" category
   consolas: () => fetchData(`${BASE_API_URL}?category=consolas`),
 
   // Get products from the "accesorios" category
   accesorios: () => fetchData(`${BASE_API_URL}?category=accesorios`),
  
  // Get all products without filtering
  allProducts: () => fetchData(BASE_API_URL),

  // Create a new product
  crearNuevoProducto: (img, name, price, description, category) => {
    const id = uuid.v4();
    return fetchData(BASE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ img, name, price, description, category, id }),
    });
  },

  // Delete a product by its ID
  eliminarProducto: (id) => fetchData(`${BASE_API_URL}/${id}`, { method: "DELETE" }),

  // Get details of a product by its ID
  detalleProducto: (id) => fetchData(`${BASE_API_URL}/${id}`),

  // Update a product by its ID
  actualizarProducto: (img, category, name, price, description, id) => {
    return fetchData(`${BASE_API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ img, category, name, price, description, id }),
    });
  },

  // Get details of a product by its ID (seems duplicated)
  productId: (id) => fetchData(`${BASE_API_URL}/${id}`),

  

  // Get related products 
  relacionados: () => fetchData(BASE_API_URL),
};
