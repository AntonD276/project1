var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
/*var noise = document.querySelectorAll('.slides .noise');*/
var slideInterval = setInterval(nextSlide,3000);
function b(){slides[currentSlide].className = 'slide showing'};
function nextSlide() {
    slides[currentSlide].className = 'slide';
    setTimeout(b,1000);
    currentSlide = (currentSlide+1)%slides.length;

}
