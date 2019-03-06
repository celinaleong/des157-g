console.log('reading js');
'use strict';

var customize = document.querySelector('#customize');
var customizeclose = document.querySelector('#customizeclose');
var customizemenu = document.querySelector('#customizemenu');
var enter = document.querySelector('#enter');
var timer = document.querySelector('#timer');
var timerclose = document.querySelector('#begin');

var mySketch = document.querySelector('#mySketch');



customize.addEventListener('click', function () {
    customizemenu.style.display='block';
})
customizeclose.addEventListener('click', function (){
    customizemenu.style.display = 'none';
})

enter.addEventListener('click', function () {
    intro.style.display='none';
    timer.style.display='block';
})

timerclose.addEventListener('click', function () {
    timer.style.display='none';
    mySketch.style.display='block';
})
