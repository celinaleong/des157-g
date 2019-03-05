console.log('reading js');

'use strict';


// SITE FLOW 

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



// AUDIO VISUALIZATION








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
 

