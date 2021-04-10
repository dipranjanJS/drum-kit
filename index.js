var numberOfDrumButtons = document.querySelectorAll(".drum");
var keyArr = ['w', 'a', 's', 'd', 'j', 'k', 'l'];
function makeSound(button) {
    var sound = '';
    switch(button) {
        case 'w':
            sound = 'sounds/crash.mp3';
            break;
        case 'a':
            sound = 'sounds/kick-bass.mp3';
            break;
        case 's':
            sound = 'sounds/snare.mp3';
            break;
        case 'd':
            sound = 'sounds/tom-1.mp3';
            break;
        case 'j':
            sound = 'sounds/tom-2.mp3';
            break;
        case 'k':
            sound = 'sounds/tom-3.mp3';
            break;
        case 'l':
            sound = 'sounds/tom-4.mp3';
            break;
        default:
            sound = alert("invalid note")
    }
    var audio = new Audio(sound);
    audio.play();
}

function addAnimation(currentKey) {
    if(keyArr.indexOf(currentKey) !== -1) {
        var activeBtn = document.querySelector('.' + currentKey);
        activeBtn.classList.add('pressed');
        setTimeout(() => {
            activeBtn.classList.remove('pressed');
        }, 100);
    }
    
}

for(var i = 0; i < numberOfDrumButtons.length; i++) {
    numberOfDrumButtons[i].addEventListener('click', function() {
        addAnimation(this.textContent);
        makeSound(this.textContent);
    });
}

document.addEventListener('keydown', function(e) {
    addAnimation(e.key);
    makeSound(e.key);
});

