console.log('reading js');

'use strict';

var x, y;
var r = 50;
var delta = 1;

function setup() {
    var myCanvas = createCanvas(400,400);
  //connect myCanvas to mySketch
    myCanvas.parent('mySketch');
    x = width / 2;
    y = height / 2;
}



function draw() {
    clear()
  
  // Draw a circle
    stroke(235,228,247);
    strokeWeight(.4);
    fill(255,255,255,20);
    

    if (r >= 180) {
        delta = -.5;
        
    }
    if (r <= 50) {
        delta = .5;
    }
    r = r + delta;
    ellipse(x, y, r, r);

}
 

