var myFace = document.getElementById("my-face");
var image = myFace.querySelector("img");
var originalSrc = image.src;
var alterSrc = "../static/img/hello_face.png";

myFace.addEventListener("mouseenter", function() {
    image.src =alterSrc;
    image.classList.add("filter-130");
});

myFace.addEventListener("mouseleave", function() {
    image.src = originalSrc;
    image.classList.remove("filter-130");
});



