// Slide show code from "Coding Passive Income" YouTube Channel
// https://www.youtube.com/watch?v=JQSxHen1-yI

//slideshow
let stopSlideshow = false;

function slideShow(caller) {
    let status = $(caller).attr('value');
    // starts slide show
    if (status.indexOf('Start') > -1) {
        stopSlideshow = false;
        $(caller).attr('value', 'Stop Slideshow');
    } else {
        stopSlideshow = true;
        $(caller).attr('value', 'Start Slideshow');
    }
    // stops slide show
    let interval = setInterval(function () {
        if (!stopSlideshow)
            changeSlide('next');
        else
            clearInterval(interval)    
    }, 2000);
}

// Slideshow
function changeSlide(direction) {
    let currentImg = $('.active');
    let nextImg = currentImg.next();
    let prevImg = currentImg.prev();
    // changes to next sldie
    if (direction == 'next') {
        if (nextImg.length)
            nextImg.addClass('active');
        else 
            $('.slider img').first().addClass('active');
    // changes to previous slide   
    } else {
        if (prevImg.length) {
            prevImg.addClass('active');
        } else {
            $('.slider img').last().addClass('active')
        }
        
    }
    currentImg.removeClass('active');  
}

// Confirms appointments
function booking() {
    ans = confirm("Confirm Appointment?");
    
    if (ans == true) {
        booked();
    }
}

// if user confirms appointment
function booked() {
    let stylist = document.getElementById("stylist").value;
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let time = document.getElementById('time').value;
    let date = document.getElementById('date').value;
    // check if all forms filled out
    if (stylist == "" || fname == "" || lname == "" || time == "" || date == "") {
        // alerts user if they havn't fill out form
        alert("Please fill out entire Appointment From");
    }
    //  alerts user of comfired appointment and displays information
    else {
        alert("Appointment Confirmed");
        document.getElementById("thankYou").innerHTML = ("<p>Thank You for Booking with Luxe Color Lab!</p>" + "<p>Appointment for " + fname + " " + lname + " on " + date + " at " + time + " with " + stylist + "</p>");
        document.getElementById('output').innerHTML = ("<p>Appointment for " + fname + " " + lname + " on " + date + " at " + time + " with " + stylist + "</p>"); 
    }
}



