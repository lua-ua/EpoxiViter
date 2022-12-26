let offset = 0; // зміщення по лівому краю
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 341.33;
    if (offset > 3071.97) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 341.33;
    if (offset < 0) {
        offset = 3071.97;
    }
    sliderLine.style.left = -offset + 'px';
});