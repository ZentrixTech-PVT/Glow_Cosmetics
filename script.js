let total = 0;

function addToCart(product, price) {
    let cart = document.getElementById("cart-items");

    let item = document.createElement("li");
    item.textContent = product + " - ₹" + price;

    cart.appendChild(item);

    total += price;
    document.getElementById("total").textContent = total;
}

function goHome() {
    window.scrollTo(0, 0);
}

function goProducts() {
    document.getElementById("products-section").scrollIntoView();
}

function checkout() {
    if (total === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Order placed successfully!\nItem's will be delivered successfully to your address\nThanks for shopping with us\nTotal: ₹" + total);

        document.getElementById("cart-items").innerHTML = "";
        total = 0;
        document.getElementById("total").textContent = total;
    }
}