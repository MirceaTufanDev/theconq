document.addEventListener('DOMContentLoaded', () => {
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');
    let totalCost = 0;
    let totalItems = 0;

    document.querySelectorAll('.add-to-bundle').forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.challenge-card');
            const title = card.dataset.title;
            const cost = parseFloat(card.dataset.cost);

            const listItem = document.createElement('li');
            listItem.textContent = title;
            cartList.appendChild(listItem);
            
            totalCost += cost;
            totalItems += 1;
            cartTotal.textContent = totalCost.toFixed(2);

            const cartIcon = document.querySelector('.cart a');
            cartIcon.textContent = `Cart (${totalItems})`;
        });
    });

    document.getElementById('checkout-button').addEventListener('click', () => {
        const cartItems = [];
        document.querySelectorAll('#cart-list li').forEach(item => {
            cartItems.push(item.textContent);
        });

        const cartData = {
            items: cartItems,
            totalCost: totalCost
        };

        localStorage.setItem('cartData', JSON.stringify(cartData));
        window.location.href = 'order-summary.html';
    });
});
