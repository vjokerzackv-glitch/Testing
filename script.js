let currentIndex = 0;
const facultySlider = document.querySelector('.faculty-slider');
const facultyCards = document.querySelectorAll('.faculty-card');
const totalCards = facultyCards.length;
const cardWidth = facultyCards[0].offsetWidth + 40; // Add the gap width

// Clone first card to create a loop
const firstCardClone = facultyCards[0].cloneNode(true);
facultySlider.appendChild(firstCardClone);

function slideCards() {
  // Check if we've reached the last card and reset
  if (currentIndex === totalCards) {
    facultySlider.style.transition = "none"; // No transition for reset
    facultySlider.style.transform = `translateX(0)`; // Reset to the first card
    currentIndex = 0;
    setTimeout(() => {
      facultySlider.style.transition = "transform 0.5s ease"; // Re-enable smooth transition
    }, 50); // Wait for reset to complete before transitioning again
  } else {
    facultySlider.style.transition = "transform 0.5s ease";
    facultySlider.style.transform = `translateX(-${currentIndex * cardWidth}px)`; // Apply the slide
  }
  currentIndex++;
}

setInterval(slideCards, 1000); // Change slide every 3 seconds
