// console.log("hello world");
const prev = document.querySelector("#previous-slide");
const next = document.querySelector("#next-slide");

const img = document.querySelector(".carousel-img");
const testimonial = document.querySelector(".carousel__testimonial");
const fullname = document.querySelector(".carousel__name");
const role = document.querySelector(".carousel__role");

prev.addEventListener("click", function(){
  console.log("previous slide");
  testimonial.classList.add("red");
  fullname.classList.add("red");
  role.classList.add("red");
});

next.addEventListener("click", function(){
  console.log("next slide");
  testimonial.classList.add("red");
  fullname.classList.add("red");
  role.classList.add("red");
});