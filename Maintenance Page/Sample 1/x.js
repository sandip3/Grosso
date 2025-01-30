var countDownDate = new Date("april 1,2025 00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = '00';
        document.getElementById("hours").innerHTML = '00';
        document.getElementById("minutes").innerHTML = '00';
        document.getElementById("seconds").innerHTML = '00';

    }

}, 1000);

const audio = new Audio('../../Audio/mixkit-game-click-1114.wav')
audio.preload = 'auto';

audio.style.display = 'none';

document.addEventListener('click', function () {
    audio.currentTime = 0;
    audio.play();
})


// Array of image URLs (replace with your own image paths)
const images = [
    "../../IMG/apple.png",
    "../../IMG/blueberries.png",
    "../../IMG/fruit-juice.png",
    "../../IMG/fruit.png",
    "../../IMG/lemon.png",
    "../../IMG/strawberry.png",
    "../../IMG/watermelon.png"
];

// Function to set random image for an element
function setRandomImage(imgElement) {
    const randomIndex = Math.floor(Math.random() * images.length);
    imgElement.src = images[randomIndex];
}

// Select all fruit image elements
const fruitImages = document.querySelectorAll('img');

// For each image, listen for when the animation cycle ends and change the image
fruitImages.forEach(img => {
    img.addEventListener('animationiteration', function () {
        setRandomImage(img);
    });
});

// Initial random image assignment
fruitImages.forEach(img => {
    setRandomImage(img);
});
