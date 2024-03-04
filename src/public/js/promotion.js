// Barra de publicidad

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


// Carrusel de publicidad..

document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel-container");

  carousels.forEach(carousel => {
    const images = carousel.querySelectorAll(".carousel-image");
    const interval = 5000;
    let index = 0;

    const showImage = () => {
      index = (index + 1) % images.length;
      const offset = -index * 100;
      carousel.querySelector(".carousel-images").style.transform = `translateX(${offset}%)`;
    };

    setInterval(showImage, interval);
  });
});
