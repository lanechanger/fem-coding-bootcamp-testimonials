// based on Apple Pie Giraffe's carousel article
// https://applepiegiraffe.hashnode.dev/how-to-create-a-super-simple-image-slider
const images = document.querySelectorAll('.carousel-img');
const testimonials = document.querySelectorAll('.carousel__testimonial');
const persons = document.querySelectorAll('.carousel__person');
const prevBtn = document.querySelector('#previous-slide');
const nextBtn = document.querySelector('#next-slide');

let index = 0;
images[index].classList.add('active');
testimonials[index].classList.add('active');
persons[index].classList.add('active');

function removeActive() {
  images[index].classList.remove('active');
  testimonials[index].classList.remove('active');
  persons[index].classList.remove('active');
}

function addActive() {
  images[index].classList.add('active');
  testimonials[index].classList.add('active');
  persons[index].classList.add('active');
}

function prevSlide() {
  removeActive();
  index = index === 0 ? images.length - 1 : index - 1;
  addActive();
}

function nextSlide() {
  removeActive();
  index = index === images.length - 1 ? 0 : index + 1;
  addActive();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);