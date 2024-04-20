// const searchInput = document.querySelector('.search-input');
// const productList = document.querySelector('.contenedor-productos');

// // Obtener la consulta de búsqueda de la URL
// const urlSearchParams = new URLSearchParams(window.location.search);
// const query = urlSearchParams.get('q');

// // Filtrar los productos en función de la consulta de búsqueda
// filterProducts(query);

// function filterProducts(query) {
//   if (query.trim() === '') {
//     // Mostrar todos los productos si la consulta de búsqueda está vacía
//     location.reload();
//   }

//   const filterProducts = Array.from(productList.children)
//     .filter((product) => {
//       const productData = product.dataset.producto.toLowerCase();
//       return productData.includes(query.toLowerCase());
//     });

//   productList.innerHTML = '';
//   filterProducts.forEach((product) => {
//     productList.appendChild(product);
//   });
// }