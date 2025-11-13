// =======================================================
// CAROUSEL LOGIC (Pure JavaScript)
// =======================================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
    
    // 2. Carousel Functionality
    const carouselSlide = document.getElementById('carousel-slide');
    
    // Only run if the carousel element exists
    if (carouselSlide) {
        const slides = carouselSlide.children.length; // Total number of images (15)
        const visibleSlides = 3; 
        let currentIndex = 0;
        
        // --- Core Sliding Function ---
        const updateCarousel = () => {
            // Calculates the percentage to shift: (Current Index * (Width of 1/3 slide))
            const offset = currentIndex * (100 / visibleSlides);
            carouselSlide.style.transform = `translateX(-${offset}%)`;
        };
        
        // --- Navigation Functions (accessible globally via window) ---
        window.nextSlide = () => {
            // Can't go past the last possible view (slides - visibleSlides = 12)
            if (currentIndex < slides - visibleSlides) {
                currentIndex++;
            } else {
                // Loop back to the start (1-2-3)
                currentIndex = 0; 
            }
            updateCarousel();
        };

        window.prevSlide = () => {
            if (currentIndex > 0) {
                // Standard backward movement
                currentIndex--;
            } else {
                // Loop to the last possible view (13-14-15)
                currentIndex = slides - visibleSlides; 
            }
            updateCarousel();
        };

        // Initialize: Ensure the carousel starts correctly
        updateCarousel();
    }

    // =======================================================
    // 3. MOBILE MENU TOGGLE (Improved version)
    // =======================================================
    const btn = document.getElementById("mobile-menu-button");
    const menu = document.getElementById("mobile-menu");

    if (btn && menu) {
        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
            // re-render icons for dropdown arrows when menu opens
            if (typeof lucide !== 'undefined' && lucide.createIcons) {
                lucide.createIcons();
            }
        });
    }
});