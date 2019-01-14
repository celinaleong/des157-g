console.log('reading js');

var center;

function setup() {
  //size us createCanvas in p5
  //create a variable to reference the createCanvas
  var myCanvas = createCanvas(800,250);
  //connect myCanvas to mySketch
  myCanvas.parent('mySketch');
}

function draw_circles() {
  while (center < width) {
    rect(center, 125, 230, 230);
    center = center + 240;
  }
}

function draw() {
  fill(255, 204, 0);
  noStroke();
  rectMode(CENTER);
  center = 160;
  draw_circles();
  for (var i = 160; i < width; i = i+240) {
    if (mouseX > i-115 && mouseX < i+115 && mouseY > 10 && mouseY < 240) {
      fill(255);
      rect(i, 125, 200, 200);
      if (mouseIsPressed) {
        fill(255, 204, 0);
        rect(i, 125, 200, 200);
        fill(255);
        ellipse(i, 125, 200, 200);
      }
    }
  }
}
