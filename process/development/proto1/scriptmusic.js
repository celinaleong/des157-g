console.log('reading js');

'use strict';


var generalReset = document.querySelector('#generalReset');
generalReset.addEventListener('click', function () {
    window.location.reload();
})




// SITE FLOW 

var customize = document.querySelector('#customize');
var customizeclose = document.querySelector('#customizeclose');
var customizemenu = document.querySelector('#customizemenu');
var enter = document.querySelector('#enter');
var begin = document.querySelector('#begin');
var settings = document.querySelector('#settings');
var settingsclose = document.querySelector('#begin');
var mySketch = document.querySelector('#mySketch');
var intro = document.querySelector('#intro');
var h2 = document.querySelector('h2'); 
var h1 = document.querySelector('h1'); 



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
    customize.style.display='block';
    mySketch.style.display='block';
    h2.style.display='block';
    button.style.display='block';
    music();
})



function toggleSong() {
  if (songplayed.isPlaying()) {
    songplayed.pause();
  } else {
    songplayed.play();
  }
}

var button = document.querySelector('#togglebutton');



function music() {
    button.addEventListener('click', toggleSong);
    if (musicclick == "rainfall") {
    songplayed = song1;
    } else if (musicclick == "oceanwaves") {
        songplayed = song2;
    } else if (musicclick == "summermeadow") {
        songplayed = song3;
    } else if (musicclick == "whitenoise") {
        songplayed = song4;
    } else {
        console.log('no sound');
    }
    
    songplayed.loop();
    amp = new p5.Amplitude();
}

// color change


var body = document.querySelector('body'); 



var colorclick;

var bluecolor = document.querySelector('#blue'); 
bluecolor.addEventListener('click', function() {
    colorclick = "blue";
    body.style.background ='#B4D8E7';
    customizemenu.style.opacity='.8';
    intro.style.color = 'black';
    h1.style.color = 'black';
    h2.style.color = 'black';
    settings.style.color = 'black';
    customize.style.color = 'black';
    enter.style.borderColor = 'black';
    begin.style.borderColor = 'black';
});

var pinkcolor = document.querySelector('#pink'); 
pinkcolor.addEventListener('click', function() {
    colorclick = "pink";
    body.style.background ='#FFE3EB';
    customizemenu.style.opacity='.8';
    intro.style.color = 'black';
    h1.style.color = 'black';
    h2.style.color = 'black';
    settings.style.color = 'black';
    customize.style.color = 'black';
    enter.style.borderColor = 'black';
    begin.style.borderColor = 'black';
});

var darkcolor = document.querySelector('#dark'); 
darkcolor.addEventListener('click', function() {
    colorclick = "dark";
    body.style.background ='#2b1138';
    customizemenu.style.opacity='.8';
    intro.style.color = 'white';
    h1.style.color = 'white';
    h2.style.color = 'white';
    settings.style.color = 'white';
    customize.style.color = 'white';
    enter.style.borderColor = 'white';
    begin.style.borderColor = 'white';
});

   

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
 

  //stop the page from reloading
  evt.preventDefault();
}

*/



// AUDIO VISUALIZATION


var musicclick;

var rainfall_intro = document.querySelector('#rainfall_intro'); 
rainfall_intro.addEventListener('click', function() {
    musicclick = "rainfall"; })
var oceanwaves_intro = document.querySelector('#oceanwaves_intro'); 
oceanwaves_intro.addEventListener('click', function() {
    musicclick = "oceanwaves"; })
var summermeadow_intro = document.querySelector('#summermeadow_intro'); 
summermeadow_intro.addEventListener('click', function() {
    musicclick = "summermeadow"; })
var whitenoise_intro = document.querySelector('#whitenoise_intro'); 
whitenoise_intro.addEventListener('click', function() {
    musicclick = "whitenoise"; })
var nosound_intro = document.querySelector('#nosound_intro'); 
nosound_intro.addEventListener('click', function() {
    musicclick = "nosound"; })


var rainfall = document.querySelector('#rainfall'); 
rainfall.addEventListener('click', function() {
    musicclick = "rainfall"; 
    songplayed.stop();
    music();
})
var oceanwaves = document.querySelector('#oceanwaves'); 
oceanwaves.addEventListener('click', function() {
    musicclick = "oceanwaves"; 
    songplayed.stop();
    music();
})
var summermeadow = document.querySelector('#summermeadow'); 
summermeadow.addEventListener('click', function() {
    musicclick = "summermeadow"; 
    songplayed.stop();
    music();
})
var whitenoise = document.querySelector('#whitenoise'); 
whitenoise.addEventListener('click', function() {
    musicclick = "whitenoise"; 
    songplayed.stop();
    music();
})
var nosound = document.querySelector('#nosound'); 
nosound.addEventListener('click', function() {
    songplayed.stop();
    musicclick = "nosound";
})




var songplayed;


function preload() {
    song1 = loadSound('rainfall.wav');
    song2 = loadSound('oceanwaves.mp3');
    song3 = loadSound('summer-meadow.mp3');
    song4 = loadSound('whitenoise.wav');
    
 }




// ELLIPSE CODE 

var x, y;
var r = 50;
var delta = 1;

function setup() {
    var myCanvas = createCanvas(300,300);
  //connect myCanvas to mySketch
    myCanvas.parent('mySketch');
    x = width / 2;
    y = height / 2;

    
}


function draw() {
    clear()
    
      // Draw a circle
    if (colorclick == "blue") {
        stroke(25,25,112);
        strokeWeight(.4);
        fill(65,105,225,120);
    } else if (colorclick == "pink") {
         stroke(232, 88, 88);
        strokeWeight(.4);
        fill(255, 169, 169,120);   
    } else {
         stroke(235,228,247);
        strokeWeight(.4);
        fill(255,255,255,20);   
    }

    

    if (r >= 180) {
        delta = -.5;
        
    }
    if (r <= 50) {
        delta = .5;
    }
    r = r + delta;
    ellipse(x, y, r, r);

}
 


// audio code

