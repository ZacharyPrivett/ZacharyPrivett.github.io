// Code from "Coding Passive Income" YouTube Channel
// https://www.youtube.com/watch?v=JQSxHen1-yI

function slideShow(caller){
    let interval = serInterval(function () {
        changeSlide('next')
    }, 1000)
}


function changeSlide(direction) {
    let currentImg = $('active');
    let nextImg = currentImg.next();
    let prevIgm = currentImg.prev();

    if (direction == 'next') {
        if (nextImg.length) {
            nextImg.addClass('active');
        } else {
            $('.slider img').first().addClass('active');
        }   
    } else {
        if (prevIgm.length) {
            prevIgm.addClass('active');
        } else {
            $('.slider img').last().addClass('active')
        }
            
    }

    currentImg.removeClass('active');
}