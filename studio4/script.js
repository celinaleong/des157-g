console.log('reading js');
'use strict';

var totalItemsOnPlate = 0;
var plateWhole = document.querySelector('#eatsections');
var generalReset = document.querySelector('#generalReset');
var receiptReset = document.querySelector('#receiptReset');
var done = document.querySelector('#done');
var receipt = document.querySelector('#receiptoverlay');

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (totalItemsOnPlate >= 4) {
        receipt.style.display='block';
        
        return;
    }
    plateWhole.appendChild(document.getElementById(data));
    totalItemsOnPlate++;
}

generalReset.addEventListener('click', function () {
    window.location.reload();
})
receiptReset.addEventListener('click', function () {
    window.location.reload();
})
done.addEventListener('click', function () {
    receipt.style.display='block';
})
                        