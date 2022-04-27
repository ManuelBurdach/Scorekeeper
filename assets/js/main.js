'use strict';

window.addEventListener('load', () => {
    let homescore = document.querySelector('#homescore');
    let awayscore = document.querySelector('#awayscore');

    const reset = document.querySelector('#reset');

    const button = document.querySelectorAll('#btn');

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', (e) => {
            if(button[i].getAttribute('data-team') == "home"){
                homescore.textContent = parseInt(homescore.textContent) + parseInt(button[i].getAttribute('data-value'));
            }else{
                awayscore.textContent = parseInt(awayscore.textContent) + parseInt(button[i].getAttribute('data-value'));
            }
        });
    }
    
    reset.addEventListener('click', () => {
        awayscore.textContent = 0;
        homescore.textContent = 0;
    });
});