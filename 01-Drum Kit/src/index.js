window.addEventListener('keydown', (event) => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    if (!audio) return;
    audio.play()
    console.log(audio)
});