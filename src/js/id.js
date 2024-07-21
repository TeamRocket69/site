document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.partitura');

    products.forEach(product => {
        product.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            window.location.href = `detalhes.html?id=${productId}`;
        });
    });
});