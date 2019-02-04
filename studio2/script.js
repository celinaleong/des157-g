var sketchbook = document.querySelector('#sketchbook');
var laptop = document.querySelector('#laptop');
var headphones = document.querySelector('#headphones');


var sketchbookoverlay = document.querySelector('#sketchbookoverlay');
var sketchbookclose = document.querySelector('#sketchbookclose');
var laptopoverlay = document.querySelector('#laptopoverlay');
var laptopclose = document.querySelector('#laptopclose');
var headphonesoverlay = document.querySelector('#headphonesoverlay');
var headphonesclose = document.querySelector('#headphonesclose');

sketchbook.addEventListener('click', function () {
    sketchbookoverlay.style.display='block';
})
sketchbookclose.addEventListener('click', function (){
    sketchbookoverlay.style.display = 'none';
})

laptop.addEventListener('click', function () {
    laptopoverlay.style.display='block';
})
laptopclose.addEventListener('click', function (){
    laptopoverlay.style.display = 'none';
})

headphones.addEventListener('click', function () {
    headphonesoverlay.style.display='block';
})
headphonesclose.addEventListener('click', function (){
    headphonesoverlay.style.display = 'none';
})





//
//
//
//sketchbook.addEventListener('mouseover', function () {
//  sketchbook.style.width='160px';
//})
//
//sketchbook.addEventListener('mouseout', function () {
//  sketchbook.style.width='180px';
//})
//
//
//laptop.addEventListener('mouseover', function () {
//  laptop.style.width='280px';
//})
//
//laptop.addEventListener('mouseout', function () {
//  laptop.style.width='300px';
//})
//
//
//headphones.addEventListener('mouseover', function () {
//  headphones.style.width='190px';
//})
//
//headphones.addEventListener('mouseout', function () {
//  headphones.style.width='210px';
//})