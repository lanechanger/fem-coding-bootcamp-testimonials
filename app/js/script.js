// see site below for the tutorial/code that this is mostly based from
// https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9
!(function (d) {
  var itemClassNames = ["carousel-img", "carousel__testimonial", "carousel__person"],
    slides = itemClassNames.map(function (e) {
      return d.querySelectorAll("." + e);
    }),
    items = slides[0],
    totalItems = items.length,
    last = totalItems - 1,
    slide = 0,
    moving = true;

  const prev = d.querySelector("#previous-slide"),
    next = d.querySelector("#next-slide");

  // sets initial classes
  function setInitialClasses() {
    // for each of the nodeLists, set the corresponding classes
    slides.forEach(function (e) {
      e[last].classList.add("prev");
      e[0].classList.add("active");
      e[1].classList.add("next");
    });
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

      // set new positions for the prev and next classes
      const newPrev = (slide === 0) ? last : slide - 1,
        newNext = (slide === last) ? 0 : slide + 1;

      if (totalItems >= 3) {
        // for each of carousel slide elements...
        for (var x = 0; x < slides.length; x++) {
          // set new flags
          slides[x][newPrev].className = itemClassNames[x] + " carousel-slide prev";
          slides[x][slide].className = itemClassNames[x] + " carousel-slide active";
          slides[x][newNext].className = itemClassNames[x] + " carousel-slide next";
        }
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