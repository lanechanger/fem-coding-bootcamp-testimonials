!(function (d) {
  const itemClassName = ".carousel-img",
    items = d.querySelectorAll(itemClassName),
    totalItems = items.length,
    slide = 0,
    moving = true;

  const prev = d.querySelector("#previous-slide"),
    next = d.querySelector("#next-slide");

  const img = d.querySelector(".carousel-img"),
    testimonial = d.querySelector(".carousel__testimonial"),
    fullname = d.querySelector(".carousel__name"),
    role = d.querySelector(".carousel__role");

  console.log(totalItems);


  prev.addEventListener("click", function () {
    console.log("previous slide");
    testimonial.classList.add("red");
    fullname.classList.add("red");
    role.classList.add("red");
  });

  next.addEventListener("click", function () {
    console.log("next slide");
    testimonial.classList.add("red");
    fullname.classList.add("red");
    role.classList.add("red");
  });

}(document));