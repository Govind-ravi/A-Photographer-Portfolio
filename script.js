// Navbar Close menu
var close = document.querySelector(".close")
var navbarCollapse = document.querySelector(".navbar-collapse")
close.addEventListener("click", () => {
    navbarCollapse.classList.toggle("show");
})

// Header Background
const listOfUrl = ["Images/hero2.jpg", "Images/hero1.png", "Images/hero3.jpg"];
let slide = 0;
const header = document.getElementById("header");
const slideNo = document.getElementById("slide_no");
const rightArrow = document.getElementsByClassName("rightarrow")[0];
const leftArrow = document.getElementsByClassName("leftarrow")[0];

// Function to change background image
function changeBackgroundImage() {
    header.style.backgroundImage = `url('${listOfUrl[slide]}')`;
    slideNo.innerHTML = `${slide + 1} / ${listOfUrl.length}`;
}

// Function to handle next slide
function nextSlide() {
    slide++;
    if (slide >= listOfUrl.length) {
        slide = 0;
    }
    changeBackgroundImage();
}

// Function to handle previous slide
function previousSlide() {
    slide--;
    if (slide < 0) {
        slide = listOfUrl.length - 1;
    }
    changeBackgroundImage();
}

rightArrow.addEventListener("click", nextSlide);

leftArrow.addEventListener("click", previousSlide);

// Automatic slide change every 4 seconds
const intervalId = setInterval(nextSlide, 4000);


// About Section Tabs 
var tabLinks = document.getElementsByClassName("tab-links")
var tabContents = document.getElementsByClassName("tab-content")

// Function to Switch Tabs
function opentab(tabname) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link")
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}


// Image Slider
var rightKey = document.querySelector(".right_key");
var leftKey = document.querySelector(".left_key");
var allImages = document.querySelector(".all_images2");
var totalImages = 10;
var right = 0;
var imagesInView = calculateImagesInView();

// Function to calculate the number of images set based on screen size
function calculateImagesInView() {
    if (window.matchMedia("(max-width: 600px)").matches) {
        return 1;
    } else if (window.matchMedia("(max-width: 1100px)").matches) {
        return 2;
    } else if (window.matchMedia("(max-width: 1400px)").matches) {
        return 3;
    } else {
        return 4;
    }
}

rightKey.addEventListener("click", () => {
    right += 305;
    if (right >= (totalImages - imagesInView) * 305) {
        right = (totalImages - imagesInView) * 305;
        rightKey.disabled = true;
    }
    leftKey.disabled = false;
    allImages.style.transform = `translateX(-${right}px)`;
});

leftKey.addEventListener("click", () => {
    right -= 305;
    if (right <= 0) {
        right = 0;
        leftKey.disabled = true;
    }
    rightKey.disabled = false;
    allImages.style.transform = `translateX(-${right}px)`;
});

// Update imagesInView when window resizes
window.addEventListener("resize", () => {
    imagesInView = calculateImagesInView();
});


// Custom Theme

// Function which converts rgb value of color to Hex
function rgbToHex(rgb) {
    var values = rgb.match(/\d+/g);
    var hex = "#" + values.map(function (value) {
        return ("0" + parseInt(value, 10).toString(16)).slice(-2).toUpperCase();
    }).join("");
    return hex;
}

var backgroundColor
var headlineColor
var textColor
var heroHeadlinesColor
document.querySelector("#exampleModal button.btn-primary").addEventListener("click", function () {
    backgroundColor = document.getElementById("backgroundColor").value;
    headlineColor = document.getElementById("headlineColor").value;
    textColor = document.getElementById("textColor").value;
    heroHeadlinesColor = document.getElementById("heroHeadlinesColor").value;

    document.documentElement.style.setProperty("--background-color", backgroundColor);
    document.documentElement.style.setProperty("--headline-color", headlineColor);
    document.documentElement.style.setProperty("--text-color", textColor);
    document.documentElement.style.setProperty("--hero-headlines", heroHeadlinesColor);
});

var circles = document.querySelectorAll(".circle");

