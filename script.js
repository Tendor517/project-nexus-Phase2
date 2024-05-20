document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Show the button when scrolling down
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) { // value based on when you want the button to appear
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    scrollToTopBtn.addEventListener("click", function() {
        smoothScrollToTop(1000); // Duration in ms
    });

    function smoothScrollToTop(duration) {
        const startPosition = window.scrollY;
        const startTime = performance.now();

        function scrollStep(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const ease = easeInOutCubic(progress);

            window.scrollTo(0, startPosition * (1 - ease));

            if (elapsedTime < duration) {
                requestAnimationFrame(scrollStep);
            }
        }

        function easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }

        requestAnimationFrame(scrollStep);
    }

    // Add the event listener for the contact form submission
    const contactForm = document.querySelector('form[action="#"]');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Remove the .form-container element
        const formContainer = document.querySelector('.form-container');
        formContainer.remove();

        // Create a new paragraph element
        const thankYouMessage = document.createElement('p');
        thankYouMessage.textContent = 'Thanks for contacting us! We will get in touch with you shortly.';
        thankYouMessage.classList.add('thanks-color'); // Add the yellow-text class
        
        // Append the paragraph to the parent of .form-container
        const registration = document.querySelector('.registration');
        registration.appendChild(thankYouMessage);
    });
});
