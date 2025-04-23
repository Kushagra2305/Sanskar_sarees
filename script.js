document.addEventListener("DOMContentLoaded", () => {
  // Testimonials Slider
  const testimonials = document.querySelectorAll(".testimonial");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  let currentIndex = 0;
  let timeoutId;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove("active");
      testimonial.style.display = "none";
    });
    testimonials[index].classList.add("active");
    testimonials[index].style.display = "block";
    currentIndex = index;

    // Clear existing timeout before setting a new one
    clearTimeout(timeoutId);

    // Calculate delay based on word count
    const text = testimonials[index].querySelector("p").textContent;
    const wordCount = text.split(" ").length;
    let delay = 6000;
    if (wordCount > 40) {
      delay += Math.ceil((wordCount - 40) / 10) * 1500;
    }

    // Auto move to next after delay
    timeoutId = setTimeout(() => {
      showTestimonial((currentIndex + 1) % testimonials.length);
    }, delay);
  }

  // Manual Navigation
  nextButton.addEventListener("click", () => {
    showTestimonial((currentIndex + 1) % testimonials.length);
  });

  prevButton.addEventListener("click", () => {
    showTestimonial((currentIndex - 1 + testimonials.length) % testimonials.length);
  });

  // Start the loop
  showTestimonial(currentIndex)
}); 
document.querySelectorAll('.category-btn').forEach(button => {
  button.addEventListener('click', function () {
    const category = this.getAttribute('data-category');
    
    // Hide all categories
    document.querySelectorAll('.category-content').forEach(content => {
      content.classList.remove('active');
    });
    
    // Show selected category
    document.getElementById(category).classList.add('active');
  });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetSection = document.querySelector(this.getAttribute('href'));
    const offset = 80;

    const elementPosition = targetSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});// Handle Category Button Clicks
document.querySelectorAll('.category-btn').forEach(button => {
  button.addEventListener('click', function () {
    const category = this.getAttribute('data-category');

    // Remove active class from all categories
    document.querySelectorAll('.category-content').forEach(content => {
      content.classList.remove('active');
    });

    // Add active class to the clicked category
    document.getElementById(category).classList.add('active');

        // Remove 'active' class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
    
        // Add 'active' class to the clicked button
        this.classList.add('active');
      });
    });document.addEventListener("DOMContentLoaded", function() {
      const sliders = document.querySelectorAll(".image-slider");
    
      sliders.forEach(slider => {
        let images = slider.querySelectorAll("img");
        let index = 0;
    
        setInterval(() => {
          images[index].classList.remove("active");
          index = (index + 1) % images.length;
          images[index].classList.add("active");
        }, 2000);
      });
    });// Automated sliding for image scrollers
    document.querySelectorAll('.image-scroller').forEach(scroller => {
      let scrollAmount = 0;
      let slideTimer = setInterval(() => {
        if (scrollAmount < scroller.scrollWidth - scroller.clientWidth) {
          scroller.scrollBy({ left: 310, behavior: 'smooth' });
          scrollAmount += 310;
        } else {
          scroller.scrollTo({ left: 0, behavior: 'smooth' });
          scrollAmount = 0;
        }
      }, 8000);
    });