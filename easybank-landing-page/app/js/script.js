const header = document.querySelector('.header');
const hamburguerButton = document.getElementById('hamburguerButton');
const overlay = document.querySelector('.overlay');

hamburguerButton.addEventListener('click', function(){
    if(header.classList.contains('open')){ //If it is closed
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    } else {
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    }
});