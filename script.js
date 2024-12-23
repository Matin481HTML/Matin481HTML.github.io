document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h2').innerText;
        addToCart(productName);
    });
});

function addToCart(productName) {
    const cartItems = document.getElementById('cart-items');
    const listItem = document.createElement('li');
    listItem.innerText = productName;
    cartItems.appendChild(listItem);
}