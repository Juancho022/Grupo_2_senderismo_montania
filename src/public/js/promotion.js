const promotionBar = document.getElementById("promotion-bar");
const promotions = [
    "¡Promoción especial por tiempo limitado! 20% de descuento en todos los productos. ¡Aprovéchalo ya!",
    "¡Compra dos y llévate uno gratis! Solo por hoy.",
    "Descuento del 30% en productos seleccionados. ¡No te lo pierdas!"
];

function changePromotion() {
    const randomIndex = Math.floor(Math.random() * promotions.length);
    const randomPromotion = promotions[randomIndex];
    promotionBar.innerHTML = '<div id="promotion-content">' + randomPromotion + '</div>';
}

setInterval(changePromotion, 5000);

const header = document.querySelector("header");

window.onscroll = function() {
    if (window.pageYOffset > 0) {
        // Si el usuario está en la parte superior de la página, mostrar la promoción
        promotionBar.style.display = "block";
        header.style.top = "5%";
        header.style.position = "absolute";
    }
}
