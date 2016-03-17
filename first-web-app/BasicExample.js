changeCanvasColor = function () {
    //Get the canvas object from the DOM
    var canvas = document.getElementById("mycanvas");
    //Get a context object. The object provides functions to perform operations on the canvas, such as drawing.
    var context = canvas.getContext("2d");
    //Sets the color to be used when filling shapes.
    context.fillStyle = "blue";
    //Draw a rectangle of given width & heighy at 0, 0
    context.fillRect(0, 0, canvas.width, canvas.height);
}
document.addEventListener('DOMContentLoaded', changeCanvasColor);
