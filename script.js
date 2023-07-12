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

























// Event listeners for "Buy" buttons
// const buyButtons = document.querySelectorAll('.buy-btn');
// buyButtons.forEach((button) => {
//   button.addEventListener('click', showPopupCard);
// });

// // Show the popup card
// function showPopupCard(event) {
//   const productCard = event.target.closest('.card');
//   const productImg = productCard.querySelector('.card-img-top').src;
//   const productName = productCard.querySelector('.card-title').textContent;
//   const productDetails = productCard.querySelector('.card-text').textContent;

//   const popupCard = document.querySelector('.popup-card');
//   const popupImg = popupCard.querySelector('.card-img-top');
//   const popupName = popupCard.querySelector('.card-title');
//   const popupDetails = popupCard.querySelector('.card-text');

//   popupImg.src = productImg;
//   popupName.textContent = productName;
//   popupDetails.textContent = productDetails;

//   popupCard.style.display = 'block';
// }

// // Event listener for "Add to Cart" button in the popup card
// const addToCartButton = document.querySelector('.add-to-cart');
// addToCartButton.addEventListener('click', addToCart);

// // Add item to cart
// function addToCart() {
//   const productName = document.querySelector('.card-title').textContent;

//   // Add item to LocalStorage cart
//   let cartItems = localStorage.getItem('cartItems') || [];
//   if (!Array.isArray(cartItems)) {
//     cartItems = JSON.parse(cartItems);
//   }
//   cartItems.push(productName);
//   localStorage.setItem('cartItems', JSON.stringify(cartItems));

//   // Optionally, show a visual indication of successful addition to cart
//   alert(`Added ${productName} to cart!`);
// }

// // Event listener for "View Cart" button in the popup card
// const viewCartButton = document.querySelector('.view-cart');
// viewCartButton.addEventListener('click', navigateToCart);

// // Navigate to the cart page
// function navigateToCart() {
//   window.location.href = 'cart.html'; // Change to the actual cart page URL
// }
