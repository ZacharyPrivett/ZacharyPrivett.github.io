// Code from "Coding Passive Income" YouTube Channel
// https://www.youtube.com/watch?v=JQSxHen1-yI
let stopSlideshow = false;

function slideShow(caller) {
    let status = $(caller).attr('value');

    if (status.indexOf('Start') > -1) {
        stopSlideshow = false;
        $(caller).attr('value', 'Stop Slideshow');
    } else {
        stopSlideshow = true;
        $(caller).attr('value', 'Start Slideshow');
    }

    let interval = setInterval(function () {
        if (!stopSlideshow)
            changeSlide('next');
        else
            clearInterval(interval)    
    }, 2000);
}


function changeSlide(direction) {
    let currentImg = $('.active');
    let nextImg = currentImg.next();
    let prevImg = currentImg.prev();

    if (direction == 'next') {
        if (nextImg.length)
            nextImg.addClass('active');
        else 
            $('.slider img').first().addClass('active');
           
    } else {
        if (prevImg.length) {
            prevImg.addClass('active');
        } else {
            $('.slider img').last().addClass('active')
        }
        
    }
    currentImg.removeClass('active');  
}

function booking() {
    let stylist = document.getElementById('stylist').value
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let time = document.getElementById('time').value
    let date = document.getElementById('date').value

    document.getElementById('thankYou').innerHTML = ("Thank You for Booking with Luxe Color Lab!")
    document.getElementById('output').innerHTML = ("Appointment for " + fname + "" + lname + " on " + date + " at " + time + " with " + stylist) 
}