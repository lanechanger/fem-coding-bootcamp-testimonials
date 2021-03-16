// Based on this carousel article
// https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9
const images = document.querySelectorAll('.carousel-img');
const text = document.querySelectorAll('.carousel-text-item');
const carouselItems = [images, text];
const prevBtn = document.querySelector('#previous-slide');
const nextBtn = document.querySelector('#next-slide');
const last = images.length - 1;

let index = 0,
  prevIndex = prev(index),
  nextIndex = next(index);
addClasses();

function removeClasses() {
  carouselItems.forEach(function (e) {
    e[prevIndex].classList.remove('prev');
    e[index].classList.remove('active');
    e[nextIndex].classList.remove('next');
  });
}

function addClasses() {
  carouselItems.forEach(function (e) {
    e[prevIndex].classList.add('prev');
    e[index].classList.add('active');
    e[nextIndex].classList.add('next');
  });
}

function prev(x) {
  return (x === 0) ? last : x - 1;
}

function next(x) {
  return (x === last) ? 0 : x + 1;
}

function setPrevIndex() {
  index = prev(index), prevIndex = prev(prevIndex), nextIndex = prev(prevIndex);
}

function setNextIndex() {
  index = next(index), prevIndex = next(prevIndex), nextIndex = next(nextIndex);
}

function prevSlide() {
  removeClasses();
  setPrevIndex();
  addClasses();
}

function nextSlide() {
  removeClasses();
  setNextIndex();
  addClasses();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);