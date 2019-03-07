// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/h_aTgOl9J5I

var song;
var amp;
var button;

var volhistory = [];

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('ariana.mp3');
}

function setup() {
    createCanvas(700, 700);
    angleMode(DEGREES);
    button = createButton('play');
    button.mousePressed(toggleSong);
    slider = createSlider(0,1,.5,.01);
    song.loop();
    amp = new p5.Amplitude();
}

/*function draw() {
    background(0);
    song.setVolume(slider.value());
    var vol = amp.getLevel();
    volhistory.push(vol);
    stroke(235,228,247,100);
    strokeWeight(1.2);
    noFill();
   // fill(0,0,0,20);

  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i], 0, .9, 100, 350);
    var x = r * cos(i)+1;
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape();

  if (volhistory.length > 360) {
    volhistory.splice(0, 1);
  }
  //ellipse(100, 100, 200, vol * 1000);
}*/