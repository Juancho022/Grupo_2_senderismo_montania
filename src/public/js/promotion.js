// Barra de publicidad
document.addEventListener("DOMContentLoaded", function() {
    const promotionBar = document.getElementById("promotion-bar");
    const header = document.querySelector("header");
    let isScrolled = false;

    window.onscroll = function() {
        if (!isScrolled) {
            promotionBar.style.display = "none";
            header.style.top = "0";
            header.style.position = "fixed";
            isScrolled = true;
        }
    };

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
});


// Carrusel de publicidad..

document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll(".carousel-container");

    carousels.forEach(function(carousel) {
      const images = carousel.querySelectorAll(".carousel-image");
      const interval = 5000; 
      let index = 0;

      function showImage() {
        index++;
        if (index >= images.length) {
          index = 0;
        }
        const offset = -index * 100;
        carousel.querySelector(".carousel-images").style.transform = `translateX(${offset}%)`;
      }

      setInterval(showImage, interval);
    });
  });