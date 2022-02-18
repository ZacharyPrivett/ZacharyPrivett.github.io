function scriptTest() 
{
    alert("Hey my script is running!");
}

function timeDate() 
{
    let today = new Date();
    let time = today.toLocaleTimeString();
    let date = today.getDate();
    let year = today.getFullYear();
    let month = getMonthString(today.getMonth());
    let day = today.getDay();
    let dayString = getDayString(day);
    let stringOut = "Today is " + time + " on " + dayString + ", " + date + " " + month + ", " + year;
    document.getElementById("date").innerHTML = stringOut; 
}

function getMonthString(month)
{
    let monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
    return monthArray[month];
}

function getDayString(day)
{
    let dayArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    return dayArray[day];
}

function welcome()
{
    let userName = document.getElementById("name").value; 
    let userMood = document.getElementById("mood").value;
    let welcomeMessage = "Privett Enterprise welcomes you, " + userName + "! We're glad you are doing " + userMood + "!";
    document.getElementById("wel-message").innerHTML = welcomeMessage;    
}

function rollDice()
{
    
}

    