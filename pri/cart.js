// Function to load the cart items from localStorage and display them
function loadCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsContainer = document.getElementById('cart-items');
    let totalPriceContainer = document.getElementById('total-price');
    let totalPrice = 0;

    // Clear the cart items container
    cartItemsContainer.innerHTML = '';

    // Loop through the cart items and display them
    cart.forEach(item => {
        let itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <p>${item.name} - $${item.price} x ${item.quantity}</p>
        `;
        cartItemsContainer.appendChild(itemElement);

        // Calculate the total price
        totalPrice += item.price * item.quantity;
    });

    // Update the total price
    totalPriceContainer.innerText = `Total: $${totalPrice.toFixed(2)}`;
}

// Function to handle the checkout process
function checkout() {
    alert('Proceeding to checkout');
    // Clear the cart after checkout
    localStorage.removeItem('cart');
    window.location.href = 'home.html';
}

// Load the cart items when the page loads
window.onload = loadCartItems;
