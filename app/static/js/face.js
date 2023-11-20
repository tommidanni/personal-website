var myFace = document.getElementById("my-face");
var image = myFace.querySelector("img");
var originalSrc = image.src; // Store the original image src
var alterSrc = "../static/img/hello_face.png";

myFace.addEventListener("mouseenter", function() {
    image.src =alterSrc;
    image.style.filter = "contrast(130%)";
});

myFace.addEventListener("mouseleave", function() {
    image.src = originalSrc;
    image.style.filter = "contrast(100%)";
});



