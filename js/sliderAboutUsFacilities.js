let slideIndex = 0;

function showSlide() {
    let slides = document.querySelectorAll('.sliderHighRating');
    let dots = document.querySelectorAll('.dot');
    
    slides.forEach(slide => slide.style.display = 'none');
    
    slides[slideIndex].style.display = 'block';
    
    dots.forEach(dot => dot.classList.remove('active'));
    
    dots[slideIndex].classList.add('active');
    
    slideIndex = (slideIndex + 1) % slides.length;
}

showSlide();

document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slideIndex = index;
        showSlide();
    });
});