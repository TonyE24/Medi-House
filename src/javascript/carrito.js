$(document).ready(function () {
  const products = $('.producto');
  const carList = $('.cart-list');
  const totalElement = $('.total span');
  const clearCartButton = $('.clear-cart');

  let cart = [];

  products.each(function () {
    const addToCartButton = $(this).find('.add-to-cart');
    addToCartButton.on('click', function () {
      addToCart($(this).closest('.producto'));
    });
  });

  clearCartButton.on('click', clearCart);

  function addToCart(product) {
    const productId = product.data('id');
    const productName = product.data('producto');
    const productPrecio = parseFloat(product.find('.precio').text().replace('$', ''));

    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        id: productId,
        producto: productName,
        precio: productPrecio,
        quantity: 1
      })
    }

    updateCartUI(); // Actualiza la UI después de agregar un elemento al carrito
  }
  function addToCart(product) {
    const productId = product.data('id');
    const productName = product.data('producto');
    const productPrecio = parseFloat($(product).find('.precio').text().replace('$', ''));
  
    const existingProduct = cart.find(item => item.id === productId);
  
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        id: productId,
        producto: productName,
        precio: productPrecio,
        quantity: 1
      })
    }
  
    updateCartUI(); // Actualiza la UI después de agregar un elemento al carrito
  }
  function updateCartUI() {
    carList.empty();
    let total = 0;
    cart.forEach(item => {
      const listItem = $('<li>');
      listItem.text(`${item.producto} x ${item.quantity} - $${(item.precio * item.quantity).toFixed(2)}`);
      carList.append(listItem);
      total += item.precio * item.quantity;
    });
    totalElement.text(total.toFixed(2));

    const removeButtons = $('.remove-item');

    removeButtons.each(function () {
      $(this).on('click', function () {
        removeItem($(this).data('id')); // Pasa la función como devolución de llamada
      });
    });
  }

  function removeItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
  }

  function clearCart() {
    cart = [];
    updateCartUI();
  }
});