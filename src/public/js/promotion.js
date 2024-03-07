// Barra de publicidad
const promotionBar = document.getElementById("promotion-bar");
const promotions = [
    "💸 ¡ HASTA 6 CUOTAS SIN INTERÉS ! 💸",
    " ¡RECIBÍ TU PEDIDO AL DÍA SIGUIENTE! 🌍",
    " 1° CAMBIO GRATIS Dentro de los 30 días ✅"
];

function changePromotion() {
    const randomIndex = Math.floor(Math.random() * promotions.length);
    const randomPromotion = promotions[randomIndex];
    promotionBar.innerHTML = '<div id="promotion-content">' + randomPromotion + '</div>';
}

setInterval(changePromotion, 5000);


