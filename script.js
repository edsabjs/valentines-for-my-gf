document.addEventListener('DOMContentLoaded', function() {
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const promptDiv = document.getElementById('prompt');
const messagesDiv = document.getElementById('messages');



function moveNoButton() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

  
    noBtn.style.position = 'absolute';
    const randomX = Math.random() * (screenWidth - btnWidth);
    const randomY = Math.random() * (screenHeight - btnHeight);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}


noBtn.addEventListener('click', moveNoButton);


yesBtn.addEventListener('click', function() {
    promptDiv.classList.add('hidden');
    messagesDiv.classList.remove('hidden');
});



});

