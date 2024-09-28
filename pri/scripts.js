// Sample data for medicines
const medicines = [
    { id: 1, name: 'Medicine 1', price: 10.00, imgSrc: 'medicine1.jpg' },
    { id: 2, name: 'Medicine 2', price: 15.00, imgSrc: 'medicine2.jpg' },
    { id: 3, name: 'Medicine 3', price: 12.00, imgSrc: 'medicine3.jpg' },
    { id: 4, name: 'Medicine 4', price: 8.00, imgSrc: 'medicine4.jpg' },
    { id: 5, name: 'Medicine 5', price: 20.00, imgSrc: 'medicine5.jpg' },
    { id: 6, name: 'Medicine 6', price: 25.00, imgSrc: 'medicine6.jpg' },
    { id: 7, name: 'Medicine 7', price: 18.00, imgSrc: 'medicine7.jpg' },
    { id: 8, name: 'Medicine 8', price: 22.00, imgSrc: 'medicine8.jpg' },
    { id: 9, name: 'Medicine 9', price: 30.00, imgSrc: 'medicine9.jpg' }
];

// Cart initialization
let cart = [];

// Add item to cart
function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    updateCart();
}

// Update cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItems.appendChild(listItem);
    });

    document.getElementById('total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Proceeding to checkout...');
        // Implement checkout logic here
    }
}

// Search functionality
document.getElementById('search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    document.querySelectorAll('.product').forEach(product => {
        const productName = product.querySelector('h4').textContent.toLowerCase();
        if (productName.includes(query)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
});




    










