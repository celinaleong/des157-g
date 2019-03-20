console.log('reading js');
'use strict';


// reset when click header

var generalReset = document.querySelector('#generalReset');
generalReset.addEventListener('click', function () {
    window.location.reload();
})


/////////// SITE FLOW  /////////////////////////////////////////////

var customize = document.querySelector('#customize');
var customizeclose = document.querySelector('#customizeclose');
var customizemenu = document.querySelector('#customizemenu');
var enter = document.querySelector('#enter');
var begin = document.querySelector('#begin');
var togglebutton = document.querySelector('#togglebutton');
var settings = document.querySelector('#settings');
var mySketch = document.querySelector('#mySketch');
var intro = document.querySelector('#intro');
var h2 = document.querySelector('h2'); 
var h1 = document.querySelector('h1'); 
var infodescriptionoverlay = document.querySelector('#infodescription-overlay'); 
var info = document.querySelector('#info'); 
var infoclose = document.querySelector('#infoclose'); 

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

info.addEventListener('click', function () {
    infodescriptionoverlay.style.display='block';
    
})


infoclose.addEventListener('click', function () {
    infodescriptionoverlay.style.display='none';
})



// pressing begin starts the main site, with the sketch, countdown, and music

begin.addEventListener('click', function () {
    settings.style.display='none';
    customize.style.display='block';
    mySketch.style.display='block';
    h2.style.display='block';
    button.style.display='block';

    countDown(duration,'status');
    music();
    //console.log(duration);
    
})





/////////// COLOR CUSTOMIZATION /////////////////////////////////////////////

var body = document.querySelector('body'); 

var colorclick;

var bluecolor = document.querySelector('#bluec'); 
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
    togglebutton.style.color = 'black';
    togglebutton.style.borderColor = 'black';
    info.style.color = 'black';
    
});

var yellowcolor = document.querySelector('#yellow'); 
yellowcolor.addEventListener('click', function() {
    colorclick = "yellow";
    body.style.background ='#FEFCD7';
    customizemenu.style.opacity='.8';
    intro.style.color = 'black';
    h1.style.color = 'black';
    h2.style.color = 'black';
    settings.style.color = 'black';
    customize.style.color = 'black';
    enter.style.borderColor = 'black';
    begin.style.borderColor = 'black';
    togglebutton.style.color = 'black';
    togglebutton.style.borderColor = 'black';
    info.style.color = 'black';
});

var darkcolor = document.querySelector('#dark'); 
darkcolor.addEventListener('click', function() {
    colorclick = "dark";
    body.style.background = null;
    //body.style.background ='#2b1138';
    customizemenu.style.opacity= null;
    intro.style.color = null;
    h1.style.color = null;
    h2.style.color = null;
    settings.style.color = null;
    customize.style.color = null;
    enter.style.borderColor = null;
    begin.style.borderColor = null;
    togglebutton.style.color = null;
    togglebutton.style.borderColor = null;
    info.style.color = null;
});

var blackcolor = document.querySelector('#black'); 
blackcolor.addEventListener('click', function() {
    colorclick = "dark";
    body.style.background = '#000';
    customizemenu.style.opacity= null;
    intro.style.color = null;
    h1.style.color = null;
    h2.style.color = null;
    settings.style.color = null;
    customize.style.color = null;
    enter.style.borderColor = null;
    begin.style.borderColor = null;
    togglebutton.style.color = null;
    togglebutton.style.borderColor = null;
    info.style.color = null;
});





	
/////////////// MUSIC ///////////////////////////////////////////////////

// preloading songs so that songs will play

function preload() {
    song1 = loadSound('assets/rainfall.wav');
    song2 = loadSound('assets/oceanwaves.mp3');
    song3 = loadSound('assets/summer-meadow.mp3');
    song4 = loadSound('assets/whitenoise.wav');
    song5 = loadSound('assets/silence.mp3');
 }

   
// clicking music assigns song value to musicclick for both settings and for in-app customization

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
    musicclick = "nosound"; 
    songplayed.stop();
    music();
})



// decide which music is played, and loops song over and over

var songplayed;

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
    } else if (musicclick == "nosound") {
        songplayed = song5;
    }
    
    songplayed.loop();
}








///////// TIMER ////////////////////////////////////////////////////////

// setting up the timer and sound

var threeminintro = document.getElementById("threemin_intro");
var fiveminintro = document.getElementById("fivemin_intro");
var tenminintro = document.getElementById("tenmin_intro");
var twentyminintro = document.getElementById("twentymin_intro");
var rainfallintro = document.getElementById("rainfall_intro");
var oceanwavesintro = document.getElementById("oceanwaves_intro");
var summermeadowintro = document.getElementById("summermeadow_intro");
var whitenoiseintro = document.getElementById("whitenoise_intro");
var nosoundintro = document.getElementById("nosound_intro");



