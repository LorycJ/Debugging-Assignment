// Enhance each function and put comments 
// above each line of code explaining what is happening in your own words.

//This is a function that will display first when someone opens the page
function displayWelcome() {
    //This document will have a sentence that someone will see when they open the page
    document.write("<h2>Scroll down to land at the space port and enter the Casino!</h2>");
}
//This function is what will tell the player how to play the game
function displayInstructions() {
    //This document will have the instructions on how to play the game
    document.write("<br/><p>This is how you play....<br/>Refresh the page to roll the antigravity dice!</p><br/><p><p>You can't win if you don't play!</p><br/>");
}
//This function will have the tools you need to play the game
function play() {
    //Line 16-19 will have the Die so you can play crabs otherwise you won't be able to play the game and it will say the numeber it will choose between 0-6 randomly
    var die1 = Math.ceil(Math.random() * 6);

    var die2 = Math.ceil(Math.random() * 12);//The Problem comes from this line of code Die 2 is not supposed to have 12 sides Die's only have 6 sides.
//This will say what is the sum of the two die combined
    var sum = die1 + die2
    document.write("Die 1 = " + die1)
    document.write("<br/>")
    document.write("Die 2 = " + die2)
    document.write("<br/>")
    document.write("Sum = " + sum)
    document.write("<br/>")
    if (sum == 8 || sum == 11) {
        document.write("You lose Space Cadet!")
        document.write("<br/>")
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.write("DOUBLES - you win Space Ranger!")
        document.write("<br/>")
    }
    else {
        document.write("Roll again Space Cadet!")
        document.write("<br/>")
    }
}
