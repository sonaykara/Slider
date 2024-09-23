var carousels = document.querySelectorAll('.carouselContainer');

carousels.forEach(function (carousel) {
  var prevBtn = carousel.querySelector('.prevBtn');
  var nextBtn = carousel.querySelector('.nextBtn');
  var inner = carousel.querySelector('.carouselInner');
  var innerLeft = document.getElementById('carouselInnerLeft');
  var slidesLeft = innerLeft.querySelectorAll('.imgSlide');
  var innerRight = document.getElementById('carouselInnerRight');
  var slidesRight = innerRight.querySelectorAll('.imgSlide');
  var slides = inner.querySelectorAll('.imgSlide');
  
  var width = 720, slideIndex = 0, widthSmall = 640;

  function slideShow() {
    inner.style.left = -width * slideIndex + 'px';
    innerLeft.style.left = -widthSmall * slideIndex + 'px';
    innerRight.style.left = -widthSmall * slideIndex + 'px';
  }

  prevBtn.addEventListener('click', function () {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    slideShow();
  });

  nextBtn.addEventListener('click', function () {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    slideShow();
  });
});