// the time countdown for settings customization

var duration;

var threemin_intro = document.querySelector('#threemin_intro'); 
threemin_intro.addEventListener('click', function() {
    duration = .2*60; })
var fivemin_intro = document.querySelector('#fivemin_intro'); 
fivemin_intro.addEventListener('click', function() {
    duration = 5*60; })
var tenmin_intro = document.querySelector('#tenmin_intro'); 
tenmin_intro.addEventListener('click', function() {
    duration = 10*60; })
var twentymin_intro = document.querySelector('#twentymin_intro'); 
twentymin_intro.addEventListener('click', function() {
    duration = 20*60; })




// time countdown for in-app customization 


var threemin = document.querySelector('#threemin'); 
threemin.addEventListener('click', function() {
    duration = 3*60; 
    countDown(duration,'status');

})
var fivemin = document.querySelector('#fivemin'); 
fivemin.addEventListener('click', function() {
    duration = 5*60; 
    countDown(duration,'status');

})
var tenmin = document.querySelector('#tenmin'); 
tenmin.addEventListener('click', function() {
    duration = 10*60; 
    countDown(duration,'status');

})
var twentymin = document.querySelector('#twentymin'); 
twentymin.addEventListener('click', function() {
    duration = 20*60; 
    countDown(duration,'status');

})


// play and pauses song, while stopping timer and continuous

function toggleSong() {
  if (songplayed.isPlaying()) {
    songplayed.pause();
    clearTimeout(timer);
    button.innerHTML = 'Play';
  } else {
    songplayed.play();
      button.innerHTML = 'Pause';
      timer = setTimeout('countDown('+current_secs+',"'+'status'+'")', 1000);
  }
}

var button = document.querySelector('#togglebutton');


// timer code
// check if timer is running. if not, run it, else stop it first by clearing
// also keep track of current time for play/pause
// the display status time and final comment

var timer;
var timerRunning = false;
var current_secs;

var status = document.querySelector('#status');
var statusoverlay = document.querySelector('#statusoverlay');
var statuscomment = document.querySelector('#statuscomment');


function countDown(secs,elem) {
    if (timerRunning == true) {
        clearTimeout(timer);
        timerRunning = false;
    } 
    
        var element = document.getElementById(elem);
        var minutes = Math.ceil(secs / 60);
        console.log(secs);
	   element.innerHTML = minutes + " min left";
	   if(secs < 1) {
            clearTimeout(timer);
            element.innerHTML = ' ';
            statusoverlay.classList.add('statusdone');
            restartDone.style.display = 'block';
            statuscomment.style.display = 'block';
            songplayed.stop();
            return;
	   }
        secs--;
        timer = setTimeout('countDown('+secs+',"'+elem+'")', 1000);
        current_secs = secs;
        timerRunning = true;
}









///////////// ELLIPSE, INHALE/EXHALE, and settings check ///////////////////////////

var x, y;
var r = 50;
var delta = 1;
var word;
var wordcounter = 0;

var iftimer;
var ifsound;

function setup() {
    var myCanvas = createCanvas(300,300);
  //connect myCanvas to mySketch
    myCanvas.parent('mySketch');
    x = width / 2;
    y = height / 2;
    
    
}


function draw() {
    clear()
    noStroke();
    ellipse(x, y, 180, 180);
      // Draw a circle
    if (colorclick == "blue") {
        stroke(25,25,112);
        strokeWeight(.4);
        fill(18,140,220,80);
    } else if (colorclick == "yellow") {
         stroke(218,165,32);
        strokeWeight(.4);
        fill(255,215,0,75);   14
    } else {
        stroke(235,228,247);
        strokeWeight(.4);
        fill(255,255,255,20);   
    }

    

    if (r >= 180) {
        delta = -.37;
        word = "exhale";
    }
    if (r <= 85) {
        delta = .37;
        word = "inhale";
    }
    r = r + delta;
    ellipse(x, y, r, r);
    
    
    if (mySketch.style.display == 'block' && wordcounter <= 1000) {
        textFont('Montserrat');
        text(word, x,y);
        textAlign(CENTER, CENTER);
        wordcounter++;
        
    }
    
    
    // making sure that you cannot enter into main site unless both a time and sound selection is checked, as there is no begin button
    

    if (threeminintro.checked || fiveminintro.checked || tenminintro.checked || twentyminintro.checked) {
         iftimer = 'true';
    }
    if (rainfallintro.checked || oceanwavesintro.checked || summermeadowintro.checked || whitenoiseintro.checked || nosoundintro.checked) {
         ifsound = 'true';
    }
    if (iftimer == 'true' && ifsound == 'true') {
        begin.style.display = 'block';
        return;
    }
}
 




// restart button when timer ends

var restartDone = document.querySelector('#restartDone');
restartDone.addEventListener('click', function () {
    window.location.reload();
})


