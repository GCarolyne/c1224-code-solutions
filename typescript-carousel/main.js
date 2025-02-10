'use strict';
const $rightArrow = document.querySelector('#right-arrow');
if (!$rightArrow) throw new Error('the query for the right arrow faild');
const $rotateImage1 = document.querySelector('#rotate-image-1');
if (!$rotateImage1) throw new Error('the query for the rotate image failed.');
const $rotateImage2 = document.querySelector('#rotate-image-2');
if (!$rotateImage2) throw new Error('the query for the rotate image failed.');
const $rotateImage3 = document.querySelector('#rotate-image-3');
if (!$rotateImage3) throw new Error('the query for the rotate image failed.');
const $rotateImage4 = document.querySelector('#rotate-image-4');
if (!$rotateImage4) throw new Error('the query for the rotate image failed.');
const $rotateImage5 = document.querySelector('#rotate-image-5');
if (!$rotateImage5) throw new Error('the query for the rotate image failed.');
const $circleOne = document.querySelector('#circle-one');
if (!$circleOne) throw new Error('the query for the circle one failed.');
const $circleFull = document.querySelector('#circle-full');
if (!$circleFull) throw new Error('the query for the full circle failed');
const $circleTwo = document.querySelector('#circle-two');
if (!$circleTwo) throw new Error('the query for the 2 circle failed');
const $circleThree = document.querySelector('#circle-three');
if (!$circleThree) throw new Error('the query for the 3 circle failed');
const $circleFour = document.querySelector('#circle-four');
if (!$circleFour) throw new Error('the query for the four circle failed');
const $rotateImage = document.querySelectorAll('.rotate-image');
if (!$rotateImage) throw new Error('the query for the rotate image failed. ');
const $circles = document.querySelectorAll('.fa-circle');
if (!$circles) throw new Error('the query for the circles failed. ');
let currentImageIndex = 0;
let currentCircleIndex = 0;
$rightArrow.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  if ($eventTarget === $rightArrow) {
    rotateImage();
  }
});
function rotateImage() {
  $rotateImage[currentImageIndex].classList.add('hidden');
  $circles[currentCircleIndex].classList.remove('fa-solid');
  currentImageIndex = (currentImageIndex + 1) % $rotateImage.length;
  currentCircleIndex = (currentCircleIndex + 1) % $circles.length;
  $rotateImage[currentImageIndex].classList.remove('hidden');
  $circles[currentCircleIndex].classList.add('fa-solid');
}
setInterval(rotateImage, 3000);
const $leftArrow = document.querySelector('.left');
if (!$leftArrow) throw new Error('the query for the left arrow failed');
$leftArrow.addEventListener('click', () => {
  $rotateImage[currentImageIndex].classList.add('hidden');
  $circles[currentCircleIndex].classList.remove('fa-solid');
  currentImageIndex =
    (currentImageIndex - 1 + $rotateImage.length) % $rotateImage.length;
  currentCircleIndex =
    (currentCircleIndex - 1 + $circles.length) % $circles.length;
  $rotateImage[currentImageIndex].classList.remove('hidden');
  $circles[currentCircleIndex].classList.add('fa-solid');
});
$circleFull.addEventListener('click', () => {
  $rotateImage[currentImageIndex].classList.add('hidden');
  $circles[currentCircleIndex].classList.remove('fa-solid');
  currentImageIndex = 0;
  currentCircleIndex = 0;
  $rotateImage[currentImageIndex].classList.remove('hidden');
  $circles[currentCircleIndex].classList.add('fa-solid');
});
$circleOne.addEventListener('click', () => {
  $rotateImage[currentImageIndex].classList.add('hidden');
  $circles[currentCircleIndex].classList.remove('fa-solid');
  currentImageIndex = 1;
  currentCircleIndex = 1;
  $rotateImage[currentImageIndex].classList.remove('hidden');
  $circles[currentCircleIndex].classList.add('fa-solid');
});
$circleTwo.addEventListener('click', () => {
  $rotateImage[currentImageIndex].classList.add('hidden');
  $circles[currentCircleIndex].classList.remove('fa-solid');
  currentImageIndex = 2;
  currentCircleIndex = 2;
  $rotateImage[currentImageIndex].classList.remove('hidden');
  $circles[currentCircleIndex].classList.add('fa-solid');
});
$circleThree.addEventListener('click', () => {
  $rotateImage[currentImageIndex].classList.add('hidden');
  $circles[currentCircleIndex].classList.remove('fa-solid');
  currentImageIndex = 3;
  currentCircleIndex = 3;
  $rotateImage[currentImageIndex].classList.remove('hidden');
  $circles[currentCircleIndex].classList.add('fa-solid');
});
$circleFour.addEventListener('click', () => {
  $rotateImage[currentImageIndex].classList.add('hidden');
  $circles[currentCircleIndex].classList.remove('fa-solid');
  currentImageIndex = 4;
  currentCircleIndex = 4;
  $rotateImage[currentImageIndex].classList.remove('hidden');
  $circles[currentCircleIndex].classList.add('fa-solid');
});
