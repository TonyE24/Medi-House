const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const productList = document.querySelector('.contenedor-productos');

function filterProducts(query) {
  if (query.trim() === '') {
    // Mostrar todos los productos si la cadena de búsqueda está vacía
    location.reload();
  }

  const filterProducts = Array.from(productList.children)
    .filter((product) => {
      const productData = product.dataset.producto.toLowerCase();
      return productData.includes(query.toLowerCase());
    });

  productList.innerHTML = '';
  filterProducts.forEach((product) => {
    productList.appendChild(product);
  });
}

searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  const query = searchInput.value;
  if (query.trim() !== '') {
    filterProducts(query);
  }
});

searchInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const query = searchInput.value;
    filterProducts(query);
  }
});

// const searchInput = document.querySelector('.search-input');
// const searchButton = document.querySelector('.search-button');
// const productList = document.querySelector('.contenedor-productos');

// function searchCatalogo(query) {
//   if (query.trim() === '') {
//     // Si la cadena de búsqueda está vacía, redirigir a la página de catálogo
//     window.location.href = "catalogo.html";
//   } else {
//     // Enviar la cadena de búsqueda a la página de catálogo
//     window.location.href = "catalogo.html?q=" + query;
//   }
// }
// function filterProducts(query) {
//       if (query.trim() === '') {
//         // Mostrar todos los productos si la cadena de búsqueda está vacía
//         location.reload();
//       }
    
//       const filterProducts = Array.from(productList.children)
//         .filter((product) => {
//           const productData = product.dataset.producto.toLowerCase();
//           return productData.includes(query.toLowerCase());
//         });
    
//       productList.innerHTML = '';
//       filterProducts.forEach((product) => {
//         productList.appendChild(product);
//       });
//  }

// searchButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   const query = searchInput.value;
//   if (query.trim() !== '') {
//     searchCatalogo(query);
//     filterProducts(query);
//   }
// });

// searchInput.addEventListener('keyup', (event) => {
//   if (event.key === 'Enter') {
//     const query = searchInput.value;
//     searchCatalogo(query);
//     filterProducts(query);
//   }
// });