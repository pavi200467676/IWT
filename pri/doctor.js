
let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.carousel-slides');
    const slideWidth = document.querySelector('.carousel-slide').offsetWidth;
    const totalSlides = document.querySelectorAll('.carousel-slide').length;
    const slidesToShow = 3;
    const totalSets = Math.ceil(totalSlides / slidesToShow);
    
    // Calculate new index
    currentIndex = (currentIndex + direction + totalSets) % totalSets;

    // Move to the new slide
    const newTransformValue = -currentIndex * slideWidth * slidesToShow;
    slides.style.transform = `translateX(${newTransformValue}px)`;
}