circles.forEach(function (circle) {
    circle.addEventListener("click", function () {
        var color = rgbToHex(circle.style.backgroundColor);
        if (color === "#FFEBCD") {
            applyTheme1();
        } else if (color === "#E6E6FA") {
            applyTheme2();
        } else if (color === "#FFF0F5") {
            applyTheme3();
        } else if (color === "#FDF6E3") {
            applyTheme4();
        } else if (color === "#F8F8FF") {
            applyTheme5();
        } else if (color === "#FFE4B5") {
            applyTheme6();
        }
    });
});

// Functions to apply standard themes
function applyTheme1() {
    document.documentElement.style.setProperty("--background-color", "#FFEBCD");
    document.documentElement.style.setProperty("--headline-color", "#CD853F");
    document.documentElement.style.setProperty("--text-color", "#555358");
    document.documentElement.style.setProperty("--hero-headlines", "#222222");
}
function applyTheme2() {
    document.documentElement.style.setProperty("--background-color", "#E6E6FA");
    document.documentElement.style.setProperty("--headline-color", "#4169E1");
    document.documentElement.style.setProperty("--text-color", "#555358");
    document.documentElement.style.setProperty("--hero-headlines", "#222222");
}
function applyTheme3() {
    document.documentElement.style.setProperty("--background-color", "#FFF0F5");
    document.documentElement.style.setProperty("--headline-color", "#FF69B4");
    document.documentElement.style.setProperty("--text-color", "#555358");
    document.documentElement.style.setProperty("--hero-headlines", "#222222");
}
function applyTheme4() {
    document.documentElement.style.setProperty("--background-color", "#FDF6E3");
    document.documentElement.style.setProperty("--headline-color", "#FF6347");
    document.documentElement.style.setProperty("--text-color", "#555358");
    document.documentElement.style.setProperty("--hero-headlines", "#222222");
}
function applyTheme5() {
    document.documentElement.style.setProperty("--background-color", "#F8F8FF");
    document.documentElement.style.setProperty("--headline-color", "#6A5ACD");
    document.documentElement.style.setProperty("--text-color", "#555358");
    document.documentElement.style.setProperty("--hero-headlines", "#222222");
}
function applyTheme6() {
    document.documentElement.style.setProperty("--background-color", "#FFE4B5");
    document.documentElement.style.setProperty("--headline-color", "#8B4513");
    document.documentElement.style.setProperty("--text-color", "#555358");
    document.documentElement.style.setProperty("--hero-headlines", "#222222");
}

function defaultTheme() {
    document.documentElement.style.setProperty("--background-color", "#E6DDD2");
    document.documentElement.style.setProperty("--headline-color", "#99621E");
    document.documentElement.style.setProperty("--text-color", "#555358");
    document.documentElement.style.setProperty("--hero-headlines", "#222222");
}


// Function to disable snap scrolling
function disableSnapScrolling() {
    document.querySelector(".Container").style.scrollSnapType = "none";
}

// Function to enable snap scrolling
function enableSnapScrolling() {
    document.querySelector(".Container").style.scrollSnapType = "y mandatory";
}

// Function to handle smooth scrolling
function smoothScrollTo(targetId) {
    disableSnapScrolling();

    var targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });

    setTimeout(enableSnapScrolling, 1000);
}


// Gallery Image Overlay

var imageGallery = document.getElementById("image-gallery");
var imageOverlay = document.getElementById("image-overlay");
var overlayImage = document.querySelector(".overlay-image");
var closeBtn = document.querySelector(".close-btn");
var imageGallery = document.getElementById("pics_grid");
var imageOverlay = document.getElementById("image-overlay");
var overlayImage = document.querySelector(".overlay-image");
var closeBtn = document.querySelector(".close-btn");

var galleryImages = document.querySelectorAll(".photo_cont img");
galleryImages.forEach(image => {
    image.addEventListener("click", function () {
        imageOverlay.style.display = "flex";
        overlayImage.src = this.src;
    });
});

closeBtn.addEventListener("click", function () {
    imageOverlay.style.display = "none";
});

imageOverlay.addEventListener("click", function (event) {
    if (event.target === imageOverlay) {
        imageOverlay.style.display = "none";
    }
});