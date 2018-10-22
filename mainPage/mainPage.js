var listOfSlides = document.querySelectorAll(".slide");
var i = 0;
setInterval(changingSlides,3000);
function changingSlides() {
    listOfSlides[i].classList.remove('showing');
    i = ++i % listOfSlides.length;
    listOfSlides[i].classList.add("showing");
}