console.log('reading js');

'use strict';


// SITE FLOW 

/*
var customize = document.querySelector('#customize');
var customizeclose = document.querySelector('#customizeclose');
var customizemenu = document.querySelector('#customizemenu');
var enter = document.querySelector('#enter');
var settings = document.querySelector('#settings');
var settingsclose = document.querySelector('#begin');
var mySketch = document.querySelector('#mySketch');
var intro = document.querySelector('#intro');
var h2 = document.querySelector('h2'); 



customize.addEventListener('click', function () {
    customizemenu.style.left = '0';
    
})
customizeclose.addEventListener('click', function (){
    customizemenu.style.left = '-300px';
    
})

enter.addEventListener('click', function () {
    intro.style.display='none';
    settings.style.display='block';
    
})

settingsclose.addEventListener('click', function () {
    settings.style.display='none';
    mySketch.style.display='block';
    h2.style.display='block';
})
*/



/* THIS IS FOR RADIO BUTTONS
// glenda: update using function with parameter of object selected
"use strict";

var response;
var submit = document.querySelector('input[type="submit"]');
var myMsg = document.querySelector('#myMsg');

//querySelectorAll returns all matches into an array
var email = document.querySelector("#email");
var phone = document.querySelector("#phone");
var mail = document.querySelector("#mail");

//add events for the radio buttons
email.addEventListener("click", emailSelected);
phone.addEventListener("click", phoneSelected);
mail.addEventListener("click", mailSelected);

function emailSelected() {
  response = 'email';
}

function phoneSelected() {
  response = 'phone';
}

function mailSelected() {
  response = 'mail';
}

submit.addEventListener("click", processForm);

function processForm(evt) {
  // document.querySelector('#myMsg'"').innerHTML = "you selected: " + response;
 
  // targeted output (for Jamie!):
  if (response=="email") {
    myMsg.innerHTML = 'you got email!';
  } else if (response=="phone") {
    myMsg.innerHTML = 'my favorite Blondie song is \"Call Me\"';
  } else {
    myMsg.innerHTML = "omg...that is so old school!";
  }

  //stop the page from reloading
  evt.preventDefault();
}

*/



// AUDIO VISUALIZATION DANIEL


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
  song = loadSound('summer-meadow.mp3');
}

function setup() {
  createCanvas(200, 200);
  angleMode(DEGREES);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  amp = new p5.Amplitude();
}

function draw() {
  background(0);
  var vol = amp.getLevel();
  volhistory.push(vol);
  stroke(255);
  noFill();

  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i], 0, 1, 10, 100);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape();

  if (volhistory.length > 360) {
    volhistory.splice(0, 1);
  }
  //ellipse(100, 100, 200, vol * 200);

    
    
    
    















// AUDIO VISUALIZATION CODE from YOUTUBE VID

/*var song;
var fft;
var button;

function preload() {
    song = loadSound('summer-meadow.mp3');
}

function setup() {
    createCanvas(256,256);
    colorMode(HSB);
    angleMode(DEGREES);
//    button = createButton('toggle');
//    button.mousePressed(toggleSong);
    song.play();
    fft= new p5.FFT(.9,256);
}

function draw() {
    background(0);
    var spectrum = fft.analyze();
    console.log(spectrum);
    //stroke
    noStroke();
    translate(width/2, height/2);
    //beginShape();
    for (var i = 0; i < spectrum.length; i++) {
        var angle = map(i, 0, spectrum.length, 0, 360);
        var amp = spectrum[i];
        var r = map(amp, 0, 256, 20, 100);
        //fill(i,255,255);
        var x = r * cos(angle);
        var y = r * sin(angle);
        stroke(1,255,255);
        line(0,0,x,y);
        //vertex(x,y);
        //var y - map(amp,9,256,height,0);
        //rect(i*w, y, w-2, height-y);
    }         
}*/






// ELLIPSE CODE 

//var x, y;
//var r = 50;
//var delta = 1;
//
//function setup() {
//    var myCanvas = createCanvas(300,300);
//  //connect myCanvas to mySketch
//    myCanvas.parent('mySketch');
//    x = width / 2;
//    y = height / 2;
//}
//
//
//
//function draw() {
//    clear()
//  
//  // Draw a circle
//    stroke(235,228,247);
//    strokeWeight(.4);
//    fill(255,255,255,20);
//    
//
//    if (r >= 180) {
//        delta = -.5;
//        
//    }
//    if (r <= 50) {
//        delta = .5;
//    }
//    r = r + delta;
//    ellipse(x, y, r, r);
//
//}
// 

