document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const contenus = document.querySelector('.contenu');
    let currentIndex = 0;
    const slides = document.querySelectorAll('.defile');
    const image = slides.length;
    const intervalles = 3000; // des intervalle de 2 secondes

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % image;
        contenus.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextSlide, intervalles);
});
