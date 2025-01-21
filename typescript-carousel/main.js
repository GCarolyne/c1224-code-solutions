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
$rightArrow.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  if ($eventTarget === $rightArrow) {
    $rotateImage1.classList.add('hidden');
    $rotateImage2.classList.remove('hidden');
    $circleFull.classList.remove('fa-solid');
    $circleOne.classList.add('fa-solid');
  }
});
