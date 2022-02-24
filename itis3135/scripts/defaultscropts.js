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
    var random = Math.floor(Math.random() * 12) + 1;
    document.getElementById("rolldice").innerHTML = random;
}

function numberSquared()
{
    let uNum = document.getElementById("numsquare").value;

        if (isNaN(uNum))
        {
            document.getElementById("numsq").innerHTML = "Please enter a number"
        }
        else 
        {
            let numSquared = uNum * uNum;
            let squaredOutput = uNum + " Squared is: " + numSquared;
            document.getElementById("numsq").innerHTML = squaredOutput; 
        }

}

function dessertRecipe()
{
  
    var x = 0;
    
    let dessertNameArray = new Array("Frozen Bannana Cereal Pops");

    let timeArray = new Array("15 min. + freezing");

    let ingredientsArray = new Array("3/4 cups strawberry yogurt, 2 cups Fruity Pebbles cerearl, 4 medium bananas, peeled and cut crosswise in half, and 8 wooden pop sticks");

    let instruction1 = "<br>1. Place yogurt and cereal in separate shallow bowls. Insert pop sticks through cut side of bananas. "
    + "Dip bananas in yogurt, then roll in cereal to coat. Transfer to waxed paper-lined baking sheets."
    + "<br>2. Freeze until firm, about 1 hour. Transfer to airtight freezer containers; seal containers and return pops to freezer.";
    
    let instructionArray = new Array(instruction1);
  
    let recipeOutput = dessertNameArray[x] +  "<br><br>Time: " + timeArray[x] + "<br><br>Ingredients: " + ingredientsArray[x] + "<br><br>Directions: " + instructionArray[0];
    
    document.getElementById("dessert").innerHTML = recipeOutput;
}

function restaurantRecomendation()
{
    var y = Math.floor(Math.random() * 10);

    let restuarants = new Array("Kindred", "Peppervine", "Bardo", "The Stanley", "The Fig Tree", "Stagioni", "Soul Gastrolounge", "Barrington's", "Rooster's Wood-fired Kitchen", "Good Food on Montford")

    document.getElementById("restaurant").innerHTML = restuarants[y]
}

function tipCalculator()
{
    let billAmount = parseFloat(document.getElementById("amount").value);

    if (isNaN(billAmount))
    {
        document.getElementById("tip").innerHTML = "Please Enter";
        document.getElementById("total").innerHTML = "a Numebr";
    }
    else
    {
        let standardTip = .2;
        let tipAmount = billAmount * standardTip;
        let total = billAmount + tipAmount;
        document.getElementById("tip").innerHTML = "Tip: $"  + tipAmount.toFixed(2);
        document.getElementById("total").innerHTML = "Total: $" + total.toFixed(2);
    }
}

/*
    This is all my code Zachary Privett
*/

function polygon()
{
    let question = prompt("Zulu Parrot would like you to enter in a number from 3-10");

    if (question == 11)
    {
        zoltan();
        document.getElementById("zoltan").innerHTML = ("Zoltan");
        document.getElementById("cont").innerHTML = ("The Continuum transfunctioner is a very mysterious and powerful device. Its mystery is only exceeded by its power");
    }
    else
    {
        let validate = validateEntry(question);

        let userPolygon = getShape(validate);

        alert("Your polygon is a " + userPolygon);

        document.getElementById("user-polygon").innerHTML = ("Your polygon is a " + userPolygon);
    }
}   


function getShape(numSide)
{
    this.numSide = numSide - 3;

    let polygon = ["Triangle", "Quadrilateral", "Pentagon", "Hexagon", "Heptagon", "Octogon", "Nonagon", "Decagon"];

    let userPolygon = polygon[this.numSide];

    return userPolygon;  
}

function validateEntry(question)
{
    this.question = question;

    while (isNaN(this.question) || this.question > 10 || this.question < 3)
    {
        this.question = prompt("Invalid Entry! Zulu Parrot would like you to enter in a number from 3-10");
    }      

    return this.question; 
}

function zoltan()
{
    alert("The Continuum transfunctioner is a very mysterious and powerful device. Its mystery is only exceeded by its power");
}





