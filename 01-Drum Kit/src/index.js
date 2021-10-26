function playSound() {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0; //Resetea el audio al inicio
    audio.play()
    key.classList.add('playing');

}

function removeTransition(event) {
    if (event.propertyName !== 'transform') return; //retorna si no es transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound)