var spinner = function () {
  setTimeout(function () {
    var spinnerElement = document.getElementById("spinner");
    if (spinnerElement) {
      spinnerElement.classList.remove("show");
    }
  }, 1);
};
spinner();

window.addEventListener("scroll", function () {
  if (window.scrollY > 45) {
    var navbar = document.querySelector(".navbar");
    if (navbar) {
      navbar.classList.add("sticky-top", "shadow-sm");
    }
  } else {
    var navbar = document.querySelector(".navbar");
    if (navbar) {
      navbar.classList.remove("sticky-top", "shadow-sm");
    }
  }
});

var slides = document.querySelectorAll(".testimonial-item");
var currentSlide = 0;

function showSlide(index) {
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }

  for (var i = 0; i < slides.length; i++) {
    if (i === currentSlide) {
      slides[i].style.display = "block";
    } else {
      slides[i].style.display = "none";
    }
  }
}

showSlide(currentSlide);

document.querySelector(".prev").addEventListener("click", function () {
  showSlide(currentSlide - 1);
});

document.querySelector(".next").addEventListener("click", function () {
  showSlide(currentSlide + 1);
});
