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
    let prevImg = currentImg.prev();

    if (direction == 'next') {
        if (nextImg.length) {
            nextImg.addClass('active');
        } else {
            $('.slider img').first().addClass('active');
        }   
    } else {
        if (prevImg.length) {
            prevImg.addClass('active');
        } else {
            $('.slider img').last().addClass('active')
        }
            
    }

    currentImg.removeClass('active');
}

/*
$(document).ready(function(){
    $('.next').on('click', function(){
        let currentImg = $('.active');
        let nextImg = currentImg.next();
        
        if(nextImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });
}); 
*/