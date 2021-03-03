// see site below for the tutorial/code that this is mostly based from
// https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9
!(function (d) {
  var itemClassName = "carousel-img",
    items = d.querySelectorAll(".".concat(itemClassName)),
    totalItems = items.length,
    last = totalItems - 1,
    slide = 0,
    moving = true;

  const prev = d.querySelector("#previous-slide"),
    next = d.querySelector("#next-slide");

  const img = d.querySelector(".".concat(itemClassName)),
    testimonial = d.querySelector(".carousel__testimonial"),
    fullname = d.querySelector(".carousel__name"),
    role = d.querySelector(".carousel__role");

  // sets initial classes
  function setInitialClasses() {
    items[last].classList.add("prev-img");
    items[0].classList.add("active");
    items[1].classList.add("next-img");
  }

  // Set event listeners
  function setEventListeners() {
    next.addEventListener('click', moveNext);
    prev.addEventListener('click', movePrev);
  }

  // Next navigation handler
  function moveNext() {
    if (!moving) {
      // wrap around if at the end, otherwise increment
      if (slide === last) {
        slide = 0;
      } else {
        slide++;
      }

      moveCarouselTo(slide);
    }
  }

  // Previous navigation handler
  function movePrev() {
    if (!moving) {
      // wrap around if at the beginning, otherwise decrement
      if (slide === 0) {
        slide = last;
      } else {
        slide--;
      }

      moveCarouselTo(slide);
    }
  }

  // block out interactions for 500ms 
  function disableInteraction() {
    moving = true;
    setTimeout(function () {
      moving = false;
    }, 500);
  }

  function moveCarouselTo(slide) {
    if (!moving) {
      disableInteraction();

      const newPrev = (slide === 0) ? last : slide - 1;
      newNext = (slide === last) ? 0 : slide + 1;

      if (totalItems >= 3) {
        // clear old flags
        items.forEach(function (element) {
          element.className = itemClassName;
        });

        // set new flags
        items[newPrev].className = itemClassName + " prev-img";
        items[slide].className = itemClassName + " active";
        items[newNext].className = itemClassName + " next-img";
      }
    }
  }

  function initCarousel() {
    setInitialClasses();
    setEventListeners();

    moving = false;
  }

  initCarousel();
}(document));