console.log('reading js');
'use strict';




document.querySelector('form').addEventListener('submit', processForm);
document.querySelector('#reset').addEventListener('click', resetForm);



function processForm(evt) {
    
    var adj1 = document.querySelector('#adj1').value;
    var name = document.querySelector('#name').value;
    var number = document.querySelector('#number').value;
    var place1 = document.querySelector('#place1').value;
    var noun = document.querySelector('#noun').value;
    var adj2 = document.querySelector('#adj2').value;
    
 
    //initiate vow section
    var vows = document.querySelector('#vows');
    var message = document.querySelector('#message');
    var h2 = document.querySelector('h2');

    //concatenate message
    h2.innerHTML = 'Our Vows';
    vows.innerHTML = 'My <em><strong>' + adj1 + ' ' + name + '</em></strong>, I love you so much. We are finally getting married after <em><strong>' + number + '</em></strong> weeks together. We\'ve moved so fast. From our first date at <strong><em>' + place1 + '</em></strong>, I knew we were meant to be. I love you from the bottom of my <em><strong>' + noun + '</em></strong> and can\'t wait for our <em><strong>' + adj2 + '</em></strong> life and happy ever after.';
    
    message.style.outline='solid';
    message.style.outlineColor='black';
    message.style.outlineWidth='3px';
    
    message.style.border='double';
    message.style.borderColor='black';
    message.style.backgroundColor='#fffff5';
    message.className = 'show';
 
    
    evt.preventDefault();
    return false;
}

function resetForm() {
  message.className = 'hide';
}


