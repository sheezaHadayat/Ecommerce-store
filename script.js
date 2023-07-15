// Add to cart function
function addToCart(productName, price) {
  // Retrieve cart data from LocalStorage or initialize an empty cart
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the product is already in the cart
  const existingProductIndex = cart.findIndex((item) => item.name === productName);
  if (existingProductIndex > -1) {
    // Product already exists in the cart, update the quantity or any other relevant information
    cart[existingProductIndex].quantity++;
  } else {
    // Product is not in the cart, add it
    cart.push({ name: productName, price: price, quantity: 1 });
  }

  // Save the updated cart data back to LocalStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Provide a visual indication that the item has been added to the cart (optional)
   alert(`Added ${productName} to cart!`);
 
}

// Display cart on the cart.html page
function displayCart() {
  // Retrieve cart data from LocalStorage
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Select the cart items container on the cart.html page
  const cartItemsContainer = document.getElementById('cart-items');

  // Iterate over each item in the cart and generate the HTML for display
  let totalPrice = 0;
  cart.forEach((item) => {
    const { name, price, quantity } = item;
    totalPrice += price * quantity;

    // Generate HTML for each cart item
    const itemHTML = `
      <div>
        <h5>${name}</h5>
        <p>Price: ${price} Rs</p>
        <p>Quantity: ${quantity}</p>
      </div>
      <hr>
    `;

    // Append the HTML to the cart items container
    cartItemsContainer.innerHTML += itemHTML;
  });

  // Display the total price
  const totalHTML = `
    <div>
      <h4>Total Price: ${totalPrice} Rs</h4>
    </div>
  `;
  cartItemsContainer.innerHTML += totalHTML;
}

// Call the displayCart function on the cart.html page to display the cart items
displayCart();



















