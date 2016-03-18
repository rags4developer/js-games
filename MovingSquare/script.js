"use strict"; //Prevents a variable from being used before its declared.

//Create the Game object with all game variables.
var Game = {
    canvas : undefined,
    canvasContext : undefined,
    rectanglePosition: 0 //We need to store & update the horizontal position of the rectangle/square regularly.
};


/*Add a method to the game object. The method starts the game, i.e it initiates the game variables & 
calls the "game loop".*/
Game.start = function () {
    //Initiate game variables
    Game.canvas = document.getElementById("myCanvas");
    Game.canvasContext = Game.canvas.getContext("2d");
    
    //Run the "game loop"
    Game.mainLoop();
};


//Start the game only when the HTML is completely downloaded by the player's browser.
document.addEventListener('DOMContentLoaded', Game.start);


/*
-------------------------------------------------------
Defining the Update & Draw methods of the "game loop".
-------------------------------------------------------
*/

/*
--------------
Update method
--------------
It updates the position of the square. The draw method (defined below) will take the updated position & draw the 
square there. */
Game.update = function () {
    //Let's change the position of the square according to the current time.
    var d = new Date();
    var currentSystemTime = d.getTime(); //Num of milliseconds since Jan 1, 1970 !
    Game.rectanglePosition = currentSystemTime % Game.canvas.width;//A value always less than the width of the canvas.
};


/*
------------
Draw method
------------
Get the current position of the square & draw the square there.
*/
Game.draw = function () {
    Game.canvasContext.fillStyle = "blue";//Fill any drawn shapes with blue.
    Game.canvasContext.fillRect(Game.rectanglePosition, 0, 50, 50);//Draw a 50x50 square at (latest position, 0).
};


/*
--------------------
Clear canvas method
--------------------
This clears the canvas. Its not one of the main methods of the game.
*/
Game.clearCanvas = function () {
    Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);//Erase previously drawn content.
};


/*
-------------------
The game loop.
-------------------
It updates the game variables & then draws/shows the game in its latest state.
*/

Game.mainLoop = function () {
    Game.clearCanvas();
    Game.update();
    Game.draw();
    window.setTimeout(Game.mainLoop, 1000 / 60);//Call this method once after 16.6 millisec i.e 60 frames per sec.
};
