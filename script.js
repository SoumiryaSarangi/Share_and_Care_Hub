const toggleButton = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigation.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navigation.classList.toggle("active");
});

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});


// ... existing toggle and sign in/up code ...

// Get all slides and navigation buttons
document.addEventListener('DOMContentLoaded', function() {
  // Get all slides and buttons
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  let currentIndex = 0;

  // Initialize - hide all slides except first
  function initializeSlides() {
      slides.forEach((slide, index) => {
          if (index !== 0) {
              slide.classList.add('disappear');
          }
      });
  }

  // Show specific slide
  function showSlide(index) {
      // Hide current slide
      slides[currentIndex].classList.add('disappear');
      
      // Show new slide
      slides[index].classList.remove('disappear');
      
      // Update current index
      currentIndex = index;
  }

  // Previous slide handler
  prevBtn.addEventListener('click', () => {
      let newIndex = currentIndex - 1;
      if (newIndex < 0) {
          newIndex = slides.length - 1;
      }
      showSlide(newIndex);
  });

  // Next slide handler
  nextBtn.addEventListener('click', () => {
      let newIndex = currentIndex + 1;
      if (newIndex >= slides.length) {
          newIndex = 0;
      }
      showSlide(newIndex);
  });

  // Initialize the slider
  initializeSlides();
});