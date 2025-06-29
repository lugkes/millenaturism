// home.js (para o carrossel de depoimentos - exemplo simples)
document.addEventListener('DOMContentLoaded', () => {
    const testimonialCarousel = document.querySelector('.testimonial-carousel');

    if (testimonialCarousel) {

        testimonialCarousel.addEventListener('wheel', (event) => {
            if (event.deltaY !== 0) { // Verifica se o scroll vertical não é zero
                event.preventDefault(); // Impede o scroll vertical da página
                testimonialCarousel.scrollLeft += event.deltaY;
            }
        });

        
    }
});